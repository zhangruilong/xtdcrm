package com.server.pojo;

import java.sql.Timestamp;
import java.math.BigDecimal;
/**
 * notice 实体类
 *@author ZhangRuiLong
 */
public class Notice
{
   /**
    * ID,主键
    */
   private String noticeid; 
   /**
    * 标题
    */
   private String noticetitle;   
   /**
    * 内容
    */
   private String noticedetail;   
   /**
    * 创建时间
    */
   private String noticeinswhen;   
   /**
    * 创建人
    */
   private String noticeinswho;   
    //属性方法	    
     /**
	 *设置主键"ID"属性
	 *@param noticeid 实体的Noticeid属性
	 */
	public void setNoticeid(String noticeid)
	{
		this.noticeid = noticeid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getNoticeid()
	{
		return this.noticeid;
	}

	/**
	 *设置"标题"属性
	 *@param noticetitle 实体的Noticetitle属性
	 */
	public void setNoticetitle(String noticetitle)
	{
		this.noticetitle = noticetitle;
	}
	
	/**
	 *获取"标题"属性
	 */
	public String getNoticetitle()
	{
		return this.noticetitle;
	}	   

	/**
	 *设置"内容"属性
	 *@param noticedetail 实体的Noticedetail属性
	 */
	public void setNoticedetail(String noticedetail)
	{
		this.noticedetail = noticedetail;
	}
	
	/**
	 *获取"内容"属性
	 */
	public String getNoticedetail()
	{
		return this.noticedetail;
	}	   

	/**
	 *设置"创建时间"属性
	 *@param noticeinswhen 实体的Noticeinswhen属性
	 */
	public void setNoticeinswhen(String noticeinswhen)
	{
		this.noticeinswhen = noticeinswhen;
	}
	
	/**
	 *获取"创建时间"属性
	 */
	public String getNoticeinswhen()
	{
		return this.noticeinswhen;
	}	   

	/**
	 *设置"创建人"属性
	 *@param noticeinswho 实体的Noticeinswho属性
	 */
	public void setNoticeinswho(String noticeinswho)
	{
		this.noticeinswho = noticeinswho;
	}
	
	/**
	 *获取"创建人"属性
	 */
	public String getNoticeinswho()
	{
		return this.noticeinswho;
	}	   
	public Notice() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Notice(
		String noticeid
	 	,String noticetitle
	 	,String noticedetail
	 	,String noticeinswhen
	 	,String noticeinswho
		 ){
		super();
		this.noticeid = noticeid;
	 	this.noticetitle = noticetitle;
	 	this.noticedetail = noticedetail;
	 	this.noticeinswhen = noticeinswhen;
	 	this.noticeinswho = noticeinswho;
	}
}

