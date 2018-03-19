package com.server;

import com.system.tools.CommonConst;
import com.system.tools.util.CommonUtil;

public class ZhajiApi {
	public static java.lang.reflect.Type TYPE = new com.google.gson.reflect.TypeToken<ZhajiResult>() {}.getType();
	
	public static ZhajiResult getToken(){
		ZhajiResult mZhajiResult = new ZhajiResult();
		String result = HttpRequest.sendPost("http://222.184.253.71:8081/interface_xtd.php", "ACTION=TOKEN&DATA=NTXTDJSHS2015NTXTDJSHS2015ABCDEF");
		System.out.println("zhajihttp : " + result);
		if(CommonUtil.isNotEmpty(result)) mZhajiResult = CommonConst.GSON.fromJson(result, TYPE);
		System.out.println("zhajitoken : " + mZhajiResult.getTOKEN());
		return mZhajiResult;
	}
	public static ZhajiResult updUser(ZhajiCard card){
		ZhajiResult mZhajiResult = new ZhajiResult();
		String result = HttpRequest.sendPost("http://222.184.253.71:8081/interface_xtd.php", "ACTION=YH_XG"
				+ "&UID="+card.getUid()
				+ "&TOKEN="+card.getToken()
				+ "&CARD="+card.getCard()
				+ "&CARD_XTD="+card.getCard_xtd()
				+ "&EXPIRE_FROM="+card.getExpire_from()
				+ "&EXPIRE_TO="+card.getExpire_to()
				);
		if(CommonUtil.isNotEmpty(result)) mZhajiResult = CommonConst.GSON.fromJson(result, TYPE);
		System.out.println("zhajimessage : " + mZhajiResult.getMESSAGE());
		return mZhajiResult;
	}
}
