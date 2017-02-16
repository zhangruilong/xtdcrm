package com.server.poco;

/**
 * cuscardchange 实体类的常量
 *@author ZhangRuiLong
 */
public class CuscardchangePoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "cuscardchange";
   /**
    * 实体表名
    */
   public static String TABLE = "Cuscardchange";
   /**
    * 实体主键
    */
   public static String[] KEYCOLUMN = {"cuscardid"};
   /**
    * 实体中文字段
    */
   public static String[] CHINESENAME = {
   		"ID",
	 	"会员ID",
	 	"分类",
	 	"卡号",
	 	"新卡号",
	 	"密码",
	 	"有效期开始",
	 	"有效期结束",
	 	"卡余额",
	 	"卡总次数",
	 	"卡余次",
	 	"卡积分",
	 	"备注",
	 	"状态",
	 	"创建时间",
	 	"创建人",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
   		"cuscardid",
	 	"cuscardcustomer",
	 	"cuscardtype",
	 	"cuscardno",
	 	"cuscardnonew",
	 	"cuscardpsw",
	 	"cuscardbegin",
	 	"cuscardend",
	 	"cuscardmoney",
	 	"cuscardnums",
	 	"cuscardtimes",
	 	"cuscardint",
	 	"cuscarddetail",
	 	"cuscardstatue",
	 	"createtime",
	 	"creator",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " cuscardid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
   		"cuscardid",
	 	"cuscardcustomer",
	 	"cuscardtype",
	 	"cuscardno",
	 	"cuscardnonew",
	 	"cuscardpsw",
	 	"cuscardbegin",
	 	"cuscardend",
	 	"cuscardmoney",
	 	"cuscardnums",
	 	"cuscardtimes",
	 	"cuscardint",
	 	"cuscarddetail",
	 	"cuscardstatue",
	 	"createtime",
	 	"creator",
   };
}

