Ext.onReady(function() {
	var Cuscardclassify = "cuscard";
	var Cuscardtitle = "当前位置:业务管理》" + Cuscardclassify;
	var Cuscardaction = "CuscardService.do";
	var Cuscardfields = ['cuscardid'
	        			    ,'cuscardcustomer' 
	        			    ,'cuscardstadium' 
	        			    ,'cuscardno' 
	        			    ,'cuscardtypename' 
	        			    ,'cuscardtypeclass' 
	        			    ,'cuscardday' 
	        			    ,'cuscardbegin' 
	        			    ,'cuscardend' 
	        			    ,'cuscardprice' 
	        			    ,'cuscarddikou' 
	        			    ,'cuscardmoney' 
	        			    ,'cuscardstop' 
	        			    ,'cuscardstopmoney' 
	        			    ,'cuscardtimes' 
	        			    ,'cuscardpoint' 
	        			    ,'cuscarddetail' 
	        			    ,'cuscardchangci' 
	        			    ,'cuscardproject' 
	        			    ,'cuscardstatue' 
	        			    ,'cuscardinswhen' 
	        			    ,'cuscardinswho' 
	        			    ,'cuscardupdwhen' 
	        			    ,'cuscardupdwho' 
	        			      ];// 全部字段
	var Cuscardkeycolumn = [ 'cuscardid' ];// 主键
	var Cuscardstore = dataStore(Cuscardfields, basePath + Cuscardaction + "?method=selAll&wheresql=cuscardend<'"+getstringdate()+"'");// 定义Cuscardstore
	var Cuscardgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Cuscardtitle,
		store : Cuscardstore,
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
			dataIndex : 'cuscardid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
//		, {
//			header : '会员ID',
//			dataIndex : 'cuscardcustomer',
//			sortable : true,  
//			editor: {
//                xtype: 'textfield'
//            }
//		}
		, {
			header : '场馆',
			dataIndex : 'cuscardstadium',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '卡号',
			dataIndex : 'cuscardno',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '卡种',
			dataIndex : 'cuscardtypename',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '分类',
			dataIndex : 'cuscardtypeclass',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '有效期',
			dataIndex : 'cuscardday',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '有效期开始',
			dataIndex : 'cuscardbegin',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '有效期结束',
			dataIndex : 'cuscardend',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '价格',
			dataIndex : 'cuscardprice',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '抵扣',
			dataIndex : 'cuscarddikou',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '售价',
			dataIndex : 'cuscardmoney',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '停用期限',
			dataIndex : 'cuscardstop',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '停用价格',
			dataIndex : 'cuscardstopmoney',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '余次',
			dataIndex : 'cuscardtimes',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '积分',
			dataIndex : 'cuscardpoint',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '备注',
			dataIndex : 'cuscarddetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '场次',
			dataIndex : 'cuscardchangci',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '项目',
			dataIndex : 'cuscardproject',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '状态',
			dataIndex : 'cuscardstatue',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建时间',
			dataIndex : 'cuscardinswhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建人',
			dataIndex : 'cuscardinswho',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '更新时间',
			dataIndex : 'cuscardupdwhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '更新人',
			dataIndex : 'cuscardupdwho',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		],
		tbar : [{
				xtype : 'textfield',
				id : 'queryCuscardaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Cuscardstore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryCuscardaction").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Cuscardstore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryCuscardaction").getValue()
							}
					});
				}
			}
		]
	});
	Cuscardgrid.region = 'center';
	Cuscardstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Cuscardgrid ]
	});
})
