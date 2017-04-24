package com.server.poco;

/**
 * stadium 实体类的常量
 *@author ZhangRuiLong
 */
public class StadiumPoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "stadium";
   /**
    * 实体表名
    */
   public static String TABLE = "Stadium";
   /**
    * 实体主键
    */
   public static String[] KEYCOLUMN = {"stadiumid"};
   /**
    * 实体中文字段
    */
   public static String[] CHINESENAME = {
   		"ID",
	 	"编码",
	 	"名称",
	 	"地址",
	 	"备注",
	 	"照片",
	 	"X坐标",
	 	"Y坐标",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
   		"stadiumid",
	 	"stadiumcode",
	 	"stadiumname",
	 	"stadiumaddress",
	 	"stadiumdetail",
	 	"stadiumimage",
	 	"stadiumx",
	 	"stadiumy",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " stadiumid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
   		"stadiumid",
	 	"stadiumcode",
	 	"stadiumname",
	 	"stadiumaddress",
	 	"stadiumdetail",
	 	"stadiumimage",
	 	"stadiumx",
	 	"stadiumy",
   };
}

