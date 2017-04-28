package com.server.poco;

/**
 * customer 实体类的常量
 *@author ZhangRuiLong
 */
public class CustomerPoco
{
   /**
    * 实体中文名
    */
   public static final String NAME = "customer";
   /**
    * 实体表名
    */
   public static final String TABLE = "Customer";
   /**
    * 实体主键
    */
   public static final String[] KEYCOLUMN = {"customerid"};
   /**
    * 实体中文字段
    */
   public static final String[] CHINESENAME = {
   		"ID",
	 	"场馆",
	 	"OPENID",
	 	"姓名",
	 	"性别",
	 	"年龄",
	 	"身份证",
	 	"住址",
	 	"单位",
	 	"手机",
	 	"生日",
	 	"邮箱",
	 	"入会途径",
	 	"照片",
	 	"会籍管家",
	 	"备注",
	 	"状态",
	 	"创建时间",
	 	"创建人",
	 	"更新时间",
	 	"更新人",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
   		"customerid",
	 	"customerstadium",
	 	"openid",
	 	"customername",
	 	"customersex",
	 	"customerage",
	 	"customercdcard",
	 	"customerhome",
	 	"customercompany",
	 	"customerphone",
	 	"customerbirthday",
	 	"customeremail",
	 	"customerhow",
	 	"customerimage",
	 	"customeremp",
	 	"customerdetail",
	 	"customerstatue",
	 	"customerinswhen",
	 	"customerinswho",
	 	"customerupdwhen",
	 	"customerupdwho",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " customerid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
   		"customerid",
	 	"customerstadium",
	 	"openid",
	 	"customername",
	 	"customersex",
	 	"customerage",
	 	"customercdcard",
	 	"customerhome",
	 	"customercompany",
	 	"customerphone",
	 	"customerbirthday",
	 	"customeremail",
	 	"customerhow",
	 	"customerimage",
	 	"customeremp",
	 	"customerdetail",
	 	"customerstatue",
	 	"customerinswhen",
	 	"customerinswho",
	 	"customerupdwhen",
	 	"customerupdwho",
   };
}

