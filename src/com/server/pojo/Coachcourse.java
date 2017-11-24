package com.server.pojo;

import java.sql.Timestamp;
import java.math.BigDecimal;
/**
 * coachcourse 实体类
 *@author ZhangRuiLong
 */
public class Coachcourse
{
   /**
    * ID,主键
    */
   private String coachcourseid; 
   /**
    * 场馆
    */
   private String coachcoursestadium;   
   /**
    * 名称
    */
   private String coachcoursename;   
   /**
    * 单节价格
    */
   private String coachcoursemoney;   
   /**
    * 项目
    */
   private String coachcourseproject;   
   /**
    * 备注
    */
   private String coachcoursedetail;   
    //属性方法	    
     /**
	 *设置主键"ID"属性
	 *@param coachcourseid 实体的Coachcourseid属性
	 */
	public void setCoachcourseid(String coachcourseid)
	{
		this.coachcourseid = coachcourseid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getCoachcourseid()
	{
		return this.coachcourseid;
	}

	/**
	 *设置"场馆"属性
	 *@param coachcoursestadium 实体的Coachcoursestadium属性
	 */
	public void setCoachcoursestadium(String coachcoursestadium)
	{
		this.coachcoursestadium = coachcoursestadium;
	}
	
	/**
	 *获取"场馆"属性
	 */
	public String getCoachcoursestadium()
	{
		return this.coachcoursestadium;
	}	   

	/**
	 *设置"名称"属性
	 *@param coachcoursename 实体的Coachcoursename属性
	 */
	public void setCoachcoursename(String coachcoursename)
	{
		this.coachcoursename = coachcoursename;
	}
	
	/**
	 *获取"名称"属性
	 */
	public String getCoachcoursename()
	{
		return this.coachcoursename;
	}	   

	/**
	 *设置"单节价格"属性
	 *@param coachcoursemoney 实体的Coachcoursemoney属性
	 */
	public void setCoachcoursemoney(String coachcoursemoney)
	{
		this.coachcoursemoney = coachcoursemoney;
	}
	
	/**
	 *获取"单节价格"属性
	 */
	public String getCoachcoursemoney()
	{
		return this.coachcoursemoney;
	}	   

	/**
	 *设置"项目"属性
	 *@param coachcourseproject 实体的Coachcourseproject属性
	 */
	public void setCoachcourseproject(String coachcourseproject)
	{
		this.coachcourseproject = coachcourseproject;
	}
	
	/**
	 *获取"项目"属性
	 */
	public String getCoachcourseproject()
	{
		return this.coachcourseproject;
	}	   

	/**
	 *设置"备注"属性
	 *@param coachcoursedetail 实体的Coachcoursedetail属性
	 */
	public void setCoachcoursedetail(String coachcoursedetail)
	{
		this.coachcoursedetail = coachcoursedetail;
	}
	
	/**
	 *获取"备注"属性
	 */
	public String getCoachcoursedetail()
	{
		return this.coachcoursedetail;
	}	   
	public Coachcourse() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Coachcourse(
		String coachcourseid
	 	,String coachcoursestadium
	 	,String coachcoursename
	 	,String coachcoursemoney
	 	,String coachcourseproject
	 	,String coachcoursedetail
		 ){
		super();
		this.coachcourseid = coachcourseid;
	 	this.coachcoursestadium = coachcoursestadium;
	 	this.coachcoursename = coachcoursename;
	 	this.coachcoursemoney = coachcoursemoney;
	 	this.coachcourseproject = coachcourseproject;
	 	this.coachcoursedetail = coachcoursedetail;
	}
}

