package com.server.pojo;

import java.sql.Date;
/**
 * empview 实体类
 *@author ZhangRuiLong
 */
public class Empview
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
   private String createtime;   
   /**
    * 创建人
    */
   private String creator;   
   /**
    * 更新时间
    */
   private String updtime;   
   /**
    * 更新人
    */
   private String updor;   
   /**
    * ID
    */
   private String stadiumid;   
   /**
    * 编码
    */
   private String stadiumcode;   
   /**
    * 名称
    */
   private String stadiumname;   
   /**
    * 地址
    */
   private String stadiumaddress;   
   /**
    * 备注
    */
   private String stadiumdetail;   
   /**
    * 状态
    */
   private String stadiumstatue;   
   /**
    * X坐标
    */
   private String stadiumx;   
   /**
    * Y坐标
    */
   private String stadiumy;   
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
	 *@param createtime 实体的Createtime属性
	 */
	public void setCreatetime(String createtime)
	{
		this.createtime = createtime;
	}
	
	/**
	 *获取"创建时间"属性
	 */
	public String getCreatetime()
	{
		return this.createtime;
	}	   

	/**
	 *设置"创建人"属性
	 *@param creator 实体的Creator属性
	 */
	public void setCreator(String creator)
	{
		this.creator = creator;
	}
	
	/**
	 *获取"创建人"属性
	 */
	public String getCreator()
	{
		return this.creator;
	}	   

	/**
	 *设置"更新时间"属性
	 *@param updtime 实体的Updtime属性
	 */
	public void setUpdtime(String updtime)
	{
		this.updtime = updtime;
	}
	
	/**
	 *获取"更新时间"属性
	 */
	public String getUpdtime()
	{
		return this.updtime;
	}	   

	/**
	 *设置"更新人"属性
	 *@param updor 实体的Updor属性
	 */
	public void setUpdor(String updor)
	{
		this.updor = updor;
	}
	
	/**
	 *获取"更新人"属性
	 */
	public String getUpdor()
	{
		return this.updor;
	}	   

	/**
	 *设置"ID"属性
	 *@param stadiumid 实体的Stadiumid属性
	 */
	public void setStadiumid(String stadiumid)
	{
		this.stadiumid = stadiumid;
	}
	
	/**
	 *获取"ID"属性
	 */
	public String getStadiumid()
	{
		return this.stadiumid;
	}	   

	/**
	 *设置"编码"属性
	 *@param stadiumcode 实体的Stadiumcode属性
	 */
	public void setStadiumcode(String stadiumcode)
	{
		this.stadiumcode = stadiumcode;
	}
	
	/**
	 *获取"编码"属性
	 */
	public String getStadiumcode()
	{
		return this.stadiumcode;
	}	   

	/**
	 *设置"名称"属性
	 *@param stadiumname 实体的Stadiumname属性
	 */
	public void setStadiumname(String stadiumname)
	{
		this.stadiumname = stadiumname;
	}
	
	/**
	 *获取"名称"属性
	 */
	public String getStadiumname()
	{
		return this.stadiumname;
	}	   

	/**
	 *设置"地址"属性
	 *@param stadiumaddress 实体的Stadiumaddress属性
	 */
	public void setStadiumaddress(String stadiumaddress)
	{
		this.stadiumaddress = stadiumaddress;
	}
	
	/**
	 *获取"地址"属性
	 */
	public String getStadiumaddress()
	{
		return this.stadiumaddress;
	}	   

	/**
	 *设置"备注"属性
	 *@param stadiumdetail 实体的Stadiumdetail属性
	 */
	public void setStadiumdetail(String stadiumdetail)
	{
		this.stadiumdetail = stadiumdetail;
	}
	
	/**
	 *获取"备注"属性
	 */
	public String getStadiumdetail()
	{
		return this.stadiumdetail;
	}	   

	/**
	 *设置"状态"属性
	 *@param stadiumstatue 实体的Stadiumstatue属性
	 */
	public void setStadiumstatue(String stadiumstatue)
	{
		this.stadiumstatue = stadiumstatue;
	}
	
	/**
	 *获取"状态"属性
	 */
	public String getStadiumstatue()
	{
		return this.stadiumstatue;
	}	   

	/**
	 *设置"X坐标"属性
	 *@param stadiumx 实体的Stadiumx属性
	 */
	public void setStadiumx(String stadiumx)
	{
		this.stadiumx = stadiumx;
	}
	
	/**
	 *获取"X坐标"属性
	 */
	public String getStadiumx()
	{
		return this.stadiumx;
	}	   

	/**
	 *设置"Y坐标"属性
	 *@param stadiumy 实体的Stadiumy属性
	 */
	public void setStadiumy(String stadiumy)
	{
		this.stadiumy = stadiumy;
	}
	
	/**
	 *获取"Y坐标"属性
	 */
	public String getStadiumy()
	{
		return this.stadiumy;
	}	   
	public Empview() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Empview(
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
	 	,String createtime
	 	,String creator
	 	,String updtime
	 	,String updor
	 	,String stadiumid
	 	,String stadiumcode
	 	,String stadiumname
	 	,String stadiumaddress
	 	,String stadiumdetail
	 	,String stadiumstatue
	 	,String stadiumx
	 	,String stadiumy
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
	 	this.createtime = createtime;
	 	this.creator = creator;
	 	this.updtime = updtime;
	 	this.updor = updor;
	 	this.stadiumid = stadiumid;
	 	this.stadiumcode = stadiumcode;
	 	this.stadiumname = stadiumname;
	 	this.stadiumaddress = stadiumaddress;
	 	this.stadiumdetail = stadiumdetail;
	 	this.stadiumstatue = stadiumstatue;
	 	this.stadiumx = stadiumx;
	 	this.stadiumy = stadiumy;
	}
}

