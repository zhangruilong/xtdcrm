package com.server.poco;

/**
 * coach 实体类的常量
 *@author ZhangRuiLong
 */
public class CoachPoco
{
   /**
    * 实体中文名
    */
   public static final String NAME = "coach";
   /**
    * 实体表名
    */
   public static final String TABLE = "Coach";
   /**
    * 实体主键
    */
   public static final String[] KEYCOLUMN = {"coachid"};
   /**
    * 实体中文字段
    */
   public static final String[] CHINESENAME = {
   		"ID",
	 	"场馆",
	 	"编码",
	 	"姓名",
	 	"手机",
	 	"价位",
	 	"其他信息",
	 	"性别",
	 	"年龄",
	 	"照片",
	 	"备注",
	 	"状态",
	 	"创建人",
	 	"创建时间",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
   		"coachid",
	 	"coachstadium",
	 	"coachcode",
	 	"coachname",
	 	"coachphone",
	 	"coachprice",
	 	"coachaddress",
	 	"coachsex",
	 	"coachage",
	 	"coachimage",
	 	"coachdetail",
	 	"coachstatue",
	 	"coachinswho",
	 	"coachinswhen",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " coachid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
   		"coachid",
	 	"coachstadium",
	 	"coachcode",
	 	"coachname",
	 	"coachphone",
	 	"coachprice",
	 	"coachaddress",
	 	"coachsex",
	 	"coachage",
	 	"coachimage",
	 	"coachdetail",
	 	"coachstatue",
	 	"coachinswho",
	 	"coachinswhen",
   };
}

