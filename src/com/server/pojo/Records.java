package com.server.pojo;

import java.sql.Timestamp;
import java.math.BigDecimal;
/**
 * records 实体类
 *@author ZhangRuiLong
 */
public class Records
{
   /**
    * ID,主键
    */
   private String recordsid; 
   /**
    * 客户
    */
   private String recordscustomer;   
   /**
    * 会籍
    */
   private String recordsemp;   
   /**
    * 步骤
    */
   private String recordstitle;   
   /**
    * 内容
    */
   private String recordsdetail;   
   /**
    * 创建时间
    */
   private String recordsinswhen;   
   /**
    * 创建人
    */
   private String recordsinswho;   
    //属性方法	    
     /**
	 *设置主键"ID"属性
	 *@param recordsid 实体的Recordsid属性
	 */
	public void setRecordsid(String recordsid)
	{
		this.recordsid = recordsid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getRecordsid()
	{
		return this.recordsid;
	}

	/**
	 *设置"客户"属性
	 *@param recordscustomer 实体的Recordscustomer属性
	 */
	public void setRecordscustomer(String recordscustomer)
	{
		this.recordscustomer = recordscustomer;
	}
	
	/**
	 *获取"客户"属性
	 */
	public String getRecordscustomer()
	{
		return this.recordscustomer;
	}	   

	/**
	 *设置"会籍"属性
	 *@param recordsemp 实体的Recordsemp属性
	 */
	public void setRecordsemp(String recordsemp)
	{
		this.recordsemp = recordsemp;
	}
	
	/**
	 *获取"会籍"属性
	 */
	public String getRecordsemp()
	{
		return this.recordsemp;
	}	   

	/**
	 *设置"步骤"属性
	 *@param recordstitle 实体的Recordstitle属性
	 */
	public void setRecordstitle(String recordstitle)
	{
		this.recordstitle = recordstitle;
	}
	
	/**
	 *获取"步骤"属性
	 */
	public String getRecordstitle()
	{
		return this.recordstitle;
	}	   

	/**
	 *设置"内容"属性
	 *@param recordsdetail 实体的Recordsdetail属性
	 */
	public void setRecordsdetail(String recordsdetail)
	{
		this.recordsdetail = recordsdetail;
	}
	
	/**
	 *获取"内容"属性
	 */
	public String getRecordsdetail()
	{
		return this.recordsdetail;
	}	   

	/**
	 *设置"创建时间"属性
	 *@param recordsinswhen 实体的Recordsinswhen属性
	 */
	public void setRecordsinswhen(String recordsinswhen)
	{
		this.recordsinswhen = recordsinswhen;
	}
	
	/**
	 *获取"创建时间"属性
	 */
	public String getRecordsinswhen()
	{
		return this.recordsinswhen;
	}	   

	/**
	 *设置"创建人"属性
	 *@param recordsinswho 实体的Recordsinswho属性
	 */
	public void setRecordsinswho(String recordsinswho)
	{
		this.recordsinswho = recordsinswho;
	}
	
	/**
	 *获取"创建人"属性
	 */
	public String getRecordsinswho()
	{
		return this.recordsinswho;
	}	   
	public Records() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Records(
		String recordsid
	 	,String recordscustomer
	 	,String recordsemp
	 	,String recordstitle
	 	,String recordsdetail
	 	,String recordsinswhen
	 	,String recordsinswho
		 ){
		super();
		this.recordsid = recordsid;
	 	this.recordscustomer = recordscustomer;
	 	this.recordsemp = recordsemp;
	 	this.recordstitle = recordstitle;
	 	this.recordsdetail = recordsdetail;
	 	this.recordsinswhen = recordsinswhen;
	 	this.recordsinswho = recordsinswho;
	}
}

