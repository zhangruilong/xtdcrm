package com.server.pojo;

import java.sql.Timestamp;
import java.math.BigDecimal;
/**
 * huodong 实体类
 *@author ZhangRuiLong
 */
public class Huodong
{
   /**
    * ,主键
    */
   private String huodongid; 
   /**
    * 场馆
    */
   private String huodongstadium;   
   /**
    * 优惠码
    */
   private String huodongcode;   
   /**
    * 名称
    */
   private String huodongname;   
   /**
    * 卡种
    */
   private String huodongcardtype;   
   /**
    * 卡种
    */
   private String huodongcardtypename;   
   /**
    * 数量
    */
   private String huodongnum;   
   /**
    * 开始
    */
   private String huodongbegin;   
   /**
    * 结束
    */
   private String huodongend;   
   /**
    * 折让
    */
   private String huodongmoney;   
   /**
    * 状态
    */
   private String huodongstatue;   
   /**
    * 创建时间
    */
   private String huodonginswhen;   
   /**
    * 创建人
    */
   private String huodonginswho;   
    //属性方法	    
     /**
	 *设置主键""属性
	 *@param huodongid 实体的Huodongid属性
	 */
	public void setHuodongid(String huodongid)
	{
		this.huodongid = huodongid;
	}
	
	/**
	 *获取主键""属性
	 */
	public String getHuodongid()
	{
		return this.huodongid;
	}

	/**
	 *设置"场馆"属性
	 *@param huodongstadium 实体的Huodongstadium属性
	 */
	public void setHuodongstadium(String huodongstadium)
	{
		this.huodongstadium = huodongstadium;
	}
	
	/**
	 *获取"场馆"属性
	 */
	public String getHuodongstadium()
	{
		return this.huodongstadium;
	}	   

	/**
	 *设置"优惠码"属性
	 *@param huodongcode 实体的Huodongcode属性
	 */
	public void setHuodongcode(String huodongcode)
	{
		this.huodongcode = huodongcode;
	}
	
	/**
	 *获取"优惠码"属性
	 */
	public String getHuodongcode()
	{
		return this.huodongcode;
	}	   

	/**
	 *设置"名称"属性
	 *@param huodongname 实体的Huodongname属性
	 */
	public void setHuodongname(String huodongname)
	{
		this.huodongname = huodongname;
	}
	
	/**
	 *获取"名称"属性
	 */
	public String getHuodongname()
	{
		return this.huodongname;
	}	   

	/**
	 *设置"卡种"属性
	 *@param huodongcardtype 实体的Huodongcardtype属性
	 */
	public void setHuodongcardtype(String huodongcardtype)
	{
		this.huodongcardtype = huodongcardtype;
	}
	
	/**
	 *获取"卡种"属性
	 */
	public String getHuodongcardtype()
	{
		return this.huodongcardtype;
	}	   

	/**
	 *设置"卡种"属性
	 *@param huodongcardtypename 实体的Huodongcardtypename属性
	 */
	public void setHuodongcardtypename(String huodongcardtypename)
	{
		this.huodongcardtypename = huodongcardtypename;
	}
	
	/**
	 *获取"卡种"属性
	 */
	public String getHuodongcardtypename()
	{
		return this.huodongcardtypename;
	}	   

	/**
	 *设置"数量"属性
	 *@param huodongnum 实体的Huodongnum属性
	 */
	public void setHuodongnum(String huodongnum)
	{
		this.huodongnum = huodongnum;
	}
	
	/**
	 *获取"数量"属性
	 */
	public String getHuodongnum()
	{
		return this.huodongnum;
	}	   

	/**
	 *设置"开始"属性
	 *@param huodongbegin 实体的Huodongbegin属性
	 */
	public void setHuodongbegin(String huodongbegin)
	{
		this.huodongbegin = huodongbegin;
	}
	
	/**
	 *获取"开始"属性
	 */
	public String getHuodongbegin()
	{
		return this.huodongbegin;
	}	   

	/**
	 *设置"结束"属性
	 *@param huodongend 实体的Huodongend属性
	 */
	public void setHuodongend(String huodongend)
	{
		this.huodongend = huodongend;
	}
	
	/**
	 *获取"结束"属性
	 */
	public String getHuodongend()
	{
		return this.huodongend;
	}	   

	/**
	 *设置"折让"属性
	 *@param huodongmoney 实体的Huodongmoney属性
	 */
	public void setHuodongmoney(String huodongmoney)
	{
		this.huodongmoney = huodongmoney;
	}
	
	/**
	 *获取"折让"属性
	 */
	public String getHuodongmoney()
	{
		return this.huodongmoney;
	}	   

	/**
	 *设置"状态"属性
	 *@param huodongstatue 实体的Huodongstatue属性
	 */
	public void setHuodongstatue(String huodongstatue)
	{
		this.huodongstatue = huodongstatue;
	}
	
	/**
	 *获取"状态"属性
	 */
	public String getHuodongstatue()
	{
		return this.huodongstatue;
	}	   

	/**
	 *设置"创建时间"属性
	 *@param huodonginswhen 实体的Huodonginswhen属性
	 */
	public void setHuodonginswhen(String huodonginswhen)
	{
		this.huodonginswhen = huodonginswhen;
	}
	
	/**
	 *获取"创建时间"属性
	 */
	public String getHuodonginswhen()
	{
		return this.huodonginswhen;
	}	   

	/**
	 *设置"创建人"属性
	 *@param huodonginswho 实体的Huodonginswho属性
	 */
	public void setHuodonginswho(String huodonginswho)
	{
		this.huodonginswho = huodonginswho;
	}
	
	/**
	 *获取"创建人"属性
	 */
	public String getHuodonginswho()
	{
		return this.huodonginswho;
	}	   
	public Huodong() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Huodong(
		String huodongid
	 	,String huodongstadium
	 	,String huodongcode
	 	,String huodongname
	 	,String huodongcardtype
	 	,String huodongcardtypename
	 	,String huodongnum
	 	,String huodongbegin
	 	,String huodongend
	 	,String huodongmoney
	 	,String huodongstatue
	 	,String huodonginswhen
	 	,String huodonginswho
		 ){
		super();
		this.huodongid = huodongid;
	 	this.huodongstadium = huodongstadium;
	 	this.huodongcode = huodongcode;
	 	this.huodongname = huodongname;
	 	this.huodongcardtype = huodongcardtype;
	 	this.huodongcardtypename = huodongcardtypename;
	 	this.huodongnum = huodongnum;
	 	this.huodongbegin = huodongbegin;
	 	this.huodongend = huodongend;
	 	this.huodongmoney = huodongmoney;
	 	this.huodongstatue = huodongstatue;
	 	this.huodonginswhen = huodonginswhen;
	 	this.huodonginswho = huodonginswho;
	}
}

