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
	 	"客户",
	 	"手机",
	 	"下单金额",
	 	"打折",
	 	"实际金额",
	 	"备注",
	 	"状态",
	 	"创建时间",
	 	"创建人",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
   		"orderid",
	 	"orderstadium",
	 	"ordercustomer",
	 	"orderphone",
	 	"ordermoney",
	 	"orderdiscount",
	 	"orderrightmoney",
	 	"orderdetail",
	 	"orderstatue",
	 	"orderinswhen",
	 	"orderinswho",
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
	 	"ordercustomer",
	 	"orderphone",
	 	"ordermoney",
	 	"orderdiscount",
	 	"orderrightmoney",
	 	"orderdetail",
	 	"orderstatue",
	 	"orderinswhen",
	 	"orderinswho",
   };
}

