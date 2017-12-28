package com.server.pojo;

import java.sql.Timestamp;
import java.math.BigDecimal;
/**
 * mycourseviewsui 实体类
 *@author ZhangRuiLong
 */
public class Mycourseviewsui
{
   /**
    * ID,主键
    */
   private String mycourseid; 
   /**
    * 会员
    */
   private String mycoursecustomer;   
   /**
    * 课程名
    */
   private String mycoursename;   
   /**
    * 场馆
    */
   private String mycoursestadium;   
   /**
    * 教练
    */
   private String mycoursecoach;   
   /**
    * 教练
    */
   private String mycoursecoachname;   
   /**
    * 课时
    */
   private String mycoursenum;   
   /**
    * 剩余课时
    */
   private String mycoursenuma;   
   /**
    * 价格
    */
   private String mycourseprice;   
   /**
    * 抵扣
    */
   private String mycoursedikou;   
   /**
    * 售价
    */
   private String mycoursemoney;   
   /**
    * 项目
    */
   private String mycourseproject;   
   /**
    * 分类
    */
   private String mycoursetype;   
   /**
    * 开始
    */
   private String mycoursebegin;   
   /**
    * 结束
    */
   private String mycourseend;   
   /**
    * 备注
    */
   private String mycoursedetail;   
   /**
    * 创建时间
    */
   private String mycourseinswhen;   
   /**
    * 更新时间
    */
   private String mycourseupdwhen;   
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
    * 编码
    */
   private String customercode;   
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
	 *@param mycourseid 实体的Mycourseid属性
	 */
	public void setMycourseid(String mycourseid)
	{
		this.mycourseid = mycourseid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getMycourseid()
	{
		return this.mycourseid;
	}

	/**
	 *设置"会员"属性
	 *@param mycoursecustomer 实体的Mycoursecustomer属性
	 */
	public void setMycoursecustomer(String mycoursecustomer)
	{
		this.mycoursecustomer = mycoursecustomer;
	}
	
	/**
	 *获取"会员"属性
	 */
	public String getMycoursecustomer()
	{
		return this.mycoursecustomer;
	}	   

	/**
	 *设置"课程名"属性
	 *@param mycoursename 实体的Mycoursename属性
	 */
	public void setMycoursename(String mycoursename)
	{
		this.mycoursename = mycoursename;
	}
	
	/**
	 *获取"课程名"属性
	 */
	public String getMycoursename()
	{
		return this.mycoursename;
	}	   

	/**
	 *设置"场馆"属性
	 *@param mycoursestadium 实体的Mycoursestadium属性
	 */
	public void setMycoursestadium(String mycoursestadium)
	{
		this.mycoursestadium = mycoursestadium;
	}
	
	/**
	 *获取"场馆"属性
	 */
	public String getMycoursestadium()
	{
		return this.mycoursestadium;
	}	   

	/**
	 *设置"教练"属性
	 *@param mycoursecoach 实体的Mycoursecoach属性
	 */
	public void setMycoursecoach(String mycoursecoach)
	{
		this.mycoursecoach = mycoursecoach;
	}
	
	/**
	 *获取"教练"属性
	 */
	public String getMycoursecoach()
	{
		return this.mycoursecoach;
	}	   

	/**
	 *设置"教练"属性
	 *@param mycoursecoachname 实体的Mycoursecoachname属性
	 */
	public void setMycoursecoachname(String mycoursecoachname)
	{
		this.mycoursecoachname = mycoursecoachname;
	}
	
	/**
	 *获取"教练"属性
	 */
	public String getMycoursecoachname()
	{
		return this.mycoursecoachname;
	}	   

	/**
	 *设置"课时"属性
	 *@param mycoursenum 实体的Mycoursenum属性
	 */
	public void setMycoursenum(String mycoursenum)
	{
		this.mycoursenum = mycoursenum;
	}
	
	/**
	 *获取"课时"属性
	 */
	public String getMycoursenum()
	{
		return this.mycoursenum;
	}	   

	/**
	 *设置"剩余课时"属性
	 *@param mycoursenuma 实体的Mycoursenuma属性
	 */
	public void setMycoursenuma(String mycoursenuma)
	{
		this.mycoursenuma = mycoursenuma;
	}
	
	/**
	 *获取"剩余课时"属性
	 */
	public String getMycoursenuma()
	{
		return this.mycoursenuma;
	}	   

	/**
	 *设置"价格"属性
	 *@param mycourseprice 实体的Mycourseprice属性
	 */
	public void setMycourseprice(String mycourseprice)
	{
		this.mycourseprice = mycourseprice;
	}
	
	/**
	 *获取"价格"属性
	 */
	public String getMycourseprice()
	{
		return this.mycourseprice;
	}	   

	/**
	 *设置"抵扣"属性
	 *@param mycoursedikou 实体的Mycoursedikou属性
	 */
	public void setMycoursedikou(String mycoursedikou)
	{
		this.mycoursedikou = mycoursedikou;
	}
	
	/**
	 *获取"抵扣"属性
	 */
	public String getMycoursedikou()
	{
		return this.mycoursedikou;
	}	   

	/**
	 *设置"售价"属性
	 *@param mycoursemoney 实体的Mycoursemoney属性
	 */
	public void setMycoursemoney(String mycoursemoney)
	{
		this.mycoursemoney = mycoursemoney;
	}
	
	/**
	 *获取"售价"属性
	 */
	public String getMycoursemoney()
	{
		return this.mycoursemoney;
	}	   

	/**
	 *设置"项目"属性
	 *@param mycourseproject 实体的Mycourseproject属性
	 */
	public void setMycourseproject(String mycourseproject)
	{
		this.mycourseproject = mycourseproject;
	}
	
	/**
	 *获取"项目"属性
	 */
	public String getMycourseproject()
	{
		return this.mycourseproject;
	}	   

	/**
	 *设置"分类"属性
	 *@param mycoursetype 实体的Mycoursetype属性
	 */
	public void setMycoursetype(String mycoursetype)
	{
		this.mycoursetype = mycoursetype;
	}
	
	/**
	 *获取"分类"属性
	 */
	public String getMycoursetype()
	{
		return this.mycoursetype;
	}	   

	/**
	 *设置"开始"属性
	 *@param mycoursebegin 实体的Mycoursebegin属性
	 */
	public void setMycoursebegin(String mycoursebegin)
	{
		this.mycoursebegin = mycoursebegin;
	}
	
	/**
	 *获取"开始"属性
	 */
	public String getMycoursebegin()
	{
		return this.mycoursebegin;
	}	   

	/**
	 *设置"结束"属性
	 *@param mycourseend 实体的Mycourseend属性
	 */
	public void setMycourseend(String mycourseend)
	{
		this.mycourseend = mycourseend;
	}
	
	/**
	 *获取"结束"属性
	 */
	public String getMycourseend()
	{
		return this.mycourseend;
	}	   

	/**
	 *设置"备注"属性
	 *@param mycoursedetail 实体的Mycoursedetail属性
	 */
	public void setMycoursedetail(String mycoursedetail)
	{
		this.mycoursedetail = mycoursedetail;
	}
	
	/**
	 *获取"备注"属性
	 */
	public String getMycoursedetail()
	{
		return this.mycoursedetail;
	}	   

	/**
	 *设置"创建时间"属性
	 *@param mycourseinswhen 实体的Mycourseinswhen属性
	 */
	public void setMycourseinswhen(String mycourseinswhen)
	{
		this.mycourseinswhen = mycourseinswhen;
	}
	
	/**
	 *获取"创建时间"属性
	 */
	public String getMycourseinswhen()
	{
		return this.mycourseinswhen;
	}	   

	/**
	 *设置"更新时间"属性
	 *@param mycourseupdwhen 实体的Mycourseupdwhen属性
	 */
	public void setMycourseupdwhen(String mycourseupdwhen)
	{
		this.mycourseupdwhen = mycourseupdwhen;
	}
	
	/**
	 *获取"更新时间"属性
	 */
	public String getMycourseupdwhen()
	{
		return this.mycourseupdwhen;
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
	public Mycourseviewsui() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Mycourseviewsui(
		String mycourseid
	 	,String mycoursecustomer
	 	,String mycoursename
	 	,String mycoursestadium
	 	,String mycoursecoach
	 	,String mycoursecoachname
	 	,String mycoursenum
	 	,String mycoursenuma
	 	,String mycourseprice
	 	,String mycoursedikou
	 	,String mycoursemoney
	 	,String mycourseproject
	 	,String mycoursetype
	 	,String mycoursebegin
	 	,String mycourseend
	 	,String mycoursedetail
	 	,String mycourseinswhen
	 	,String mycourseupdwhen
	 	,String customerid
	 	,String customerstadium
	 	,String openid
	 	,String customercode
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
		this.mycourseid = mycourseid;
	 	this.mycoursecustomer = mycoursecustomer;
	 	this.mycoursename = mycoursename;
	 	this.mycoursestadium = mycoursestadium;
	 	this.mycoursecoach = mycoursecoach;
	 	this.mycoursecoachname = mycoursecoachname;
	 	this.mycoursenum = mycoursenum;
	 	this.mycoursenuma = mycoursenuma;
	 	this.mycourseprice = mycourseprice;
	 	this.mycoursedikou = mycoursedikou;
	 	this.mycoursemoney = mycoursemoney;
	 	this.mycourseproject = mycourseproject;
	 	this.mycoursetype = mycoursetype;
	 	this.mycoursebegin = mycoursebegin;
	 	this.mycourseend = mycourseend;
	 	this.mycoursedetail = mycoursedetail;
	 	this.mycourseinswhen = mycourseinswhen;
	 	this.mycourseupdwhen = mycourseupdwhen;
	 	this.customerid = customerid;
	 	this.customerstadium = customerstadium;
	 	this.openid = openid;
	 	this.customercode = customercode;
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

