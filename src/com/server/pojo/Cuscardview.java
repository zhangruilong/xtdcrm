package com.server.pojo;

import java.sql.Date;
/**
 * cuscardview 实体类
 *@author ZhangRuiLong
 */
public class Cuscardview
{
   /**
    * ID,主键
    */
   private String cuscardid; 
   /**
    * 会员ID
    */
   private String cuscardcustomer;   
   /**
    * 分类
    */
   private String cuscardtype;   
   /**
    * 卡号
    */
   private String cuscardno;   
   /**
    * 密码
    */
   private String cuscardpsw;   
   /**
    * 有效期开始
    */
   private String cuscardbegin;   
   /**
    * 有效期结束
    */
   private String cuscardend;   
   /**
    * 卡余额
    */
   private Double cuscardmoney;   
   /**
    * 卡总次数
    */
   private Integer cuscardnums;   
   /**
    * 卡余次
    */
   private Integer cuscardtimes;   
   /**
    * 卡积分
    */
   private Integer cuscardint;   
   /**
    * 备注
    */
   private String cuscarddetail;   
   /**
    * 状态
    */
   private String cuscardstatue;   
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
    * 场馆ID
    */
   private String customerstadium;   
   /**
    * 编码
    */
   private String customercode;   
   /**
    * 姓名
    */
   private String customername;   
   /**
    * 手机
    */
   private String customerphone;   
   /**
    * OPENID
    */
   private String openid;   
   /**
    * 性别
    */
   private String customersex;   
   /**
    * 年龄
    */
   private Integer customerage;   
   /**
    * 身份证
    */
   private String customercdcard;   
   /**
    * 家庭住址
    */
   private String customerhome;   
   /**
    * 单位地址
    */
   private String customercompany;   
   /**
    * 生日
    */
   private String customerbirthday;   
   /**
    * 纪念日
    */
   private String customergoodday;   
   /**
    * 邮箱
    */
   private String customeremail;   
   /**
    * 入会途径
    */
   private String customerhow;   
   /**
    * 入会时间
    */
   private String customertime;   
   /**
    * 照片
    */
   private String customerimage;   
   /**
    * 顾问
    */
   private String customeremp;   
   /**
    * 等级
    */
   private String customerlevel;   
   /**
    * 备注
    */
   private String customerdetail;   
   /**
    * 状态
    */
   private String customerstatue;   
    //属性方法	    
     /**
	 *设置主键"ID"属性
	 *@param cuscardid 实体的Cuscardid属性
	 */
	public void setCuscardid(String cuscardid)
	{
		this.cuscardid = cuscardid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getCuscardid()
	{
		return this.cuscardid;
	}

	/**
	 *设置"会员ID"属性
	 *@param cuscardcustomer 实体的Cuscardcustomer属性
	 */
	public void setCuscardcustomer(String cuscardcustomer)
	{
		this.cuscardcustomer = cuscardcustomer;
	}
	
	/**
	 *获取"会员ID"属性
	 */
	public String getCuscardcustomer()
	{
		return this.cuscardcustomer;
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
	 *设置"密码"属性
	 *@param cuscardpsw 实体的Cuscardpsw属性
	 */
	public void setCuscardpsw(String cuscardpsw)
	{
		this.cuscardpsw = cuscardpsw;
	}
	
	/**
	 *获取"密码"属性
	 */
	public String getCuscardpsw()
	{
		return this.cuscardpsw;
	}	   

	/**
	 *设置"有效期开始"属性
	 *@param cuscardbegin 实体的Cuscardbegin属性
	 */
	public void setCuscardbegin(String cuscardbegin)
	{
		this.cuscardbegin = cuscardbegin;
	}
	
	/**
	 *获取"有效期开始"属性
	 */
	public String getCuscardbegin()
	{
		return this.cuscardbegin;
	}	   

	/**
	 *设置"有效期结束"属性
	 *@param cuscardend 实体的Cuscardend属性
	 */
	public void setCuscardend(String cuscardend)
	{
		this.cuscardend = cuscardend;
	}
	
	/**
	 *获取"有效期结束"属性
	 */
	public String getCuscardend()
	{
		return this.cuscardend;
	}	   

	/**
	 *设置"卡余额"属性
	 *@param cuscardmoney 实体的Cuscardmoney属性
	 */
	public void setCuscardmoney(Double cuscardmoney)
	{
		this.cuscardmoney = cuscardmoney;
	}
	
	/**
	 *获取"卡余额"属性
	 */
	public Double getCuscardmoney()
	{
		return this.cuscardmoney;
	}	   

	/**
	 *设置"卡总次数"属性
	 *@param cuscardnums 实体的Cuscardnums属性
	 */
	public void setCuscardnums(Integer cuscardnums)
	{
		this.cuscardnums = cuscardnums;
	}
	
	/**
	 *获取"卡总次数"属性
	 */
	public Integer getCuscardnums()
	{
		return this.cuscardnums;
	}	   

	/**
	 *设置"卡余次"属性
	 *@param cuscardtimes 实体的Cuscardtimes属性
	 */
	public void setCuscardtimes(Integer cuscardtimes)
	{
		this.cuscardtimes = cuscardtimes;
	}
	
	/**
	 *获取"卡余次"属性
	 */
	public Integer getCuscardtimes()
	{
		return this.cuscardtimes;
	}	   

	/**
	 *设置"卡积分"属性
	 *@param cuscardint 实体的Cuscardint属性
	 */
	public void setCuscardint(Integer cuscardint)
	{
		this.cuscardint = cuscardint;
	}
	
	/**
	 *获取"卡积分"属性
	 */
	public Integer getCuscardint()
	{
		return this.cuscardint;
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

	/**
	 *设置"状态"属性
	 *@param cuscardstatue 实体的Cuscardstatue属性
	 */
	public void setCuscardstatue(String cuscardstatue)
	{
		this.cuscardstatue = cuscardstatue;
	}
	
	/**
	 *获取"状态"属性
	 */
	public String getCuscardstatue()
	{
		return this.cuscardstatue;
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
	 *设置"场馆ID"属性
	 *@param customerstadium 实体的Customerstadium属性
	 */
	public void setCustomerstadium(String customerstadium)
	{
		this.customerstadium = customerstadium;
	}
	
	/**
	 *获取"场馆ID"属性
	 */
	public String getCustomerstadium()
	{
		return this.customerstadium;
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
	 *设置"性别"属性
	 *@param customersex 实体的Customersex属性
	 */
	public void setCustomersex(String customersex)
	{
		this.customersex = customersex;
	}
	
	/**
	 *获取"性别"属性
	 */
	public String getCustomersex()
	{
		return this.customersex;
	}	   

	/**
	 *设置"年龄"属性
	 *@param customerage 实体的Customerage属性
	 */
	public void setCustomerage(Integer customerage)
	{
		this.customerage = customerage;
	}
	
	/**
	 *获取"年龄"属性
	 */
	public Integer getCustomerage()
	{
		return this.customerage;
	}	   

	/**
	 *设置"身份证"属性
	 *@param customercdcard 实体的Customercdcard属性
	 */
	public void setCustomercdcard(String customercdcard)
	{
		this.customercdcard = customercdcard;
	}
	
	/**
	 *获取"身份证"属性
	 */
	public String getCustomercdcard()
	{
		return this.customercdcard;
	}	   

	/**
	 *设置"家庭住址"属性
	 *@param customerhome 实体的Customerhome属性
	 */
	public void setCustomerhome(String customerhome)
	{
		this.customerhome = customerhome;
	}
	
	/**
	 *获取"家庭住址"属性
	 */
	public String getCustomerhome()
	{
		return this.customerhome;
	}	   

	/**
	 *设置"单位地址"属性
	 *@param customercompany 实体的Customercompany属性
	 */
	public void setCustomercompany(String customercompany)
	{
		this.customercompany = customercompany;
	}
	
	/**
	 *获取"单位地址"属性
	 */
	public String getCustomercompany()
	{
		return this.customercompany;
	}	   

	/**
	 *设置"生日"属性
	 *@param customerbirthday 实体的Customerbirthday属性
	 */
	public void setCustomerbirthday(String customerbirthday)
	{
		this.customerbirthday = customerbirthday;
	}
	
	/**
	 *获取"生日"属性
	 */
	public String getCustomerbirthday()
	{
		return this.customerbirthday;
	}	   

	/**
	 *设置"纪念日"属性
	 *@param customergoodday 实体的Customergoodday属性
	 */
	public void setCustomergoodday(String customergoodday)
	{
		this.customergoodday = customergoodday;
	}
	
	/**
	 *获取"纪念日"属性
	 */
	public String getCustomergoodday()
	{
		return this.customergoodday;
	}	   

	/**
	 *设置"邮箱"属性
	 *@param customeremail 实体的Customeremail属性
	 */
	public void setCustomeremail(String customeremail)
	{
		this.customeremail = customeremail;
	}
	
	/**
	 *获取"邮箱"属性
	 */
	public String getCustomeremail()
	{
		return this.customeremail;
	}	   

	/**
	 *设置"入会途径"属性
	 *@param customerhow 实体的Customerhow属性
	 */
	public void setCustomerhow(String customerhow)
	{
		this.customerhow = customerhow;
	}
	
	/**
	 *获取"入会途径"属性
	 */
	public String getCustomerhow()
	{
		return this.customerhow;
	}	   

	/**
	 *设置"入会时间"属性
	 *@param customertime 实体的Customertime属性
	 */
	public void setCustomertime(String customertime)
	{
		this.customertime = customertime;
	}
	
	/**
	 *获取"入会时间"属性
	 */
	public String getCustomertime()
	{
		return this.customertime;
	}	   

	/**
	 *设置"照片"属性
	 *@param customerimage 实体的Customerimage属性
	 */
	public void setCustomerimage(String customerimage)
	{
		this.customerimage = customerimage;
	}
	
	/**
	 *获取"照片"属性
	 */
	public String getCustomerimage()
	{
		return this.customerimage;
	}	   

	/**
	 *设置"顾问"属性
	 *@param customeremp 实体的Customeremp属性
	 */
	public void setCustomeremp(String customeremp)
	{
		this.customeremp = customeremp;
	}
	
	/**
	 *获取"顾问"属性
	 */
	public String getCustomeremp()
	{
		return this.customeremp;
	}	   

	/**
	 *设置"等级"属性
	 *@param customerlevel 实体的Customerlevel属性
	 */
	public void setCustomerlevel(String customerlevel)
	{
		this.customerlevel = customerlevel;
	}
	
	/**
	 *获取"等级"属性
	 */
	public String getCustomerlevel()
	{
		return this.customerlevel;
	}	   

	/**
	 *设置"备注"属性
	 *@param customerdetail 实体的Customerdetail属性
	 */
	public void setCustomerdetail(String customerdetail)
	{
		this.customerdetail = customerdetail;
	}
	
	/**
	 *获取"备注"属性
	 */
	public String getCustomerdetail()
	{
		return this.customerdetail;
	}	   

	/**
	 *设置"状态"属性
	 *@param customerstatue 实体的Customerstatue属性
	 */
	public void setCustomerstatue(String customerstatue)
	{
		this.customerstatue = customerstatue;
	}
	
	/**
	 *获取"状态"属性
	 */
	public String getCustomerstatue()
	{
		return this.customerstatue;
	}	   
	public Cuscardview() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Cuscardview(
		String cuscardid
	 	,String cuscardcustomer
	 	,String cuscardtype
	 	,String cuscardno
	 	,String cuscardpsw
	 	,String cuscardbegin
	 	,String cuscardend
	 	,Double cuscardmoney
	 	,Integer cuscardnums
	 	,Integer cuscardtimes
	 	,Integer cuscardint
	 	,String cuscarddetail
	 	,String cuscardstatue
	 	,String createtime
	 	,String creator
	 	,String updtime
	 	,String updor
	 	,String customerstadium
	 	,String customercode
	 	,String customername
	 	,String customerphone
	 	,String openid
	 	,String customersex
	 	,Integer customerage
	 	,String customercdcard
	 	,String customerhome
	 	,String customercompany
	 	,String customerbirthday
	 	,String customergoodday
	 	,String customeremail
	 	,String customerhow
	 	,String customertime
	 	,String customerimage
	 	,String customeremp
	 	,String customerlevel
	 	,String customerdetail
	 	,String customerstatue
		 ){
		super();
		this.cuscardid = cuscardid;
	 	this.cuscardcustomer = cuscardcustomer;
	 	this.cuscardtype = cuscardtype;
	 	this.cuscardno = cuscardno;
	 	this.cuscardpsw = cuscardpsw;
	 	this.cuscardbegin = cuscardbegin;
	 	this.cuscardend = cuscardend;
	 	this.cuscardmoney = cuscardmoney;
	 	this.cuscardnums = cuscardnums;
	 	this.cuscardtimes = cuscardtimes;
	 	this.cuscardint = cuscardint;
	 	this.cuscarddetail = cuscarddetail;
	 	this.cuscardstatue = cuscardstatue;
	 	this.createtime = createtime;
	 	this.creator = creator;
	 	this.updtime = updtime;
	 	this.updor = updor;
	 	this.customerstadium = customerstadium;
	 	this.customercode = customercode;
	 	this.customername = customername;
	 	this.customerphone = customerphone;
	 	this.openid = openid;
	 	this.customersex = customersex;
	 	this.customerage = customerage;
	 	this.customercdcard = customercdcard;
	 	this.customerhome = customerhome;
	 	this.customercompany = customercompany;
	 	this.customerbirthday = customerbirthday;
	 	this.customergoodday = customergoodday;
	 	this.customeremail = customeremail;
	 	this.customerhow = customerhow;
	 	this.customertime = customertime;
	 	this.customerimage = customerimage;
	 	this.customeremp = customeremp;
	 	this.customerlevel = customerlevel;
	 	this.customerdetail = customerdetail;
	 	this.customerstatue = customerstatue;
	}
}

