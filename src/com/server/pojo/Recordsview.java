package com.server.pojo;

import java.sql.Timestamp;
import java.math.BigDecimal;
/**
 * recordsview 实体类
 *@author ZhangRuiLong
 */
public class Recordsview
{
   /**
    * ID,主键
    */
   private String recordsid; 
   /**
    * 客户
    */
   private String recordscustomer;   
   /**
    * 会籍
    */
   private String recordsemp;   
   /**
    * 步骤
    */
   private String recordstitle;   
   /**
    * 内容
    */
   private String recordsdetail;   
   /**
    * 创建时间
    */
   private String recordsinswhen;   
   /**
    * 创建人
    */
   private String recordsinswho;   
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
	 *@param recordsid 实体的Recordsid属性
	 */
	public void setRecordsid(String recordsid)
	{
		this.recordsid = recordsid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getRecordsid()
	{
		return this.recordsid;
	}

	/**
	 *设置"客户"属性
	 *@param recordscustomer 实体的Recordscustomer属性
	 */
	public void setRecordscustomer(String recordscustomer)
	{
		this.recordscustomer = recordscustomer;
	}
	
	/**
	 *获取"客户"属性
	 */
	public String getRecordscustomer()
	{
		return this.recordscustomer;
	}	   

	/**
	 *设置"会籍"属性
	 *@param recordsemp 实体的Recordsemp属性
	 */
	public void setRecordsemp(String recordsemp)
	{
		this.recordsemp = recordsemp;
	}
	
	/**
	 *获取"会籍"属性
	 */
	public String getRecordsemp()
	{
		return this.recordsemp;
	}	   

	/**
	 *设置"步骤"属性
	 *@param recordstitle 实体的Recordstitle属性
	 */
	public void setRecordstitle(String recordstitle)
	{
		this.recordstitle = recordstitle;
	}
	
	/**
	 *获取"步骤"属性
	 */
	public String getRecordstitle()
	{
		return this.recordstitle;
	}	   

	/**
	 *设置"内容"属性
	 *@param recordsdetail 实体的Recordsdetail属性
	 */
	public void setRecordsdetail(String recordsdetail)
	{
		this.recordsdetail = recordsdetail;
	}
	
	/**
	 *获取"内容"属性
	 */
	public String getRecordsdetail()
	{
		return this.recordsdetail;
	}	   

	/**
	 *设置"创建时间"属性
	 *@param recordsinswhen 实体的Recordsinswhen属性
	 */
	public void setRecordsinswhen(String recordsinswhen)
	{
		this.recordsinswhen = recordsinswhen;
	}
	
	/**
	 *获取"创建时间"属性
	 */
	public String getRecordsinswhen()
	{
		return this.recordsinswhen;
	}	   

	/**
	 *设置"创建人"属性
	 *@param recordsinswho 实体的Recordsinswho属性
	 */
	public void setRecordsinswho(String recordsinswho)
	{
		this.recordsinswho = recordsinswho;
	}
	
	/**
	 *获取"创建人"属性
	 */
	public String getRecordsinswho()
	{
		return this.recordsinswho;
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
	public Recordsview() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Recordsview(
		String recordsid
	 	,String recordscustomer
	 	,String recordsemp
	 	,String recordstitle
	 	,String recordsdetail
	 	,String recordsinswhen
	 	,String recordsinswho
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
		this.recordsid = recordsid;
	 	this.recordscustomer = recordscustomer;
	 	this.recordsemp = recordsemp;
	 	this.recordstitle = recordstitle;
	 	this.recordsdetail = recordsdetail;
	 	this.recordsinswhen = recordsinswhen;
	 	this.recordsinswho = recordsinswho;
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

