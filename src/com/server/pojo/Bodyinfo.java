package com.server.pojo;

import java.sql.Timestamp;
import java.math.BigDecimal;
/**
 * bodyinfo 实体类
 *@author ZhangRuiLong
 */
public class Bodyinfo
{
   /**
    * ID,主键
    */
   private String bodyinfoid; 
   /**
    * 姓名
    */
   private String bodyinfoname;   
   /**
    * 手机
    */
   private String bodyinfophone;   
   /**
    * 身高
    */
   private String bodyinfohight;   
   /**
    * 体重
    */
   private String bodyinfoweight;   
   /**
    * 身体质量参数
    */
   private String bodyinfobmi;   
   /**
    * 骨骼肌
    */
   private String bodyinfoggj;   
   /**
    * 脂肪
    */
   private String bodyinfozf;   
   /**
    * 腰臀脂肪比
    */
   private String bodyinfoytzfb;   
   /**
    * 血糖
    */
   private String bodyinfoxt;   
   /**
    * 血脂
    */
   private String bodyinfoxz;   
   /**
    * 血压
    */
   private String bodyinfoxy;   
   /**
    * 创建时间
    */
   private String bodyinfoinswhen;   
   /**
    * 创建人
    */
   private String bodyinfoinswho;   
    //属性方法	    
     /**
	 *设置主键"ID"属性
	 *@param bodyinfoid 实体的Bodyinfoid属性
	 */
	public void setBodyinfoid(String bodyinfoid)
	{
		this.bodyinfoid = bodyinfoid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getBodyinfoid()
	{
		return this.bodyinfoid;
	}

	/**
	 *设置"姓名"属性
	 *@param bodyinfoname 实体的Bodyinfoname属性
	 */
	public void setBodyinfoname(String bodyinfoname)
	{
		this.bodyinfoname = bodyinfoname;
	}
	
	/**
	 *获取"姓名"属性
	 */
	public String getBodyinfoname()
	{
		return this.bodyinfoname;
	}	   

	/**
	 *设置"手机"属性
	 *@param bodyinfophone 实体的Bodyinfophone属性
	 */
	public void setBodyinfophone(String bodyinfophone)
	{
		this.bodyinfophone = bodyinfophone;
	}
	
	/**
	 *获取"手机"属性
	 */
	public String getBodyinfophone()
	{
		return this.bodyinfophone;
	}	   

	/**
	 *设置"身高"属性
	 *@param bodyinfohight 实体的Bodyinfohight属性
	 */
	public void setBodyinfohight(String bodyinfohight)
	{
		this.bodyinfohight = bodyinfohight;
	}
	
	/**
	 *获取"身高"属性
	 */
	public String getBodyinfohight()
	{
		return this.bodyinfohight;
	}	   

	/**
	 *设置"体重"属性
	 *@param bodyinfoweight 实体的Bodyinfoweight属性
	 */
	public void setBodyinfoweight(String bodyinfoweight)
	{
		this.bodyinfoweight = bodyinfoweight;
	}
	
	/**
	 *获取"体重"属性
	 */
	public String getBodyinfoweight()
	{
		return this.bodyinfoweight;
	}	   

	/**
	 *设置"身体质量参数"属性
	 *@param bodyinfobmi 实体的Bodyinfobmi属性
	 */
	public void setBodyinfobmi(String bodyinfobmi)
	{
		this.bodyinfobmi = bodyinfobmi;
	}
	
	/**
	 *获取"身体质量参数"属性
	 */
	public String getBodyinfobmi()
	{
		return this.bodyinfobmi;
	}	   

	/**
	 *设置"骨骼肌"属性
	 *@param bodyinfoggj 实体的Bodyinfoggj属性
	 */
	public void setBodyinfoggj(String bodyinfoggj)
	{
		this.bodyinfoggj = bodyinfoggj;
	}
	
	/**
	 *获取"骨骼肌"属性
	 */
	public String getBodyinfoggj()
	{
		return this.bodyinfoggj;
	}	   

	/**
	 *设置"脂肪"属性
	 *@param bodyinfozf 实体的Bodyinfozf属性
	 */
	public void setBodyinfozf(String bodyinfozf)
	{
		this.bodyinfozf = bodyinfozf;
	}
	
	/**
	 *获取"脂肪"属性
	 */
	public String getBodyinfozf()
	{
		return this.bodyinfozf;
	}	   

	/**
	 *设置"腰臀脂肪比"属性
	 *@param bodyinfoytzfb 实体的Bodyinfoytzfb属性
	 */
	public void setBodyinfoytzfb(String bodyinfoytzfb)
	{
		this.bodyinfoytzfb = bodyinfoytzfb;
	}
	
	/**
	 *获取"腰臀脂肪比"属性
	 */
	public String getBodyinfoytzfb()
	{
		return this.bodyinfoytzfb;
	}	   

	/**
	 *设置"血糖"属性
	 *@param bodyinfoxt 实体的Bodyinfoxt属性
	 */
	public void setBodyinfoxt(String bodyinfoxt)
	{
		this.bodyinfoxt = bodyinfoxt;
	}
	
	/**
	 *获取"血糖"属性
	 */
	public String getBodyinfoxt()
	{
		return this.bodyinfoxt;
	}	   

	/**
	 *设置"血脂"属性
	 *@param bodyinfoxz 实体的Bodyinfoxz属性
	 */
	public void setBodyinfoxz(String bodyinfoxz)
	{
		this.bodyinfoxz = bodyinfoxz;
	}
	
	/**
	 *获取"血脂"属性
	 */
	public String getBodyinfoxz()
	{
		return this.bodyinfoxz;
	}	   

	/**
	 *设置"血压"属性
	 *@param bodyinfoxy 实体的Bodyinfoxy属性
	 */
	public void setBodyinfoxy(String bodyinfoxy)
	{
		this.bodyinfoxy = bodyinfoxy;
	}
	
	/**
	 *获取"血压"属性
	 */
	public String getBodyinfoxy()
	{
		return this.bodyinfoxy;
	}	   

	/**
	 *设置"创建时间"属性
	 *@param bodyinfoinswhen 实体的Bodyinfoinswhen属性
	 */
	public void setBodyinfoinswhen(String bodyinfoinswhen)
	{
		this.bodyinfoinswhen = bodyinfoinswhen;
	}
	
	/**
	 *获取"创建时间"属性
	 */
	public String getBodyinfoinswhen()
	{
		return this.bodyinfoinswhen;
	}	   

	/**
	 *设置"创建人"属性
	 *@param bodyinfoinswho 实体的Bodyinfoinswho属性
	 */
	public void setBodyinfoinswho(String bodyinfoinswho)
	{
		this.bodyinfoinswho = bodyinfoinswho;
	}
	
	/**
	 *获取"创建人"属性
	 */
	public String getBodyinfoinswho()
	{
		return this.bodyinfoinswho;
	}	   
	public Bodyinfo() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Bodyinfo(
		String bodyinfoid
	 	,String bodyinfoname
	 	,String bodyinfophone
	 	,String bodyinfohight
	 	,String bodyinfoweight
	 	,String bodyinfobmi
	 	,String bodyinfoggj
	 	,String bodyinfozf
	 	,String bodyinfoytzfb
	 	,String bodyinfoxt
	 	,String bodyinfoxz
	 	,String bodyinfoxy
	 	,String bodyinfoinswhen
	 	,String bodyinfoinswho
		 ){
		super();
		this.bodyinfoid = bodyinfoid;
	 	this.bodyinfoname = bodyinfoname;
	 	this.bodyinfophone = bodyinfophone;
	 	this.bodyinfohight = bodyinfohight;
	 	this.bodyinfoweight = bodyinfoweight;
	 	this.bodyinfobmi = bodyinfobmi;
	 	this.bodyinfoggj = bodyinfoggj;
	 	this.bodyinfozf = bodyinfozf;
	 	this.bodyinfoytzfb = bodyinfoytzfb;
	 	this.bodyinfoxt = bodyinfoxt;
	 	this.bodyinfoxz = bodyinfoxz;
	 	this.bodyinfoxy = bodyinfoxy;
	 	this.bodyinfoinswhen = bodyinfoinswhen;
	 	this.bodyinfoinswho = bodyinfoinswho;
	}
}

