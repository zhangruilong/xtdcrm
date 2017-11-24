package com.server.poco;

/**
 * coachcourse 实体类的常量
 *@author ZhangRuiLong
 */
public class CoachcoursePoco
{
   /**
    * 实体中文名
    */
   public static final String NAME = "coachcourse";
   /**
    * 实体表名
    */
   public static final String TABLE = "Coachcourse";
   /**
    * 实体主键
    */
   public static final String[] KEYCOLUMN = {"coachcourseid"};
   /**
    * 实体中文字段
    */
   public static final String[] CHINESENAME = {
   		"ID",
	 	"场馆",
	 	"名称",
	 	"单节价格",
	 	"项目",
	 	"备注",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
   		"coachcourseid",
	 	"coachcoursestadium",
	 	"coachcoursename",
	 	"coachcoursemoney",
	 	"coachcourseproject",
	 	"coachcoursedetail",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " coachcourseid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
   		"coachcourseid",
	 	"coachcoursestadium",
	 	"coachcoursename",
	 	"coachcoursemoney",
	 	"coachcourseproject",
	 	"coachcoursedetail",
   };
}

