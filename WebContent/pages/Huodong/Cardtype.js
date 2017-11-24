function selectCardtype() {
	var Cardtypeclassify = "卡种";
	var Cardtypetitle = "当前位置:业务管理》" + Cardtypeclassify;
	var Cardtypeaction = "CardtypeService.do";
	var Cardtypefields = ['cardtypeid'
	        			    ,'cardtypestadium' 
	        			    ,'cardtypename' 
	        			    ,'cardtypeclass' 
	        			    ,'cardtypeday' 
	        			    ,'cardtypeprice' 
	        			    ,'cardtypetimes' 
	        			    ,'cardtypestop' 
	        			    ,'cardtypestopmoney' 
	        			    ,'cardtypedetail' 
	        			    ,'cardtypestatue' 
	        			    ,'cardtypechangci' 
	        			    ,'cardtypeproject' 
	        			      ];// 全部字段
	var Cardtypekeycolumn = [ 'cardtypeid' ];// 主键
	var Cardtypestore = dataStore(Cardtypefields, basePath + Cardtypeaction + "?method=selQuery");// 定义Cardtypestore
	var Cardtypebbar = pagesizebar(Cardtypestore);//定义分页
	var Cardtypegrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Cardtypetitle,
		store : Cardtypestore,
		bbar : Cardtypebbar,
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
			dataIndex : 'cardtypeid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '场馆',
			dataIndex : 'cardtypestadium',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '名称',
			dataIndex : 'cardtypename',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '分类',
			dataIndex : 'cardtypeclass',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '有效期',
			dataIndex : 'cardtypeday',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '价格',
			dataIndex : 'cardtypeprice',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '次数',
			dataIndex : 'cardtypetimes',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '停用期限',
			dataIndex : 'cardtypestop',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '停用费用',
			dataIndex : 'cardtypestopmoney',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '备注',
			dataIndex : 'cardtypedetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '状态',
			dataIndex : 'cardtypestatue',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '场次',
			dataIndex : 'cardtypechangci',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '项目',
			dataIndex : 'cardtypeproject',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		],
		tbar : [{
				xtype : 'textfield',
				id : 'queryCardtypeaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Cardtypestore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryCardtypeaction").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Cardtypestore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryCardtypeaction").getValue()
							}
					});
				}
			}
		]
	});
	Cardtypegrid.region = 'center';
	Cardtypestore.on("beforeload",function(){ 
		Cardtypestore.getProxy().extraParams = {
				json : queryjson,
				query : Ext.getCmp("queryCardtypeaction").getValue()
		}; 
	});
	Cardtypestore.load();//加载数据
	var selectgridWindow = new Ext.Window({
		layout : 'fit', // 设置窗口布局模式
		width : 620, // 窗口宽度
		height : 580, // 窗口高度
		modal : true,
		title : Cardtypetitle,
		//closeAction: 'hide',
		closable : true, // 是否可关闭
		collapsible : true, // 是否可收缩
		maximizable : true, // 设置是否可以最大化
		border : false, // 边框线设置
		constrain : true, // 设置窗口是否可以溢出父容器
		animateTarget : Ext.getBody(),
		pageY : 50, // 页面定位Y坐标
		pageX : document.body.clientWidth / 2 - 620 / 2, // 页面定位X坐标
		items : Cardtypegrid, // 嵌入的表单面板
		buttons : [
					{
						text : '确定',
						iconCls : 'ok',
						handler : function() {
							var selectRows = Cardtypegrid.getSelection();
							if (selectRows.length != 1) {
								Ext.Msg.alert('提示', '请选择一条！', function() {
								});
								return;
							} 
							Ext.getCmp('Huodonghuodongcardtypename').setValue(selectRows[0].get("cardtypename"));
							selectgridWindow.close();
						}
					}, '-', {
						text : '关闭',
						iconCls : 'close',
						handler : function() {
							selectgridWindow.close();
						}
					}]
	});
	selectgridWindow.show();
}
