package com.server.poco;

/**
 * notesmoneys 实体类的常量
 *@author ZhangRuiLong
 */
public class NotesmoneysPoco
{
   /**
    * 实体中文名
    */
   public static final String NAME = "notesmoneys";
   /**
    * 实体表名
    */
   public static final String TABLE = "Notesmoneys";
   /**
    * 实体主键
    */
   public static final String[] KEYCOLUMN = {"notesid"};
   /**
    * 实体中文字段
    */
   public static final String[] CHINESENAME = {
   		"ID",
	 	"会员",
	 	"会员卡",
	 	"场馆",
	 	"教练",
	 	"课程",
	 	"notesmoney",
	 	"事件",
	 	"详细",
	 	"分类",
	 	"创建时间",
	 	"创建人",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
   		"notesid",
	 	"notescustomer",
	 	"notescard",
	 	"notesstadium",
	 	"notescoach",
	 	"notescourse",
	 	"notesmoney",
	 	"notesname",
	 	"notesdetail",
	 	"notestype",
	 	"notesinswhen",
	 	"notesinswho",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " notesid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
   		"notesid",
	 	"notescustomer",
	 	"notescard",
	 	"notesstadium",
	 	"notescoach",
	 	"notescourse",
	 	"notesmoney",
	 	"notesname",
	 	"notesdetail",
	 	"notestype",
	 	"notesinswhen",
	 	"notesinswho",
   };
}

