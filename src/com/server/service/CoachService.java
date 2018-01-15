package com.server.service;

import java.lang.reflect.Type;
import com.google.gson.reflect.TypeToken;
import java.util.ArrayList;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//import org.apache.solr.common.SolrDocumentList;
import com.server.pojo.Coach;
import com.server.pojo.Emp;
import com.server.poco.CoachPoco;
import com.server.action.CoachAction;
import com.system.tools.CommonConst;
import com.system.tools.base.BaseActionDao;
import com.system.tools.pojo.Fileinfo;
import com.system.tools.pojo.Queryinfo;
import com.system.tools.util.CommonUtil;
import com.system.tools.util.FileUtil;
import com.system.tools.util.TypeUtil;
import com.system.tools.pojo.Pageinfo;

/**
 * coach 服务层
 *@author ZhangRuiLong
 */
public class CoachService extends CoachAction {
	//报表
	public void selBi(HttpServletRequest request, HttpServletResponse response){
		String wheresql = request.getParameter("wheresql");
		String query = request.getParameter("query");
		if(CommonUtil.isNull(wheresql)) wheresql="1=1";
		if(CommonUtil.isNull(query)) query="";
		String sql = "SELECT *,TRUNCATE(100*coachcode/coachphone,0) as coachname from "
					+" (SELECT mycoursecoachname as coachid,mycoursestadium as coachstadium,"
					+" (SELECT count(*) from customer "
					+" where customerdetail=mycoursecoachname"
					+" GROUP BY customerdetail) as coachphone,"
					+" count(*) as coachcode from mycourse"
					+" where mycoursecoachname like '%"+query+"%' and "+wheresql 
					+" and mycoursetype='私教课' "
					+" GROUP BY mycoursecoachname,mycoursestadium"
					+" ) as a";
		Pageinfo pageinfo = new Pageinfo(0, selAll(Coach.class,sql));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
}
