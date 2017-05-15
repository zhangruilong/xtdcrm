package com.server.pojo;

import java.sql.Timestamp;
import java.math.BigDecimal;
/**
 * mycourse 实体类
 *@author ZhangRuiLong
 */
public class Mycourse
{
   /**
    * ID,主键
    */
   private String mycourseid; 
   /**
    * 会员
    */
   private String mycoursecustomer;   
   /**
    * 课程名
    */
   private String mycoursename;   
   /**
    * 场馆
    */
   private String mycoursestadium;   
   /**
    * 教练
    */
   private String mycoursecoach;   
   /**
    * 教练
    */
   private String mycoursecoachname;   
   /**
    * 课时
    */
   private String mycoursenum;   
   /**
    * 剩余课时
    */
   private String mycoursenuma;   
   /**
    * 价格
    */
   private String mycourseprice;   
   /**
    * 抵扣
    */
   private String mycoursedikou;   
   /**
    * 售价
    */
   private String mycoursemoney;   
   /**
    * 项目
    */
   private String mycourseproject;   
   /**
    * 备注
    */
   private String mycoursedetail;   
   /**
    * 分类
    */
   private String mycoursetype;   
   /**
    * 开始
    */
   private String mycoursebegin;   
   /**
    * 结束
    */
   private String mycourseend;   
   /**
    * 创建时间
    */
   private String mycourseinswhen;   
   /**
    * 更新时间
    */
   private String mycourseupdwhen;   
    //属性方法	    
     /**
	 *设置主键"ID"属性
	 *@param mycourseid 实体的Mycourseid属性
	 */
	public void setMycourseid(String mycourseid)
	{
		this.mycourseid = mycourseid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getMycourseid()
	{
		return this.mycourseid;
	}

	/**
	 *设置"会员"属性
	 *@param mycoursecustomer 实体的Mycoursecustomer属性
	 */
	public void setMycoursecustomer(String mycoursecustomer)
	{
		this.mycoursecustomer = mycoursecustomer;
	}
	
	/**
	 *获取"会员"属性
	 */
	public String getMycoursecustomer()
	{
		return this.mycoursecustomer;
	}	   

	/**
	 *设置"课程名"属性
	 *@param mycoursename 实体的Mycoursename属性
	 */
	public void setMycoursename(String mycoursename)
	{
		this.mycoursename = mycoursename;
	}
	
	/**
	 *获取"课程名"属性
	 */
	public String getMycoursename()
	{
		return this.mycoursename;
	}	   

	/**
	 *设置"场馆"属性
	 *@param mycoursestadium 实体的Mycoursestadium属性
	 */
	public void setMycoursestadium(String mycoursestadium)
	{
		this.mycoursestadium = mycoursestadium;
	}
	
	/**
	 *获取"场馆"属性
	 */
	public String getMycoursestadium()
	{
		return this.mycoursestadium;
	}	   

	/**
	 *设置"教练"属性
	 *@param mycoursecoach 实体的Mycoursecoach属性
	 */
	public void setMycoursecoach(String mycoursecoach)
	{
		this.mycoursecoach = mycoursecoach;
	}
	
	/**
	 *获取"教练"属性
	 */
	public String getMycoursecoach()
	{
		return this.mycoursecoach;
	}	   

	/**
	 *设置"教练"属性
	 *@param mycoursecoachname 实体的Mycoursecoachname属性
	 */
	public void setMycoursecoachname(String mycoursecoachname)
	{
		this.mycoursecoachname = mycoursecoachname;
	}
	
	/**
	 *获取"教练"属性
	 */
	public String getMycoursecoachname()
	{
		return this.mycoursecoachname;
	}	   

	/**
	 *设置"课时"属性
	 *@param mycoursenum 实体的Mycoursenum属性
	 */
	public void setMycoursenum(String mycoursenum)
	{
		this.mycoursenum = mycoursenum;
	}
	
	/**
	 *获取"课时"属性
	 */
	public String getMycoursenum()
	{
		return this.mycoursenum;
	}	   

	/**
	 *设置"剩余课时"属性
	 *@param mycoursenuma 实体的Mycoursenuma属性
	 */
	public void setMycoursenuma(String mycoursenuma)
	{
		this.mycoursenuma = mycoursenuma;
	}
	
	/**
	 *获取"剩余课时"属性
	 */
	public String getMycoursenuma()
	{
		return this.mycoursenuma;
	}	   

	/**
	 *设置"价格"属性
	 *@param mycourseprice 实体的Mycourseprice属性
	 */
	public void setMycourseprice(String mycourseprice)
	{
		this.mycourseprice = mycourseprice;
	}
	
	/**
	 *获取"价格"属性
	 */
	public String getMycourseprice()
	{
		return this.mycourseprice;
	}	   

	/**
	 *设置"抵扣"属性
	 *@param mycoursedikou 实体的Mycoursedikou属性
	 */
	public void setMycoursedikou(String mycoursedikou)
	{
		this.mycoursedikou = mycoursedikou;
	}
	
	/**
	 *获取"抵扣"属性
	 */
	public String getMycoursedikou()
	{
		return this.mycoursedikou;
	}	   

	/**
	 *设置"售价"属性
	 *@param mycoursemoney 实体的Mycoursemoney属性
	 */
	public void setMycoursemoney(String mycoursemoney)
	{
		this.mycoursemoney = mycoursemoney;
	}
	
	/**
	 *获取"售价"属性
	 */
	public String getMycoursemoney()
	{
		return this.mycoursemoney;
	}	   

	/**
	 *设置"项目"属性
	 *@param mycourseproject 实体的Mycourseproject属性
	 */
	public void setMycourseproject(String mycourseproject)
	{
		this.mycourseproject = mycourseproject;
	}
	
	/**
	 *获取"项目"属性
	 */
	public String getMycourseproject()
	{
		return this.mycourseproject;
	}	   

	/**
	 *设置"备注"属性
	 *@param mycoursedetail 实体的Mycoursedetail属性
	 */
	public void setMycoursedetail(String mycoursedetail)
	{
		this.mycoursedetail = mycoursedetail;
	}
	
	/**
	 *获取"备注"属性
	 */
	public String getMycoursedetail()
	{
		return this.mycoursedetail;
	}	   

	/**
	 *设置"分类"属性
	 *@param mycoursetype 实体的Mycoursetype属性
	 */
	public void setMycoursetype(String mycoursetype)
	{
		this.mycoursetype = mycoursetype;
	}
	
	/**
	 *获取"分类"属性
	 */
	public String getMycoursetype()
	{
		return this.mycoursetype;
	}	   

	/**
	 *设置"开始"属性
	 *@param mycoursebegin 实体的Mycoursebegin属性
	 */
	public void setMycoursebegin(String mycoursebegin)
	{
		this.mycoursebegin = mycoursebegin;
	}
	
	/**
	 *获取"开始"属性
	 */
	public String getMycoursebegin()
	{
		return this.mycoursebegin;
	}	   

	/**
	 *设置"结束"属性
	 *@param mycourseend 实体的Mycourseend属性
	 */
	public void setMycourseend(String mycourseend)
	{
		this.mycourseend = mycourseend;
	}
	
	/**
	 *获取"结束"属性
	 */
	public String getMycourseend()
	{
		return this.mycourseend;
	}	   

	/**
	 *设置"创建时间"属性
	 *@param mycourseinswhen 实体的Mycourseinswhen属性
	 */
	public void setMycourseinswhen(String mycourseinswhen)
	{
		this.mycourseinswhen = mycourseinswhen;
	}
	
	/**
	 *获取"创建时间"属性
	 */
	public String getMycourseinswhen()
	{
		return this.mycourseinswhen;
	}	   

	/**
	 *设置"更新时间"属性
	 *@param mycourseupdwhen 实体的Mycourseupdwhen属性
	 */
	public void setMycourseupdwhen(String mycourseupdwhen)
	{
		this.mycourseupdwhen = mycourseupdwhen;
	}
	
	/**
	 *获取"更新时间"属性
	 */
	public String getMycourseupdwhen()
	{
		return this.mycourseupdwhen;
	}	   
	public Mycourse() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Mycourse(
		String mycourseid
	 	,String mycoursecustomer
	 	,String mycoursename
	 	,String mycoursestadium
	 	,String mycoursecoach
	 	,String mycoursecoachname
	 	,String mycoursenum
	 	,String mycoursenuma
	 	,String mycourseprice
	 	,String mycoursedikou
	 	,String mycoursemoney
	 	,String mycourseproject
	 	,String mycoursedetail
	 	,String mycoursetype
	 	,String mycoursebegin
	 	,String mycourseend
	 	,String mycourseinswhen
	 	,String mycourseupdwhen
		 ){
		super();
		this.mycourseid = mycourseid;
	 	this.mycoursecustomer = mycoursecustomer;
	 	this.mycoursename = mycoursename;
	 	this.mycoursestadium = mycoursestadium;
	 	this.mycoursecoach = mycoursecoach;
	 	this.mycoursecoachname = mycoursecoachname;
	 	this.mycoursenum = mycoursenum;
	 	this.mycoursenuma = mycoursenuma;
	 	this.mycourseprice = mycourseprice;
	 	this.mycoursedikou = mycoursedikou;
	 	this.mycoursemoney = mycoursemoney;
	 	this.mycourseproject = mycourseproject;
	 	this.mycoursedetail = mycoursedetail;
	 	this.mycoursetype = mycoursetype;
	 	this.mycoursebegin = mycoursebegin;
	 	this.mycourseend = mycourseend;
	 	this.mycourseinswhen = mycourseinswhen;
	 	this.mycourseupdwhen = mycourseupdwhen;
	}
}

