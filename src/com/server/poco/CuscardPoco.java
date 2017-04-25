package com.server.poco;

/**
 * cuscard 实体类的常量
 *@author ZhangRuiLong
 */
public class CuscardPoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "cuscard";
   /**
    * 实体表名
    */
   public static String TABLE = "Cuscard";
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
	 	"场馆",
	 	"卡号",
	 	"卡种",
	 	"分类",
	 	"有效期",
	 	"有效期开始",
	 	"有效期结束",
	 	"价格",
	 	"抵扣",
	 	"售价",
	 	"停用期限",
	 	"停用价格",
	 	"余次",
	 	"积分",
	 	"备注",
	 	"场次",
	 	"项目",
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
   		"cuscardid",
	 	"cuscardcustomer",
	 	"cuscardstadium",
	 	"cuscardno",
	 	"cuscardtypename",
	 	"cuscardtypeclass",
	 	"cuscardday",
	 	"cuscardbegin",
	 	"cuscardend",
	 	"cuscardprice",
	 	"cuscarddikou",
	 	"cuscardmoney",
	 	"cuscardstop",
	 	"cuscardstopmoney",
	 	"cuscardtimes",
	 	"cuscardpoint",
	 	"cuscarddetail",
	 	"cuscardchangci",
	 	"cuscardproject",
	 	"cuscardstatue",
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
	 	"cuscardtypename",
	 	"cuscardtypeclass",
	 	"cuscardday",
	 	"cuscardbegin",
	 	"cuscardend",
	 	"cuscardprice",
	 	"cuscarddikou",
	 	"cuscardmoney",
	 	"cuscardstop",
	 	"cuscardstopmoney",
	 	"cuscardtimes",
	 	"cuscardpoint",
	 	"cuscarddetail",
	 	"cuscardchangci",
	 	"cuscardproject",
	 	"cuscardstatue",
	 	"cuscardinswhen",
	 	"cuscardinswho",
	 	"cuscardupdwhen",
	 	"cuscardupdwho",
   };
}

