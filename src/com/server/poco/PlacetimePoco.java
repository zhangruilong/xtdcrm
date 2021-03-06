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
   public static final String NAME = "placetime";
   /**
    * 实体表名
    */
   public static final String TABLE = "Placetime";
   /**
    * 实体主键
    */
   public static final String[] KEYCOLUMN = {"placetimeid"};
   /**
    * 实体中文字段
    */
   public static final String[] CHINESENAME = {
   		"ID",
	 	"场馆",
	 	"项目",
	 	"场地",
	 	"教练",
	 	"名称",
	 	"日期",
	 	"备注",
	 	"标题",
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
	 	"placetimeplacename",
	 	"placetimecoachname",
	 	"placetimename",
	 	"placetimedate",
	 	"placetimedetail",
	 	"title",
	 	"startDate",
	 	"endDate",
	 	"description",
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
	 	"placetimedetail",
	 	"calendarId",
	 	"title",
	 	"startDate",
	 	"endDate",
	 	"description",
   };
}

