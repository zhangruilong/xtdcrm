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
	 	"编码",
	 	"名称",
	 	"备注",
	 	"状态",
	 	"开始时间",
	 	"结束时间",
	 	"项目",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
   		"placetimeid",
	 	"placetimecode",
	 	"placetimename",
	 	"placetimedetail",
	 	"placetimestatue",
	 	"placetimebegin",
	 	"placetimeend",
	 	"placetimeproject",
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
	 	"placetimecode",
	 	"placetimename",
	 	"placetimedetail",
	 	"placetimestatue",
	 	"placetimebegin",
	 	"placetimeend",
	 	"placetimeproject",
   };
}

