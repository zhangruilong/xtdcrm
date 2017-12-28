package com.server.pojo;

import java.sql.Timestamp;
import java.math.BigDecimal;
/**
 * compet 实体类
 *@author ZhangRuiLong
 */
public class Compet
{
   /**
    * id,主键
    */
   private String competid; 
   /**
    * 公司
    */
   private String competcompany;   
   /**
    * 产品种类
    */
   private String competproduct;   
   /**
    * 影响
    */
   private String compethappen;   
   /**
    * 备注
    */
   private String competdetail;   
   /**
    * 创建时间
    */
   private String competinswhen;   
   /**
    * 创建人
    */
   private String competinswho;   
    //属性方法	    
     /**
	 *设置主键"id"属性
	 *@param competid 实体的Competid属性
	 */
	public void setCompetid(String competid)
	{
		this.competid = competid;
	}
	
	/**
	 *获取主键"id"属性
	 */
	public String getCompetid()
	{
		return this.competid;
	}

	/**
	 *设置"公司"属性
	 *@param competcompany 实体的Competcompany属性
	 */
	public void setCompetcompany(String competcompany)
	{
		this.competcompany = competcompany;
	}
	
	/**
	 *获取"公司"属性
	 */
	public String getCompetcompany()
	{
		return this.competcompany;
	}	   

	/**
	 *设置"产品种类"属性
	 *@param competproduct 实体的Competproduct属性
	 */
	public void setCompetproduct(String competproduct)
	{
		this.competproduct = competproduct;
	}
	
	/**
	 *获取"产品种类"属性
	 */
	public String getCompetproduct()
	{
		return this.competproduct;
	}	   

	/**
	 *设置"影响"属性
	 *@param compethappen 实体的Compethappen属性
	 */
	public void setCompethappen(String compethappen)
	{
		this.compethappen = compethappen;
	}
	
	/**
	 *获取"影响"属性
	 */
	public String getCompethappen()
	{
		return this.compethappen;
	}	   

	/**
	 *设置"备注"属性
	 *@param competdetail 实体的Competdetail属性
	 */
	public void setCompetdetail(String competdetail)
	{
		this.competdetail = competdetail;
	}
	
	/**
	 *获取"备注"属性
	 */
	public String getCompetdetail()
	{
		return this.competdetail;
	}	   

	/**
	 *设置"创建时间"属性
	 *@param competinswhen 实体的Competinswhen属性
	 */
	public void setCompetinswhen(String competinswhen)
	{
		this.competinswhen = competinswhen;
	}
	
	/**
	 *获取"创建时间"属性
	 */
	public String getCompetinswhen()
	{
		return this.competinswhen;
	}	   

	/**
	 *设置"创建人"属性
	 *@param competinswho 实体的Competinswho属性
	 */
	public void setCompetinswho(String competinswho)
	{
		this.competinswho = competinswho;
	}
	
	/**
	 *获取"创建人"属性
	 */
	public String getCompetinswho()
	{
		return this.competinswho;
	}	   
	public Compet() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Compet(
		String competid
	 	,String competcompany
	 	,String competproduct
	 	,String compethappen
	 	,String competdetail
	 	,String competinswhen
	 	,String competinswho
		 ){
		super();
		this.competid = competid;
	 	this.competcompany = competcompany;
	 	this.competproduct = competproduct;
	 	this.compethappen = compethappen;
	 	this.competdetail = competdetail;
	 	this.competinswhen = competinswhen;
	 	this.competinswho = competinswho;
	}
}

