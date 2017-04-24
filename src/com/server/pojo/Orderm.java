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
    * 商品编码
    */
   private String ordercode;   
   /**
    * 商品名称
    */
   private String ordername;   
   /**
    * 商品分类
    */
   private String orderclass;   
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
    * 照片
    */
   private String orderimage;   
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
   /**
    * 更新时间
    */
   private String orderupdwhen;   
   /**
    * 更新人
    */
   private String orderupdwho;   
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
	 *设置"商品编码"属性
	 *@param ordercode 实体的Ordercode属性
	 */
	public void setOrdercode(String ordercode)
	{
		this.ordercode = ordercode;
	}
	
	/**
	 *获取"商品编码"属性
	 */
	public String getOrdercode()
	{
		return this.ordercode;
	}	   

	/**
	 *设置"商品名称"属性
	 *@param ordername 实体的Ordername属性
	 */
	public void setOrdername(String ordername)
	{
		this.ordername = ordername;
	}
	
	/**
	 *获取"商品名称"属性
	 */
	public String getOrdername()
	{
		return this.ordername;
	}	   

	/**
	 *设置"商品分类"属性
	 *@param orderclass 实体的Orderclass属性
	 */
	public void setOrderclass(String orderclass)
	{
		this.orderclass = orderclass;
	}
	
	/**
	 *获取"商品分类"属性
	 */
	public String getOrderclass()
	{
		return this.orderclass;
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
	 *设置"照片"属性
	 *@param orderimage 实体的Orderimage属性
	 */
	public void setOrderimage(String orderimage)
	{
		this.orderimage = orderimage;
	}
	
	/**
	 *获取"照片"属性
	 */
	public String getOrderimage()
	{
		return this.orderimage;
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

	/**
	 *设置"更新时间"属性
	 *@param orderupdwhen 实体的Orderupdwhen属性
	 */
	public void setOrderupdwhen(String orderupdwhen)
	{
		this.orderupdwhen = orderupdwhen;
	}
	
	/**
	 *获取"更新时间"属性
	 */
	public String getOrderupdwhen()
	{
		return this.orderupdwhen;
	}	   

	/**
	 *设置"更新人"属性
	 *@param orderupdwho 实体的Orderupdwho属性
	 */
	public void setOrderupdwho(String orderupdwho)
	{
		this.orderupdwho = orderupdwho;
	}
	
	/**
	 *获取"更新人"属性
	 */
	public String getOrderupdwho()
	{
		return this.orderupdwho;
	}	   
	public Orderm() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Orderm(
		String orderid
	 	,String orderstadium
	 	,String ordercode
	 	,String ordername
	 	,String orderclass
	 	,String ordermoney
	 	,String orderdiscount
	 	,String orderrightmoney
	 	,String orderimage
	 	,String orderdetail
	 	,String orderstatue
	 	,String orderinswhen
	 	,String orderinswho
	 	,String orderupdwhen
	 	,String orderupdwho
		 ){
		super();
		this.orderid = orderid;
	 	this.orderstadium = orderstadium;
	 	this.ordercode = ordercode;
	 	this.ordername = ordername;
	 	this.orderclass = orderclass;
	 	this.ordermoney = ordermoney;
	 	this.orderdiscount = orderdiscount;
	 	this.orderrightmoney = orderrightmoney;
	 	this.orderimage = orderimage;
	 	this.orderdetail = orderdetail;
	 	this.orderstatue = orderstatue;
	 	this.orderinswhen = orderinswhen;
	 	this.orderinswho = orderinswho;
	 	this.orderupdwhen = orderupdwhen;
	 	this.orderupdwho = orderupdwho;
	}
}

