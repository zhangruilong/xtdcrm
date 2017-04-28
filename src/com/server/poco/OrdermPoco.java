package com.server.poco;

/**
 * orderm 实体类的常量
 *@author ZhangRuiLong
 */
public class OrdermPoco
{
   /**
    * 实体中文名
    */
   public static final String NAME = "orderm";
   /**
    * 实体表名
    */
   public static final String TABLE = "Orderm";
   /**
    * 实体主键
    */
   public static final String[] KEYCOLUMN = {"orderid"};
   /**
    * 实体中文字段
    */
   public static final String[] CHINESENAME = {
   		"ID",
	 	"场馆",
	 	"商品编码",
	 	"商品名称",
	 	"商品分类",
	 	"下单金额",
	 	"打折",
	 	"实际金额",
	 	"照片",
	 	"备注",
	 	"状态",
	 	"创建时间",
	 	"创建人",
	 	"更新时间",
	 	"更新人",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
   		"orderid",
	 	"orderstadium",
	 	"ordercode",
	 	"ordername",
	 	"orderclass",
	 	"ordermoney",
	 	"orderdiscount",
	 	"orderrightmoney",
	 	"orderimage",
	 	"orderdetail",
	 	"orderstatue",
	 	"orderinswhen",
	 	"orderinswho",
	 	"orderupdwhen",
	 	"orderupdwho",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " orderid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
   		"orderid",
	 	"orderstadium",
	 	"ordercode",
	 	"ordername",
	 	"orderclass",
	 	"ordermoney",
	 	"orderdiscount",
	 	"orderrightmoney",
	 	"orderimage",
	 	"orderdetail",
	 	"orderstatue",
	 	"orderinswhen",
	 	"orderinswho",
	 	"orderupdwhen",
	 	"orderupdwho",
   };
}

