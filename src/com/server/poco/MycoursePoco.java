package com.server.poco;

/**
 * mycourse 实体类的常量
 *@author ZhangRuiLong
 */
public class MycoursePoco
{
   /**
    * 实体中文名
    */
   public static final String NAME = "mycourse";
   /**
    * 实体表名
    */
   public static final String TABLE = "Mycourse";
   /**
    * 实体主键
    */
   public static final String[] KEYCOLUMN = {"mycourseid"};
   /**
    * 实体中文字段
    */
   public static final String[] CHINESENAME = {
   		"ID",
	 	"会员",
	 	"教练",
	 	"教练",
	 	"课程名",
	 	"课时",
	 	"剩余课时",
	 	"费用",
	 	"项目",
	 	"备注",
	 	"分类",
	 	"开始",
	 	"结束",
	 	"创建时间",
	 	"更新时间",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
   		"mycourseid",
	 	"mycoursecustomer",
	 	"mycoursecoach",
	 	"mycoursecoachname",
	 	"mycoursename",
	 	"mycoursenum",
	 	"mycoursenuma",
	 	"mycoursemoney",
	 	"mycourseproject",
	 	"mycoursedetail",
	 	"mycoursetype",
	 	"mycoursebegin",
	 	"mycourseend",
	 	"mycourseinswhen",
	 	"mycourseupdwhen",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " mycourseid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
   		"mycourseid",
	 	"mycoursecustomer",
	 	"mycoursecoach",
	 	"mycoursecoachname",
	 	"mycoursename",
	 	"mycoursenum",
	 	"mycoursenuma",
	 	"mycoursemoney",
	 	"mycourseproject",
	 	"mycoursedetail",
	 	"mycoursetype",
	 	"mycoursebegin",
	 	"mycourseend",
	 	"mycourseinswhen",
	 	"mycourseupdwhen",
   };
}

