package com.server.poco;

/**
 * compet 实体类的常量
 *@author ZhangRuiLong
 */
public class CompetPoco
{
   /**
    * 实体中文名
    */
   public static final String NAME = "compet";
   /**
    * 实体表名
    */
   public static final String TABLE = "Compet";
   /**
    * 实体主键
    */
   public static final String[] KEYCOLUMN = {"competid"};
   /**
    * 实体中文字段
    */
   public static final String[] CHINESENAME = {
   		"id",
	 	"公司",
	 	"产品种类",
	 	"影响",
	 	"备注",
	 	"创建时间",
	 	"创建人",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
   		"competid",
	 	"competcompany",
	 	"competproduct",
	 	"compethappen",
	 	"competdetail",
	 	"competinswhen",
	 	"competinswho",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " competid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
   		"competid",
	 	"competcompany",
	 	"competproduct",
	 	"compethappen",
	 	"competdetail",
	 	"competinswhen",
	 	"competinswho",
   };
}

