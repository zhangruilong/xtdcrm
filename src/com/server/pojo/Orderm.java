package com.server.pojo;

import java.sql.Timestamp;
import java.math.BigDecimal;
/**
 * orderm 实体类
 *@author ZhangRuiLong
 */
public class Orderm
{
   /**
    * ID,主键
    */
   private String orderid; 
   /**
    * 场馆
    */
   private String orderstadium;   
   /**
    * 客户
    */
   private String ordercustomer;   
   /**
    * 手机
    */
   private String orderphone;   
   /**
    * 下单金额
    */
   private String ordermoney;   
   /**
    * 打折
    */
   private String orderdiscount;   
   /**
    * 实际金额
    */
   private String orderrightmoney;   
   /**
    * 备注
    */
   private String orderdetail;   
   /**
    * 状态
    */
   private String orderstatue;   
   /**
    * 创建时间
    */
   private String orderinswhen;   
   /**
    * 创建人
    */
   private String orderinswho;   
    //属性方法	    
     /**
	 *设置主键"ID"属性
	 *@param orderid 实体的Orderid属性
	 */
	public void setOrderid(String orderid)
	{
		this.orderid = orderid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getOrderid()
	{
		return this.orderid;
	}

	/**
	 *设置"场馆"属性
	 *@param orderstadium 实体的Orderstadium属性
	 */
	public void setOrderstadium(String orderstadium)
	{
		this.orderstadium = orderstadium;
	}
	
	/**
	 *获取"场馆"属性
	 */
	public String getOrderstadium()
	{
		return this.orderstadium;
	}	   

	/**
	 *设置"客户"属性
	 *@param ordercustomer 实体的Ordercustomer属性
	 */
	public void setOrdercustomer(String ordercustomer)
	{
		this.ordercustomer = ordercustomer;
	}
	
	/**
	 *获取"客户"属性
	 */
	public String getOrdercustomer()
	{
		return this.ordercustomer;
	}	   

	/**
	 *设置"手机"属性
	 *@param orderphone 实体的Orderphone属性
	 */
	public void setOrderphone(String orderphone)
	{
		this.orderphone = orderphone;
	}
	
	/**
	 *获取"手机"属性
	 */
	public String getOrderphone()
	{
		return this.orderphone;
	}	   

	/**
	 *设置"下单金额"属性
	 *@param ordermoney 实体的Ordermoney属性
	 */
	public void setOrdermoney(String ordermoney)
	{
		this.ordermoney = ordermoney;
	}
	
	/**
	 *获取"下单金额"属性
	 */
	public String getOrdermoney()
	{
		return this.ordermoney;
	}	   

	/**
	 *设置"打折"属性
	 *@param orderdiscount 实体的Orderdiscount属性
	 */
	public void setOrderdiscount(String orderdiscount)
	{
		this.orderdiscount = orderdiscount;
	}
	
	/**
	 *获取"打折"属性
	 */
	public String getOrderdiscount()
	{
		return this.orderdiscount;
	}	   

	/**
	 *设置"实际金额"属性
	 *@param orderrightmoney 实体的Orderrightmoney属性
	 */
	public void setOrderrightmoney(String orderrightmoney)
	{
		this.orderrightmoney = orderrightmoney;
	}
	
	/**
	 *获取"实际金额"属性
	 */
	public String getOrderrightmoney()
	{
		return this.orderrightmoney;
	}	   

	/**
	 *设置"备注"属性
	 *@param orderdetail 实体的Orderdetail属性
	 */
	public void setOrderdetail(String orderdetail)
	{
		this.orderdetail = orderdetail;
	}
	
	/**
	 *获取"备注"属性
	 */
	public String getOrderdetail()
	{
		return this.orderdetail;
	}	   

	/**
	 *设置"状态"属性
	 *@param orderstatue 实体的Orderstatue属性
	 */
	public void setOrderstatue(String orderstatue)
	{
		this.orderstatue = orderstatue;
	}
	
	/**
	 *获取"状态"属性
	 */
	public String getOrderstatue()
	{
		return this.orderstatue;
	}	   

	/**
	 *设置"创建时间"属性
	 *@param orderinswhen 实体的Orderinswhen属性
	 */
	public void setOrderinswhen(String orderinswhen)
	{
		this.orderinswhen = orderinswhen;
	}
	
	/**
	 *获取"创建时间"属性
	 */
	public String getOrderinswhen()
	{
		return this.orderinswhen;
	}	   

	/**
	 *设置"创建人"属性
	 *@param orderinswho 实体的Orderinswho属性
	 */
	public void setOrderinswho(String orderinswho)
	{
		this.orderinswho = orderinswho;
	}
	
	/**
	 *获取"创建人"属性
	 */
	public String getOrderinswho()
	{
		return this.orderinswho;
	}	   
	public Orderm() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Orderm(
		String orderid
	 	,String orderstadium
	 	,String ordercustomer
	 	,String orderphone
	 	,String ordermoney
	 	,String orderdiscount
	 	,String orderrightmoney
	 	,String orderdetail
	 	,String orderstatue
	 	,String orderinswhen
	 	,String orderinswho
		 ){
		super();
		this.orderid = orderid;
	 	this.orderstadium = orderstadium;
	 	this.ordercustomer = ordercustomer;
	 	this.orderphone = orderphone;
	 	this.ordermoney = ordermoney;
	 	this.orderdiscount = orderdiscount;
	 	this.orderrightmoney = orderrightmoney;
	 	this.orderdetail = orderdetail;
	 	this.orderstatue = orderstatue;
	 	this.orderinswhen = orderinswhen;
	 	this.orderinswho = orderinswho;
	}
}

