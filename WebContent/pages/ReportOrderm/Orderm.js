Ext.onReady(function() {
	var Ordermclassify = "orderm";
	var Ordermtitle = "当前位置:业务管理》" + Ordermclassify;
	var Ordermaction = "OrdermService.do";
	var Ordermfields = ['orderid'
	        			    ,'orderstadium' 
	        			    ,'ordercode' 
	        			    ,'ordername' 
	        			    ,'orderclass' 
	        			    ,'ordermoney' 
	        			    ,'orderdiscount' 
	        			    ,'orderrightmoney' 
	        			    ,'orderimage' 
	        			    ,'orderdetail' 
	        			    ,'orderstatue' 
	        			    ,'orderinswhen' 
	        			    ,'orderinswho' 
	        			    ,'orderupdwhen' 
	        			    ,'orderupdwho' 
	        			      ];// 全部字段
	var Ordermkeycolumn = [ 'orderid' ];// 主键
	var Ordermstore = dataStore(Ordermfields, basePath + Ordermaction + "?method=selReport");// 定义Ordermstore
	var Ordermgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Ordermtitle,
		store : Ordermstore,
	    selModel: {
	        type: 'checkboxmodel'
	    },
	    plugins: {
	         ptype: 'cellediting',
	         clicksToEdit: 1
	    },
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : 'ID',
			dataIndex : 'orderid',
			hidden : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '场馆',
			dataIndex : 'orderstadium',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '商品编码',
			dataIndex : 'ordercode',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '商品名称',
			dataIndex : 'ordername',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '商品分类',
			dataIndex : 'orderclass',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '下单金额',
			dataIndex : 'ordermoney',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '打折',
			dataIndex : 'orderdiscount',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '实际金额',
			dataIndex : 'orderrightmoney',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		],
		tbar : [{
				xtype : 'textfield',
				id : 'queryOrdermaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Ordermstore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryOrdermaction").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Ordermstore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryOrdermaction").getValue()
							}
					});
				}
			}
		]
	});
	Ordermgrid.region = 'center';
	Ordermstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Ordermgrid ]
	});
})
