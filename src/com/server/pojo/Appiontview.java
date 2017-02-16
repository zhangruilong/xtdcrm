package com.server.pojo;

import java.sql.Date;
/**
 * appiontview 实体类
 *@author ZhangRuiLong
 */
public class Appiontview
{
   /**
    * ID,主键
    */
   private String appointid; 
   /**
    * 会员ID
    */
   private String appointcustomer;   
   /**
    * 会员卡ID
    */
   private String appointcard;   
   /**
    * 场地ID
    */
   private String appointplace;   
   /**
    * 课程ID
    */
   private String appointcourse;   
   /**
    * 场地
    */
   private String appointplacename;   
   /**
    * 课程
    */
   private String appointcoursename;   
   /**
    * 教练
    */
   private String appointcoachname;   
   /**
    * 项目
    */
   private String appointproject;   
   /**
    * 开始时间
    */
   private String appointbegin;   
   /**
    * 结束时间
    */
   private String appointend;   
   /**
    * 备注
    */
   private String appointdetail;   
   /**
    * 状态
    */
   private String appointstatue;   
   /**
    * 创建时间
    */
   private String createtime;   
   /**
    * 创建人
    */
   private String creator;   
   /**
    * 编码
    */
   private String customercode;   
   /**
    * OPENID
    */
   private String openid;   
   /**
    * 姓名
    */
   private String customername;   
   /**
    * 手机
    */
   private String customerphone;   
   /**
    * 分类
    */
   private String cuscardtype;   
   /**
    * 卡号
    */
   private String cuscardno;   
   /**
    * 备注
    */
   private String cuscarddetail;   
    //属性方法	    
     /**
	 *设置主键"ID"属性
	 *@param appointid 实体的Appointid属性
	 */
	public void setAppointid(String appointid)
	{
		this.appointid = appointid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getAppointid()
	{
		return this.appointid;
	}

	/**
	 *设置"会员ID"属性
	 *@param appointcustomer 实体的Appointcustomer属性
	 */
	public void setAppointcustomer(String appointcustomer)
	{
		this.appointcustomer = appointcustomer;
	}
	
	/**
	 *获取"会员ID"属性
	 */
	public String getAppointcustomer()
	{
		return this.appointcustomer;
	}	   

	/**
	 *设置"会员卡ID"属性
	 *@param appointcard 实体的Appointcard属性
	 */
	public void setAppointcard(String appointcard)
	{
		this.appointcard = appointcard;
	}
	
	/**
	 *获取"会员卡ID"属性
	 */
	public String getAppointcard()
	{
		return this.appointcard;
	}	   

	/**
	 *设置"场地ID"属性
	 *@param appointplace 实体的Appointplace属性
	 */
	public void setAppointplace(String appointplace)
	{
		this.appointplace = appointplace;
	}
	
	/**
	 *获取"场地ID"属性
	 */
	public String getAppointplace()
	{
		return this.appointplace;
	}	   

	/**
	 *设置"课程ID"属性
	 *@param appointcourse 实体的Appointcourse属性
	 */
	public void setAppointcourse(String appointcourse)
	{
		this.appointcourse = appointcourse;
	}
	
	/**
	 *获取"课程ID"属性
	 */
	public String getAppointcourse()
	{
		return this.appointcourse;
	}	   

	/**
	 *设置"场地"属性
	 *@param appointplacename 实体的Appointplacename属性
	 */
	public void setAppointplacename(String appointplacename)
	{
		this.appointplacename = appointplacename;
	}
	
	/**
	 *获取"场地"属性
	 */
	public String getAppointplacename()
	{
		return this.appointplacename;
	}	   

	/**
	 *设置"课程"属性
	 *@param appointcoursename 实体的Appointcoursename属性
	 */
	public void setAppointcoursename(String appointcoursename)
	{
		this.appointcoursename = appointcoursename;
	}
	
	/**
	 *获取"课程"属性
	 */
	public String getAppointcoursename()
	{
		return this.appointcoursename;
	}	   

	/**
	 *设置"教练"属性
	 *@param appointcoachname 实体的Appointcoachname属性
	 */
	public void setAppointcoachname(String appointcoachname)
	{
		this.appointcoachname = appointcoachname;
	}
	
	/**
	 *获取"教练"属性
	 */
	public String getAppointcoachname()
	{
		return this.appointcoachname;
	}	   

	/**
	 *设置"项目"属性
	 *@param appointproject 实体的Appointproject属性
	 */
	public void setAppointproject(String appointproject)
	{
		this.appointproject = appointproject;
	}
	
	/**
	 *获取"项目"属性
	 */
	public String getAppointproject()
	{
		return this.appointproject;
	}	   

	/**
	 *设置"开始时间"属性
	 *@param appointbegin 实体的Appointbegin属性
	 */
	public void setAppointbegin(String appointbegin)
	{
		this.appointbegin = appointbegin;
	}
	
	/**
	 *获取"开始时间"属性
	 */
	public String getAppointbegin()
	{
		return this.appointbegin;
	}	   

	/**
	 *设置"结束时间"属性
	 *@param appointend 实体的Appointend属性
	 */
	public void setAppointend(String appointend)
	{
		this.appointend = appointend;
	}
	
	/**
	 *获取"结束时间"属性
	 */
	public String getAppointend()
	{
		return this.appointend;
	}	   

	/**
	 *设置"备注"属性
	 *@param appointdetail 实体的Appointdetail属性
	 */
	public void setAppointdetail(String appointdetail)
	{
		this.appointdetail = appointdetail;
	}
	
	/**
	 *获取"备注"属性
	 */
	public String getAppointdetail()
	{
		return this.appointdetail;
	}	   

	/**
	 *设置"状态"属性
	 *@param appointstatue 实体的Appointstatue属性
	 */
	public void setAppointstatue(String appointstatue)
	{
		this.appointstatue = appointstatue;
	}
	
	/**
	 *获取"状态"属性
	 */
	public String getAppointstatue()
	{
		return this.appointstatue;
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
	 *设置"编码"属性
	 *@param customercode 实体的Customercode属性
	 */
	public void setCustomercode(String customercode)
	{
		this.customercode = customercode;
	}
	
	/**
	 *获取"编码"属性
	 */
	public String getCustomercode()
	{
		return this.customercode;
	}	   

	/**
	 *设置"OPENID"属性
	 *@param openid 实体的Openid属性
	 */
	public void setOpenid(String openid)
	{
		this.openid = openid;
	}
	
	/**
	 *获取"OPENID"属性
	 */
	public String getOpenid()
	{
		return this.openid;
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
	 *设置"手机"属性
	 *@param customerphone 实体的Customerphone属性
	 */
	public void setCustomerphone(String customerphone)
	{
		this.customerphone = customerphone;
	}
	
	/**
	 *获取"手机"属性
	 */
	public String getCustomerphone()
	{
		return this.customerphone;
	}	   

	/**
	 *设置"分类"属性
	 *@param cuscardtype 实体的Cuscardtype属性
	 */
	public void setCuscardtype(String cuscardtype)
	{
		this.cuscardtype = cuscardtype;
	}
	
	/**
	 *获取"分类"属性
	 */
	public String getCuscardtype()
	{
		return this.cuscardtype;
	}	   

	/**
	 *设置"卡号"属性
	 *@param cuscardno 实体的Cuscardno属性
	 */
	public void setCuscardno(String cuscardno)
	{
		this.cuscardno = cuscardno;
	}
	
	/**
	 *获取"卡号"属性
	 */
	public String getCuscardno()
	{
		return this.cuscardno;
	}	   

	/**
	 *设置"备注"属性
	 *@param cuscarddetail 实体的Cuscarddetail属性
	 */
	public void setCuscarddetail(String cuscarddetail)
	{
		this.cuscarddetail = cuscarddetail;
	}
	
	/**
	 *获取"备注"属性
	 */
	public String getCuscarddetail()
	{
		return this.cuscarddetail;
	}	   
	public Appiontview() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Appiontview(
		String appointid
	 	,String appointcustomer
	 	,String appointcard
	 	,String appointplace
	 	,String appointcourse
	 	,String appointplacename
	 	,String appointcoursename
	 	,String appointcoachname
	 	,String appointproject
	 	,String appointbegin
	 	,String appointend
	 	,String appointdetail
	 	,String appointstatue
	 	,String createtime
	 	,String creator
	 	,String customercode
	 	,String openid
	 	,String customername
	 	,String customerphone
	 	,String cuscardtype
	 	,String cuscardno
	 	,String cuscarddetail
		 ){
		super();
		this.appointid = appointid;
	 	this.appointcustomer = appointcustomer;
	 	this.appointcard = appointcard;
	 	this.appointplace = appointplace;
	 	this.appointcourse = appointcourse;
	 	this.appointplacename = appointplacename;
	 	this.appointcoursename = appointcoursename;
	 	this.appointcoachname = appointcoachname;
	 	this.appointproject = appointproject;
	 	this.appointbegin = appointbegin;
	 	this.appointend = appointend;
	 	this.appointdetail = appointdetail;
	 	this.appointstatue = appointstatue;
	 	this.createtime = createtime;
	 	this.creator = creator;
	 	this.customercode = customercode;
	 	this.openid = openid;
	 	this.customername = customername;
	 	this.customerphone = customerphone;
	 	this.cuscardtype = cuscardtype;
	 	this.cuscardno = cuscardno;
	 	this.cuscarddetail = cuscarddetail;
	}
}

