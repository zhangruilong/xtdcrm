package com.server.service;

import java.lang.reflect.Type;
import com.google.gson.reflect.TypeToken;
import java.util.ArrayList;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//import org.apache.solr.common.SolrDocumentList;
import com.server.pojo.Customer;
import com.server.poco.CustomerPoco;
import com.server.action.CustomerAction;
import com.system.tools.CommonConst;
import com.system.tools.base.BaseActionDao;
import com.system.tools.pojo.Fileinfo;
import com.system.tools.pojo.Queryinfo;
import com.system.tools.util.CommonUtil;
import com.system.tools.util.FileUtil;
import com.system.tools.util.TypeUtil;
import com.system.tools.pojo.Pageinfo;

/**
 * customer 服务层
 *@author ZhangRuiLong
 */
public class CustomerService extends CustomerAction {
	//查询所有
	public void selReport(HttpServletRequest request, HttpServletResponse response){
		String selectsql = "select count(0) as customerdetail,customerstadium from Customer group by customerstadium";
		Pageinfo pageinfo = new Pageinfo(0, selAll(Customer.class, selectsql));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//修改
	public void changestatue(HttpServletRequest request, HttpServletResponse response){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		String newstatue = request.getParameter("params");
		if(!CommonUtil.isNull(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Customer temp:cuss){
			temp.setCustomerstatue(newstatue);
			result = updSingle(temp,CustomerPoco.KEYCOLUMN);
		}
		responsePW(response, result);
	}
	//查询生日
	public void selBirthday(HttpServletRequest request, HttpServletResponse response){
		String selectsql = "select * from Customer where customeremp='"+getCurrentUsername(request)
				+"' and (DATE_FORMAT(customerbirthday, '%m%d') BETWEEN DATE_FORMAT(curdate(), '%m%d') AND DATE_FORMAT(DATE_ADD(curdate(),INTERVAL 1 DAY), '%m%d'))  order by  customerbirthday desc";
		Pageinfo pageinfo = new Pageinfo(0, selAll(Customer.class, selectsql));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
}
