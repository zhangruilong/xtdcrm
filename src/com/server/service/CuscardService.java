package com.server.service;

import java.lang.reflect.Type;
import com.google.gson.reflect.TypeToken;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//import org.apache.solr.common.SolrDocumentList;
import com.server.pojo.Cuscard;
import com.server.pojo.Customer;
import com.server.pojo.Notes;
import com.server.poco.CuscardPoco;
import com.server.action.CuscardAction;
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
 * cuscard 服务层
 * 
 * @author ZhangRuiLong
 */
public class CuscardService extends CuscardAction {
	// 进场刷卡
	public void insNotesupdCuscard(HttpServletRequest request, HttpServletResponse response) {
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		if(!CommonUtil.isNull(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		if(!"时间卡".equals(cuss.get(0).getCuscardtypeclass()))
			cuss.get(0).setCuscardtimes(TypeUtil.intToString(TypeUtil.stringToInt(cuss.get(0).getCuscardtimes())-1));
		//更新会员卡余次
		String cuscardsql = getUpdSingleSql(cuss.get(0), CuscardPoco.KEYCOLUMN);
		//增加凭证记录
		Notes mNotes = new Notes(CommonUtil.getNewId(), cuss.get(0).getCuscardcustomer(), cuss.get(0).getCuscardid(),
				cuss.get(0).getCuscardstadium(), null, null, "进场刷卡", "正常进场刷卡", "进场", DateUtils.getDateTime(), null);
		String mNotessql = getInsSingleSql(mNotes);
		List<String> sqls = Arrays.asList(cuscardsql, mNotessql);
		result = doAll(sqls);
		responsePW(response, result);
	}
	// 发卡
	public void insCuscardinsCustomer(HttpServletRequest request, HttpServletResponse response){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		json = json.replace("\"\"", "null");
		if(!CommonUtil.isNull(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		ArrayList<String> sqls = new ArrayList<String>();
		ArrayList<Customer> sCustomer = CommonConst.GSON.fromJson(json, new TypeToken<ArrayList<Customer>>() {}.getType());
		for(Customer temp:sCustomer){
			if(getTotal("select count(*) from customer where customerphone='"+temp.getCustomerphone()+"'")>0){
				responsePW(response, "{success:true,code:200,msg:'手机号为"+temp.getCustomerphone()+"的用户已存在'}");
			}
			if(CommonUtil.isNull(temp.getCustomerid()))
				temp.setCustomerid(CommonUtil.getNewId());
			sqls.add(getInsSingleSql(temp));
		}
		for(Cuscard temp:cuss){
			if(CommonUtil.isNull(temp.getCuscardid()))
				temp.setCuscardid(CommonUtil.getNewId());
			sqls.add(getInsSingleSql(temp));
		}
		result = doAll(sqls);
		responsePW(response, result);
	}
	// 批量发卡
	public void insAllCuscard(HttpServletRequest request, HttpServletResponse response){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		json = json.replace("\"\"", "null");
		if(!CommonUtil.isNull(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		ArrayList<Customer> sCustomer = CommonConst.GSON.fromJson(json, new TypeToken<ArrayList<Customer>>() {}.getType());
		Cuscard temp = cuss.get(0);
		String cuscardaddnum = request.getParameter("cuscardaddnum");
		int cuscardnobegin = TypeUtil.stringToInt(temp.getCuscardno());
		for(int i=0;i<TypeUtil.stringToInt(cuscardaddnum);i++){
			ArrayList<String> sqls = new ArrayList<String>();
			String newid = CommonUtil.getNewId();
			temp.setCuscardid(newid);
			temp.setCuscardcustomer(newid);
			//会员卡号向后顺延
			String cuscardno = TypeUtil.intToString(cuscardnobegin+i);
			temp.setCuscardno(cuscardno);
			sqls.add(getInsSingleSql(temp));
			//新增一个批量发卡的会员
			Customer mCustomer = sCustomer.get(0);
			mCustomer.setCustomerid(newid);
			mCustomer.setCustomerphone(cuscardno);
			mCustomer.setCustomercode(cuscardno);
			sqls.add(getInsSingleSql(mCustomer));
			result = doAll(sqls);
		}
		responsePW(response, result);
	}
}
