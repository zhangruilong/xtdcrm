package com.server.service;

import java.lang.reflect.Type;
import com.google.gson.reflect.TypeToken;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//import org.apache.solr.common.SolrDocumentList;
import com.server.pojo.Appiont;
import com.server.pojo.Mycourse;
import com.server.pojo.Notesmoneys;
import com.server.pojo.Place;
import com.server.poco.AppiontPoco;
import com.server.action.AppiontAction;
import com.system.tools.CommonConst;
import com.system.tools.base.BaseActionDao;
import com.system.tools.pojo.Fileinfo;
import com.system.tools.pojo.Queryinfo;
import com.system.tools.util.CommonUtil;
import com.system.tools.util.FileUtil;
import com.system.tools.util.TypeUtil;
import com.system.tools.pojo.Pageinfo;

/**
 * appiont 服务层
 *@author ZhangRuiLong
 */
public class AppiontService extends AppiontAction {
	//微信预约私教课
	public void wxCoachcourseAppiont(HttpServletRequest request, HttpServletResponse response){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		json = json.replace("\"\"", "null");
		if(!CommonUtil.isNull(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Appiont temp:cuss){
			if(CommonUtil.isNull(temp.getAppointid()))
				temp.setAppointid(CommonUtil.getNewId());
			ArrayList<Mycourse> sMycourse=  (ArrayList<Mycourse>)selAll(Mycourse.class,"select * from Mycourse where Mycourseid = '"+temp.getAppointcourse()+"'");
			temp.setAppointcoach(sMycourse.get(0).getMycoursecoach());
			temp.setAppointcoachname(sMycourse.get(0).getMycoursecoachname());
			temp.setAppointcoursename(sMycourse.get(0).getMycoursename());
			temp.setAppointproject(sMycourse.get(0).getMycourseproject());
			result = insSingle(temp);
		}
		responsePW(response, result);
	}
	//确认上课-私教课
	public void okcoachcourse(HttpServletRequest request, HttpServletResponse response){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		if(!CommonUtil.isNull(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Appiont temp:cuss){
			ArrayList<Appiont> sAppiont=  (ArrayList<Appiont>)selAll(Appiont.class,"select * from Appiont where Appointid = '"+temp.getAppointid()+"'");
			if("已确认".equals(sAppiont.get(0).getAppointstatue())) result="{success:true,code:202,msg:'已成功确认，无需重复操作'}";
			else{
				String sql = getUpdSingleSql(temp,AppiontPoco.KEYCOLUMN);
				ArrayList<Mycourse> sMycourse=  (ArrayList<Mycourse>)selAll(Mycourse.class,"select * from Mycourse where Mycourseid = '"+temp.getAppointcourse()+"'");
				int newnuma = TypeUtil.stringToInt(sMycourse.get(0).getMycoursenuma())-1;
				String updmycoursesql = "update mycourse set mycoursenuma='"+newnuma+"' where mycourseid='"+temp.getAppointcourse()+"'";
				List<String> sqls = Arrays.asList(sql, updmycoursesql);
				result = doAll(sqls);
			}
		}
		responsePW(response, result);
	}
	//微信预约位置
	public void placetimeAppiont(HttpServletRequest request, HttpServletResponse response){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		json = json.replace("\"\"", "null");
		if(!CommonUtil.isNull(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		Appiont temp = cuss.get(0);
		if(CommonUtil.isNull(temp.getAppointid()))
			temp.setAppointid(CommonUtil.getNewId());
		//一人只能预约一个位置
		ArrayList<Appiont> check=  (ArrayList<Appiont>)selAll(Appiont.class,"select * from Appiont where appointstadium = '"+temp.getAppointstadium()
		+"' and appointproject='"+temp.getAppointproject()
		+"' and appointcustomer='"+temp.getAppointcustomer()
		+"' and appointplacename='"+temp.getAppointplacename()
		+"' and appointdetail='"+temp.getAppointdetail()
		+"' and appointcoachname='"+temp.getAppointcoachname()
		+"'");
		if(check.size()!=0){
			result = "{success:true,code:204,msg:'已经预约了一个位置，此次预约失败'}";
		}else if("appointplace".equals(temp.getAppointplace())){
			ArrayList<Place> sPlace=  (ArrayList<Place>)selAll(Place.class,"select * from place where placename = '"+temp.getAppointplacename()
			+"' and placecode not in (select appointplace from Appiont where appointstadium = '"+temp.getAppointstadium()
			+"' and appointproject='"+temp.getAppointproject()
			+"' and appointplacename='"+temp.getAppointplacename()
			+"' and appointdetail='"+temp.getAppointdetail()
			+"' and appointcoachname='"+temp.getAppointcoachname()
			+"')");
			if(sPlace.size()==0) result = "{success:true,code:404,msg:'找不到空位子，预约失败'}";
			else{
				temp.setAppointplace(sPlace.get(0).getPlacecode());
				result = insSingle(temp);
			}
		}else{
			ArrayList<Appiont> sAppiont=  (ArrayList<Appiont>)selAll(Appiont.class,"select * from Appiont where appointstadium = '"+temp.getAppointstadium()
			+"' and appointproject='"+temp.getAppointproject()
			+"' and appointplace='"+temp.getAppointplace()
			+"' and appointplacename='"+temp.getAppointplacename()
			+"' and appointdetail='"+temp.getAppointdetail()
			+"' and appointcoachname='"+temp.getAppointcoachname()
			+"'");
			if(sAppiont.size()==0) result = insSingle(temp);
		}
		responsePW(response, result);
	}
	//当天累计预约人数
	public void selappsum(HttpServletRequest request, HttpServletResponse response){
		cuss = (ArrayList<Appiont>) selAll(Appiont.class, "select o.appointproject,count(*) as appointdetail"  
				+" from Appiont o group by o.appointproject");
		Pageinfo pageinfo = new Pageinfo(0, cuss);
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
}
