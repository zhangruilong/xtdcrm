package com.server.service;

import java.lang.reflect.Type;
import com.google.gson.reflect.TypeToken;
import java.util.ArrayList;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.server.pojo.Coachcourse;
import com.server.pojo.Cuscard;
import com.server.pojo.Coachcourse;
//import org.apache.solr.common.SolrDocumentList;
import com.server.pojo.Mycourse;
import com.server.pojo.Notesmoneys;
import com.server.poco.CuscardPoco;
import com.server.poco.MycoursePoco;
import com.server.action.MycourseAction;
import com.system.tools.CommonConst;
import com.system.tools.base.BaseActionDao;
import com.system.tools.pojo.Fileinfo;
import com.system.tools.pojo.Queryinfo;
import com.system.tools.util.CommonUtil;
import com.system.tools.util.DateUtils;
import com.system.tools.util.FileUtil;
import com.system.tools.util.TypeUtil;
import com.system.tools.pojo.Pageinfo;

/**
 * mycourse 服务层
 *@author ZhangRuiLong
 */
public class MycourseService extends MycourseAction {
	//pc购买课程
	public void buycourse(HttpServletRequest request, HttpServletResponse response){
		String json = request.getParameter("json");
		String huodong = request.getParameter("huodong");
		System.out.println("json : " + json);
		json = json.replace("\"\"", "null");
		if(!CommonUtil.isNull(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Mycourse temp:cuss){
			String newid = CommonUtil.getNewId();
			String nowdate = DateUtils.getDateTime();
			temp.setMycourseid(newid);
			temp.setMycourseinswhen(nowdate);
			//增加凭证记录
			Notesmoneys mNotes = new Notesmoneys(newid, temp.getMycoursecustomer(), null,temp.getMycoursestadium(), 
					temp.getMycoursecoachname(), temp.getMycoursename(), temp.getMycoursemoney(), temp.getMycoursetype(), "活动"+temp.getMycoursecoach(), "课程", nowdate, getCurrentUsername(request));
			ArrayList<String> sqls = new ArrayList<String>();
			sqls.add(getInsSingleSql(temp));
			sqls.add(getInsSingleSql(mNotes));
			String huodongsql = "update huodong set huodongstatue='已使用' where huodongid='"+temp.getMycoursecoach()+"'";
			sqls.add(huodongsql);
			result = doAll(sqls);
		}
		responsePW(response, result);
	}
	//微信购买私教课
	public void buyallcourse(HttpServletRequest request, HttpServletResponse response){
		String courseid = request.getParameter("courseid");
		String mycoursenum = request.getParameter("mycoursenum");
		String customerid = request.getParameter("customerid");
		String coachid = request.getParameter("coachid");
		String coachname = request.getParameter("coachname");
		String coachprice = request.getParameter("coachprice");
		ArrayList<Coachcourse> Coachcoursecuss = (ArrayList<Coachcourse>) selAll(Coachcourse.class, "select * from coachcourse where coachcourseid='"+courseid+"'");
		String newid = CommonUtil.getNewId();
		String nowdate = DateUtils.getDateTime();
		if(CommonUtil.isNull(coachprice)) coachprice=Coachcoursecuss.get(0).getCoachcoursemoney();
		int money = TypeUtil.stringToInt(coachprice)*TypeUtil.stringToInt(mycoursenum);
		Mycourse temp = new Mycourse();
		temp.setMycourseid(newid);
		temp.setMycoursecoach(coachid);
		temp.setMycoursecoachname(coachname);
		temp.setMycoursecustomer(customerid);
		temp.setMycoursedetail(Coachcoursecuss.get(0).getCoachcoursedetail());
//		temp.setMycoursedikou(mycoursedikou);
//		temp.setMycoursebegin(Coachcoursecuss.get(0).getCoachcoursebegin());
//		temp.setMycourseend(Coachcoursecuss.get(0).getCoachcourseend());
		temp.setMycourseinswhen(nowdate);
		temp.setMycoursemoney(TypeUtil.intToString(money));
		temp.setMycoursename(Coachcoursecuss.get(0).getCoachcoursename());
		temp.setMycoursenum(mycoursenum);
		temp.setMycoursenuma(mycoursenum);
		temp.setMycourseprice(Coachcoursecuss.get(0).getCoachcoursemoney());
		temp.setMycourseproject(Coachcoursecuss.get(0).getCoachcourseproject());
		temp.setMycoursestadium(Coachcoursecuss.get(0).getCoachcoursestadium());
		temp.setMycoursetype("私教课");
		//增加凭证记录
		Notesmoneys mNotes = new Notesmoneys(newid, customerid, null,temp.getMycoursestadium(), 
				coachname, Coachcoursecuss.get(0).getCoachcoursename(), temp.getMycoursemoney(), "私教课", "私教课", "课程", nowdate, null);
		ArrayList<String> sqls = new ArrayList<String>();
		sqls.add(getInsSingleSql(temp));
		sqls.add(getInsSingleSql(mNotes));
		result = doAll(sqls);
		responsePW(response, result);
	}
}
