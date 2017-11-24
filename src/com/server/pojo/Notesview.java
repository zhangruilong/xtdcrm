package com.server.pojo;

import java.sql.Timestamp;
import java.math.BigDecimal;
/**
 * notesview 实体类
 *@author ZhangRuiLong
 */
public class Notesview
{
   /**
    * ID,主键
    */
   private String notesid; 
   /**
    * 姓名
    */
   private String customername;   
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
   private String notesinswhen;   
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
	 *设置"姓名"属性
	 *@param customername 实体的Customername属性
	 */
	public void setCustomername(String customername)
	{
		this.customername = customername;
	}
	
	/**
	 *获取"姓名"属性
	 */
	public String getCustomername()
	{
		return this.customername;
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
	 *@param notesinswhen 实体的Notesinswhen属性
	 */
	public void setNotesinswhen(String notesinswhen)
	{
		this.notesinswhen = notesinswhen;
	}
	
	/**
	 *获取"创建时间"属性
	 */
	public String getNotesinswhen()
	{
		return this.notesinswhen;
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
	public Notesview() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Notesview(
		String notesid
	 	,String customername
	 	,String notescustomer
	 	,String notescard
	 	,String notesstadium
	 	,String notesname
	 	,String notesdetail
	 	,String notestype
	 	,String notesinswhen
	 	,String notesinswho
		 ){
		super();
		this.notesid = notesid;
	 	this.customername = customername;
	 	this.notescustomer = notescustomer;
	 	this.notescard = notescard;
	 	this.notesstadium = notesstadium;
	 	this.notesname = notesname;
	 	this.notesdetail = notesdetail;
	 	this.notestype = notestype;
	 	this.notesinswhen = notesinswhen;
	 	this.notesinswho = notesinswho;
	}
}

