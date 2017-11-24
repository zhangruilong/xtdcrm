Ext.onReady(function() {
	var Customerclassify = "customer";
	var Customertitle = "当前位置:业务管理》" + Customerclassify;
	var Customeraction = "CustomerService.do";
	var Customerfields = ['customerid'
	        			    ,'customerstadium' 
	        			    ,'openid' 
	        			    ,'customercode' 
	        			    ,'customername' 
	        			    ,'customersex' 
	        			    ,'customerage' 
	        			    ,'customercdcard' 
	        			    ,'customerhome' 
	        			    ,'customercompany' 
	        			    ,'customerphone' 
	        			    ,'customerbirthday' 
	        			    ,'customeremail' 
	        			    ,'customerhow' 
	        			    ,'customerimage' 
	        			    ,'customeremp' 
	        			    ,'customerdetail' 
	        			    ,'customerstatue' 
	        			    ,'customerinswhen' 
	        			    ,'customerinswho' 
	        			    ,'customerupdwhen' 
	        			    ,'customerupdwho' 
	        			      ];// 全部字段
	var Customerkeycolumn = [ 'customerid' ];// 主键
	var Customerstore = dataStore(Customerfields, basePath + Customeraction + "?method=selQuery1");// 定义Customerstore
	var Customerbbar = pagesizebar(Customerstore);//定义分页
	var Customergrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Customertitle,
		store : Customerstore,
		bbar : Customerbbar,
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
			dataIndex : 'customerid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '场馆',
			dataIndex : 'customerstadium',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '姓名',
			dataIndex : 'customername',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '性别',
			dataIndex : 'customersex',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '手机',
			dataIndex : 'customerphone',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '到店频次',
			dataIndex : 'customerbirthday',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		],
		tbar : [{
				xtype : 'textfield',
				id : 'queryCustomeraction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Customerstore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryCustomeraction").getValue()
									}
							});
						}
					}
				}
			},{
				xtype : 'textfield',
				id : 'queryCustomeraction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Customerstore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryCustomeraction").getValue()
									}
							});
						}
					}
				}
			},{
				xtype : 'datefield',
				fieldLabel : '开始时间'
			},{
				xtype : 'datefield',
				fieldLabel : '结束时间'
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Customerstore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryCustomeraction").getValue()
							}
					});
				}
			}
		]
	});
	Customergrid.region = 'center';
	Customerstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Customergrid ]
	});
})
