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
   public static final String NAME = "appiont";
   /**
    * 实体表名
    */
   public static final String TABLE = "Appiont";
   /**
    * 实体主键
    */
   public static final String[] KEYCOLUMN = {"appointid"};
   /**
    * 实体中文字段
    */
   public static final String[] CHINESENAME = {
   		"ID",
	 	"会员",
	 	"会员卡",
	 	"场馆",
	 	"项目",
	 	"场地",
	 	"场地",
	 	"课程",
	 	"",
	 	"教练",
	 	"教练",
	 	"预约",
	 	"开始时间",
	 	"结束时间",
	 	"备注",
	 	"类型",
	 	"状态",
	 	"创建时间",
	 	"更新时间",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
   		"appointid",
	 	"appointcustomer",
	 	"appointcard",
	 	"appointstadium",
	 	"appointproject",
	 	"appointplace",
	 	"appointplacename",
	 	"appointcourse",
	 	"appointcoursename",
	 	"appointcoach",
	 	"appointcoachname",
	 	"appointdate",
	 	"appointbegin",
	 	"appointend",
	 	"appointdetail",
	 	"appointtype",
	 	"appointstatue",
	 	"appointinswhen",
	 	"appointupdwhen",
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
	 	"appointstadium",
	 	"appointproject",
	 	"appointplace",
	 	"appointplacename",
	 	"appointcourse",
	 	"appointcoursename",
	 	"appointcoach",
	 	"appointcoachname",
	 	"appointdate",
	 	"appointbegin",
	 	"appointend",
	 	"appointdetail",
	 	"appointtype",
	 	"appointstatue",
	 	"appointinswhen",
	 	"appointupdwhen",
   };
}

