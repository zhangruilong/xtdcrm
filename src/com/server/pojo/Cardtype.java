package com.server.pojo;

import java.sql.Timestamp;
import java.math.BigDecimal;
/**
 * cardtype 实体类
 *@author ZhangRuiLong
 */
public class Cardtype
{
   /**
    * ID,主键
    */
   private String cardtypeid; 
   /**
    * 场馆
    */
   private String cardtypestadium;   
   /**
    * 名称
    */
   private String cardtypename;   
   /**
    * 分类
    */
   private String cardtypeclass;   
   /**
    * 有效期
    */
   private String cardtypeday;   
   /**
    * 价格
    */
   private String cardtypeprice;   
   /**
    * 次数
    */
   private String cardtypetimes;   
   /**
    * 停用期限
    */
   private String cardtypestop;   
   /**
    * 停用费用
    */
   private String cardtypestopmoney;   
   /**
    * 备注
    */
   private String cardtypedetail;   
   /**
    * 状态
    */
   private String cardtypestatue;   
   /**
    * 场次
    */
   private String cardtypechangci;   
   /**
    * 项目
    */
   private String cardtypeproject;   
    //属性方法	    
     /**
	 *设置主键"ID"属性
	 *@param cardtypeid 实体的Cardtypeid属性
	 */
	public void setCardtypeid(String cardtypeid)
	{
		this.cardtypeid = cardtypeid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getCardtypeid()
	{
		return this.cardtypeid;
	}

	/**
	 *设置"场馆"属性
	 *@param cardtypestadium 实体的Cardtypestadium属性
	 */
	public void setCardtypestadium(String cardtypestadium)
	{
		this.cardtypestadium = cardtypestadium;
	}
	
	/**
	 *获取"场馆"属性
	 */
	public String getCardtypestadium()
	{
		return this.cardtypestadium;
	}	   

	/**
	 *设置"名称"属性
	 *@param cardtypename 实体的Cardtypename属性
	 */
	public void setCardtypename(String cardtypename)
	{
		this.cardtypename = cardtypename;
	}
	
	/**
	 *获取"名称"属性
	 */
	public String getCardtypename()
	{
		return this.cardtypename;
	}	   

	/**
	 *设置"分类"属性
	 *@param cardtypeclass 实体的Cardtypeclass属性
	 */
	public void setCardtypeclass(String cardtypeclass)
	{
		this.cardtypeclass = cardtypeclass;
	}
	
	/**
	 *获取"分类"属性
	 */
	public String getCardtypeclass()
	{
		return this.cardtypeclass;
	}	   

	/**
	 *设置"有效期"属性
	 *@param cardtypeday 实体的Cardtypeday属性
	 */
	public void setCardtypeday(String cardtypeday)
	{
		this.cardtypeday = cardtypeday;
	}
	
	/**
	 *获取"有效期"属性
	 */
	public String getCardtypeday()
	{
		return this.cardtypeday;
	}	   

	/**
	 *设置"价格"属性
	 *@param cardtypeprice 实体的Cardtypeprice属性
	 */
	public void setCardtypeprice(String cardtypeprice)
	{
		this.cardtypeprice = cardtypeprice;
	}
	
	/**
	 *获取"价格"属性
	 */
	public String getCardtypeprice()
	{
		return this.cardtypeprice;
	}	   

	/**
	 *设置"次数"属性
	 *@param cardtypetimes 实体的Cardtypetimes属性
	 */
	public void setCardtypetimes(String cardtypetimes)
	{
		this.cardtypetimes = cardtypetimes;
	}
	
	/**
	 *获取"次数"属性
	 */
	public String getCardtypetimes()
	{
		return this.cardtypetimes;
	}	   

	/**
	 *设置"停用期限"属性
	 *@param cardtypestop 实体的Cardtypestop属性
	 */
	public void setCardtypestop(String cardtypestop)
	{
		this.cardtypestop = cardtypestop;
	}
	
	/**
	 *获取"停用期限"属性
	 */
	public String getCardtypestop()
	{
		return this.cardtypestop;
	}	   

	/**
	 *设置"停用费用"属性
	 *@param cardtypestopmoney 实体的Cardtypestopmoney属性
	 */
	public void setCardtypestopmoney(String cardtypestopmoney)
	{
		this.cardtypestopmoney = cardtypestopmoney;
	}
	
	/**
	 *获取"停用费用"属性
	 */
	public String getCardtypestopmoney()
	{
		return this.cardtypestopmoney;
	}	   

	/**
	 *设置"备注"属性
	 *@param cardtypedetail 实体的Cardtypedetail属性
	 */
	public void setCardtypedetail(String cardtypedetail)
	{
		this.cardtypedetail = cardtypedetail;
	}
	
	/**
	 *获取"备注"属性
	 */
	public String getCardtypedetail()
	{
		return this.cardtypedetail;
	}	   

	/**
	 *设置"状态"属性
	 *@param cardtypestatue 实体的Cardtypestatue属性
	 */
	public void setCardtypestatue(String cardtypestatue)
	{
		this.cardtypestatue = cardtypestatue;
	}
	
	/**
	 *获取"状态"属性
	 */
	public String getCardtypestatue()
	{
		return this.cardtypestatue;
	}	   

	/**
	 *设置"场次"属性
	 *@param cardtypechangci 实体的Cardtypechangci属性
	 */
	public void setCardtypechangci(String cardtypechangci)
	{
		this.cardtypechangci = cardtypechangci;
	}
	
	/**
	 *获取"场次"属性
	 */
	public String getCardtypechangci()
	{
		return this.cardtypechangci;
	}	   

	/**
	 *设置"项目"属性
	 *@param cardtypeproject 实体的Cardtypeproject属性
	 */
	public void setCardtypeproject(String cardtypeproject)
	{
		this.cardtypeproject = cardtypeproject;
	}
	
	/**
	 *获取"项目"属性
	 */
	public String getCardtypeproject()
	{
		return this.cardtypeproject;
	}	   
	public Cardtype() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Cardtype(
		String cardtypeid
	 	,String cardtypestadium
	 	,String cardtypename
	 	,String cardtypeclass
	 	,String cardtypeday
	 	,String cardtypeprice
	 	,String cardtypetimes
	 	,String cardtypestop
	 	,String cardtypestopmoney
	 	,String cardtypedetail
	 	,String cardtypestatue
	 	,String cardtypechangci
	 	,String cardtypeproject
		 ){
		super();
		this.cardtypeid = cardtypeid;
	 	this.cardtypestadium = cardtypestadium;
	 	this.cardtypename = cardtypename;
	 	this.cardtypeclass = cardtypeclass;
	 	this.cardtypeday = cardtypeday;
	 	this.cardtypeprice = cardtypeprice;
	 	this.cardtypetimes = cardtypetimes;
	 	this.cardtypestop = cardtypestop;
	 	this.cardtypestopmoney = cardtypestopmoney;
	 	this.cardtypedetail = cardtypedetail;
	 	this.cardtypestatue = cardtypestatue;
	 	this.cardtypechangci = cardtypechangci;
	 	this.cardtypeproject = cardtypeproject;
	}
}

