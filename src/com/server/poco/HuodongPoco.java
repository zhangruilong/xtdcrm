package com.server.poco;

/**
 * huodong 实体类的常量
 *@author ZhangRuiLong
 */
public class HuodongPoco
{
   /**
    * 实体中文名
    */
   public static final String NAME = "huodong";
   /**
    * 实体表名
    */
   public static final String TABLE = "Huodong";
   /**
    * 实体主键
    */
   public static final String[] KEYCOLUMN = {"huodongid"};
   /**
    * 实体中文字段
    */
   public static final String[] CHINESENAME = {
   		"ID",
	 	"场馆",
	 	"优惠码",
	 	"名称",
	 	"项目",
	 	"卡种",
	 	"数量",
	 	"开始",
	 	"结束",
	 	"折让",
	 	"状态",
	 	"创建时间",
	 	"创建人",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
   		"huodongid",
	 	"huodongstadium",
	 	"huodongcode",
	 	"huodongname",
	 	"huodongcardtype",
	 	"huodongcardtypename",
	 	"huodongnum",
	 	"huodongbegin",
	 	"huodongend",
	 	"huodongmoney",
	 	"huodongstatue",
	 	"huodonginswhen",
	 	"huodonginswho",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " huodongid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
   		"huodongid",
	 	"huodongstadium",
	 	"huodongcode",
	 	"huodongname",
	 	"huodongcardtype",
	 	"huodongcardtypename",
	 	"huodongnum",
	 	"huodongbegin",
	 	"huodongend",
	 	"huodongmoney",
	 	"huodongstatue",
	 	"huodonginswhen",
	 	"huodonginswho",
   };
}

