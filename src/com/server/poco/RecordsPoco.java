package com.server.poco;

/**
 * records 实体类的常量
 *@author ZhangRuiLong
 */
public class RecordsPoco
{
   /**
    * 实体中文名
    */
   public static final String NAME = "records";
   /**
    * 实体表名
    */
   public static final String TABLE = "Records";
   /**
    * 实体主键
    */
   public static final String[] KEYCOLUMN = {"recordsid"};
   /**
    * 实体中文字段
    */
   public static final String[] CHINESENAME = {
   		"ID",
	 	"客户",
	 	"会籍",
	 	"步骤",
	 	"内容",
	 	"创建时间",
	 	"创建人",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
   		"recordsid",
	 	"recordscustomer",
	 	"recordsemp",
	 	"recordstitle",
	 	"recordsdetail",
	 	"recordsinswhen",
	 	"recordsinswho",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " recordsid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
   		"recordsid",
	 	"recordscustomer",
	 	"recordsemp",
	 	"recordstitle",
	 	"recordsdetail",
	 	"recordsinswhen",
	 	"recordsinswho",
   };
}

