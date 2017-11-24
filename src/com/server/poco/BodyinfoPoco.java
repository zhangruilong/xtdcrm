package com.server.poco;

/**
 * bodyinfo 实体类的常量
 *@author ZhangRuiLong
 */
public class BodyinfoPoco
{
   /**
    * 实体中文名
    */
   public static final String NAME = "bodyinfo";
   /**
    * 实体表名
    */
   public static final String TABLE = "Bodyinfo";
   /**
    * 实体主键
    */
   public static final String[] KEYCOLUMN = {"bodyinfoid"};
   /**
    * 实体中文字段
    */
   public static final String[] CHINESENAME = {
   		"ID",
	 	"姓名",
	 	"手机",
	 	"身高",
	 	"体重",
	 	"身体质量参数",
	 	"骨骼肌",
	 	"脂肪",
	 	"腰臀脂肪比",
	 	"血糖",
	 	"血脂",
	 	"血压",
	 	"创建时间",
	 	"创建人",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
   		"bodyinfoid",
	 	"bodyinfoname",
	 	"bodyinfophone",
	 	"bodyinfohight",
	 	"bodyinfoweight",
	 	"bodyinfobmi",
	 	"bodyinfoggj",
	 	"bodyinfozf",
	 	"bodyinfoytzfb",
	 	"bodyinfoxt",
	 	"bodyinfoxz",
	 	"bodyinfoxy",
	 	"bodyinfoinswhen",
	 	"bodyinfoinswho",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " bodyinfoid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
   		"bodyinfoid",
	 	"bodyinfoname",
	 	"bodyinfophone",
	 	"bodyinfohight",
	 	"bodyinfoweight",
	 	"bodyinfobmi",
	 	"bodyinfoggj",
	 	"bodyinfozf",
	 	"bodyinfoytzfb",
	 	"bodyinfoxt",
	 	"bodyinfoxz",
	 	"bodyinfoxy",
	 	"bodyinfoinswhen",
	 	"bodyinfoinswho",
   };
}

