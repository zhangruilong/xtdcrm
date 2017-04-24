package com.server.pojo;

import java.sql.Timestamp;
import java.math.BigDecimal;
/**
 * appiont 实体类
 *@author ZhangRuiLong
 */
public class Appiont
{
   /**
    * ID,主键
    */
   private String appointid; 
   /**
    * 会员
    */
   private String appointcustomer;   
   /**
    * 会员卡
    */
   private String appointcard;   
   /**
    * 场馆
    */
   private String appointstadium;   
   /**
    * 项目
    */
   private String appointproject;   
   /**
    * 场地
    */
   private String appointplace;   
   /**
    * 场地
    */
   private String appointplacename;   
   /**
    * 课程
    */
   private String appointcourse;   
   /**
    * 
    */
   private String appointcoursename;   
   /**
    * 教练
    */
   private String appointcoach;   
   /**
    * 教练
    */
   private String appointcoachname;   
   /**
    * 预约
    */
   private String appointdate;   
   /**
    * 开始时间
    */
   private String appointbegin;   
   /**
    * 结束时间
    */
   private String appointend;   
   /**
    * 备注
    */
   private String appointdetail;   
   /**
    * 类型
    */
   private String appointtype;   
   /**
    * 状态
    */
   private String appointstatue;   
   /**
    * 创建时间
    */
   private String appointinswhen;   
   /**
    * 更新时间
    */
   private String appointupdwhen;   
    //属性方法	    
     /**
	 *设置主键"ID"属性
	 *@param appointid 实体的Appointid属性
	 */
	public void setAppointid(String appointid)
	{
		this.appointid = appointid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getAppointid()
	{
		return this.appointid;
	}

	/**
	 *设置"会员"属性
	 *@param appointcustomer 实体的Appointcustomer属性
	 */
	public void setAppointcustomer(String appointcustomer)
	{
		this.appointcustomer = appointcustomer;
	}
	
	/**
	 *获取"会员"属性
	 */
	public String getAppointcustomer()
	{
		return this.appointcustomer;
	}	   

	/**
	 *设置"会员卡"属性
	 *@param appointcard 实体的Appointcard属性
	 */
	public void setAppointcard(String appointcard)
	{
		this.appointcard = appointcard;
	}
	
	/**
	 *获取"会员卡"属性
	 */
	public String getAppointcard()
	{
		return this.appointcard;
	}	   

	/**
	 *设置"场馆"属性
	 *@param appointstadium 实体的Appointstadium属性
	 */
	public void setAppointstadium(String appointstadium)
	{
		this.appointstadium = appointstadium;
	}
	
	/**
	 *获取"场馆"属性
	 */
	public String getAppointstadium()
	{
		return this.appointstadium;
	}	   

	/**
	 *设置"项目"属性
	 *@param appointproject 实体的Appointproject属性
	 */
	public void setAppointproject(String appointproject)
	{
		this.appointproject = appointproject;
	}
	
	/**
	 *获取"项目"属性
	 */
	public String getAppointproject()
	{
		return this.appointproject;
	}	   

	/**
	 *设置"场地"属性
	 *@param appointplace 实体的Appointplace属性
	 */
	public void setAppointplace(String appointplace)
	{
		this.appointplace = appointplace;
	}
	
	/**
	 *获取"场地"属性
	 */
	public String getAppointplace()
	{
		return this.appointplace;
	}	   

	/**
	 *设置"场地"属性
	 *@param appointplacename 实体的Appointplacename属性
	 */
	public void setAppointplacename(String appointplacename)
	{
		this.appointplacename = appointplacename;
	}
	
	/**
	 *获取"场地"属性
	 */
	public String getAppointplacename()
	{
		return this.appointplacename;
	}	   

	/**
	 *设置"课程"属性
	 *@param appointcourse 实体的Appointcourse属性
	 */
	public void setAppointcourse(String appointcourse)
	{
		this.appointcourse = appointcourse;
	}
	
	/**
	 *获取"课程"属性
	 */
	public String getAppointcourse()
	{
		return this.appointcourse;
	}	   

	/**
	 *设置""属性
	 *@param appointcoursename 实体的Appointcoursename属性
	 */
	public void setAppointcoursename(String appointcoursename)
	{
		this.appointcoursename = appointcoursename;
	}
	
	/**
	 *获取""属性
	 */
	public String getAppointcoursename()
	{
		return this.appointcoursename;
	}	   

	/**
	 *设置"教练"属性
	 *@param appointcoach 实体的Appointcoach属性
	 */
	public void setAppointcoach(String appointcoach)
	{
		this.appointcoach = appointcoach;
	}
	
	/**
	 *获取"教练"属性
	 */
	public String getAppointcoach()
	{
		return this.appointcoach;
	}	   

	/**
	 *设置"教练"属性
	 *@param appointcoachname 实体的Appointcoachname属性
	 */
	public void setAppointcoachname(String appointcoachname)
	{
		this.appointcoachname = appointcoachname;
	}
	
	/**
	 *获取"教练"属性
	 */
	public String getAppointcoachname()
	{
		return this.appointcoachname;
	}	   

	/**
	 *设置"预约"属性
	 *@param appointdate 实体的Appointdate属性
	 */
	public void setAppointdate(String appointdate)
	{
		this.appointdate = appointdate;
	}
	
	/**
	 *获取"预约"属性
	 */
	public String getAppointdate()
	{
		return this.appointdate;
	}	   

	/**
	 *设置"开始时间"属性
	 *@param appointbegin 实体的Appointbegin属性
	 */
	public void setAppointbegin(String appointbegin)
	{
		this.appointbegin = appointbegin;
	}
	
	/**
	 *获取"开始时间"属性
	 */
	public String getAppointbegin()
	{
		return this.appointbegin;
	}	   

	/**
	 *设置"结束时间"属性
	 *@param appointend 实体的Appointend属性
	 */
	public void setAppointend(String appointend)
	{
		this.appointend = appointend;
	}
	
	/**
	 *获取"结束时间"属性
	 */
	public String getAppointend()
	{
		return this.appointend;
	}	   

	/**
	 *设置"备注"属性
	 *@param appointdetail 实体的Appointdetail属性
	 */
	public void setAppointdetail(String appointdetail)
	{
		this.appointdetail = appointdetail;
	}
	
	/**
	 *获取"备注"属性
	 */
	public String getAppointdetail()
	{
		return this.appointdetail;
	}	   

	/**
	 *设置"类型"属性
	 *@param appointtype 实体的Appointtype属性
	 */
	public void setAppointtype(String appointtype)
	{
		this.appointtype = appointtype;
	}
	
	/**
	 *获取"类型"属性
	 */
	public String getAppointtype()
	{
		return this.appointtype;
	}	   

	/**
	 *设置"状态"属性
	 *@param appointstatue 实体的Appointstatue属性
	 */
	public void setAppointstatue(String appointstatue)
	{
		this.appointstatue = appointstatue;
	}
	
	/**
	 *获取"状态"属性
	 */
	public String getAppointstatue()
	{
		return this.appointstatue;
	}	   

	/**
	 *设置"创建时间"属性
	 *@param appointinswhen 实体的Appointinswhen属性
	 */
	public void setAppointinswhen(String appointinswhen)
	{
		this.appointinswhen = appointinswhen;
	}
	
	/**
	 *获取"创建时间"属性
	 */
	public String getAppointinswhen()
	{
		return this.appointinswhen;
	}	   

	/**
	 *设置"更新时间"属性
	 *@param appointupdwhen 实体的Appointupdwhen属性
	 */
	public void setAppointupdwhen(String appointupdwhen)
	{
		this.appointupdwhen = appointupdwhen;
	}
	
	/**
	 *获取"更新时间"属性
	 */
	public String getAppointupdwhen()
	{
		return this.appointupdwhen;
	}	   
	public Appiont() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Appiont(
		String appointid
	 	,String appointcustomer
	 	,String appointcard
	 	,String appointstadium
	 	,String appointproject
	 	,String appointplace
	 	,String appointplacename
	 	,String appointcourse
	 	,String appointcoursename
	 	,String appointcoach
	 	,String appointcoachname
	 	,String appointdate
	 	,String appointbegin
	 	,String appointend
	 	,String appointdetail
	 	,String appointtype
	 	,String appointstatue
	 	,String appointinswhen
	 	,String appointupdwhen
		 ){
		super();
		this.appointid = appointid;
	 	this.appointcustomer = appointcustomer;
	 	this.appointcard = appointcard;
	 	this.appointstadium = appointstadium;
	 	this.appointproject = appointproject;
	 	this.appointplace = appointplace;
	 	this.appointplacename = appointplacename;
	 	this.appointcourse = appointcourse;
	 	this.appointcoursename = appointcoursename;
	 	this.appointcoach = appointcoach;
	 	this.appointcoachname = appointcoachname;
	 	this.appointdate = appointdate;
	 	this.appointbegin = appointbegin;
	 	this.appointend = appointend;
	 	this.appointdetail = appointdetail;
	 	this.appointtype = appointtype;
	 	this.appointstatue = appointstatue;
	 	this.appointinswhen = appointinswhen;
	 	this.appointupdwhen = appointupdwhen;
	}
}

