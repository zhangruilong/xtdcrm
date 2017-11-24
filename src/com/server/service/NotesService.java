package com.server.service;

import java.lang.reflect.Type;
import com.google.gson.reflect.TypeToken;
import java.util.ArrayList;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//import org.apache.solr.common.SolrDocumentList;
import com.server.pojo.Notes;
import com.server.poco.NotesPoco;
import com.server.action.NotesAction;
import com.system.tools.CommonConst;
import com.system.tools.base.BaseActionDao;
import com.system.tools.pojo.Fileinfo;
import com.system.tools.pojo.Queryinfo;
import com.system.tools.util.CommonUtil;
import com.system.tools.util.FileUtil;
import com.system.tools.util.TypeUtil;
import com.system.tools.pojo.Pageinfo;

/**
 * notes 服务层
 *@author ZhangRuiLong
 */
public class NotesService extends NotesAction {
	//每小时进场人数统计
	public void seljinchangcount(HttpServletRequest request, HttpServletResponse response){
		cuss = (ArrayList<Notes>) selAll(Notes.class, "select T.timehour as notestype,count(T.notesid) as notesname from"
				+"(select o.notesid,HOUR(o.notesinswhen) as timehour from notes o "
				+"where o.notesinswhen<'22:00' and o.notesinswhen>'05:00') as T "
				+"group by T.timehour order by T.timehour asc");
		Pageinfo pageinfo = new Pageinfo(0, cuss);
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//每小时进场年龄统计
	public void seljcage(HttpServletRequest request, HttpServletResponse response){
		cuss = (ArrayList<Notes>) selAll(Notes.class, "select nnd as notestype,count(*) as notesname from(select case"  
				+" when (cu.customerage+0)>=16 and (cu.customerage+0)<=25 then '16-25'"  
				+" when (cu.customerage+0)>=26 and (cu.customerage+0)<=35 then '26-35'"  
				+" when (cu.customerage+0)>=36 and (cu.customerage+0)<=45 then '36-45'"  
				+" when (cu.customerage+0)>=46 then '46以上'"   
				+" end as nnd from notes o left join customer cu on o.notescustomer=cu.customerid"
				+" )a group by nnd");
		Pageinfo pageinfo = new Pageinfo(0, cuss);
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//每小时进场人数和年龄的双统计
	public void seljctimeage(HttpServletRequest request, HttpServletResponse response){
		cuss = (ArrayList<Notes>) selAll(Notes.class, "select HOUR(o.notesinswhen) as notestype,cu.customerage as notesname"
				+" from notes o left join customer cu on o.notescustomer=cu.customerid"
				+" where o.notesinswhen like '%%'");
		ArrayList<Notes> sNotes = new ArrayList();
		for(int i=0;i<cuss.size();i++){
			Notes mNotes = new Notes();
			mNotes.setNotescard("0");
			int num = 0;
			
		}
		Pageinfo pageinfo = new Pageinfo(0, cuss);
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//每小时进场年龄统计
	public void seljccard(HttpServletRequest request, HttpServletResponse response){
		cuss = (ArrayList<Notes>) selAll(Notes.class, "select cu.cuscardtypeclass as notestype,count(*) as notesname"  
				+" from notes o left join cuscard cu on o.notescard=cu.cuscardid"
				+" group by cu.cuscardtypeclass");
		Pageinfo pageinfo = new Pageinfo(0, cuss);
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
}
