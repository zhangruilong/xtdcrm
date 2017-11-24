package com.server.poco;

/**
 * emp 实体类的常量
 *@author ZhangRuiLong
 */
public class EmpPoco
{
   /**
    * 实体中文名
    */
   public static final String NAME = "emp";
   /**
    * 实体表名
    */
   public static final String TABLE = "Emp";
   /**
    * 实体主键
    */
   public static final String[] KEYCOLUMN = {"empid"};
   /**
    * 实体中文字段
    */
   public static final String[] CHINESENAME = {
   		"ID",
	 	"场馆",
	 	"工号",
	 	"系统账号",
	 	"姓名",
	 	"职位",
	 	"上级",
	 	"年龄",
	 	"性别",
	 	"手机",
	 	"邮箱",
	 	"照片",
	 	"备注",
	 	"状态",
	 	"创建时间",
	 	"创建人",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
   		"empid",
	 	"empstadium",
	 	"empcode",
	 	"empsysname",
	 	"empname",
	 	"empposition",
	 	"emppposition",
	 	"empage",
	 	"empsex",
	 	"empphone",
	 	"empemail",
	 	"empimage",
	 	"empdetail",
	 	"empstatue",
	 	"empinswhen",
	 	"empinswho",
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
	 	"empsysname",
	 	"empname",
	 	"empposition",
	 	"emppposition",
	 	"empage",
	 	"empsex",
	 	"empphone",
	 	"empemail",
	 	"empimage",
	 	"empdetail",
	 	"empstatue",
	 	"empinswhen",
	 	"empinswho",
   };
}

