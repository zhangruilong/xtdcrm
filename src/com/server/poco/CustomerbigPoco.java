package com.server.poco;

/**
 * customerbig 实体类的常量
 *@author ZhangRuiLong
 */
public class CustomerbigPoco
{
   /**
    * 实体中文名
    */
   public static final String NAME = "customerbig";
   /**
    * 实体表名
    */
   public static final String TABLE = "Customerbig";
   /**
    * 实体主键
    */
   public static final String[] KEYCOLUMN = {"cuscardid"};
   /**
    * 实体中文字段
    */
   public static final String[] CHINESENAME = {
   		"ID",
	 	"公司",
	 	"场馆",
	 	"起始卡号",
	 	"发卡数量",
	 	"卡种",
	 	"有效期开始",
	 	"有效期结束",
	 	"价格",
	 	"刷卡总次数",
	 	"待付款",
	 	"已付款",
	 	"备注",
	 	"创建时间",
	 	"创建人",
	 	"收款时间",
	 	"收款人",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
   		"cuscardid",
	 	"cuscardcustomer",
	 	"cuscardstadium",
	 	"cuscardno",
	 	"cuscardpoint",
	 	"cuscardtypename",
	 	"cuscardbegin",
	 	"cuscardend",
	 	"cuscardmoney",
	 	"cuscardnums",
	 	"cuscardprice",
	 	"cuscardstopmoney",
	 	"cuscarddetail",
	 	"cuscardinswhen",
	 	"cuscardinswho",
	 	"cuscardupdwhen",
	 	"cuscardupdwho",
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
	 	"cuscardstadium",
	 	"cuscardno",
	 	"cuscardpoint",
	 	"cuscardtypename",
	 	"cuscardbegin",
	 	"cuscardend",
	 	"cuscardprice",
	 	"cuscardnums",
	 	"cuscardmoney",
	 	"cuscardstopmoney",
	 	"cuscarddetail",
	 	"cuscardinswhen",
	 	"cuscardinswho",
	 	"cuscardupdwhen",
	 	"cuscardupdwho",
   };
}

