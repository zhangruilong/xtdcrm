package com.server.action;

import java.lang.reflect.Type;
import com.google.gson.reflect.TypeToken;
import java.util.ArrayList;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//import org.apache.solr.common.SolrDocumentList;
import com.server.pojo.Place;
import com.server.poco.PlacePoco;
import com.system.tools.CommonConst;
import com.system.tools.base.BaseActionDao;
import com.system.tools.pojo.Fileinfo;
import com.system.tools.pojo.Queryinfo;
import com.system.tools.util.CommonUtil;
import com.system.tools.util.FileUtil;
import com.system.tools.util.TypeUtil;
import com.system.tools.pojo.Pageinfo;

/**
 * place 逻辑层
 *@author ZhangRuiLong
 */
public class PlaceAction extends BaseActionDao {
	public ArrayList<Place> cuss = null;
	public Type TYPE = new TypeToken<ArrayList<Place>>() {}.getType();

	//新增
	public void insAll(HttpServletRequest request, HttpServletResponse response){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		json = json.replace("\"\"", "null");
		if(!CommonUtil.isNull(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Place temp:cuss){
			if(CommonUtil.isNull(temp.getPlaceid()))
				temp.setPlaceid(CommonUtil.getNewId());
			result = insSingle(temp);
//			if(CommonConst.SUCCESS.equals(result)) updSolr(temp);
		}
		responsePW(response, result);
	}
	//删除
	public void delAll(HttpServletRequest request, HttpServletResponse response){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		if(!CommonUtil.isNull(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Place temp:cuss){
			result = delSingle(temp,PlacePoco.KEYCOLUMN);
//			if(CommonConst.SUCCESS.equals(result)) delSolr(temp,PlacePoco.KEYCOLUMN);
		}
		responsePW(response, result);
	}
	//修改
	public void updAll(HttpServletRequest request, HttpServletResponse response){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		if(!CommonUtil.isNull(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Place temp:cuss){
			if(CommonUtil.isNull(temp.getPlaceid())){
				temp.setPlaceid(CommonUtil.getNewId());
				result = insSingle(temp);
			}else result = updSingle(temp,PlacePoco.KEYCOLUMN);
//			if(CommonConst.SUCCESS.equals(result)) updSolr(temp);
		}
		responsePW(response, result);
	}
	//导入
	public void impAll(HttpServletRequest request, HttpServletResponse response){
		Fileinfo fileinfo = FileUtil.upload(request,0,null,PlacePoco.NAME,"impAll");
		String json = FileUtil.impExcel(fileinfo.getPath(),PlacePoco.FIELDNAME); 
		if(!CommonUtil.isNull(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Place temp:cuss){
			if(CommonUtil.isNull(temp.getPlaceid()))
				temp.setPlaceid(CommonUtil.getNewId());
			result = insSingle(temp);
		}
		responsePW(response, result);
	}
	//导出
	public void expAll(HttpServletRequest request, HttpServletResponse response) throws Exception{
		Queryinfo queryinfo = getQueryinfo(request, Place.class, PlacePoco.QUERYFIELDNAME, PlacePoco.ORDER, TYPE);
		cuss = (ArrayList<Place>) selAll(queryinfo);
		FileUtil.expExcel(response,cuss,PlacePoco.CHINESENAME,PlacePoco.NAME);
	}
	//查询所有
	public void selAll(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request, Place.class, PlacePoco.QUERYFIELDNAME, PlacePoco.ORDER, TYPE);
		Pageinfo pageinfo = new Pageinfo(0, selAll(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//分页查询
	public void selQuery(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request, Place.class, PlacePoco.QUERYFIELDNAME, PlacePoco.ORDER, TYPE);
		Pageinfo pageinfo = new Pageinfo(getTotal(queryinfo), selQuery(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//查询LIMIT条
	public void selLimit(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request, Place.class, PlacePoco.QUERYFIELDNAME, PlacePoco.ORDER, TYPE, CommonConst.LIMIT);
		Pageinfo pageinfo = new Pageinfo(0, selQuery(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//solr查询
//	public void selSolr(HttpServletRequest request, HttpServletResponse response){
//		Queryinfo queryinfo = getSolrquery(request, Place.class, PlacePoco.QUERYFIELDNAME, PlacePoco.ORDER, TYPE);
//		SolrDocumentList solrDocumentList = selSolr(queryinfo);
//		Pageinfo pageinfo = new Pageinfo(TypeUtil.stringToInt(""+solrDocumentList.getNumFound()), solrDocumentList);
//		result = CommonConst.GSON.toJson(pageinfo);
//       responsePW(response, result);
//    } 
}
