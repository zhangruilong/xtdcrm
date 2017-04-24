package com.server.pojo;

import java.sql.Timestamp;
import java.math.BigDecimal;
/**
 * notes 实体类
 *@author ZhangRuiLong
 */
public class Notes
{
   /**
    * ID,主键
    */
   private String notesid; 
   /**
    * 会员
    */
   private String notescustomer;   
   /**
    * 会员卡
    */
   private String notescard;   
   /**
    * 场馆
    */
   private String notesstadium;   
   /**
    * 教练
    */
   private String notescoach;   
   /**
    * 课程
    */
   private String notescourse;   
   /**
    * 事件
    */
   private String notesname;   
   /**
    * 详细
    */
   private String notesdetail;   
   /**
    * 分类
    */
   private String notestype;   
   /**
    * 创建时间
    */
   private String notsinswhen;   
   /**
    * 创建人
    */
   private String notesinswho;   
    //属性方法	    
     /**
	 *设置主键"ID"属性
	 *@param notesid 实体的Notesid属性
	 */
	public void setNotesid(String notesid)
	{
		this.notesid = notesid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getNotesid()
	{
		return this.notesid;
	}

	/**
	 *设置"会员"属性
	 *@param notescustomer 实体的Notescustomer属性
	 */
	public void setNotescustomer(String notescustomer)
	{
		this.notescustomer = notescustomer;
	}
	
	/**
	 *获取"会员"属性
	 */
	public String getNotescustomer()
	{
		return this.notescustomer;
	}	   

	/**
	 *设置"会员卡"属性
	 *@param notescard 实体的Notescard属性
	 */
	public void setNotescard(String notescard)
	{
		this.notescard = notescard;
	}
	
	/**
	 *获取"会员卡"属性
	 */
	public String getNotescard()
	{
		return this.notescard;
	}	   

	/**
	 *设置"场馆"属性
	 *@param notesstadium 实体的Notesstadium属性
	 */
	public void setNotesstadium(String notesstadium)
	{
		this.notesstadium = notesstadium;
	}
	
	/**
	 *获取"场馆"属性
	 */
	public String getNotesstadium()
	{
		return this.notesstadium;
	}	   

	/**
	 *设置"教练"属性
	 *@param notescoach 实体的Notescoach属性
	 */
	public void setNotescoach(String notescoach)
	{
		this.notescoach = notescoach;
	}
	
	/**
	 *获取"教练"属性
	 */
	public String getNotescoach()
	{
		return this.notescoach;
	}	   

	/**
	 *设置"课程"属性
	 *@param notescourse 实体的Notescourse属性
	 */
	public void setNotescourse(String notescourse)
	{
		this.notescourse = notescourse;
	}
	
	/**
	 *获取"课程"属性
	 */
	public String getNotescourse()
	{
		return this.notescourse;
	}	   

	/**
	 *设置"事件"属性
	 *@param notesname 实体的Notesname属性
	 */
	public void setNotesname(String notesname)
	{
		this.notesname = notesname;
	}
	
	/**
	 *获取"事件"属性
	 */
	public String getNotesname()
	{
		return this.notesname;
	}	   

	/**
	 *设置"详细"属性
	 *@param notesdetail 实体的Notesdetail属性
	 */
	public void setNotesdetail(String notesdetail)
	{
		this.notesdetail = notesdetail;
	}
	
	/**
	 *获取"详细"属性
	 */
	public String getNotesdetail()
	{
		return this.notesdetail;
	}	   

	/**
	 *设置"分类"属性
	 *@param notestype 实体的Notestype属性
	 */
	public void setNotestype(String notestype)
	{
		this.notestype = notestype;
	}
	
	/**
	 *获取"分类"属性
	 */
	public String getNotestype()
	{
		return this.notestype;
	}	   

	/**
	 *设置"创建时间"属性
	 *@param notsinswhen 实体的Notsinswhen属性
	 */
	public void setNotsinswhen(String notsinswhen)
	{
		this.notsinswhen = notsinswhen;
	}
	
	/**
	 *获取"创建时间"属性
	 */
	public String getNotsinswhen()
	{
		return this.notsinswhen;
	}	   

	/**
	 *设置"创建人"属性
	 *@param notesinswho 实体的Notesinswho属性
	 */
	public void setNotesinswho(String notesinswho)
	{
		this.notesinswho = notesinswho;
	}
	
	/**
	 *获取"创建人"属性
	 */
	public String getNotesinswho()
	{
		return this.notesinswho;
	}	   
	public Notes() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Notes(
		String notesid
	 	,String notescustomer
	 	,String notescard
	 	,String notesstadium
	 	,String notescoach
	 	,String notescourse
	 	,String notesname
	 	,String notesdetail
	 	,String notestype
	 	,String notsinswhen
	 	,String notesinswho
		 ){
		super();
		this.notesid = notesid;
	 	this.notescustomer = notescustomer;
	 	this.notescard = notescard;
	 	this.notesstadium = notesstadium;
	 	this.notescoach = notescoach;
	 	this.notescourse = notescourse;
	 	this.notesname = notesname;
	 	this.notesdetail = notesdetail;
	 	this.notestype = notestype;
	 	this.notsinswhen = notsinswhen;
	 	this.notesinswho = notesinswho;
	}
}

