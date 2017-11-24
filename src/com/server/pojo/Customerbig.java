package com.server.pojo;

import java.sql.Timestamp;
import java.math.BigDecimal;
/**
 * customerbig 实体类
 *@author ZhangRuiLong
 */
public class Customerbig
{
   /**
    * ID,主键
    */
   private String cuscardid; 
   /**
    * 公司
    */
   private String cuscardcustomer;   
   /**
    * 场馆
    */
   private String cuscardstadium;   
   /**
    * 起始卡号
    */
   private String cuscardno;   
   /**
    * 发卡数量
    */
   private String cuscardpoint;   
   /**
    * 卡种
    */
   private String cuscardtypename;   
   /**
    * 有效期开始
    */
   private String cuscardbegin;   
   /**
    * 有效期结束
    */
   private String cuscardend;   
   /**
    * 价格
    */
   private String cuscardprice;   
   /**
    * 刷卡总次数
    */
   private String cuscardnums;   
   /**
    * 待付款
    */
   private String cuscardmoney;   
   /**
    * 已付款
    */
   private String cuscardstopmoney;   
   /**
    * 备注
    */
   private String cuscarddetail;   
   /**
    * 创建时间
    */
   private String cuscardinswhen;   
   /**
    * 创建人
    */
   private String cuscardinswho;   
   /**
    * 收款时间
    */
   private String cuscardupdwhen;   
   /**
    * 收款人
    */
   private String cuscardupdwho;   
    //属性方法	    
     /**
	 *设置主键"ID"属性
	 *@param cuscardid 实体的Cuscardid属性
	 */
	public void setCuscardid(String cuscardid)
	{
		this.cuscardid = cuscardid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getCuscardid()
	{
		return this.cuscardid;
	}

	/**
	 *设置"公司"属性
	 *@param cuscardcustomer 实体的Cuscardcustomer属性
	 */
	public void setCuscardcustomer(String cuscardcustomer)
	{
		this.cuscardcustomer = cuscardcustomer;
	}
	
	/**
	 *获取"公司"属性
	 */
	public String getCuscardcustomer()
	{
		return this.cuscardcustomer;
	}	   

	/**
	 *设置"场馆"属性
	 *@param cuscardstadium 实体的Cuscardstadium属性
	 */
	public void setCuscardstadium(String cuscardstadium)
	{
		this.cuscardstadium = cuscardstadium;
	}
	
	/**
	 *获取"场馆"属性
	 */
	public String getCuscardstadium()
	{
		return this.cuscardstadium;
	}	   

	/**
	 *设置"起始卡号"属性
	 *@param cuscardno 实体的Cuscardno属性
	 */
	public void setCuscardno(String cuscardno)
	{
		this.cuscardno = cuscardno;
	}
	
	/**
	 *获取"起始卡号"属性
	 */
	public String getCuscardno()
	{
		return this.cuscardno;
	}	   

	/**
	 *设置"发卡数量"属性
	 *@param cuscardpoint 实体的Cuscardpoint属性
	 */
	public void setCuscardpoint(String cuscardpoint)
	{
		this.cuscardpoint = cuscardpoint;
	}
	
	/**
	 *获取"发卡数量"属性
	 */
	public String getCuscardpoint()
	{
		return this.cuscardpoint;
	}	   

	/**
	 *设置"卡种"属性
	 *@param cuscardtypename 实体的Cuscardtypename属性
	 */
	public void setCuscardtypename(String cuscardtypename)
	{
		this.cuscardtypename = cuscardtypename;
	}
	
	/**
	 *获取"卡种"属性
	 */
	public String getCuscardtypename()
	{
		return this.cuscardtypename;
	}	   

	/**
	 *设置"有效期开始"属性
	 *@param cuscardbegin 实体的Cuscardbegin属性
	 */
	public void setCuscardbegin(String cuscardbegin)
	{
		this.cuscardbegin = cuscardbegin;
	}
	
	/**
	 *获取"有效期开始"属性
	 */
	public String getCuscardbegin()
	{
		return this.cuscardbegin;
	}	   

	/**
	 *设置"有效期结束"属性
	 *@param cuscardend 实体的Cuscardend属性
	 */
	public void setCuscardend(String cuscardend)
	{
		this.cuscardend = cuscardend;
	}
	
	/**
	 *获取"有效期结束"属性
	 */
	public String getCuscardend()
	{
		return this.cuscardend;
	}	   

	/**
	 *设置"价格"属性
	 *@param cuscardprice 实体的Cuscardprice属性
	 */
	public void setCuscardprice(String cuscardprice)
	{
		this.cuscardprice = cuscardprice;
	}
	
	/**
	 *获取"价格"属性
	 */
	public String getCuscardprice()
	{
		return this.cuscardprice;
	}	   

	/**
	 *设置"刷卡总次数"属性
	 *@param cuscardnums 实体的Cuscardnums属性
	 */
	public void setCuscardnums(String cuscardnums)
	{
		this.cuscardnums = cuscardnums;
	}
	
	/**
	 *获取"刷卡总次数"属性
	 */
	public String getCuscardnums()
	{
		return this.cuscardnums;
	}	   

	/**
	 *设置"待付款"属性
	 *@param cuscardmoney 实体的Cuscardmoney属性
	 */
	public void setCuscardmoney(String cuscardmoney)
	{
		this.cuscardmoney = cuscardmoney;
	}
	
	/**
	 *获取"待付款"属性
	 */
	public String getCuscardmoney()
	{
		return this.cuscardmoney;
	}	   

	/**
	 *设置"已付款"属性
	 *@param cuscardstopmoney 实体的Cuscardstopmoney属性
	 */
	public void setCuscardstopmoney(String cuscardstopmoney)
	{
		this.cuscardstopmoney = cuscardstopmoney;
	}
	
	/**
	 *获取"已付款"属性
	 */
	public String getCuscardstopmoney()
	{
		return this.cuscardstopmoney;
	}	   

	/**
	 *设置"备注"属性
	 *@param cuscarddetail 实体的Cuscarddetail属性
	 */
	public void setCuscarddetail(String cuscarddetail)
	{
		this.cuscarddetail = cuscarddetail;
	}
	
	/**
	 *获取"备注"属性
	 */
	public String getCuscarddetail()
	{
		return this.cuscarddetail;
	}	   

	/**
	 *设置"创建时间"属性
	 *@param cuscardinswhen 实体的Cuscardinswhen属性
	 */
	public void setCuscardinswhen(String cuscardinswhen)
	{
		this.cuscardinswhen = cuscardinswhen;
	}
	
	/**
	 *获取"创建时间"属性
	 */
	public String getCuscardinswhen()
	{
		return this.cuscardinswhen;
	}	   

	/**
	 *设置"创建人"属性
	 *@param cuscardinswho 实体的Cuscardinswho属性
	 */
	public void setCuscardinswho(String cuscardinswho)
	{
		this.cuscardinswho = cuscardinswho;
	}
	
	/**
	 *获取"创建人"属性
	 */
	public String getCuscardinswho()
	{
		return this.cuscardinswho;
	}	   

	/**
	 *设置"收款时间"属性
	 *@param cuscardupdwhen 实体的Cuscardupdwhen属性
	 */
	public void setCuscardupdwhen(String cuscardupdwhen)
	{
		this.cuscardupdwhen = cuscardupdwhen;
	}
	
	/**
	 *获取"收款时间"属性
	 */
	public String getCuscardupdwhen()
	{
		return this.cuscardupdwhen;
	}	   

	/**
	 *设置"收款人"属性
	 *@param cuscardupdwho 实体的Cuscardupdwho属性
	 */
	public void setCuscardupdwho(String cuscardupdwho)
	{
		this.cuscardupdwho = cuscardupdwho;
	}
	
	/**
	 *获取"收款人"属性
	 */
	public String getCuscardupdwho()
	{
		return this.cuscardupdwho;
	}	   
	public Customerbig() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Customerbig(
		String cuscardid
	 	,String cuscardcustomer
	 	,String cuscardstadium
	 	,String cuscardno
	 	,String cuscardpoint
	 	,String cuscardtypename
	 	,String cuscardbegin
	 	,String cuscardend
	 	,String cuscardprice
	 	,String cuscardnums
	 	,String cuscardmoney
	 	,String cuscardstopmoney
	 	,String cuscarddetail
	 	,String cuscardinswhen
	 	,String cuscardinswho
	 	,String cuscardupdwhen
	 	,String cuscardupdwho
		 ){
		super();
		this.cuscardid = cuscardid;
	 	this.cuscardcustomer = cuscardcustomer;
	 	this.cuscardstadium = cuscardstadium;
	 	this.cuscardno = cuscardno;
	 	this.cuscardpoint = cuscardpoint;
	 	this.cuscardtypename = cuscardtypename;
	 	this.cuscardbegin = cuscardbegin;
	 	this.cuscardend = cuscardend;
	 	this.cuscardprice = cuscardprice;
	 	this.cuscardnums = cuscardnums;
	 	this.cuscardmoney = cuscardmoney;
	 	this.cuscardstopmoney = cuscardstopmoney;
	 	this.cuscarddetail = cuscarddetail;
	 	this.cuscardinswhen = cuscardinswhen;
	 	this.cuscardinswho = cuscardinswho;
	 	this.cuscardupdwhen = cuscardupdwhen;
	 	this.cuscardupdwho = cuscardupdwho;
	}
}

