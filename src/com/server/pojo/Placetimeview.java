package com.server.pojo;

import java.sql.Date;
/**
 * placetimeview 实体类
 *@author ZhangRuiLong
 */
public class Placetimeview
{
   /**
    * ID,主键
    */
   private String stadiumid; 
   /**
    * 名称
    */
   private String stadiumname;   
   /**
    * 编码
    */
   private String placecode;   
   /**
    * 项目
    */
   private String placeproject;   
    //属性方法	    
     /**
	 *设置主键"ID"属性
	 *@param stadiumid 实体的Stadiumid属性
	 */
	public void setStadiumid(String stadiumid)
	{
		this.stadiumid = stadiumid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getStadiumid()
	{
		return this.stadiumid;
	}

	/**
	 *设置"名称"属性
	 *@param stadiumname 实体的Stadiumname属性
	 */
	public void setStadiumname(String stadiumname)
	{
		this.stadiumname = stadiumname;
	}
	
	/**
	 *获取"名称"属性
	 */
	public String getStadiumname()
	{
		return this.stadiumname;
	}	   

	/**
	 *设置"编码"属性
	 *@param placecode 实体的Placecode属性
	 */
	public void setPlacecode(String placecode)
	{
		this.placecode = placecode;
	}
	
	/**
	 *获取"编码"属性
	 */
	public String getPlacecode()
	{
		return this.placecode;
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
	public Placetimeview() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Placetimeview(
		String stadiumid
	 	,String stadiumname
	 	,String placecode
	 	,String placeproject
		 ){
		super();
		this.stadiumid = stadiumid;
	 	this.stadiumname = stadiumname;
	 	this.placecode = placecode;
	 	this.placeproject = placeproject;
	}
}

