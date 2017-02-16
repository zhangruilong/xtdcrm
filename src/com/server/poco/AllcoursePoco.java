package com.server.poco;

/**
 * allcourse 实体类的常量
 *@author ZhangRuiLong
 */
public class AllcoursePoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "allcourse";
   /**
    * 实体表名
    */
   public static String TABLE = "Allcourse";
   /**
    * 实体主键
    */
   public static String[] KEYCOLUMN = {"allcourseid"};
   /**
    * 实体中文字段
    */
   public static String[] CHINESENAME = {
   		"ID",
	 	"教练ID",
	 	"课程名",
	 	"项目",
	 	"课时",
	 	"费用",
	 	"创建时间",
	 	"创建人",
	 	"更新时间",
	 	"更新人",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
   		"allcourseid",
	 	"allcoursecoach",
	 	"allcoursename",
	 	"allcourseproject",
	 	"allcoursenum",
	 	"allcoursemoney",
	 	"createtime",
	 	"creator",
	 	"updtime",
	 	"updor",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " allcourseid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
   		"allcourseid",
	 	"allcoursecoach",
	 	"allcoursename",
	 	"allcourseproject",
	 	"allcoursenum",
	 	"allcoursemoney",
	 	"createtime",
	 	"creator",
	 	"updtime",
	 	"updor",
   };
}

