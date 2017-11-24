package com.server.service;

import java.lang.reflect.Type;
import com.google.gson.reflect.TypeToken;
import java.util.ArrayList;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//import org.apache.solr.common.SolrDocumentList;
import com.server.pojo.Orderm;
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
	//查询所有
	public void selReport(HttpServletRequest request, HttpServletResponse response){
		String selectsql = "select orderstadium,ordercode,ordername,orderclass,SUM(ordermoney) as ordermoney,SUM(orderdiscount) as orderdiscount,SUM(orderrightmoney) as orderrightmoney from orderm";
		Pageinfo pageinfo = new Pageinfo(0, selAll(Orderm.class, selectsql));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
}
