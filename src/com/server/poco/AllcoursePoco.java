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
	 	"场馆",
	 	"教练",
	 	"教练",
	 	"课程名",
	 	"课时",
	 	"费用",
	 	"项目",
	 	"备注",
	 	"分类",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
   		"allcourseid",
	 	"allcoursestadium",
	 	"allcoursecoach",
	 	"allcoursecoachname",
	 	"allcoursename",
	 	"allcoursenum",
	 	"allcoursemoney",
	 	"allcourseproject",
	 	"allcoursedetail",
	 	"allcoursetype",
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
	 	"allcoursestadium",
	 	"allcoursecoach",
	 	"allcoursecoachname",
	 	"allcoursename",
	 	"allcoursenum",
	 	"allcoursemoney",
	 	"allcourseproject",
	 	"allcoursedetail",
	 	"allcoursetype",
   };
}

