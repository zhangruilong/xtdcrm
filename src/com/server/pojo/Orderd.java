package com.server.pojo;

import java.sql.Timestamp;
import java.math.BigDecimal;
/**
 * orderd 实体类
 *@author ZhangRuiLong
 */
public class Orderd
{
   /**
    * ID,主键
    */
   private String orderdid; 
   /**
    * 订单总表
    */
   private String orderdorderm;   
   /**
    * 编码
    */
   private String orderdcode;   
   /**
    * 名称
    */
   private String orderdname;   
   /**
    * 分类
    */
   private String orderdclass;   
   /**
    * 单价
    */
   private String orderdprice;   
   /**
    * 数量
    */
   private String orderdnum;   
   /**
    * 下单金额
    */
   private String orderdmoney;   
   /**
    * 打折
    */
   private String orderddiscount;   
   /**
    * 实际金额
    */
   private String orderdrightmoney;   
   /**
    * 备注
    */
   private String orderddetail;   
    //属性方法	    
     /**
	 *设置主键"ID"属性
	 *@param orderdid 实体的Orderdid属性
	 */
	public void setOrderdid(String orderdid)
	{
		this.orderdid = orderdid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getOrderdid()
	{
		return this.orderdid;
	}

	/**
	 *设置"订单总表"属性
	 *@param orderdorderm 实体的Orderdorderm属性
	 */
	public void setOrderdorderm(String orderdorderm)
	{
		this.orderdorderm = orderdorderm;
	}
	
	/**
	 *获取"订单总表"属性
	 */
	public String getOrderdorderm()
	{
		return this.orderdorderm;
	}	   

	/**
	 *设置"编码"属性
	 *@param orderdcode 实体的Orderdcode属性
	 */
	public void setOrderdcode(String orderdcode)
	{
		this.orderdcode = orderdcode;
	}
	
	/**
	 *获取"编码"属性
	 */
	public String getOrderdcode()
	{
		return this.orderdcode;
	}	   

	/**
	 *设置"名称"属性
	 *@param orderdname 实体的Orderdname属性
	 */
	public void setOrderdname(String orderdname)
	{
		this.orderdname = orderdname;
	}
	
	/**
	 *获取"名称"属性
	 */
	public String getOrderdname()
	{
		return this.orderdname;
	}	   

	/**
	 *设置"分类"属性
	 *@param orderdclass 实体的Orderdclass属性
	 */
	public void setOrderdclass(String orderdclass)
	{
		this.orderdclass = orderdclass;
	}
	
	/**
	 *获取"分类"属性
	 */
	public String getOrderdclass()
	{
		return this.orderdclass;
	}	   

	/**
	 *设置"单价"属性
	 *@param orderdprice 实体的Orderdprice属性
	 */
	public void setOrderdprice(String orderdprice)
	{
		this.orderdprice = orderdprice;
	}
	
	/**
	 *获取"单价"属性
	 */
	public String getOrderdprice()
	{
		return this.orderdprice;
	}	   

	/**
	 *设置"数量"属性
	 *@param orderdnum 实体的Orderdnum属性
	 */
	public void setOrderdnum(String orderdnum)
	{
		this.orderdnum = orderdnum;
	}
	
	/**
	 *获取"数量"属性
	 */
	public String getOrderdnum()
	{
		return this.orderdnum;
	}	   

	/**
	 *设置"下单金额"属性
	 *@param orderdmoney 实体的Orderdmoney属性
	 */
	public void setOrderdmoney(String orderdmoney)
	{
		this.orderdmoney = orderdmoney;
	}
	
	/**
	 *获取"下单金额"属性
	 */
	public String getOrderdmoney()
	{
		return this.orderdmoney;
	}	   

	/**
	 *设置"打折"属性
	 *@param orderddiscount 实体的Orderddiscount属性
	 */
	public void setOrderddiscount(String orderddiscount)
	{
		this.orderddiscount = orderddiscount;
	}
	
	/**
	 *获取"打折"属性
	 */
	public String getOrderddiscount()
	{
		return this.orderddiscount;
	}	   

	/**
	 *设置"实际金额"属性
	 *@param orderdrightmoney 实体的Orderdrightmoney属性
	 */
	public void setOrderdrightmoney(String orderdrightmoney)
	{
		this.orderdrightmoney = orderdrightmoney;
	}
	
	/**
	 *获取"实际金额"属性
	 */
	public String getOrderdrightmoney()
	{
		return this.orderdrightmoney;
	}	   

	/**
	 *设置"备注"属性
	 *@param orderddetail 实体的Orderddetail属性
	 */
	public void setOrderddetail(String orderddetail)
	{
		this.orderddetail = orderddetail;
	}
	
	/**
	 *获取"备注"属性
	 */
	public String getOrderddetail()
	{
		return this.orderddetail;
	}	   
	public Orderd() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Orderd(
		String orderdid
	 	,String orderdorderm
	 	,String orderdcode
	 	,String orderdname
	 	,String orderdclass
	 	,String orderdprice
	 	,String orderdnum
	 	,String orderdmoney
	 	,String orderddiscount
	 	,String orderdrightmoney
	 	,String orderddetail
		 ){
		super();
		this.orderdid = orderdid;
	 	this.orderdorderm = orderdorderm;
	 	this.orderdcode = orderdcode;
	 	this.orderdname = orderdname;
	 	this.orderdclass = orderdclass;
	 	this.orderdprice = orderdprice;
	 	this.orderdnum = orderdnum;
	 	this.orderdmoney = orderdmoney;
	 	this.orderddiscount = orderddiscount;
	 	this.orderdrightmoney = orderdrightmoney;
	 	this.orderddetail = orderddetail;
	}
}

