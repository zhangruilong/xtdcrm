package com.server.poco;

/**
 * tuifei 实体类的常量
 *@author ZhangRuiLong
 */
public class TuifeiPoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "tuifei";
   /**
    * 实体表名
    */
   public static String TABLE = "Tuifei";
   /**
    * 实体主键
    */
   public static String[] KEYCOLUMN = {"tuifeiid"};
   /**
    * 实体中文字段
    */
   public static String[] CHINESENAME = {
   		"ID",
	 	"场馆",
	 	"名称",
	 	"备注",
	 	"金额",
	 	"创建时间",
	 	"创建人",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
   		"tuifeiid",
	 	"tuifeistadium",
	 	"tuifeiname",
	 	"tuifeidetail",
	 	"tuifeimoney",
	 	"tuifeiinswhen",
	 	"tuifeiinswho",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " tuifeiid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
   		"tuifeiid",
	 	"tuifeistadium",
	 	"tuifeiname",
	 	"tuifeidetail",
	 	"tuifeimoney",
	 	"tuifeiinswhen",
	 	"tuifeiinswho",
   };
}

