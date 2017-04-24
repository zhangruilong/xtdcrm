package com.server.pojo;

import java.sql.Timestamp;
import java.math.BigDecimal;
/**
 * tuifei 实体类
 *@author ZhangRuiLong
 */
public class Tuifei
{
   /**
    * ID,主键
    */
   private String tuifeiid; 
   /**
    * 场馆
    */
   private String tuifeistadium;   
   /**
    * 名称
    */
   private String tuifeiname;   
   /**
    * 备注
    */
   private String tuifeidetail;   
   /**
    * 金额
    */
   private String tuifeimoney;   
   /**
    * 创建时间
    */
   private String tuifeiinswhen;   
   /**
    * 创建人
    */
   private String tuifeiinswho;   
    //属性方法	    
     /**
	 *设置主键"ID"属性
	 *@param tuifeiid 实体的Tuifeiid属性
	 */
	public void setTuifeiid(String tuifeiid)
	{
		this.tuifeiid = tuifeiid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getTuifeiid()
	{
		return this.tuifeiid;
	}

	/**
	 *设置"场馆"属性
	 *@param tuifeistadium 实体的Tuifeistadium属性
	 */
	public void setTuifeistadium(String tuifeistadium)
	{
		this.tuifeistadium = tuifeistadium;
	}
	
	/**
	 *获取"场馆"属性
	 */
	public String getTuifeistadium()
	{
		return this.tuifeistadium;
	}	   

	/**
	 *设置"名称"属性
	 *@param tuifeiname 实体的Tuifeiname属性
	 */
	public void setTuifeiname(String tuifeiname)
	{
		this.tuifeiname = tuifeiname;
	}
	
	/**
	 *获取"名称"属性
	 */
	public String getTuifeiname()
	{
		return this.tuifeiname;
	}	   

	/**
	 *设置"备注"属性
	 *@param tuifeidetail 实体的Tuifeidetail属性
	 */
	public void setTuifeidetail(String tuifeidetail)
	{
		this.tuifeidetail = tuifeidetail;
	}
	
	/**
	 *获取"备注"属性
	 */
	public String getTuifeidetail()
	{
		return this.tuifeidetail;
	}	   

	/**
	 *设置"金额"属性
	 *@param tuifeimoney 实体的Tuifeimoney属性
	 */
	public void setTuifeimoney(String tuifeimoney)
	{
		this.tuifeimoney = tuifeimoney;
	}
	
	/**
	 *获取"金额"属性
	 */
	public String getTuifeimoney()
	{
		return this.tuifeimoney;
	}	   

	/**
	 *设置"创建时间"属性
	 *@param tuifeiinswhen 实体的Tuifeiinswhen属性
	 */
	public void setTuifeiinswhen(String tuifeiinswhen)
	{
		this.tuifeiinswhen = tuifeiinswhen;
	}
	
	/**
	 *获取"创建时间"属性
	 */
	public String getTuifeiinswhen()
	{
		return this.tuifeiinswhen;
	}	   

	/**
	 *设置"创建人"属性
	 *@param tuifeiinswho 实体的Tuifeiinswho属性
	 */
	public void setTuifeiinswho(String tuifeiinswho)
	{
		this.tuifeiinswho = tuifeiinswho;
	}
	
	/**
	 *获取"创建人"属性
	 */
	public String getTuifeiinswho()
	{
		return this.tuifeiinswho;
	}	   
	public Tuifei() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Tuifei(
		String tuifeiid
	 	,String tuifeistadium
	 	,String tuifeiname
	 	,String tuifeidetail
	 	,String tuifeimoney
	 	,String tuifeiinswhen
	 	,String tuifeiinswho
		 ){
		super();
		this.tuifeiid = tuifeiid;
	 	this.tuifeistadium = tuifeistadium;
	 	this.tuifeiname = tuifeiname;
	 	this.tuifeidetail = tuifeidetail;
	 	this.tuifeimoney = tuifeimoney;
	 	this.tuifeiinswhen = tuifeiinswhen;
	 	this.tuifeiinswho = tuifeiinswho;
	}
}

