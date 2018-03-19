package com.server.poco;

/**
 * orderd 实体类的常量
 *@author ZhangRuiLong
 */
public class OrderdPoco
{
   /**
    * 实体中文名
    */
   public static final String NAME = "orderd";
   /**
    * 实体表名
    */
   public static final String TABLE = "Orderd";
   /**
    * 实体主键
    */
   public static final String[] KEYCOLUMN = {"orderdid"};
   /**
    * 实体中文字段
    */
   public static final String[] CHINESENAME = {
   		"ID",
	 	"订单总表",
	 	"编码",
	 	"名称",
	 	"分类",
	 	"单价",
	 	"数量",
	 	"下单金额",
	 	"打折",
	 	"实际金额",
	 	"备注",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
   		"orderdid",
	 	"orderdorderm",
	 	"orderdcode",
	 	"orderdname",
	 	"orderdclass",
	 	"orderdprice",
	 	"orderdnum",
	 	"orderdmoney",
	 	"orderddiscount",
	 	"orderdrightmoney",
	 	"orderddetail",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " orderdid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
   		"orderdid",
	 	"orderdorderm",
	 	"orderdcode",
	 	"orderdname",
	 	"orderdclass",
	 	"orderdprice",
	 	"orderdnum",
	 	"orderdmoney",
	 	"orderddiscount",
	 	"orderdrightmoney",
	 	"orderddetail",
   };
}

