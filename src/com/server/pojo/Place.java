package com.server.pojo;

import java.sql.Timestamp;
import java.math.BigDecimal;
/**
 * place 实体类
 *@author ZhangRuiLong
 */
public class Place
{
   /**
    * ID,主键
    */
   private String placeid; 
   /**
    * 场馆
    */
   private String placestadium;   
   /**
    * 位置
    */
   private String placecode;   
   /**
    * 场地
    */
   private String placename;   
   /**
    * 备注
    */
   private String placedetail;   
   /**
    * 项目
    */
   private String placeproject;   
   /**
    * 状态
    */
   private String placestatue;   
    //属性方法	    
     /**
	 *设置主键"ID"属性
	 *@param placeid 实体的Placeid属性
	 */
	public void setPlaceid(String placeid)
	{
		this.placeid = placeid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getPlaceid()
	{
		return this.placeid;
	}

	/**
	 *设置"场馆"属性
	 *@param placestadium 实体的Placestadium属性
	 */
	public void setPlacestadium(String placestadium)
	{
		this.placestadium = placestadium;
	}
	
	/**
	 *获取"场馆"属性
	 */
	public String getPlacestadium()
	{
		return this.placestadium;
	}	   

	/**
	 *设置"位置"属性
	 *@param placecode 实体的Placecode属性
	 */
	public void setPlacecode(String placecode)
	{
		this.placecode = placecode;
	}
	
	/**
	 *获取"位置"属性
	 */
	public String getPlacecode()
	{
		return this.placecode;
	}	   

	/**
	 *设置"场地"属性
	 *@param placename 实体的Placename属性
	 */
	public void setPlacename(String placename)
	{
		this.placename = placename;
	}
	
	/**
	 *获取"场地"属性
	 */
	public String getPlacename()
	{
		return this.placename;
	}	   

	/**
	 *设置"备注"属性
	 *@param placedetail 实体的Placedetail属性
	 */
	public void setPlacedetail(String placedetail)
	{
		this.placedetail = placedetail;
	}
	
	/**
	 *获取"备注"属性
	 */
	public String getPlacedetail()
	{
		return this.placedetail;
	}	   

	/**
	 *设置"项目"属性
	 *@param placeproject 实体的Placeproject属性
	 */
	public void setPlaceproject(String placeproject)
	{
		this.placeproject = placeproject;
	}
	
	/**
	 *获取"项目"属性
	 */
	public String getPlaceproject()
	{
		return this.placeproject;
	}	   

	/**
	 *设置"状态"属性
	 *@param placestatue 实体的Placestatue属性
	 */
	public void setPlacestatue(String placestatue)
	{
		this.placestatue = placestatue;
	}
	
	/**
	 *获取"状态"属性
	 */
	public String getPlacestatue()
	{
		return this.placestatue;
	}	   
	public Place() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Place(
		String placeid
	 	,String placestadium
	 	,String placecode
	 	,String placename
	 	,String placedetail
	 	,String placeproject
	 	,String placestatue
		 ){
		super();
		this.placeid = placeid;
	 	this.placestadium = placestadium;
	 	this.placecode = placecode;
	 	this.placename = placename;
	 	this.placedetail = placedetail;
	 	this.placeproject = placeproject;
	 	this.placestatue = placestatue;
	}
}

