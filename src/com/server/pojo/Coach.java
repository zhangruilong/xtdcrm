package com.server.pojo;

import java.sql.Timestamp;
import java.math.BigDecimal;
/**
 * coach 实体类
 *@author ZhangRuiLong
 */
public class Coach
{
   /**
    * ID,主键
    */
   private String coachid; 
   /**
    * 场馆
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
    * 价位
    */
   private String coachprice;   
   /**
    * 其他信息
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
    * 创建人
    */
   private String coachinswho;   
   /**
    * 创建时间
    */
   private String coachinswhen;   
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
	 *设置"场馆"属性
	 *@param coachstadium 实体的Coachstadium属性
	 */
	public void setCoachstadium(String coachstadium)
	{
		this.coachstadium = coachstadium;
	}
	
	/**
	 *获取"场馆"属性
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
	 *设置"价位"属性
	 *@param coachprice 实体的Coachprice属性
	 */
	public void setCoachprice(String coachprice)
	{
		this.coachprice = coachprice;
	}
	
	/**
	 *获取"价位"属性
	 */
	public String getCoachprice()
	{
		return this.coachprice;
	}	   

	/**
	 *设置"其他信息"属性
	 *@param coachaddress 实体的Coachaddress属性
	 */
	public void setCoachaddress(String coachaddress)
	{
		this.coachaddress = coachaddress;
	}
	
	/**
	 *获取"其他信息"属性
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
	 *设置"创建人"属性
	 *@param coachinswho 实体的Coachinswho属性
	 */
	public void setCoachinswho(String coachinswho)
	{
		this.coachinswho = coachinswho;
	}
	
	/**
	 *获取"创建人"属性
	 */
	public String getCoachinswho()
	{
		return this.coachinswho;
	}	   

	/**
	 *设置"创建时间"属性
	 *@param coachinswhen 实体的Coachinswhen属性
	 */
	public void setCoachinswhen(String coachinswhen)
	{
		this.coachinswhen = coachinswhen;
	}
	
	/**
	 *获取"创建时间"属性
	 */
	public String getCoachinswhen()
	{
		return this.coachinswhen;
	}	   
	public Coach() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Coach(
		String coachid
	 	,String coachstadium
	 	,String coachcode
	 	,String coachname
	 	,String coachphone
	 	,String coachprice
	 	,String coachaddress
	 	,String coachsex
	 	,String coachage
	 	,String coachimage
	 	,String coachdetail
	 	,String coachstatue
	 	,String coachinswho
	 	,String coachinswhen
		 ){
		super();
		this.coachid = coachid;
	 	this.coachstadium = coachstadium;
	 	this.coachcode = coachcode;
	 	this.coachname = coachname;
	 	this.coachphone = coachphone;
	 	this.coachprice = coachprice;
	 	this.coachaddress = coachaddress;
	 	this.coachsex = coachsex;
	 	this.coachage = coachage;
	 	this.coachimage = coachimage;
	 	this.coachdetail = coachdetail;
	 	this.coachstatue = coachstatue;
	 	this.coachinswho = coachinswho;
	 	this.coachinswhen = coachinswhen;
	}
}

