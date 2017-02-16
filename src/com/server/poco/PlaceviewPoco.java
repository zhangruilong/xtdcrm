package com.server.poco;

/**
 * placeview 实体类的常量
 *@author ZhangRuiLong
 */
public class PlaceviewPoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "placeview";
   /**
    * 实体表名
    */
   public static String TABLE = "Placeview";
   /**
    * 实体主键
    */
   public static String[] KEYCOLUMN = {"placeid"};
   /**
    * 实体中文字段
    */
   public static String[] CHINESENAME = {
   		"ID",
	 	"场馆ID",
	 	"编码",
	 	"名称",
	 	"人数",
	 	"备注",
	 	"状态",
	 	"开始时间",
	 	"结束时间",
	 	"项目",
	 	"ID",
	 	"编码",
	 	"名称",
	 	"地址",
	 	"备注",
	 	"状态",
	 	"X坐标",
	 	"Y坐标",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
   		"placeid",
	 	"placestadium",
	 	"placecode",
	 	"placename",
	 	"placepeople",
	 	"placedetail",
	 	"placestatue",
	 	"placebegin",
	 	"placeend",
	 	"placeproject",
	 	"stadiumid",
	 	"stadiumcode",
	 	"stadiumname",
	 	"stadiumaddress",
	 	"stadiumdetail",
	 	"stadiumstatue",
	 	"stadiumx",
	 	"stadiumy",
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
	 	"placepeople",
	 	"placedetail",
	 	"placestatue",
	 	"placebegin",
	 	"placeend",
	 	"placeproject",
	 	"stadiumid",
	 	"stadiumcode",
	 	"stadiumname",
	 	"stadiumaddress",
	 	"stadiumdetail",
	 	"stadiumstatue",
	 	"stadiumx",
	 	"stadiumy",
   };
}

