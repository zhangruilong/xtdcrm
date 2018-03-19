package com.server.service;

import java.lang.reflect.Field;
import java.lang.reflect.Type;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

import com.google.gson.reflect.TypeToken;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//import org.apache.solr.common.SolrDocumentList;
import com.server.pojo.Huodong;
import com.server.poco.HuodongPoco;
import com.server.action.HuodongAction;
import com.system.tools.CommonConst;
import com.system.tools.base.BaseActionDao;
import com.system.tools.pojo.Fileinfo;
import com.system.tools.pojo.Queryinfo;
import com.system.tools.util.CommonUtil;
import com.system.tools.util.FileUtil;
import com.system.tools.util.TypeUtil;
import com.system.tools.pojo.Pageinfo;

/**
 * huodong 服务层
 *@author ZhangRuiLong
 */
public class HuodongService extends HuodongAction {
	//分页查询
	public void selHuodongm(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request, Huodong.class, HuodongPoco.QUERYFIELDNAME, HuodongPoco.ORDER, TYPE);
		Pageinfo pageinfo = new Pageinfo(0, selAllm(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	@SuppressWarnings("finally")
	public List selAllm(Queryinfo queryinfo) {
		String mDSNAME = queryinfo.getDsname();
		if(CommonUtil.isNull(mDSNAME))
			mDSNAME = connectionMan.getDsname();
		Connection  conn=connectionMan.getConnection(mDSNAME); 
		Statement stmt = null;
		ResultSet rs = null;
		List objs = new ArrayList();
		try {
			String sql = "select * from " + queryinfo.getType().getSimpleName() + " where 1=1 ";
			if(!CommonUtil.isNull(queryinfo.getJson())){
				String jsonsql = TypeUtil.beanToSql(queryinfo.getJson());
				if(!CommonUtil.isNull(jsonsql))
				sql += " and (" + TypeUtil.beanToSql(queryinfo.getJson()) + ") ";
			}
			if(!CommonUtil.isNull(queryinfo.getWheresql())){
				sql += " and (" + queryinfo.getWheresql() + ") ";
			}
			if(!CommonUtil.isNull(queryinfo.getQuery())){
				sql += " and (" + queryinfo.getQuery() + ") ";
			}
			sql += "GROUP BY huodongstadium,huodongname,huodongcardtype ";
			if(!CommonUtil.isNull(queryinfo.getOrder())){
				sql += " order by " + queryinfo.getOrder();
			}
			stmt = conn.createStatement();
			System.out.println(sql);
			rs = stmt.executeQuery(sql);
			//所有的属性  
	        Field[] field = queryinfo.getType().getDeclaredFields(); 
			while (rs.next()) {
				objs.add(TypeUtil.rsToObj(queryinfo.getType(), field, rs));
			}
		} catch (Exception e) {
			System.out.println("Exception:" + e.getMessage());
		} finally{
			connectionMan.freeConnection(mDSNAME,conn,stmt,rs);
	        return objs;
		}
	}
	@SuppressWarnings("finally")
	public List selQuerym(Queryinfo queryinfo) {
		String mDSNAME = queryinfo.getDsname();
		if(CommonUtil.isNull(mDSNAME))
			mDSNAME = connectionMan.getDsname();
		Connection  conn=connectionMan.getConnection(mDSNAME); 
		Statement stmt = null;
		ResultSet rs = null;
		List objs = new ArrayList();
		try {
			String sql = "";
			if(mDSNAME.equals("oracle")){
				sql += "select * from (select A.*, ROWNUM RN from (";
			}
			sql += "select * from " + queryinfo.getType().getSimpleName() + " where 1=1 ";
			if(!CommonUtil.isNull(queryinfo.getJson())){
				String jsonsql = TypeUtil.beanToSql(queryinfo.getJson());
				if(!CommonUtil.isNull(jsonsql))
				sql += " and (" + TypeUtil.beanToSql(queryinfo.getJson()) + ") ";
			}
			if(!CommonUtil.isNull(queryinfo.getWheresql())){
				sql += " and (" + queryinfo.getWheresql() + ") ";
			}
			if(!CommonUtil.isNull(queryinfo.getQuery())){
				sql += " and (" + queryinfo.getQuery() + ") ";
			}
			sql += "GROUP BY huodongstadium,huodongname,huodongcardtype ";
			if(!CommonUtil.isNull(queryinfo.getOrder())){
				sql += " order by " + queryinfo.getOrder();
			}
			if(mDSNAME.equals("oracle")){
				if(queryinfo.getEnd().equals("0"))
					sql += ") A where ROWNUM  > "+queryinfo.getEnd()+" ) ";
				else
					sql += ") A where ROWNUM  <= "+queryinfo.getEnd()+" ) where RN > "+queryinfo.getStart();
			}else if(!queryinfo.getEnd().equals("0")){
				sql += " limit " + queryinfo.getStart() + "," + queryinfo.getLimit();
			}
			stmt = conn.createStatement();
			System.out.println(sql);
			rs = stmt.executeQuery(sql);
			//所有的属性  
	        Field[] field = queryinfo.getType().getDeclaredFields(); 
			while (rs.next()) {
				objs.add(TypeUtil.rsToObj(queryinfo.getType(), field, rs));
			}
		} catch (Exception e) {
			System.out.println("Exception:" + e.getMessage());
		} finally{
			connectionMan.freeConnection(mDSNAME,conn,stmt,rs);
			return objs;
		}
	}
	//新增
	public void addhuodong(HttpServletRequest request, HttpServletResponse response){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		json = json.replace("\"\"", "null");
		if(!CommonUtil.isNull(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Huodong temp:cuss){
			int num = TypeUtil.stringToInt(temp.getHuodongnum());
			for(int i=0;i<num;i++){
				String newid = CommonUtil.getNewId();
				temp.setHuodongid(newid);
				temp.setHuodongcode(newid);
				result = insSingle(temp);
			}
		}
		responsePW(response, result);
	}
}
