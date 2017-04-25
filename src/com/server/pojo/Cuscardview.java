package com.server.pojo;

import java.sql.Timestamp;
import java.math.BigDecimal;
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
    * 场馆
    */
   private String cuscardstadium;   
   /**
    * 卡号
    */
   private String cuscardno;   
   /**
    * 卡种
    */
   private String cuscardtypename;   
   /**
    * 分类
    */
   private String cuscardtypeclass;   
   /**
    * 有效期
    */
   private String cuscardday;   
   /**
    * 有效期开始
    */
   private String cuscardbegin;   
   /**
    * 有效期结束
    */
   private String cuscardend;   
   /**
    * 价格
    */
   private String cuscardprice;   
   /**
    * 抵扣
    */
   private String cuscarddikou;   
   /**
    * 售价
    */
   private String cuscardmoney;   
   /**
    * 停用期限
    */
   private String cuscardstop;   
   /**
    * 停用价格
    */
   private String cuscardstopmoney;   
   /**
    * 余次
    */
   private String cuscardtimes;   
   /**
    * 积分
    */
   private String cuscardpoint;   
   /**
    * 备注
    */
   private String cuscarddetail;   
   /**
    * 场次
    */
   private String cuscardchangci;   
   /**
    * 项目
    */
   private String cuscardproject;   
   /**
    * 状态
    */
   private String cuscardstatue;   
   /**
    * 创建时间
    */
   private String cuscardinswhen;   
   /**
    * 创建人
    */
   private String cuscardinswho;   
   /**
    * 更新时间
    */
   private String cuscardupdwhen;   
   /**
    * 更新人
    */
   private String cuscardupdwho;   
   /**
    * ID
    */
   private String customerid;   
   /**
    * 场馆
    */
   private String customerstadium;   
   /**
    * OPENID
    */
   private String openid;   
   /**
    * 姓名
    */
   private String customername;   
   /**
    * 性别
    */
   private String customersex;   
   /**
    * 年龄
    */
   private String customerage;   
   /**
    * 身份证
    */
   private String customercdcard;   
   /**
    * 住址
    */
   private String customerhome;   
   /**
    * 单位
    */
   private String customercompany;   
   /**
    * 手机
    */
   private String customerphone;   
   /**
    * 生日
    */
   private String customerbirthday;   
   /**
    * 邮箱
    */
   private String customeremail;   
   /**
    * 入会途径
    */
   private String customerhow;   
   /**
    * 照片
    */
   private String customerimage;   
   /**
    * 会籍管家
    */
   private String customeremp;   
   /**
    * 备注
    */
   private String customerdetail;   
   /**
    * 状态
    */
   private String customerstatue;   
   /**
    * 创建时间
    */
   private String customerinswhen;   
   /**
    * 创建人
    */
   private String customerinswho;   
   /**
    * 更新时间
    */
   private String customerupdwhen;   
   /**
    * 更新人
    */
   private String customerupdwho;   
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
	 *设置"场馆"属性
	 *@param cuscardstadium 实体的Cuscardstadium属性
	 */
	public void setCuscardstadium(String cuscardstadium)
	{
		this.cuscardstadium = cuscardstadium;
	}
	
	/**
	 *获取"场馆"属性
	 */
	public String getCuscardstadium()
	{
		return this.cuscardstadium;
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
	 *设置"卡种"属性
	 *@param cuscardtypename 实体的Cuscardtypename属性
	 */
	public void setCuscardtypename(String cuscardtypename)
	{
		this.cuscardtypename = cuscardtypename;
	}
	
	/**
	 *获取"卡种"属性
	 */
	public String getCuscardtypename()
	{
		return this.cuscardtypename;
	}	   

	/**
	 *设置"分类"属性
	 *@param cuscardtypeclass 实体的Cuscardtypeclass属性
	 */
	public void setCuscardtypeclass(String cuscardtypeclass)
	{
		this.cuscardtypeclass = cuscardtypeclass;
	}
	
	/**
	 *获取"分类"属性
	 */
	public String getCuscardtypeclass()
	{
		return this.cuscardtypeclass;
	}	   

	/**
	 *设置"有效期"属性
	 *@param cuscardday 实体的Cuscardday属性
	 */
	public void setCuscardday(String cuscardday)
	{
		this.cuscardday = cuscardday;
	}
	
	/**
	 *获取"有效期"属性
	 */
	public String getCuscardday()
	{
		return this.cuscardday;
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
	 *设置"价格"属性
	 *@param cuscardprice 实体的Cuscardprice属性
	 */
	public void setCuscardprice(String cuscardprice)
	{
		this.cuscardprice = cuscardprice;
	}
	
	/**
	 *获取"价格"属性
	 */
	public String getCuscardprice()
	{
		return this.cuscardprice;
	}	   

	/**
	 *设置"抵扣"属性
	 *@param cuscarddikou 实体的Cuscarddikou属性
	 */
	public void setCuscarddikou(String cuscarddikou)
	{
		this.cuscarddikou = cuscarddikou;
	}
	
	/**
	 *获取"抵扣"属性
	 */
	public String getCuscarddikou()
	{
		return this.cuscarddikou;
	}	   

	/**
	 *设置"售价"属性
	 *@param cuscardmoney 实体的Cuscardmoney属性
	 */
	public void setCuscardmoney(String cuscardmoney)
	{
		this.cuscardmoney = cuscardmoney;
	}
	
	/**
	 *获取"售价"属性
	 */
	public String getCuscardmoney()
	{
		return this.cuscardmoney;
	}	   

	/**
	 *设置"停用期限"属性
	 *@param cuscardstop 实体的Cuscardstop属性
	 */
	public void setCuscardstop(String cuscardstop)
	{
		this.cuscardstop = cuscardstop;
	}
	
	/**
	 *获取"停用期限"属性
	 */
	public String getCuscardstop()
	{
		return this.cuscardstop;
	}	   

	/**
	 *设置"停用价格"属性
	 *@param cuscardstopmoney 实体的Cuscardstopmoney属性
	 */
	public void setCuscardstopmoney(String cuscardstopmoney)
	{
		this.cuscardstopmoney = cuscardstopmoney;
	}
	
	/**
	 *获取"停用价格"属性
	 */
	public String getCuscardstopmoney()
	{
		return this.cuscardstopmoney;
	}	   

	/**
	 *设置"余次"属性
	 *@param cuscardtimes 实体的Cuscardtimes属性
	 */
	public void setCuscardtimes(String cuscardtimes)
	{
		this.cuscardtimes = cuscardtimes;
	}
	
	/**
	 *获取"余次"属性
	 */
	public String getCuscardtimes()
	{
		return this.cuscardtimes;
	}	   

	/**
	 *设置"积分"属性
	 *@param cuscardpoint 实体的Cuscardpoint属性
	 */
	public void setCuscardpoint(String cuscardpoint)
	{
		this.cuscardpoint = cuscardpoint;
	}
	
	/**
	 *获取"积分"属性
	 */
	public String getCuscardpoint()
	{
		return this.cuscardpoint;
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
	 *设置"场次"属性
	 *@param cuscardchangci 实体的Cuscardchangci属性
	 */
	public void setCuscardchangci(String cuscardchangci)
	{
		this.cuscardchangci = cuscardchangci;
	}
	
	/**
	 *获取"场次"属性
	 */
	public String getCuscardchangci()
	{
		return this.cuscardchangci;
	}	   

	/**
	 *设置"项目"属性
	 *@param cuscardproject 实体的Cuscardproject属性
	 */
	public void setCuscardproject(String cuscardproject)
	{
		this.cuscardproject = cuscardproject;
	}
	
	/**
	 *获取"项目"属性
	 */
	public String getCuscardproject()
	{
		return this.cuscardproject;
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
	 *@param cuscardinswhen 实体的Cuscardinswhen属性
	 */
	public void setCuscardinswhen(String cuscardinswhen)
	{
		this.cuscardinswhen = cuscardinswhen;
	}
	
	/**
	 *获取"创建时间"属性
	 */
	public String getCuscardinswhen()
	{
		return this.cuscardinswhen;
	}	   

	/**
	 *设置"创建人"属性
	 *@param cuscardinswho 实体的Cuscardinswho属性
	 */
	public void setCuscardinswho(String cuscardinswho)
	{
		this.cuscardinswho = cuscardinswho;
	}
	
	/**
	 *获取"创建人"属性
	 */
	public String getCuscardinswho()
	{
		return this.cuscardinswho;
	}	   

	/**
	 *设置"更新时间"属性
	 *@param cuscardupdwhen 实体的Cuscardupdwhen属性
	 */
	public void setCuscardupdwhen(String cuscardupdwhen)
	{
		this.cuscardupdwhen = cuscardupdwhen;
	}
	
	/**
	 *获取"更新时间"属性
	 */
	public String getCuscardupdwhen()
	{
		return this.cuscardupdwhen;
	}	   

	/**
	 *设置"更新人"属性
	 *@param cuscardupdwho 实体的Cuscardupdwho属性
	 */
	public void setCuscardupdwho(String cuscardupdwho)
	{
		this.cuscardupdwho = cuscardupdwho;
	}
	
	/**
	 *获取"更新人"属性
	 */
	public String getCuscardupdwho()
	{
		return this.cuscardupdwho;
	}	   

	/**
	 *设置"ID"属性
	 *@param customerid 实体的Customerid属性
	 */
	public void setCustomerid(String customerid)
	{
		this.customerid = customerid;
	}
	
	/**
	 *获取"ID"属性
	 */
	public String getCustomerid()
	{
		return this.customerid;
	}	   

	/**
	 *设置"场馆"属性
	 *@param customerstadium 实体的Customerstadium属性
	 */
	public void setCustomerstadium(String customerstadium)
	{
		this.customerstadium = customerstadium;
	}
	
	/**
	 *获取"场馆"属性
	 */
	public String getCustomerstadium()
	{
		return this.customerstadium;
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
	public void setCustomerage(String customerage)
	{
		this.customerage = customerage;
	}
	
	/**
	 *获取"年龄"属性
	 */
	public String getCustomerage()
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
	 *设置"住址"属性
	 *@param customerhome 实体的Customerhome属性
	 */
	public void setCustomerhome(String customerhome)
	{
		this.customerhome = customerhome;
	}
	
	/**
	 *获取"住址"属性
	 */
	public String getCustomerhome()
	{
		return this.customerhome;
	}	   

	/**
	 *设置"单位"属性
	 *@param customercompany 实体的Customercompany属性
	 */
	public void setCustomercompany(String customercompany)
	{
		this.customercompany = customercompany;
	}
	
	/**
	 *获取"单位"属性
	 */
	public String getCustomercompany()
	{
		return this.customercompany;
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
	 *设置"会籍管家"属性
	 *@param customeremp 实体的Customeremp属性
	 */
	public void setCustomeremp(String customeremp)
	{
		this.customeremp = customeremp;
	}
	
	/**
	 *获取"会籍管家"属性
	 */
	public String getCustomeremp()
	{
		return this.customeremp;
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

	/**
	 *设置"创建时间"属性
	 *@param customerinswhen 实体的Customerinswhen属性
	 */
	public void setCustomerinswhen(String customerinswhen)
	{
		this.customerinswhen = customerinswhen;
	}
	
	/**
	 *获取"创建时间"属性
	 */
	public String getCustomerinswhen()
	{
		return this.customerinswhen;
	}	   

	/**
	 *设置"创建人"属性
	 *@param customerinswho 实体的Customerinswho属性
	 */
	public void setCustomerinswho(String customerinswho)
	{
		this.customerinswho = customerinswho;
	}
	
	/**
	 *获取"创建人"属性
	 */
	public String getCustomerinswho()
	{
		return this.customerinswho;
	}	   

	/**
	 *设置"更新时间"属性
	 *@param customerupdwhen 实体的Customerupdwhen属性
	 */
	public void setCustomerupdwhen(String customerupdwhen)
	{
		this.customerupdwhen = customerupdwhen;
	}
	
	/**
	 *获取"更新时间"属性
	 */
	public String getCustomerupdwhen()
	{
		return this.customerupdwhen;
	}	   

	/**
	 *设置"更新人"属性
	 *@param customerupdwho 实体的Customerupdwho属性
	 */
	public void setCustomerupdwho(String customerupdwho)
	{
		this.customerupdwho = customerupdwho;
	}
	
	/**
	 *获取"更新人"属性
	 */
	public String getCustomerupdwho()
	{
		return this.customerupdwho;
	}	   
	public Cuscardview() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Cuscardview(
		String cuscardid
	 	,String cuscardcustomer
	 	,String cuscardstadium
	 	,String cuscardno
	 	,String cuscardtypename
	 	,String cuscardtypeclass
	 	,String cuscardday
	 	,String cuscardbegin
	 	,String cuscardend
	 	,String cuscardprice
	 	,String cuscarddikou
	 	,String cuscardmoney
	 	,String cuscardstop
	 	,String cuscardstopmoney
	 	,String cuscardtimes
	 	,String cuscardpoint
	 	,String cuscarddetail
	 	,String cuscardchangci
	 	,String cuscardproject
	 	,String cuscardstatue
	 	,String cuscardinswhen
	 	,String cuscardinswho
	 	,String cuscardupdwhen
	 	,String cuscardupdwho
	 	,String customerid
	 	,String customerstadium
	 	,String openid
	 	,String customername
	 	,String customersex
	 	,String customerage
	 	,String customercdcard
	 	,String customerhome
	 	,String customercompany
	 	,String customerphone
	 	,String customerbirthday
	 	,String customeremail
	 	,String customerhow
	 	,String customerimage
	 	,String customeremp
	 	,String customerdetail
	 	,String customerstatue
	 	,String customerinswhen
	 	,String customerinswho
	 	,String customerupdwhen
	 	,String customerupdwho
		 ){
		super();
		this.cuscardid = cuscardid;
	 	this.cuscardcustomer = cuscardcustomer;
	 	this.cuscardstadium = cuscardstadium;
	 	this.cuscardno = cuscardno;
	 	this.cuscardtypename = cuscardtypename;
	 	this.cuscardtypeclass = cuscardtypeclass;
	 	this.cuscardday = cuscardday;
	 	this.cuscardbegin = cuscardbegin;
	 	this.cuscardend = cuscardend;
	 	this.cuscardprice = cuscardprice;
	 	this.cuscarddikou = cuscarddikou;
	 	this.cuscardmoney = cuscardmoney;
	 	this.cuscardstop = cuscardstop;
	 	this.cuscardstopmoney = cuscardstopmoney;
	 	this.cuscardtimes = cuscardtimes;
	 	this.cuscardpoint = cuscardpoint;
	 	this.cuscarddetail = cuscarddetail;
	 	this.cuscardchangci = cuscardchangci;
	 	this.cuscardproject = cuscardproject;
	 	this.cuscardstatue = cuscardstatue;
	 	this.cuscardinswhen = cuscardinswhen;
	 	this.cuscardinswho = cuscardinswho;
	 	this.cuscardupdwhen = cuscardupdwhen;
	 	this.cuscardupdwho = cuscardupdwho;
	 	this.customerid = customerid;
	 	this.customerstadium = customerstadium;
	 	this.openid = openid;
	 	this.customername = customername;
	 	this.customersex = customersex;
	 	this.customerage = customerage;
	 	this.customercdcard = customercdcard;
	 	this.customerhome = customerhome;
	 	this.customercompany = customercompany;
	 	this.customerphone = customerphone;
	 	this.customerbirthday = customerbirthday;
	 	this.customeremail = customeremail;
	 	this.customerhow = customerhow;
	 	this.customerimage = customerimage;
	 	this.customeremp = customeremp;
	 	this.customerdetail = customerdetail;
	 	this.customerstatue = customerstatue;
	 	this.customerinswhen = customerinswhen;
	 	this.customerinswho = customerinswho;
	 	this.customerupdwhen = customerupdwhen;
	 	this.customerupdwho = customerupdwho;
	}
}

