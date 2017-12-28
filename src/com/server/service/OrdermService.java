package com.server.service;

import java.lang.reflect.Type;
import com.google.gson.reflect.TypeToken;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.server.pojo.Goods;
//import org.apache.solr.common.SolrDocumentList;
import com.server.pojo.Orderm;
import com.server.poco.GoodsPoco;
import com.server.poco.OrdermPoco;
import com.server.action.OrdermAction;
import com.system.tools.CommonConst;
import com.system.tools.base.BaseActionDao;
import com.system.tools.pojo.Fileinfo;
import com.system.tools.pojo.Queryinfo;
import com.system.tools.util.CommonUtil;
import com.system.tools.util.FileUtil;
import com.system.tools.util.TypeUtil;
import com.system.tools.pojo.Pageinfo;

/**
 * orderm 服务层
 *@author ZhangRuiLong
 */
public class OrdermService extends OrdermAction {
	//新增
	public void addorderm(HttpServletRequest request, HttpServletResponse response){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		json = json.replace("\"\"", "null");
		if(!CommonUtil.isNull(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Orderm temp:cuss){
			if(CommonUtil.isNull(temp.getOrderid()))
				temp.setOrderid(CommonUtil.getNewId());
			String ordermsql = getInsSingleSql(temp);
			String selectsql = "select * from goods where goodscode='"+temp.getOrdercode()+"'";
			ArrayList<Goods> cuss = (ArrayList<Goods>) selAll(Goods.class, selectsql);
			if(cuss.size()>0){
				Goods mGoods = cuss.get(0);
				int num = TypeUtil.stringToInt(mGoods.getGoodsnum())-1;
				String updsql = "update goods set goodsnum='"+num+"' where goodsid='"+mGoods.getGoodsid()+"'";
				List<String> sqls = Arrays.asList(ordermsql, updsql);
				result = doAll(sqls);
			}
		}
		responsePW(response, result);
	}
	//查询所有
	public void selReport(HttpServletRequest request, HttpServletResponse response){
		String selectsql = "select orderstadium,ordercode,ordername,orderclass,SUM(ordermoney) as ordermoney,SUM(orderdiscount) as orderdiscount,SUM(orderrightmoney) as orderrightmoney from orderm";
		Pageinfo pageinfo = new Pageinfo(0, selAll(Orderm.class, selectsql));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
}
