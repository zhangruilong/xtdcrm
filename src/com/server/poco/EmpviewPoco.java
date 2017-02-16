package com.server.poco;

/**
 * empview 实体类的常量
 *@author ZhangRuiLong
 */
public class EmpviewPoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "empview";
   /**
    * 实体表名
    */
   public static String TABLE = "Empview";
   /**
    * 实体主键
    */
   public static String[] KEYCOLUMN = {"empid"};
   /**
    * 实体中文字段
    */
   public static String[] CHINESENAME = {
   		"ID",
	 	"场馆ID",
	 	"编码",
	 	"姓名",
	 	"年龄",
	 	"性别",
	 	"手机",
	 	"邮箱",
	 	"照片",
	 	"地址",
	 	"备注",
	 	"状态",
	 	"创建时间",
	 	"创建人",
	 	"更新时间",
	 	"更新人",
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
   		"empid",
	 	"empstadium",
	 	"empcode",
	 	"empname",
	 	"empage",
	 	"empsex",
	 	"empphone",
	 	"empemail",
	 	"empimage",
	 	"empaddress",
	 	"empdetail",
	 	"empstatue",
	 	"createtime",
	 	"creator",
	 	"updtime",
	 	"updor",
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
   public static final String ORDER = " empid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
   		"empid",
	 	"empstadium",
	 	"empcode",
	 	"empname",
	 	"empage",
	 	"empsex",
	 	"empphone",
	 	"empemail",
	 	"empimage",
	 	"empaddress",
	 	"empdetail",
	 	"empstatue",
	 	"createtime",
	 	"creator",
	 	"updtime",
	 	"updor",
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

