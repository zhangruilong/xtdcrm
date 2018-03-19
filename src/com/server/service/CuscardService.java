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
import com.server.pojo.Customerbig;
import com.server.pojo.Notes;
import com.server.pojo.Notesmoneys;
import com.server.poco.CuscardPoco;
import com.server.ZhajiApi;
import com.server.ZhajiCard;
import com.server.ZhajiResult;
import com.server.action.CuscardAction;
import com.server.bean.CuscardBean;
import com.system.pojo.System_roleuserview;
import com.system.pojo.System_user;
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
	//销账
	public void xiaozhang(HttpServletRequest request, HttpServletResponse response){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		if(!CommonUtil.isNull(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Cuscard temp:cuss){
//			temp.setCuscardtimes("9999");
			temp.setCuscardstatue("禁用");
			result = updSingle(temp,CuscardPoco.KEYCOLUMN);
		}
		responsePW(response, result);
	}
	// 进场刷卡
	public void insNotesupdCuscard(HttpServletRequest request, HttpServletResponse response) {
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		if(!CommonUtil.isNull(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		//增加凭证记录
		Notes mNotes = new Notes(CommonUtil.getNewId(), cuss.get(0).getCuscardcustomer(), cuss.get(0).getCuscardno(),
				cuss.get(0).getCuscardstadium(), "进场刷卡", "正常进场刷卡", "进出场", DateUtils.getDateTime(), null);
		//不是时间卡，余次减1
		if(!"时间卡".equals(cuss.get(0).getCuscardtypeclass())){
			String mNotessql = getInsSingleSql(mNotes);
			Cuscard mCuscard = new Cuscard();
			mCuscard.setCuscardid(cuss.get(0).getCuscardid());
			mCuscard.setCuscardtimes(TypeUtil.intToString(TypeUtil.stringToInt(cuss.get(0).getCuscardtimes())-1));
			//更新会员卡余次
			String cuscardsql = getUpdSingleSql(mCuscard, CuscardPoco.KEYCOLUMN);
			List<String> sqls = Arrays.asList(cuscardsql, mNotessql);
			result = doAll(sqls);
		}else{
			result = insSingle(mNotes);
		}
		responsePW(response, result);
	}
	// 发卡
	public void insCuscardinsCustomer(HttpServletRequest request, HttpServletResponse response){
		String json = request.getParameter("json");
		String huodong = request.getParameter("huodong");
		System.out.println("json : " + json);
		json = json.replace("\"\"", "null");
		if(!CommonUtil.isNull(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		ArrayList<String> sqls = new ArrayList<String>();
		ArrayList<Customer> sCustomer = CommonConst.GSON.fromJson(json, new TypeToken<ArrayList<Customer>>() {}.getType());
		Customer temp =  sCustomer.get(0);
		Cuscard mCuscard = cuss.get(0);
		huodong = mCuscard.getCuscardid();
		String newid = CommonUtil.getNewId();
		//增加凭证记录
		String notesdetail = "发卡";
		String notestype = "卡操作";
		if(mCuscard.getCuscardtypeclass().equals("培训卡")){
			notesdetail = "培训课";
			notestype = "课程";
		}
		Notesmoneys mNotes = new Notesmoneys(newid, newid, cuss.get(0).getCuscardno(), cuss.get(0).getCuscarddetail(), null, null, cuss.get(0).getCuscardmoney(), notesdetail,"活动"+ huodong, notestype, DateUtils.getDateTime(), cuss.get(0).getCuscardinswho());
		//查询用户手机是否已存在
		ArrayList<Customer> s2Customer = (ArrayList<Customer>) selAll(Customer.class,"select * from customer where customerphone='"+temp.getCustomerphone()+"' and customername='"+temp.getCustomername()+"'");
		if(s2Customer.size()>0){
//			responsePW(response, "{success:true,code:200,msg:'手机号为"+temp.getCustomerphone()+"的用户已存在'}");
			mCuscard.setCuscardid(newid);
			mCuscard.setCuscardcustomer(s2Customer.get(0).getCustomerid());
			mNotes.setNotescustomer(s2Customer.get(0).getCustomerid());
		}else{
			temp.setCustomerid(newid);
			sqls.add(getInsSingleSql(temp));
			mCuscard.setCuscardid(newid);
			mCuscard.setCuscardcustomer(newid);
		}
		sqls.add(getInsSingleSql(mCuscard));
		sqls.add(getInsSingleSql(mNotes));
		String huodongsql = "update huodong set huodongstatue='已使用' where huodongid='"+huodong+"'";
		sqls.add(huodongsql);
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
		ZhajiResult token = ZhajiApi.getToken();
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
//			if(CommonConst.SUCCESS.equals(result)){
//				ZhajiCard card = new ZhajiCard();
//				card.setToken(token.getToken());
////				card.setUid(cuss.get(0).getCuscardno());
//				card.setCard(cuscardno);
//				card.setCard_xtd(cuscardno);
//				card.setExpire_from(cuss.get(0).getCuscardbegin().replaceAll("-", ""));
//				card.setExpire_to(cuss.get(0).getCuscardend().replaceAll("-", ""));
//				ZhajiApi.updUser(card);
//			}
		}
		//新增大客户信息
		if("后付费卡".equals(temp.getCuscardtypeclass())){
			ArrayList<Customerbig> sCustomerbig = CommonConst.GSON.fromJson(json, new TypeToken<ArrayList<Customerbig>>() {}.getType());
			Customerbig mCustomerbig = sCustomerbig.get(0);
			mCustomerbig.setCuscardid(CommonUtil.getNewId());
			mCustomerbig.setCuscardpoint(cuscardaddnum);
			mCustomerbig.setCuscardcustomer(sCustomer.get(0).getCustomercompany());
			mCustomerbig.setCuscardprice(null);
			mCustomerbig.setCuscardstopmoney(null);
			String sql = getInsSingleSql(mCustomerbig);
			result = doSingle(sql);
		}
		responsePW(response, result);
	}
	//过户
	public void guohu(HttpServletRequest request, HttpServletResponse response){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		if(!CommonUtil.isNull(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		ArrayList<CuscardBean> CuscardBeancuss = CommonConst.GSON.fromJson(json, new TypeToken<ArrayList<CuscardBean>>() {}.getType());
		Cuscard temp = cuss.get(0);
		//增加凭证记录
		Notesmoneys mNotes = new Notesmoneys(CommonUtil.getNewId(), temp.getCuscardcustomer(), temp.getCuscardno(),temp.getCuscarddetail(), 
				null, null, "100", "过户", "老用户ID:"+temp.getCuscardcustomer()+",新用户ID:"+CuscardBeancuss.get(0).getCuscardcustomernew(), "卡操作", DateUtils.getDateTime(), getCurrentUsername(request));
		temp.setCuscardcustomer(CuscardBeancuss.get(0).getCuscardcustomernew());
		ArrayList<String> sqls = new ArrayList<String>();
		sqls.add(getUpdSingleSql(temp,CuscardPoco.KEYCOLUMN));
		sqls.add(getInsSingleSql(mNotes));
		result = doAll(sqls);
		responsePW(response, result);
	}
	//换卡
	public void change(HttpServletRequest request, HttpServletResponse response){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		if(!CommonUtil.isNull(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		ArrayList<CuscardBean> CuscardBeancuss = CommonConst.GSON.fromJson(json, new TypeToken<ArrayList<CuscardBean>>() {}.getType());
		Cuscard temp = cuss.get(0);	
		temp.setCuscardno(CuscardBeancuss.get(0).getCuscardnonew());
		ArrayList<String> sqls = new ArrayList<String>();
		sqls.add(getUpdSingleSql(temp,CuscardPoco.KEYCOLUMN));
		//增加凭证记录
		Notesmoneys mNotes = new Notesmoneys(CommonUtil.getNewId(), temp.getCuscardcustomer(), temp.getCuscardno(),temp.getCuscarddetail(), 
				null, null, "100", "换卡", "老卡号："+CuscardBeancuss.get(0).getCuscardno()+"，新卡号："+CuscardBeancuss.get(0).getCuscardnonew(), "卡操作", DateUtils.getDateTime(), getCurrentUsername(request));
		sqls.add(getInsSingleSql(mNotes));
		result = doAll(sqls);
		responsePW(response, result);
	}
	//续卡
	public void ccontinue(HttpServletRequest request, HttpServletResponse response){
		String json = request.getParameter("json");
		String huodong = request.getParameter("huodong");
		System.out.println("json : " + json);
		if(!CommonUtil.isNull(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		ArrayList<CuscardBean> CuscardBeancuss = CommonConst.GSON.fromJson(json, new TypeToken<ArrayList<CuscardBean>>() {}.getType());
		Cuscard temp = cuss.get(0);	
		temp.setCuscardend(CuscardBeancuss.get(0).getCuscardendnew());
		temp.setCuscardtimes(CuscardBeancuss.get(0).getCuscardtimesnew());;
		ArrayList<String> sqls = new ArrayList<String>();
		sqls.add(getUpdSingleSql(temp,CuscardPoco.KEYCOLUMN));
		//增加凭证记录
		Notesmoneys mNotes = new Notesmoneys(CommonUtil.getNewId(), temp.getCuscardcustomer(), temp.getCuscardno(),temp.getCuscarddetail(), 
				null, null, temp.getCuscardmoney(), "续卡", 
				"活动"+huodong+",老卡有效期："+CuscardBeancuss.get(0).getCuscardend()+"，老卡余次："+CuscardBeancuss.get(0).getCuscardtimes()+"，新卡有效期："+CuscardBeancuss.get(0).getCuscardendnew()+"，新卡余次："+CuscardBeancuss.get(0).getCuscardtimesnew(),
				"卡操作", DateUtils.getDateTime(), getCurrentUsername(request));
		sqls.add(getInsSingleSql(mNotes));
		result = doAll(sqls);
		if(CommonConst.SUCCESS.equals(result)&&"新天地万科馆".equals(temp.getCuscarddetail())&&"时间卡".equals(temp.getCuscardtypeclass())){
			ZhajiResult token = ZhajiApi.getToken();
			ZhajiCard card = new ZhajiCard();
			card.setToken(token.getTOKEN());
			String uid = cuss.get(0).getCuscardno();
			if(cuss.get(0).getCuscardno().length()>6){
				uid = uid.substring(1, 7);
			}
			card.setUid(TypeUtil.stringToInt(uid));
			card.setCard(cuss.get(0).getCuscardupdwhen());
			card.setCard_xtd(cuss.get(0).getCuscardno());
			card.setExpire_from(cuss.get(0).getCuscardbegin().replaceAll("-", ""));
			card.setExpire_to(CuscardBeancuss.get(0).getCuscardendnew().replaceAll("-", ""));
			ZhajiApi.updUser(card);
		}
		responsePW(response, result);
	}
	//封卡
	public void cfeng(HttpServletRequest request, HttpServletResponse response){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		if(!CommonUtil.isNull(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		Cuscard temp = new Cuscard();	
		temp.setCuscardid(cuss.get(0).getCuscardid());
		temp.setCuscardend(cuss.get(0).getCuscardend());
		temp.setCuscardstop(cuss.get(0).getCuscardstop());
		ArrayList<String> sqls = new ArrayList<String>();
		sqls.add(getUpdSingleSql(temp,CuscardPoco.KEYCOLUMN));
		//增加凭证记录
		Notesmoneys mNotes = new Notesmoneys(CommonUtil.getNewId(), cuss.get(0).getCuscardcustomer(), cuss.get(0).getCuscardno(),cuss.get(0).getCuscarddetail(), 
				null, null, cuss.get(0).getCuscardmoney(), "封卡", 
				"封卡天数："+cuss.get(0).getCuscardmoney()+",新卡有效期："+cuss.get(0).getCuscardend(),
				"卡操作", DateUtils.getDateTime(), getCurrentUsername(request));
		sqls.add(getInsSingleSql(mNotes));
		result = doAll(sqls);
		if(CommonConst.SUCCESS.equals(result)&&"新天地万科馆".equals(temp.getCuscarddetail())&&"时间卡".equals(temp.getCuscardtypeclass())){
			ZhajiResult token = ZhajiApi.getToken();
			ZhajiCard card = new ZhajiCard();
			card.setToken(token.getTOKEN());
			String uid = cuss.get(0).getCuscardno();
			if(cuss.get(0).getCuscardno().length()>6){
				uid = uid.substring(1, 7);
			}
			card.setUid(TypeUtil.stringToInt(uid));
			card.setCard(cuss.get(0).getCuscardupdwhen());
			card.setCard_xtd(cuss.get(0).getCuscardno());
			card.setExpire_from(cuss.get(0).getCuscardbegin().replaceAll("-", ""));
			card.setExpire_to(cuss.get(0).getCuscardbegin().replaceAll("-", ""));
			ZhajiApi.updUser(card);
		}
		responsePW(response, result);
	}
	//开卡
	public void ckaika(HttpServletRequest request, HttpServletResponse response){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		if(!CommonUtil.isNull(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Cuscard temp:cuss){
			result = updSingle(temp,CuscardPoco.KEYCOLUMN);
			if(CommonConst.SUCCESS.equals(result)&&"新天地万科馆".equals(temp.getCuscarddetail())&&"时间卡".equals(temp.getCuscardtypeclass())){
				ZhajiResult token = ZhajiApi.getToken();
				ZhajiCard card = new ZhajiCard();
				card.setToken(token.getTOKEN());
				String uid = cuss.get(0).getCuscardno();
				if(cuss.get(0).getCuscardno().length()>6){
					uid = uid.substring(1, 7);
				}
				card.setUid(TypeUtil.stringToInt(uid));
				card.setCard(cuss.get(0).getCuscardupdwhen());
				card.setCard_xtd(cuss.get(0).getCuscardno());
				card.setExpire_from(cuss.get(0).getCuscardbegin().replaceAll("-", ""));
				card.setExpire_to(cuss.get(0).getCuscardend().replaceAll("-", ""));
				ZhajiApi.updUser(card);
			}
		}
		responsePW(response, result);
	}
}
