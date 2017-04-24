package com.server.pojo;

import java.sql.Timestamp;
import java.math.BigDecimal;
/**
 * emp 实体类
 *@author ZhangRuiLong
 */
public class Emp
{
   /**
    * ID,主键
    */
   private String empid; 
   /**
    * 场馆ID
    */
   private String empstadium;   
   /**
    * 编码
    */
   private String empcode;   
   /**
    * 姓名
    */
   private String empname;   
   /**
    * 年龄
    */
   private String empage;   
   /**
    * 性别
    */
   private String empsex;   
   /**
    * 手机
    */
   private String empphone;   
   /**
    * 邮箱
    */
   private String empemail;   
   /**
    * 照片
    */
   private String empimage;   
   /**
    * 地址
    */
   private String empaddress;   
   /**
    * 备注
    */
   private String empdetail;   
   /**
    * 状态
    */
   private String empstatue;   
   /**
    * 创建时间
    */
   private String empinswhen;   
   /**
    * 创建人
    */
   private String empinswho;   
   /**
    * 更新时间
    */
   private String empupdwhen;   
   /**
    * 更新人
    */
   private String empupdwho;   
    //属性方法	    
     /**
	 *设置主键"ID"属性
	 *@param empid 实体的Empid属性
	 */
	public void setEmpid(String empid)
	{
		this.empid = empid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getEmpid()
	{
		return this.empid;
	}

	/**
	 *设置"场馆ID"属性
	 *@param empstadium 实体的Empstadium属性
	 */
	public void setEmpstadium(String empstadium)
	{
		this.empstadium = empstadium;
	}
	
	/**
	 *获取"场馆ID"属性
	 */
	public String getEmpstadium()
	{
		return this.empstadium;
	}	   

	/**
	 *设置"编码"属性
	 *@param empcode 实体的Empcode属性
	 */
	public void setEmpcode(String empcode)
	{
		this.empcode = empcode;
	}
	
	/**
	 *获取"编码"属性
	 */
	public String getEmpcode()
	{
		return this.empcode;
	}	   

	/**
	 *设置"姓名"属性
	 *@param empname 实体的Empname属性
	 */
	public void setEmpname(String empname)
	{
		this.empname = empname;
	}
	
	/**
	 *获取"姓名"属性
	 */
	public String getEmpname()
	{
		return this.empname;
	}	   

	/**
	 *设置"年龄"属性
	 *@param empage 实体的Empage属性
	 */
	public void setEmpage(String empage)
	{
		this.empage = empage;
	}
	
	/**
	 *获取"年龄"属性
	 */
	public String getEmpage()
	{
		return this.empage;
	}	   

	/**
	 *设置"性别"属性
	 *@param empsex 实体的Empsex属性
	 */
	public void setEmpsex(String empsex)
	{
		this.empsex = empsex;
	}
	
	/**
	 *获取"性别"属性
	 */
	public String getEmpsex()
	{
		return this.empsex;
	}	   

	/**
	 *设置"手机"属性
	 *@param empphone 实体的Empphone属性
	 */
	public void setEmpphone(String empphone)
	{
		this.empphone = empphone;
	}
	
	/**
	 *获取"手机"属性
	 */
	public String getEmpphone()
	{
		return this.empphone;
	}	   

	/**
	 *设置"邮箱"属性
	 *@param empemail 实体的Empemail属性
	 */
	public void setEmpemail(String empemail)
	{
		this.empemail = empemail;
	}
	
	/**
	 *获取"邮箱"属性
	 */
	public String getEmpemail()
	{
		return this.empemail;
	}	   

	/**
	 *设置"照片"属性
	 *@param empimage 实体的Empimage属性
	 */
	public void setEmpimage(String empimage)
	{
		this.empimage = empimage;
	}
	
	/**
	 *获取"照片"属性
	 */
	public String getEmpimage()
	{
		return this.empimage;
	}	   

	/**
	 *设置"地址"属性
	 *@param empaddress 实体的Empaddress属性
	 */
	public void setEmpaddress(String empaddress)
	{
		this.empaddress = empaddress;
	}
	
	/**
	 *获取"地址"属性
	 */
	public String getEmpaddress()
	{
		return this.empaddress;
	}	   

	/**
	 *设置"备注"属性
	 *@param empdetail 实体的Empdetail属性
	 */
	public void setEmpdetail(String empdetail)
	{
		this.empdetail = empdetail;
	}
	
	/**
	 *获取"备注"属性
	 */
	public String getEmpdetail()
	{
		return this.empdetail;
	}	   

	/**
	 *设置"状态"属性
	 *@param empstatue 实体的Empstatue属性
	 */
	public void setEmpstatue(String empstatue)
	{
		this.empstatue = empstatue;
	}
	
	/**
	 *获取"状态"属性
	 */
	public String getEmpstatue()
	{
		return this.empstatue;
	}	   

	/**
	 *设置"创建时间"属性
	 *@param empinswhen 实体的Empinswhen属性
	 */
	public void setEmpinswhen(String empinswhen)
	{
		this.empinswhen = empinswhen;
	}
	
	/**
	 *获取"创建时间"属性
	 */
	public String getEmpinswhen()
	{
		return this.empinswhen;
	}	   

	/**
	 *设置"创建人"属性
	 *@param empinswho 实体的Empinswho属性
	 */
	public void setEmpinswho(String empinswho)
	{
		this.empinswho = empinswho;
	}
	
	/**
	 *获取"创建人"属性
	 */
	public String getEmpinswho()
	{
		return this.empinswho;
	}	   

	/**
	 *设置"更新时间"属性
	 *@param empupdwhen 实体的Empupdwhen属性
	 */
	public void setEmpupdwhen(String empupdwhen)
	{
		this.empupdwhen = empupdwhen;
	}
	
	/**
	 *获取"更新时间"属性
	 */
	public String getEmpupdwhen()
	{
		return this.empupdwhen;
	}	   

	/**
	 *设置"更新人"属性
	 *@param empupdwho 实体的Empupdwho属性
	 */
	public void setEmpupdwho(String empupdwho)
	{
		this.empupdwho = empupdwho;
	}
	
	/**
	 *获取"更新人"属性
	 */
	public String getEmpupdwho()
	{
		return this.empupdwho;
	}	   
	public Emp() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Emp(
		String empid
	 	,String empstadium
	 	,String empcode
	 	,String empname
	 	,String empage
	 	,String empsex
	 	,String empphone
	 	,String empemail
	 	,String empimage
	 	,String empaddress
	 	,String empdetail
	 	,String empstatue
	 	,String empinswhen
	 	,String empinswho
	 	,String empupdwhen
	 	,String empupdwho
		 ){
		super();
		this.empid = empid;
	 	this.empstadium = empstadium;
	 	this.empcode = empcode;
	 	this.empname = empname;
	 	this.empage = empage;
	 	this.empsex = empsex;
	 	this.empphone = empphone;
	 	this.empemail = empemail;
	 	this.empimage = empimage;
	 	this.empaddress = empaddress;
	 	this.empdetail = empdetail;
	 	this.empstatue = empstatue;
	 	this.empinswhen = empinswhen;
	 	this.empinswho = empinswho;
	 	this.empupdwhen = empupdwhen;
	 	this.empupdwho = empupdwho;
	}
}

