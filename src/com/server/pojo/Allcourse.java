package com.server.pojo;

import java.sql.Timestamp;
import java.math.BigDecimal;
/**
 * allcourse 实体类
 *@author ZhangRuiLong
 */
public class Allcourse
{
   /**
    * ID,主键
    */
   private String allcourseid; 
   /**
    * 场馆
    */
   private String allcoursestadium;   
   /**
    * 教练
    */
   private String allcoursecoach;   
   /**
    * 教练
    */
   private String allcoursecoachname;   
   /**
    * 课程名
    */
   private String allcoursename;   
   /**
    * 课时
    */
   private String allcoursenum;   
   /**
    * 费用
    */
   private String allcoursemoney;   
   /**
    * 项目
    */
   private String allcourseproject;   
   /**
    * 备注
    */
   private String allcoursedetail;   
   /**
    * 分类
    */
   private String allcoursetype;   
   /**
    * 开始
    */
   private String allcoursebegin;   
   /**
    * 结束
    */
   private String allcourseend;   
    //属性方法	    
     /**
	 *设置主键"ID"属性
	 *@param allcourseid 实体的Allcourseid属性
	 */
	public void setAllcourseid(String allcourseid)
	{
		this.allcourseid = allcourseid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getAllcourseid()
	{
		return this.allcourseid;
	}

	/**
	 *设置"场馆"属性
	 *@param allcoursestadium 实体的Allcoursestadium属性
	 */
	public void setAllcoursestadium(String allcoursestadium)
	{
		this.allcoursestadium = allcoursestadium;
	}
	
	/**
	 *获取"场馆"属性
	 */
	public String getAllcoursestadium()
	{
		return this.allcoursestadium;
	}	   

	/**
	 *设置"教练"属性
	 *@param allcoursecoach 实体的Allcoursecoach属性
	 */
	public void setAllcoursecoach(String allcoursecoach)
	{
		this.allcoursecoach = allcoursecoach;
	}
	
	/**
	 *获取"教练"属性
	 */
	public String getAllcoursecoach()
	{
		return this.allcoursecoach;
	}	   

	/**
	 *设置"教练"属性
	 *@param allcoursecoachname 实体的Allcoursecoachname属性
	 */
	public void setAllcoursecoachname(String allcoursecoachname)
	{
		this.allcoursecoachname = allcoursecoachname;
	}
	
	/**
	 *获取"教练"属性
	 */
	public String getAllcoursecoachname()
	{
		return this.allcoursecoachname;
	}	   

	/**
	 *设置"课程名"属性
	 *@param allcoursename 实体的Allcoursename属性
	 */
	public void setAllcoursename(String allcoursename)
	{
		this.allcoursename = allcoursename;
	}
	
	/**
	 *获取"课程名"属性
	 */
	public String getAllcoursename()
	{
		return this.allcoursename;
	}	   

	/**
	 *设置"课时"属性
	 *@param allcoursenum 实体的Allcoursenum属性
	 */
	public void setAllcoursenum(String allcoursenum)
	{
		this.allcoursenum = allcoursenum;
	}
	
	/**
	 *获取"课时"属性
	 */
	public String getAllcoursenum()
	{
		return this.allcoursenum;
	}	   

	/**
	 *设置"费用"属性
	 *@param allcoursemoney 实体的Allcoursemoney属性
	 */
	public void setAllcoursemoney(String allcoursemoney)
	{
		this.allcoursemoney = allcoursemoney;
	}
	
	/**
	 *获取"费用"属性
	 */
	public String getAllcoursemoney()
	{
		return this.allcoursemoney;
	}	   

	/**
	 *设置"项目"属性
	 *@param allcourseproject 实体的Allcourseproject属性
	 */
	public void setAllcourseproject(String allcourseproject)
	{
		this.allcourseproject = allcourseproject;
	}
	
	/**
	 *获取"项目"属性
	 */
	public String getAllcourseproject()
	{
		return this.allcourseproject;
	}	   

	/**
	 *设置"备注"属性
	 *@param allcoursedetail 实体的Allcoursedetail属性
	 */
	public void setAllcoursedetail(String allcoursedetail)
	{
		this.allcoursedetail = allcoursedetail;
	}
	
	/**
	 *获取"备注"属性
	 */
	public String getAllcoursedetail()
	{
		return this.allcoursedetail;
	}	   

	/**
	 *设置"分类"属性
	 *@param allcoursetype 实体的Allcoursetype属性
	 */
	public void setAllcoursetype(String allcoursetype)
	{
		this.allcoursetype = allcoursetype;
	}
	
	/**
	 *获取"分类"属性
	 */
	public String getAllcoursetype()
	{
		return this.allcoursetype;
	}	   

	/**
	 *设置"开始"属性
	 *@param allcoursebegin 实体的Allcoursebegin属性
	 */
	public void setAllcoursebegin(String allcoursebegin)
	{
		this.allcoursebegin = allcoursebegin;
	}
	
	/**
	 *获取"开始"属性
	 */
	public String getAllcoursebegin()
	{
		return this.allcoursebegin;
	}	   

	/**
	 *设置"结束"属性
	 *@param allcourseend 实体的Allcourseend属性
	 */
	public void setAllcourseend(String allcourseend)
	{
		this.allcourseend = allcourseend;
	}
	
	/**
	 *获取"结束"属性
	 */
	public String getAllcourseend()
	{
		return this.allcourseend;
	}	   
	public Allcourse() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Allcourse(
		String allcourseid
	 	,String allcoursestadium
	 	,String allcoursecoach
	 	,String allcoursecoachname
	 	,String allcoursename
	 	,String allcoursenum
	 	,String allcoursemoney
	 	,String allcourseproject
	 	,String allcoursedetail
	 	,String allcoursetype
	 	,String allcoursebegin
	 	,String allcourseend
		 ){
		super();
		this.allcourseid = allcourseid;
	 	this.allcoursestadium = allcoursestadium;
	 	this.allcoursecoach = allcoursecoach;
	 	this.allcoursecoachname = allcoursecoachname;
	 	this.allcoursename = allcoursename;
	 	this.allcoursenum = allcoursenum;
	 	this.allcoursemoney = allcoursemoney;
	 	this.allcourseproject = allcourseproject;
	 	this.allcoursedetail = allcoursedetail;
	 	this.allcoursetype = allcoursetype;
	 	this.allcoursebegin = allcoursebegin;
	 	this.allcourseend = allcourseend;
	}
}

