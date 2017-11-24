package com.server.service;

import java.lang.reflect.Type;
import com.google.gson.reflect.TypeToken;
import java.util.ArrayList;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.server.pojo.Customer;
//import org.apache.solr.common.SolrDocumentList;
import com.server.pojo.Customerbig;
import com.server.poco.CustomerbigPoco;
import com.server.action.CustomerbigAction;
import com.system.tools.CommonConst;
import com.system.tools.base.BaseActionDao;
import com.system.tools.pojo.Fileinfo;
import com.system.tools.pojo.Queryinfo;
import com.system.tools.util.CommonUtil;
import com.system.tools.util.FileUtil;
import com.system.tools.util.TypeUtil;
import com.system.tools.pojo.Pageinfo;

/**
 * customerbig 服务层
 *@author ZhangRuiLong
 */
public class CustomerbigService extends CustomerbigAction {
	//查询总次数
	public void zongcishu(HttpServletRequest request, HttpServletResponse response){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		if(!CommonUtil.isNull(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		Customerbig temp=cuss.get(0);
		int num = getTotal("SELECT sum(9999-cuscardtimes) from cuscardview where customercompany='"+temp.getCuscardcustomer()+"'");
		result = "{success:true,code:202,msg:'操作成功',num:"+num+"}";
		responsePW(response, result);
	}
}
