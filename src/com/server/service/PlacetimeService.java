package com.server.service;

import java.lang.reflect.Type;
import com.google.gson.reflect.TypeToken;
import java.util.ArrayList;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.server.pojo.Appiont;
import com.server.pojo.Place;
//import org.apache.solr.common.SolrDocumentList;
import com.server.pojo.Placetime;
import com.server.poco.PlacetimePoco;
import com.server.action.PlacetimeAction;
import com.server.bean.PlacetimeBean;
import com.system.tools.CommonConst;
import com.system.tools.base.BaseActionDao;
import com.system.tools.pojo.Fileinfo;
import com.system.tools.pojo.Queryinfo;
import com.system.tools.util.CommonUtil;
import com.system.tools.util.FileUtil;
import com.system.tools.util.TypeUtil;
import com.system.tools.pojo.Pageinfo;

/**
 * placetime 服务层
 *@author ZhangRuiLong
 */
public class PlacetimeService extends PlacetimeAction {
	//查询所有
	public void selAllPlace(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request, Placetime.class, PlacetimePoco.QUERYFIELDNAME, PlacetimePoco.ORDER, TYPE);
		cuss = (ArrayList<Placetime>)selAll(queryinfo);
		if(cuss.size()>0){
			PlacetimeBean mPlacetimeBean = new PlacetimeBean(cuss.get(0));
			ArrayList<Place> sPlace=  (ArrayList<Place>)selAll(Place.class,"select * from place where placename = '"+mPlacetimeBean.getPlacetimeplacename()+"'");
			ArrayList<Appiont> sAppiont=  (ArrayList<Appiont>)selAll(Appiont.class,"select * from Appiont where appointstadium = '"+mPlacetimeBean.getPlacetimestadium()
			+"' and appointproject='"+mPlacetimeBean.getPlacetimeproject()
			+"' and appointplacename='"+mPlacetimeBean.getPlacetimeplacename()
			+"' and appointdetail='"+mPlacetimeBean.getPlacetimedetail()
			+"' and appointcoachname='"+mPlacetimeBean.getPlacetimecoachname()
//			+"' and appointbegin='"+mPlacetimeBean.getStartDate()
//			+"' and appointend='"+mPlacetimeBean.getEndDate()
			+"'");
			for(int i=0;i<sPlace.size();i++){
				sPlace.get(i).setPlacestatue("空");
				sPlace.get(i).setPlacedetail("icon_nav_button.png");
				for(Appiont temp2:sAppiont){
					if(sPlace.get(i).getPlacecode().equals(temp2.getAppointplace())){
						sPlace.get(i).setPlacestatue("满");
						sPlace.get(i).setPlacedetail("icon_nav_toast.png");
					}
				}
			}
			mPlacetimeBean.setRoot(sPlace);
//			ArrayList<PlacetimeBean> sPlacetimeBean =  new ArrayList<PlacetimeBean>();
//			sPlacetimeBean.add(mPlacetimeBean);
//			Pageinfo pageinfo = new Pageinfo(0, sPlacetimeBean);
			result = CommonConst.GSON.toJson(mPlacetimeBean);
		}
		responsePW(response, result);
	}
}
