package com.server.poco;

/**
 * cardtype 实体类的常量
 *@author ZhangRuiLong
 */
public class CardtypePoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "cardtype";
   /**
    * 实体表名
    */
   public static String TABLE = "Cardtype";
   /**
    * 实体主键
    */
   public static String[] KEYCOLUMN = {"cardtypeid"};
   /**
    * 实体中文字段
    */
   public static String[] CHINESENAME = {
   		"ID",
	 	"场馆",
	 	"名称",
	 	"分类",
	 	"有效期",
	 	"价格",
	 	"次数",
	 	"停用期限",
	 	"停用费用",
	 	"备注",
	 	"状态",
	 	"场次",
	 	"项目",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
   		"cardtypeid",
	 	"cardtypestadium",
	 	"cardtypename",
	 	"cardtypeclass",
	 	"cardtypeday",
	 	"cardtypeprice",
	 	"cardtypetimes",
	 	"cardtypestop",
	 	"cardtypestopmoney",
	 	"cardtypedetail",
	 	"cardtypestatue",
	 	"cardtypechangci",
	 	"cardtypeproject",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " cardtypeid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
   		"cardtypeid",
	 	"cardtypestadium",
	 	"cardtypename",
	 	"cardtypeclass",
	 	"cardtypeday",
	 	"cardtypeprice",
	 	"cardtypetimes",
	 	"cardtypestop",
	 	"cardtypestopmoney",
	 	"cardtypedetail",
	 	"cardtypestatue",
	 	"cardtypechangci",
	 	"cardtypeproject",
   };
}

