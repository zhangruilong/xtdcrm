package com.server.pojo;

import java.sql.Timestamp;
import java.math.BigDecimal;
/**
 * goods 实体类
 *@author ZhangRuiLong
 */
public class Goods
{
   /**
    * ID,主键
    */
   private String goodsid; 
   /**
    * 场馆
    */
   private String goodsstadium;   
   /**
    * 编码
    */
   private String goodscode;   
   /**
    * 名称
    */
   private String goodsname;   
   /**
    * 分类
    */
   private String goodsclass;   
   /**
    * 现价
    */
   private String goodsprice;   
   /**
    * 原价
    */
   private String goodsorgprice;   
   /**
    * 库存
    */
   private String goodsnum;   
   /**
    * 照片
    */
   private String goodsimage;   
   /**
    * 备注
    */
   private String goodsdetail;   
   /**
    * 状态
    */
   private String goodsstatue;   
   /**
    * 创建时间
    */
   private String goodsinswhen;   
   /**
    * 创建人
    */
   private String goodsinswho;   
   /**
    * 更新时间
    */
   private String goodsupdwhen;   
   /**
    * 更新人
    */
   private String goodsupdwho;   
    //属性方法	    
     /**
	 *设置主键"ID"属性
	 *@param goodsid 实体的Goodsid属性
	 */
	public void setGoodsid(String goodsid)
	{
		this.goodsid = goodsid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getGoodsid()
	{
		return this.goodsid;
	}

	/**
	 *设置"场馆"属性
	 *@param goodsstadium 实体的Goodsstadium属性
	 */
	public void setGoodsstadium(String goodsstadium)
	{
		this.goodsstadium = goodsstadium;
	}
	
	/**
	 *获取"场馆"属性
	 */
	public String getGoodsstadium()
	{
		return this.goodsstadium;
	}	   

	/**
	 *设置"编码"属性
	 *@param goodscode 实体的Goodscode属性
	 */
	public void setGoodscode(String goodscode)
	{
		this.goodscode = goodscode;
	}
	
	/**
	 *获取"编码"属性
	 */
	public String getGoodscode()
	{
		return this.goodscode;
	}	   

	/**
	 *设置"名称"属性
	 *@param goodsname 实体的Goodsname属性
	 */
	public void setGoodsname(String goodsname)
	{
		this.goodsname = goodsname;
	}
	
	/**
	 *获取"名称"属性
	 */
	public String getGoodsname()
	{
		return this.goodsname;
	}	   

	/**
	 *设置"分类"属性
	 *@param goodsclass 实体的Goodsclass属性
	 */
	public void setGoodsclass(String goodsclass)
	{
		this.goodsclass = goodsclass;
	}
	
	/**
	 *获取"分类"属性
	 */
	public String getGoodsclass()
	{
		return this.goodsclass;
	}	   

	/**
	 *设置"现价"属性
	 *@param goodsprice 实体的Goodsprice属性
	 */
	public void setGoodsprice(String goodsprice)
	{
		this.goodsprice = goodsprice;
	}
	
	/**
	 *获取"现价"属性
	 */
	public String getGoodsprice()
	{
		return this.goodsprice;
	}	   

	/**
	 *设置"原价"属性
	 *@param goodsorgprice 实体的Goodsorgprice属性
	 */
	public void setGoodsorgprice(String goodsorgprice)
	{
		this.goodsorgprice = goodsorgprice;
	}
	
	/**
	 *获取"原价"属性
	 */
	public String getGoodsorgprice()
	{
		return this.goodsorgprice;
	}	   

	/**
	 *设置"库存"属性
	 *@param goodsnum 实体的Goodsnum属性
	 */
	public void setGoodsnum(String goodsnum)
	{
		this.goodsnum = goodsnum;
	}
	
	/**
	 *获取"库存"属性
	 */
	public String getGoodsnum()
	{
		return this.goodsnum;
	}	   

	/**
	 *设置"照片"属性
	 *@param goodsimage 实体的Goodsimage属性
	 */
	public void setGoodsimage(String goodsimage)
	{
		this.goodsimage = goodsimage;
	}
	
	/**
	 *获取"照片"属性
	 */
	public String getGoodsimage()
	{
		return this.goodsimage;
	}	   

	/**
	 *设置"备注"属性
	 *@param goodsdetail 实体的Goodsdetail属性
	 */
	public void setGoodsdetail(String goodsdetail)
	{
		this.goodsdetail = goodsdetail;
	}
	
	/**
	 *获取"备注"属性
	 */
	public String getGoodsdetail()
	{
		return this.goodsdetail;
	}	   

	/**
	 *设置"状态"属性
	 *@param goodsstatue 实体的Goodsstatue属性
	 */
	public void setGoodsstatue(String goodsstatue)
	{
		this.goodsstatue = goodsstatue;
	}
	
	/**
	 *获取"状态"属性
	 */
	public String getGoodsstatue()
	{
		return this.goodsstatue;
	}	   

	/**
	 *设置"创建时间"属性
	 *@param goodsinswhen 实体的Goodsinswhen属性
	 */
	public void setGoodsinswhen(String goodsinswhen)
	{
		this.goodsinswhen = goodsinswhen;
	}
	
	/**
	 *获取"创建时间"属性
	 */
	public String getGoodsinswhen()
	{
		return this.goodsinswhen;
	}	   

	/**
	 *设置"创建人"属性
	 *@param goodsinswho 实体的Goodsinswho属性
	 */
	public void setGoodsinswho(String goodsinswho)
	{
		this.goodsinswho = goodsinswho;
	}
	
	/**
	 *获取"创建人"属性
	 */
	public String getGoodsinswho()
	{
		return this.goodsinswho;
	}	   

	/**
	 *设置"更新时间"属性
	 *@param goodsupdwhen 实体的Goodsupdwhen属性
	 */
	public void setGoodsupdwhen(String goodsupdwhen)
	{
		this.goodsupdwhen = goodsupdwhen;
	}
	
	/**
	 *获取"更新时间"属性
	 */
	public String getGoodsupdwhen()
	{
		return this.goodsupdwhen;
	}	   

	/**
	 *设置"更新人"属性
	 *@param goodsupdwho 实体的Goodsupdwho属性
	 */
	public void setGoodsupdwho(String goodsupdwho)
	{
		this.goodsupdwho = goodsupdwho;
	}
	
	/**
	 *获取"更新人"属性
	 */
	public String getGoodsupdwho()
	{
		return this.goodsupdwho;
	}	   
	public Goods() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Goods(
		String goodsid
	 	,String goodsstadium
	 	,String goodscode
	 	,String goodsname
	 	,String goodsclass
	 	,String goodsprice
	 	,String goodsorgprice
	 	,String goodsnum
	 	,String goodsimage
	 	,String goodsdetail
	 	,String goodsstatue
	 	,String goodsinswhen
	 	,String goodsinswho
	 	,String goodsupdwhen
	 	,String goodsupdwho
		 ){
		super();
		this.goodsid = goodsid;
	 	this.goodsstadium = goodsstadium;
	 	this.goodscode = goodscode;
	 	this.goodsname = goodsname;
	 	this.goodsclass = goodsclass;
	 	this.goodsprice = goodsprice;
	 	this.goodsorgprice = goodsorgprice;
	 	this.goodsnum = goodsnum;
	 	this.goodsimage = goodsimage;
	 	this.goodsdetail = goodsdetail;
	 	this.goodsstatue = goodsstatue;
	 	this.goodsinswhen = goodsinswhen;
	 	this.goodsinswho = goodsinswho;
	 	this.goodsupdwhen = goodsupdwhen;
	 	this.goodsupdwho = goodsupdwho;
	}
}

