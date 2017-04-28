package com.server.poco;

/**
 * goods 实体类的常量
 *@author ZhangRuiLong
 */
public class GoodsPoco
{
   /**
    * 实体中文名
    */
   public static final String NAME = "goods";
   /**
    * 实体表名
    */
   public static final String TABLE = "Goods";
   /**
    * 实体主键
    */
   public static final String[] KEYCOLUMN = {"goodsid"};
   /**
    * 实体中文字段
    */
   public static final String[] CHINESENAME = {
   		"ID",
	 	"场馆",
	 	"编码",
	 	"名称",
	 	"分类",
	 	"现价",
	 	"原价",
	 	"库存",
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
   		"goodsid",
	 	"goodsstadium",
	 	"goodscode",
	 	"goodsname",
	 	"goodsclass",
	 	"goodsprice",
	 	"goodsorgprice",
	 	"goodsnum",
	 	"goodsimage",
	 	"goodsdetail",
	 	"goodsstatue",
	 	"goodsinswhen",
	 	"goodsinswho",
	 	"goodsupdwhen",
	 	"goodsupdwho",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " goodsid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
   		"goodsid",
	 	"goodsstadium",
	 	"goodscode",
	 	"goodsname",
	 	"goodsclass",
	 	"goodsprice",
	 	"goodsorgprice",
	 	"goodsnum",
	 	"goodsimage",
	 	"goodsdetail",
	 	"goodsstatue",
	 	"goodsinswhen",
	 	"goodsinswho",
	 	"goodsupdwhen",
	 	"goodsupdwho",
   };
}

