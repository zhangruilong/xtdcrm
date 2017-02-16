package com.server.pojo;

import java.sql.Date;
/**
 * placeview 实体类
 *@author ZhangRuiLong
 */
public class Placeview
{
   /**
    * ID,主键
    */
   private String placeid; 
   /**
    * 场馆ID
    */
   private String placestadium;   
   /**
    * 编码
    */
   private String placecode;   
   /**
    * 名称
    */
   private String placename;   
   /**
    * 人数
    */
   private Integer placepeople;   
   /**
    * 备注
    */
   private String placedetail;   
   /**
    * 状态
    */
   private String placestatue;   
   /**
    * 开始时间
    */
   private String placebegin;   
   /**
    * 结束时间
    */
   private String placeend;   
   /**
    * 项目
    */
   private String placeproject;   
   /**
    * ID
    */
   private String stadiumid;   
   /**
    * 编码
    */
   private String stadiumcode;   
   /**
    * 名称
    */
   private String stadiumname;   
   /**
    * 地址
    */
   private String stadiumaddress;   
   /**
    * 备注
    */
   private String stadiumdetail;   
   /**
    * 状态
    */
   private String stadiumstatue;   
   /**
    * X坐标
    */
   private String stadiumx;   
   /**
    * Y坐标
    */
   private String stadiumy;   
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
	 *设置"场馆ID"属性
	 *@param placestadium 实体的Placestadium属性
	 */
	public void setPlacestadium(String placestadium)
	{
		this.placestadium = placestadium;
	}
	
	/**
	 *获取"场馆ID"属性
	 */
	public String getPlacestadium()
	{
		return this.placestadium;
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
	 *设置"名称"属性
	 *@param placename 实体的Placename属性
	 */
	public void setPlacename(String placename)
	{
		this.placename = placename;
	}
	
	/**
	 *获取"名称"属性
	 */
	public String getPlacename()
	{
		return this.placename;
	}	   

	/**
	 *设置"人数"属性
	 *@param placepeople 实体的Placepeople属性
	 */
	public void setPlacepeople(Integer placepeople)
	{
		this.placepeople = placepeople;
	}
	
	/**
	 *获取"人数"属性
	 */
	public Integer getPlacepeople()
	{
		return this.placepeople;
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

	/**
	 *设置"开始时间"属性
	 *@param placebegin 实体的Placebegin属性
	 */
	public void setPlacebegin(String placebegin)
	{
		this.placebegin = placebegin;
	}
	
	/**
	 *获取"开始时间"属性
	 */
	public String getPlacebegin()
	{
		return this.placebegin;
	}	   

	/**
	 *设置"结束时间"属性
	 *@param placeend 实体的Placeend属性
	 */
	public void setPlaceend(String placeend)
	{
		this.placeend = placeend;
	}
	
	/**
	 *获取"结束时间"属性
	 */
	public String getPlaceend()
	{
		return this.placeend;
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
	 *设置"ID"属性
	 *@param stadiumid 实体的Stadiumid属性
	 */
	public void setStadiumid(String stadiumid)
	{
		this.stadiumid = stadiumid;
	}
	
	/**
	 *获取"ID"属性
	 */
	public String getStadiumid()
	{
		return this.stadiumid;
	}	   

	/**
	 *设置"编码"属性
	 *@param stadiumcode 实体的Stadiumcode属性
	 */
	public void setStadiumcode(String stadiumcode)
	{
		this.stadiumcode = stadiumcode;
	}
	
	/**
	 *获取"编码"属性
	 */
	public String getStadiumcode()
	{
		return this.stadiumcode;
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
	 *设置"地址"属性
	 *@param stadiumaddress 实体的Stadiumaddress属性
	 */
	public void setStadiumaddress(String stadiumaddress)
	{
		this.stadiumaddress = stadiumaddress;
	}
	
	/**
	 *获取"地址"属性
	 */
	public String getStadiumaddress()
	{
		return this.stadiumaddress;
	}	   

	/**
	 *设置"备注"属性
	 *@param stadiumdetail 实体的Stadiumdetail属性
	 */
	public void setStadiumdetail(String stadiumdetail)
	{
		this.stadiumdetail = stadiumdetail;
	}
	
	/**
	 *获取"备注"属性
	 */
	public String getStadiumdetail()
	{
		return this.stadiumdetail;
	}	   

	/**
	 *设置"状态"属性
	 *@param stadiumstatue 实体的Stadiumstatue属性
	 */
	public void setStadiumstatue(String stadiumstatue)
	{
		this.stadiumstatue = stadiumstatue;
	}
	
	/**
	 *获取"状态"属性
	 */
	public String getStadiumstatue()
	{
		return this.stadiumstatue;
	}	   

	/**
	 *设置"X坐标"属性
	 *@param stadiumx 实体的Stadiumx属性
	 */
	public void setStadiumx(String stadiumx)
	{
		this.stadiumx = stadiumx;
	}
	
	/**
	 *获取"X坐标"属性
	 */
	public String getStadiumx()
	{
		return this.stadiumx;
	}	   

	/**
	 *设置"Y坐标"属性
	 *@param stadiumy 实体的Stadiumy属性
	 */
	public void setStadiumy(String stadiumy)
	{
		this.stadiumy = stadiumy;
	}
	
	/**
	 *获取"Y坐标"属性
	 */
	public String getStadiumy()
	{
		return this.stadiumy;
	}	   
	public Placeview() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Placeview(
		String placeid
	 	,String placestadium
	 	,String placecode
	 	,String placename
	 	,Integer placepeople
	 	,String placedetail
	 	,String placestatue
	 	,String placebegin
	 	,String placeend
	 	,String placeproject
	 	,String stadiumid
	 	,String stadiumcode
	 	,String stadiumname
	 	,String stadiumaddress
	 	,String stadiumdetail
	 	,String stadiumstatue
	 	,String stadiumx
	 	,String stadiumy
		 ){
		super();
		this.placeid = placeid;
	 	this.placestadium = placestadium;
	 	this.placecode = placecode;
	 	this.placename = placename;
	 	this.placepeople = placepeople;
	 	this.placedetail = placedetail;
	 	this.placestatue = placestatue;
	 	this.placebegin = placebegin;
	 	this.placeend = placeend;
	 	this.placeproject = placeproject;
	 	this.stadiumid = stadiumid;
	 	this.stadiumcode = stadiumcode;
	 	this.stadiumname = stadiumname;
	 	this.stadiumaddress = stadiumaddress;
	 	this.stadiumdetail = stadiumdetail;
	 	this.stadiumstatue = stadiumstatue;
	 	this.stadiumx = stadiumx;
	 	this.stadiumy = stadiumy;
	}
}

