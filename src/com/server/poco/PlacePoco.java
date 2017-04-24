package com.server.poco;

/**
 * place 实体类的常量
 *@author ZhangRuiLong
 */
public class PlacePoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "place";
   /**
    * 实体表名
    */
   public static String TABLE = "Place";
   /**
    * 实体主键
    */
   public static String[] KEYCOLUMN = {"placeid"};
   /**
    * 实体中文字段
    */
   public static String[] CHINESENAME = {
   		"ID",
	 	"场馆",
	 	"位置",
	 	"场地",
	 	"备注",
	 	"项目",
	 	"状态",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
   		"placeid",
	 	"placestadium",
	 	"placecode",
	 	"placename",
	 	"placedetail",
	 	"placeproject",
	 	"placestatue",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " placeid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
   		"placeid",
	 	"placestadium",
	 	"placecode",
	 	"placename",
	 	"placedetail",
	 	"placeproject",
	 	"placestatue",
   };
}

