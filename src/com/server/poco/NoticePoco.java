package com.server.poco;

/**
 * notice 实体类的常量
 *@author ZhangRuiLong
 */
public class NoticePoco
{
   /**
    * 实体中文名
    */
   public static final String NAME = "notice";
   /**
    * 实体表名
    */
   public static final String TABLE = "Notice";
   /**
    * 实体主键
    */
   public static final String[] KEYCOLUMN = {"noticeid"};
   /**
    * 实体中文字段
    */
   public static final String[] CHINESENAME = {
   		"ID",
	 	"标题",
	 	"内容",
	 	"创建时间",
	 	"创建人",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
   		"noticeid",
	 	"noticetitle",
	 	"noticedetail",
	 	"noticeinswhen",
	 	"noticeinswho",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " noticeid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
   		"noticeid",
	 	"noticetitle",
	 	"noticedetail",
	 	"noticeinswhen",
	 	"noticeinswho",
   };
}

