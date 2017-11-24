package com.server.bean;

import java.sql.Timestamp;
import java.util.List;

import com.server.pojo.Place;
import com.server.pojo.Placetime;

import java.math.BigDecimal;
/**
 * placetime 实体类
 *@author ZhangRuiLong
 */
public class PlacetimeBean
{
	private boolean success=true;
	private String msg="操作成功";
	private int total=0;
   /**
    * ID,主键
    */
   private String placetimeid; 
   /**
    * 场馆
    */
   private String placetimestadium;   
   /**
    * 项目
    */
   private String placetimeproject;   
   /**
    * 场地
    */
   private String placetimeplace;   
   /**
    * 场地
    */
   private String placetimeplacename;   
   /**
    * 教练
    */
   private String placetimecoach;   
   /**
    * 教练
    */
   private String placetimecoachname;   
   /**
    * 名称
    */
   private String placetimename;   
   /**
    * 日期
    */
   private String placetimedate;   
   /**
    * 备注
    */
   private String placetimedetail;   
   /**
    * calendarId
    */
   private Integer calendarId;   
   /**
    * 标题
    */
   private String title;   
   /**
    * 开始时间
    */
   private String startDate;   
   /**
    * 结束时间
    */
   private String endDate;   
   /**
    * 备注
    */
   private String description;
   
   private List<Place> root; 
    //属性方法	    
     /**
	 *设置主键"ID"属性
	 *@param placetimeid 实体的Placetimeid属性
	 */
	public void setPlacetimeid(String placetimeid)
	{
		this.placetimeid = placetimeid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getPlacetimeid()
	{
		return this.placetimeid;
	}

	/**
	 *设置"场馆"属性
	 *@param placetimestadium 实体的Placetimestadium属性
	 */
	public void setPlacetimestadium(String placetimestadium)
	{
		this.placetimestadium = placetimestadium;
	}
	
	/**
	 *获取"场馆"属性
	 */
	public String getPlacetimestadium()
	{
		return this.placetimestadium;
	}	   

	/**
	 *设置"项目"属性
	 *@param placetimeproject 实体的Placetimeproject属性
	 */
	public void setPlacetimeproject(String placetimeproject)
	{
		this.placetimeproject = placetimeproject;
	}
	
	/**
	 *获取"项目"属性
	 */
	public String getPlacetimeproject()
	{
		return this.placetimeproject;
	}	   

	/**
	 *设置"场地"属性
	 *@param placetimeplace 实体的Placetimeplace属性
	 */
	public void setPlacetimeplace(String placetimeplace)
	{
		this.placetimeplace = placetimeplace;
	}
	
	/**
	 *获取"场地"属性
	 */
	public String getPlacetimeplace()
	{
		return this.placetimeplace;
	}	   

	/**
	 *设置"场地"属性
	 *@param placetimeplacename 实体的Placetimeplacename属性
	 */
	public void setPlacetimeplacename(String placetimeplacename)
	{
		this.placetimeplacename = placetimeplacename;
	}
	
	/**
	 *获取"场地"属性
	 */
	public String getPlacetimeplacename()
	{
		return this.placetimeplacename;
	}	   

	/**
	 *设置"教练"属性
	 *@param placetimecoach 实体的Placetimecoach属性
	 */
	public void setPlacetimecoach(String placetimecoach)
	{
		this.placetimecoach = placetimecoach;
	}
	
	/**
	 *获取"教练"属性
	 */
	public String getPlacetimecoach()
	{
		return this.placetimecoach;
	}	   

	/**
	 *设置"教练"属性
	 *@param placetimecoachname 实体的Placetimecoachname属性
	 */
	public void setPlacetimecoachname(String placetimecoachname)
	{
		this.placetimecoachname = placetimecoachname;
	}
	
	/**
	 *获取"教练"属性
	 */
	public String getPlacetimecoachname()
	{
		return this.placetimecoachname;
	}	   

	/**
	 *设置"名称"属性
	 *@param placetimename 实体的Placetimename属性
	 */
	public void setPlacetimename(String placetimename)
	{
		this.placetimename = placetimename;
	}
	
	/**
	 *获取"名称"属性
	 */
	public String getPlacetimename()
	{
		return this.placetimename;
	}	   

	/**
	 *设置"日期"属性
	 *@param placetimedate 实体的Placetimedate属性
	 */
	public void setPlacetimedate(String placetimedate)
	{
		this.placetimedate = placetimedate;
	}
	
	/**
	 *获取"日期"属性
	 */
	public String getPlacetimedate()
	{
		return this.placetimedate;
	}	   

	/**
	 *设置"备注"属性
	 *@param placetimedetail 实体的Placetimedetail属性
	 */
	public void setPlacetimedetail(String placetimedetail)
	{
		this.placetimedetail = placetimedetail;
	}
	
	/**
	 *获取"备注"属性
	 */
	public String getPlacetimedetail()
	{
		return this.placetimedetail;
	}	   

	/**
	 *设置"calendarId"属性
	 *@param calendarId 实体的CalendarId属性
	 */
	public void setCalendarId(Integer calendarId)
	{
		this.calendarId = calendarId;
	}
	
	/**
	 *获取"calendarId"属性
	 */
	public Integer getCalendarId()
	{
		return this.calendarId;
	}	   

	/**
	 *设置"标题"属性
	 *@param title 实体的Title属性
	 */
	public void setTitle(String title)
	{
		this.title = title;
	}
	
	/**
	 *获取"标题"属性
	 */
	public String getTitle()
	{
		return this.title;
	}	   

	/**
	 *设置"开始时间"属性
	 *@param startDate 实体的StartDate属性
	 */
	public void setStartDate(String startDate)
	{
		this.startDate = startDate;
	}
	
	/**
	 *获取"开始时间"属性
	 */
	public String getStartDate()
	{
		return this.startDate;
	}	   

	/**
	 *设置"结束时间"属性
	 *@param endDate 实体的EndDate属性
	 */
	public void setEndDate(String endDate)
	{
		this.endDate = endDate;
	}
	
	/**
	 *获取"结束时间"属性
	 */
	public String getEndDate()
	{
		return this.endDate;
	}	   

	/**
	 *设置"备注"属性
	 *@param description 实体的Description属性
	 */
	public void setDescription(String description)
	{
		this.description = description;
	}
	
	/**
	 *获取"备注"属性
	 */
	public String getDescription()
	{
		return this.description;
	}	   
	public PlacetimeBean(Placetime mPlacetime) {
		super();
		// TODO Auto-generated constructor stub
		this.placetimeid = mPlacetime.getPlacetimeid();
	 	this.placetimestadium = mPlacetime.getPlacetimestadium();
	 	this.placetimeproject = mPlacetime.getPlacetimeproject();
	 	this.placetimeplace = mPlacetime.getPlacetimeplace();
	 	this.placetimeplacename = mPlacetime.getPlacetimeplacename();
	 	this.placetimecoach = mPlacetime.getPlacetimecoach();
	 	this.placetimecoachname = mPlacetime.getPlacetimecoachname();
	 	this.placetimename = mPlacetime.getPlacetimename();
	 	this.placetimedate = mPlacetime.getPlacetimedate();
	 	this.placetimedetail = mPlacetime.getPlacetimedetail();
	 	this.calendarId = mPlacetime.getCalendarId();
	 	this.title = mPlacetime.getTitle();
	 	this.startDate = mPlacetime.getStartDate();
	 	this.endDate = mPlacetime.getEndDate();
	 	this.description = mPlacetime.getDescription();
	}
	
	public PlacetimeBean(
		String placetimeid
	 	,String placetimestadium
	 	,String placetimeproject
	 	,String placetimeplace
	 	,String placetimeplacename
	 	,String placetimecoach
	 	,String placetimecoachname
	 	,String placetimename
	 	,String placetimedate
	 	,String placetimedetail
	 	,Integer calendarId
	 	,String title
	 	,String startDate
	 	,String endDate
	 	,String description
		 ){
		super();
		this.placetimeid = placetimeid;
	 	this.placetimestadium = placetimestadium;
	 	this.placetimeproject = placetimeproject;
	 	this.placetimeplace = placetimeplace;
	 	this.placetimeplacename = placetimeplacename;
	 	this.placetimecoach = placetimecoach;
	 	this.placetimecoachname = placetimecoachname;
	 	this.placetimename = placetimename;
	 	this.placetimedate = placetimedate;
	 	this.placetimedetail = placetimedetail;
	 	this.calendarId = calendarId;
	 	this.title = title;
	 	this.startDate = startDate;
	 	this.endDate = endDate;
	 	this.description = description;
	}

	public List<Place> getRoot() {
		return root;
	}

	public void setRoot(List<Place> root) {
		this.root = root;
	}
	
}

