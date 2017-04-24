package com.server.pojo;

import java.sql.Timestamp;
import java.math.BigDecimal;
/**
 * cuscard 实体类
 *@author ZhangRuiLong
 */
public class Cuscard
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
    * 停用qi x
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
	 *设置"停用qi x"属性
	 *@param cuscardstop 实体的Cuscardstop属性
	 */
	public void setCuscardstop(String cuscardstop)
	{
		this.cuscardstop = cuscardstop;
	}
	
	/**
	 *获取"停用qi x"属性
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
	public Cuscard() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Cuscard(
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
	}
}

