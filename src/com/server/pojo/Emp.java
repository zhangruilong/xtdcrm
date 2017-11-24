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
    * 场馆
    */
   private String empstadium;   
   /**
    * 工号
    */
   private String empcode;   
   /**
    * 系统账号
    */
   private String empsysname;   
   /**
    * 姓名
    */
   private String empname;   
   /**
    * 职位
    */
   private String empposition;   
   /**
    * 上级
    */
   private String emppposition;   
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
	 *设置"场馆"属性
	 *@param empstadium 实体的Empstadium属性
	 */
	public void setEmpstadium(String empstadium)
	{
		this.empstadium = empstadium;
	}
	
	/**
	 *获取"场馆"属性
	 */
	public String getEmpstadium()
	{
		return this.empstadium;
	}	   

	/**
	 *设置"工号"属性
	 *@param empcode 实体的Empcode属性
	 */
	public void setEmpcode(String empcode)
	{
		this.empcode = empcode;
	}
	
	/**
	 *获取"工号"属性
	 */
	public String getEmpcode()
	{
		return this.empcode;
	}	   

	/**
	 *设置"系统账号"属性
	 *@param empsysname 实体的Empsysname属性
	 */
	public void setEmpsysname(String empsysname)
	{
		this.empsysname = empsysname;
	}
	
	/**
	 *获取"系统账号"属性
	 */
	public String getEmpsysname()
	{
		return this.empsysname;
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
	 *设置"职位"属性
	 *@param empposition 实体的Empposition属性
	 */
	public void setEmpposition(String empposition)
	{
		this.empposition = empposition;
	}
	
	/**
	 *获取"职位"属性
	 */
	public String getEmpposition()
	{
		return this.empposition;
	}	   

	/**
	 *设置"上级"属性
	 *@param emppposition 实体的Emppposition属性
	 */
	public void setEmppposition(String emppposition)
	{
		this.emppposition = emppposition;
	}
	
	/**
	 *获取"上级"属性
	 */
	public String getEmppposition()
	{
		return this.emppposition;
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
	public Emp() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Emp(
		String empid
	 	,String empstadium
	 	,String empcode
	 	,String empsysname
	 	,String empname
	 	,String empposition
	 	,String emppposition
	 	,String empage
	 	,String empsex
	 	,String empphone
	 	,String empemail
	 	,String empimage
	 	,String empdetail
	 	,String empstatue
	 	,String empinswhen
	 	,String empinswho
		 ){
		super();
		this.empid = empid;
	 	this.empstadium = empstadium;
	 	this.empcode = empcode;
	 	this.empsysname = empsysname;
	 	this.empname = empname;
	 	this.empposition = empposition;
	 	this.emppposition = emppposition;
	 	this.empage = empage;
	 	this.empsex = empsex;
	 	this.empphone = empphone;
	 	this.empemail = empemail;
	 	this.empimage = empimage;
	 	this.empdetail = empdetail;
	 	this.empstatue = empstatue;
	 	this.empinswhen = empinswhen;
	 	this.empinswho = empinswho;
	}
}

