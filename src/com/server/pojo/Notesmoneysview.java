package com.server.pojo;

import java.sql.Timestamp;
import java.math.BigDecimal;
/**
 * notesmoneysview 实体类
 *@author ZhangRuiLong
 */
public class Notesmoneysview
{
   /**
    * ID,主键
    */
   private String notesid; 
   /**
    * 会员
    */
   private String notescustomer;   
   /**
    * 会员卡
    */
   private String notescard;   
   /**
    * 场馆
    */
   private String notesstadium;   
   /**
    * 教练
    */
   private String notescoach;   
   /**
    * 课程
    */
   private String notescourse;   
   /**
    * 金额
    */
   private String notesmoney;   
   /**
    * 事件
    */
   private String notesname;   
   /**
    * 详细
    */
   private String notesdetail;   
   /**
    * 分类
    */
   private String notestype;   
   /**
    * 创建时间
    */
   private String notesinswhen;   
   /**
    * 创建人
    */
   private String notesinswho;   
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
    * 单位
    */
   private String customercompany;   
   /**
    * 手机
    */
   private String customerphone;   
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
    * ID
    */
   private String cuscardid;   
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
    * 卡种次数
    */
   private String cuscardnums;   
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
    //属性方法	    
     /**
	 *设置主键"ID"属性
	 *@param notesid 实体的Notesid属性
	 */
	public void setNotesid(String notesid)
	{
		this.notesid = notesid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getNotesid()
	{
		return this.notesid;
	}

	/**
	 *设置"会员"属性
	 *@param notescustomer 实体的Notescustomer属性
	 */
	public void setNotescustomer(String notescustomer)
	{
		this.notescustomer = notescustomer;
	}
	
	/**
	 *获取"会员"属性
	 */
	public String getNotescustomer()
	{
		return this.notescustomer;
	}	   

	/**
	 *设置"会员卡"属性
	 *@param notescard 实体的Notescard属性
	 */
	public void setNotescard(String notescard)
	{
		this.notescard = notescard;
	}
	
	/**
	 *获取"会员卡"属性
	 */
	public String getNotescard()
	{
		return this.notescard;
	}	   

	/**
	 *设置"场馆"属性
	 *@param notesstadium 实体的Notesstadium属性
	 */
	public void setNotesstadium(String notesstadium)
	{
		this.notesstadium = notesstadium;
	}
	
	/**
	 *获取"场馆"属性
	 */
	public String getNotesstadium()
	{
		return this.notesstadium;
	}	   

	/**
	 *设置"教练"属性
	 *@param notescoach 实体的Notescoach属性
	 */
	public void setNotescoach(String notescoach)
	{
		this.notescoach = notescoach;
	}
	
	/**
	 *获取"教练"属性
	 */
	public String getNotescoach()
	{
		return this.notescoach;
	}	   

	/**
	 *设置"课程"属性
	 *@param notescourse 实体的Notescourse属性
	 */
	public void setNotescourse(String notescourse)
	{
		this.notescourse = notescourse;
	}
	
	/**
	 *获取"课程"属性
	 */
	public String getNotescourse()
	{
		return this.notescourse;
	}	   

	/**
	 *设置"金额"属性
	 *@param notesmoney 实体的Notesmoney属性
	 */
	public void setNotesmoney(String notesmoney)
	{
		this.notesmoney = notesmoney;
	}
	
	/**
	 *获取"金额"属性
	 */
	public String getNotesmoney()
	{
		return this.notesmoney;
	}	   

	/**
	 *设置"事件"属性
	 *@param notesname 实体的Notesname属性
	 */
	public void setNotesname(String notesname)
	{
		this.notesname = notesname;
	}
	
	/**
	 *获取"事件"属性
	 */
	public String getNotesname()
	{
		return this.notesname;
	}	   

	/**
	 *设置"详细"属性
	 *@param notesdetail 实体的Notesdetail属性
	 */
	public void setNotesdetail(String notesdetail)
	{
		this.notesdetail = notesdetail;
	}
	
	/**
	 *获取"详细"属性
	 */
	public String getNotesdetail()
	{
		return this.notesdetail;
	}	   

	/**
	 *设置"分类"属性
	 *@param notestype 实体的Notestype属性
	 */
	public void setNotestype(String notestype)
	{
		this.notestype = notestype;
	}
	
	/**
	 *获取"分类"属性
	 */
	public String getNotestype()
	{
		return this.notestype;
	}	   

	/**
	 *设置"创建时间"属性
	 *@param notesinswhen 实体的Notesinswhen属性
	 */
	public void setNotesinswhen(String notesinswhen)
	{
		this.notesinswhen = notesinswhen;
	}
	
	/**
	 *获取"创建时间"属性
	 */
	public String getNotesinswhen()
	{
		return this.notesinswhen;
	}	   

	/**
	 *设置"创建人"属性
	 *@param notesinswho 实体的Notesinswho属性
	 */
	public void setNotesinswho(String notesinswho)
	{
		this.notesinswho = notesinswho;
	}
	
	/**
	 *获取"创建人"属性
	 */
	public String getNotesinswho()
	{
		return this.notesinswho;
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
	 *设置"ID"属性
	 *@param cuscardid 实体的Cuscardid属性
	 */
	public void setCuscardid(String cuscardid)
	{
		this.cuscardid = cuscardid;
	}
	
	/**
	 *获取"ID"属性
	 */
	public String getCuscardid()
	{
		return this.cuscardid;
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
	 *设置"卡种次数"属性
	 *@param cuscardnums 实体的Cuscardnums属性
	 */
	public void setCuscardnums(String cuscardnums)
	{
		this.cuscardnums = cuscardnums;
	}
	
	/**
	 *获取"卡种次数"属性
	 */
	public String getCuscardnums()
	{
		return this.cuscardnums;
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
	public Notesmoneysview() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Notesmoneysview(
		String notesid
	 	,String notescustomer
	 	,String notescard
	 	,String notesstadium
	 	,String notescoach
	 	,String notescourse
	 	,String notesmoney
	 	,String notesname
	 	,String notesdetail
	 	,String notestype
	 	,String notesinswhen
	 	,String notesinswho
	 	,String customername
	 	,String customersex
	 	,String customerage
	 	,String customercdcard
	 	,String customercompany
	 	,String customerphone
	 	,String customeremp
	 	,String customerdetail
	 	,String customerstatue
	 	,String cuscardid
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
	 	,String cuscardnums
	 	,String cuscardtimes
	 	,String cuscardpoint
	 	,String cuscarddetail
	 	,String cuscardchangci
	 	,String cuscardproject
	 	,String cuscardstatue
	 	,String cuscardinswhen
	 	,String cuscardinswho
		 ){
		super();
		this.notesid = notesid;
	 	this.notescustomer = notescustomer;
	 	this.notescard = notescard;
	 	this.notesstadium = notesstadium;
	 	this.notescoach = notescoach;
	 	this.notescourse = notescourse;
	 	this.notesmoney = notesmoney;
	 	this.notesname = notesname;
	 	this.notesdetail = notesdetail;
	 	this.notestype = notestype;
	 	this.notesinswhen = notesinswhen;
	 	this.notesinswho = notesinswho;
	 	this.customername = customername;
	 	this.customersex = customersex;
	 	this.customerage = customerage;
	 	this.customercdcard = customercdcard;
	 	this.customercompany = customercompany;
	 	this.customerphone = customerphone;
	 	this.customeremp = customeremp;
	 	this.customerdetail = customerdetail;
	 	this.customerstatue = customerstatue;
	 	this.cuscardid = cuscardid;
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
	 	this.cuscardnums = cuscardnums;
	 	this.cuscardtimes = cuscardtimes;
	 	this.cuscardpoint = cuscardpoint;
	 	this.cuscarddetail = cuscarddetail;
	 	this.cuscardchangci = cuscardchangci;
	 	this.cuscardproject = cuscardproject;
	 	this.cuscardstatue = cuscardstatue;
	 	this.cuscardinswhen = cuscardinswhen;
	 	this.cuscardinswho = cuscardinswho;
	}
}

