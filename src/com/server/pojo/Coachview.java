package com.server.pojo;

import java.sql.Date;
/**
 * coachview 实体类
 *@author ZhangRuiLong
 */
public class Coachview
{
   /**
    * ID,主键
    */
   private String coachid; 
   /**
    * 场馆ID
    */
   private String coachstadium;   
   /**
    * 编码
    */
   private String coachcode;   
   /**
    * 姓名
    */
   private String coachname;   
   /**
    * 手机
    */
   private String coachphone;   
   /**
    * 地址
    */
   private String coachaddress;   
   /**
    * 性别
    */
   private String coachsex;   
   /**
    * 年龄
    */
   private String coachage;   
   /**
    * 照片
    */
   private String coachimage;   
   /**
    * 备注
    */
   private String coachdetail;   
   /**
    * 状态
    */
   private String coachstatue;   
   /**
    * 创建时间
    */
   private String createtime;   
   /**
    * 创建人
    */
   private String creator;   
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
	 *@param coachid 实体的Coachid属性
	 */
	public void setCoachid(String coachid)
	{
		this.coachid = coachid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getCoachid()
	{
		return this.coachid;
	}

	/**
	 *设置"场馆ID"属性
	 *@param coachstadium 实体的Coachstadium属性
	 */
	public void setCoachstadium(String coachstadium)
	{
		this.coachstadium = coachstadium;
	}
	
	/**
	 *获取"场馆ID"属性
	 */
	public String getCoachstadium()
	{
		return this.coachstadium;
	}	   

	/**
	 *设置"编码"属性
	 *@param coachcode 实体的Coachcode属性
	 */
	public void setCoachcode(String coachcode)
	{
		this.coachcode = coachcode;
	}
	
	/**
	 *获取"编码"属性
	 */
	public String getCoachcode()
	{
		return this.coachcode;
	}	   

	/**
	 *设置"姓名"属性
	 *@param coachname 实体的Coachname属性
	 */
	public void setCoachname(String coachname)
	{
		this.coachname = coachname;
	}
	
	/**
	 *获取"姓名"属性
	 */
	public String getCoachname()
	{
		return this.coachname;
	}	   

	/**
	 *设置"手机"属性
	 *@param coachphone 实体的Coachphone属性
	 */
	public void setCoachphone(String coachphone)
	{
		this.coachphone = coachphone;
	}
	
	/**
	 *获取"手机"属性
	 */
	public String getCoachphone()
	{
		return this.coachphone;
	}	   

	/**
	 *设置"地址"属性
	 *@param coachaddress 实体的Coachaddress属性
	 */
	public void setCoachaddress(String coachaddress)
	{
		this.coachaddress = coachaddress;
	}
	
	/**
	 *获取"地址"属性
	 */
	public String getCoachaddress()
	{
		return this.coachaddress;
	}	   

	/**
	 *设置"性别"属性
	 *@param coachsex 实体的Coachsex属性
	 */
	public void setCoachsex(String coachsex)
	{
		this.coachsex = coachsex;
	}
	
	/**
	 *获取"性别"属性
	 */
	public String getCoachsex()
	{
		return this.coachsex;
	}	   

	/**
	 *设置"年龄"属性
	 *@param coachage 实体的Coachage属性
	 */
	public void setCoachage(String coachage)
	{
		this.coachage = coachage;
	}
	
	/**
	 *获取"年龄"属性
	 */
	public String getCoachage()
	{
		return this.coachage;
	}	   

	/**
	 *设置"照片"属性
	 *@param coachimage 实体的Coachimage属性
	 */
	public void setCoachimage(String coachimage)
	{
		this.coachimage = coachimage;
	}
	
	/**
	 *获取"照片"属性
	 */
	public String getCoachimage()
	{
		return this.coachimage;
	}	   

	/**
	 *设置"备注"属性
	 *@param coachdetail 实体的Coachdetail属性
	 */
	public void setCoachdetail(String coachdetail)
	{
		this.coachdetail = coachdetail;
	}
	
	/**
	 *获取"备注"属性
	 */
	public String getCoachdetail()
	{
		return this.coachdetail;
	}	   

	/**
	 *设置"状态"属性
	 *@param coachstatue 实体的Coachstatue属性
	 */
	public void setCoachstatue(String coachstatue)
	{
		this.coachstatue = coachstatue;
	}
	
	/**
	 *获取"状态"属性
	 */
	public String getCoachstatue()
	{
		return this.coachstatue;
	}	   

	/**
	 *设置"创建时间"属性
	 *@param createtime 实体的Createtime属性
	 */
	public void setCreatetime(String createtime)
	{
		this.createtime = createtime;
	}
	
	/**
	 *获取"创建时间"属性
	 */
	public String getCreatetime()
	{
		return this.createtime;
	}	   

	/**
	 *设置"创建人"属性
	 *@param creator 实体的Creator属性
	 */
	public void setCreator(String creator)
	{
		this.creator = creator;
	}
	
	/**
	 *获取"创建人"属性
	 */
	public String getCreator()
	{
		return this.creator;
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
	public Coachview() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Coachview(
		String coachid
	 	,String coachstadium
	 	,String coachcode
	 	,String coachname
	 	,String coachphone
	 	,String coachaddress
	 	,String coachsex
	 	,String coachage
	 	,String coachimage
	 	,String coachdetail
	 	,String coachstatue
	 	,String createtime
	 	,String creator
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
		this.coachid = coachid;
	 	this.coachstadium = coachstadium;
	 	this.coachcode = coachcode;
	 	this.coachname = coachname;
	 	this.coachphone = coachphone;
	 	this.coachaddress = coachaddress;
	 	this.coachsex = coachsex;
	 	this.coachage = coachage;
	 	this.coachimage = coachimage;
	 	this.coachdetail = coachdetail;
	 	this.coachstatue = coachstatue;
	 	this.createtime = createtime;
	 	this.creator = creator;
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

