package com.server.poco;

/**
 * coachview 实体类的常量
 *@author ZhangRuiLong
 */
public class CoachviewPoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "coachview";
   /**
    * 实体表名
    */
   public static String TABLE = "Coachview";
   /**
    * 实体主键
    */
   public static String[] KEYCOLUMN = {"coachid"};
   /**
    * 实体中文字段
    */
   public static String[] CHINESENAME = {
   		"ID",
	 	"场馆ID",
	 	"编码",
	 	"姓名",
	 	"手机",
	 	"地址",
	 	"性别",
	 	"年龄",
	 	"照片",
	 	"备注",
	 	"状态",
	 	"创建时间",
	 	"创建人",
	 	"ID",
	 	"编码",
	 	"名称",
	 	"地址",
	 	"备注",
	 	"状态",
	 	"X坐标",
	 	"Y坐标",
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
	 	"coachaddress",
	 	"coachsex",
	 	"coachage",
	 	"coachimage",
	 	"coachdetail",
	 	"coachstatue",
	 	"createtime",
	 	"creator",
	 	"stadiumid",
	 	"stadiumcode",
	 	"stadiumname",
	 	"stadiumaddress",
	 	"stadiumdetail",
	 	"stadiumstatue",
	 	"stadiumx",
	 	"stadiumy",
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
	 	"coachaddress",
	 	"coachsex",
	 	"coachage",
	 	"coachimage",
	 	"coachdetail",
	 	"coachstatue",
	 	"createtime",
	 	"creator",
	 	"stadiumid",
	 	"stadiumcode",
	 	"stadiumname",
	 	"stadiumaddress",
	 	"stadiumdetail",
	 	"stadiumstatue",
	 	"stadiumx",
	 	"stadiumy",
   };
}

