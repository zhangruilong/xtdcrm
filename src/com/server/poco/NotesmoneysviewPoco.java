package com.server.poco;

/**
 * notesmoneysview 实体类的常量
 *@author ZhangRuiLong
 */
public class NotesmoneysviewPoco
{
   /**
    * 实体中文名
    */
   public static final String NAME = "notesmoneysview";
   /**
    * 实体表名
    */
   public static final String TABLE = "Notesmoneysview";
   /**
    * 实体主键
    */
   public static final String[] KEYCOLUMN = {"notesid"};
   /**
    * 实体中文字段
    */
   public static final String[] CHINESENAME = {
   		"ID",
	 	"会员",
	 	"会员卡",
	 	"场馆",
	 	"教练",
	 	"课程",
	 	"金额",
	 	"事件",
	 	"详细",
	 	"分类",
	 	"创建时间",
	 	"创建人",
	 	"姓名",
	 	"性别",
	 	"年龄",
	 	"身份证",
	 	"单位",
	 	"手机",
	 	"会籍管家",
	 	"备注",
	 	"状态",
	 	"ID",
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
	 	"卡种次数",
	 	"余次",
	 	"积分",
	 	"备注",
	 	"场次",
	 	"项目",
	 	"状态",
	 	"创建时间",
	 	"创建人",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
   		"notesid",
	 	"notescustomer",
	 	"notescard",
	 	"notesstadium",
	 	"notescoach",
	 	"notescourse",
	 	"notesmoney",
	 	"notesname",
	 	"notesdetail",
	 	"notestype",
	 	"notesinswhen",
	 	"notesinswho",
	 	"customername",
	 	"customersex",
	 	"customerage",
	 	"customercdcard",
	 	"customercompany",
	 	"customerphone",
	 	"customeremp",
	 	"customerdetail",
	 	"customerstatue",
	 	"cuscardid",
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
	 	"cuscardnums",
	 	"cuscardtimes",
	 	"cuscardpoint",
	 	"cuscarddetail",
	 	"cuscardchangci",
	 	"cuscardproject",
	 	"cuscardstatue",
	 	"cuscardinswhen",
	 	"cuscardinswho",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " notesid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
   		"notesid",
	 	"notescustomer",
	 	"notescard",
	 	"notesstadium",
	 	"notescoach",
	 	"notescourse",
	 	"notesmoney",
	 	"notesname",
	 	"notesdetail",
	 	"notestype",
	 	"notesinswhen",
	 	"notesinswho",
	 	"customername",
	 	"customerphone",
	 	"cuscardno",
	 	"cuscardtypename",
   };
}

