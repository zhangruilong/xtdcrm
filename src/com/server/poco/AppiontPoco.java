package com.server.poco;

/**
 * appiont 实体类的常量
 *@author ZhangRuiLong
 */
public class AppiontPoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "appiont";
   /**
    * 实体表名
    */
   public static String TABLE = "Appiont";
   /**
    * 实体主键
    */
   public static String[] KEYCOLUMN = {"appointid"};
   /**
    * 实体中文字段
    */
   public static String[] CHINESENAME = {
   		"ID",
	 	"会员ID",
	 	"会员卡ID",
	 	"场地ID",
	 	"课程ID",
	 	"场地",
	 	"课程",
	 	"教练",
	 	"项目",
	 	"开始时间",
	 	"结束时间",
	 	"备注",
	 	"状态",
	 	"创建时间",
	 	"创建人",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
   		"appointid",
	 	"appointcustomer",
	 	"appointcard",
	 	"appointplace",
	 	"appointcourse",
	 	"appointplacename",
	 	"appointcoursename",
	 	"appointcoachname",
	 	"appointproject",
	 	"appointbegin",
	 	"appointend",
	 	"appointdetail",
	 	"appointstatue",
	 	"createtime",
	 	"creator",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " appointid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
   		"appointid",
	 	"appointcustomer",
	 	"appointcard",
	 	"appointplace",
	 	"appointcourse",
	 	"appointplacename",
	 	"appointcoursename",
	 	"appointcoachname",
	 	"appointproject",
	 	"appointbegin",
	 	"appointend",
	 	"appointdetail",
	 	"appointstatue",
	 	"createtime",
	 	"creator",
   };
}

