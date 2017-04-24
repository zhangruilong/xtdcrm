package com.server.poco;

/**
 * placetime 实体类的常量
 *@author ZhangRuiLong
 */
public class PlacetimePoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "placetime";
   /**
    * 实体表名
    */
   public static String TABLE = "Placetime";
   /**
    * 实体主键
    */
   public static String[] KEYCOLUMN = {"placetimeid"};
   /**
    * 实体中文字段
    */
   public static String[] CHINESENAME = {
   		"ID",
	 	"场馆",
	 	"项目",
	 	"场地",
	 	"场地",
	 	"教练",
	 	"教练",
	 	"名称",
	 	"日期",
	 	"开始时间",
	 	"结束时间",
	 	"备注",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
   		"placetimeid",
	 	"placetimestadium",
	 	"placetimeproject",
	 	"placetimeplace",
	 	"placetimeplacename",
	 	"placetimecoach",
	 	"placetimecoachname",
	 	"placetimename",
	 	"placetimedate",
	 	"placetimebegin",
	 	"placetimeend",
	 	"placetimedetail",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " placetimeid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
   		"placetimeid",
	 	"placetimestadium",
	 	"placetimeproject",
	 	"placetimeplace",
	 	"placetimeplacename",
	 	"placetimecoach",
	 	"placetimecoachname",
	 	"placetimename",
	 	"placetimedate",
	 	"placetimebegin",
	 	"placetimeend",
	 	"placetimedetail",
   };
}

