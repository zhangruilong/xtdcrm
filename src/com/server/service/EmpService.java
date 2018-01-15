package com.server.service;

import java.lang.reflect.Type;
import com.google.gson.reflect.TypeToken;
import java.util.ArrayList;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//import org.apache.solr.common.SolrDocumentList;
import com.server.pojo.Emp;
import com.server.poco.EmpPoco;
import com.server.action.EmpAction;
import com.system.tools.CommonConst;
import com.system.tools.base.BaseActionDao;
import com.system.tools.pojo.Fileinfo;
import com.system.tools.pojo.Queryinfo;
import com.system.tools.util.CommonUtil;
import com.system.tools.util.FileUtil;
import com.system.tools.util.TypeUtil;
import com.system.tools.pojo.Pageinfo;

/**
 * emp 服务层
 *@author ZhangRuiLong
 */
public class EmpService extends EmpAction {
	//报表
	public void selBi(HttpServletRequest request, HttpServletResponse response){
		String wheresql = request.getParameter("wheresql");
		String query = request.getParameter("query");
		if(CommonUtil.isNull(wheresql)) wheresql="1=1";
		if(CommonUtil.isNull(query)) query="";
		String sql = "SELECT *,TRUNCATE(100*empcode/empphone,0) as empname,TRUNCATE(100*empsysname/empphone,0) as empposition FROM"
					+" (SELECT customeremp as empid,customerstadium as empstadium,count(*) as empphone,"
					+" (SELECT count(*) FROM cuscard "
					+" where cuscardinswho=customeremp and cuscardtypeclass='培训卡'"
					+" ) as empcode,"
					+" (SELECT count(*) FROM cuscard "
					+" where cuscardinswho=customeremp and cuscardtypeclass!='培训卡'"
					+" ) as empsysname"
					+" from customer where "
					+ " customeremp like '%"+query+"%' and "+wheresql 
					+" GROUP BY customeremp,customerstadium) as a";
		Pageinfo pageinfo = new Pageinfo(0, selAll(Emp.class,sql));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
}
