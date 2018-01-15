package com.server.service;

import java.lang.reflect.Type;
import com.google.gson.reflect.TypeToken;
import java.util.ArrayList;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.server.pojo.Notes;
//import org.apache.solr.common.SolrDocumentList;
import com.server.pojo.Notesmoneys;
import com.server.poco.NotesmoneysPoco;
import com.server.action.NotesmoneysAction;
import com.system.tools.CommonConst;
import com.system.tools.base.BaseActionDao;
import com.system.tools.pojo.Fileinfo;
import com.system.tools.pojo.Queryinfo;
import com.system.tools.util.CommonUtil;
import com.system.tools.util.FileUtil;
import com.system.tools.util.TypeUtil;
import com.system.tools.pojo.Pageinfo;

/**
 * notesmoneys 服务层
 *@author ZhangRuiLong
 */
public class NotesmoneysService extends NotesmoneysAction {
	//每小时进场年龄统计
	public void selmoney(HttpServletRequest request, HttpServletResponse response){
		cuss = (ArrayList<Notesmoneys>) selAll(Notesmoneys.class, "select o.notestype,sum(o.notesmoney) as notesmoney"  
				+" from notesmoneys o group by o.notestype");
		Pageinfo pageinfo = new Pageinfo(0, cuss);
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//营业额
	public void selBi(HttpServletRequest request, HttpServletResponse response){
		String wheresql = request.getParameter("wheresql");
		if(CommonUtil.isNull(wheresql)) wheresql="notestype!='退费'";
		cuss = (ArrayList<Notesmoneys>) selAll(Notesmoneys.class, 
				"select o.notesstadium,o.notesname,sum(o.notesmoney) as notesmoney from notesmoneys o where "+wheresql+" group by o.notesname,o.notesstadium ORDER BY o.notesstadium");
		Pageinfo pageinfo = new Pageinfo(0, cuss);
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
}
