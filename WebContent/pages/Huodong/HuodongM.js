Ext.onReady(function() {
	var wheresql = "";
	if(!isnull(currentuser.roledetail)) wheresql="huodongstadium='"+currentuser.roledetail+"'";
	var Huodongclassify = "huodong";
	var Huodongtitle = "当前位置:业务管理》" + Huodongclassify;
	var Huodongaction = "HuodongService.do";
	var Huodongfields = ['huodongid'
	        			    ,'huodongstadium' 
	        			    ,'huodongcode' 
	        			    ,'huodongname' 
	        			    ,'huodongcardtype' 
	        			    ,'huodongcardtypename' 
	        			    ,'huodongnum' 
	        			    ,'huodongbegin' 
	        			    ,'huodongend' 
	        			    ,'huodongmoney' 
	        			    ,'huodongstatue' 
	        			    ,'huodonginswhen' 
	        			    ,'huodonginswho' 
	        			      ];// 全部字段
	var Huodongkeycolumn = [ 'huodongid' ];// 主键
	var Huodongstore = dataStore(Huodongfields, basePath + Huodongaction + "?method=selHuodongm&wheresql="+wheresql);// 定义Huodongstore
	var HuodongdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'HuodongdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : .5,
			layout : 'form',
			hidden : true,
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Huodonghuodongid',
				name : 'huodongid'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'combo',
				emptyText : '请选择',
				store : stadiumStore,
				mode : 'local',
				displayField : 'name',
				valueField : 'name',
				hiddenName : 'name',
				triggerAction : 'all',
				fieldLabel : '场馆',
				id : 'Huodonghuodongstadium',
				name : 'huodongstadium'
			} ]
		}
//		, {
//			columnWidth : .5,
//			layout : 'form',
//			items : [ {
//				xtype : 'textfield',
//				fieldLabel : '优惠码(起始)',
//				id : 'Huodonghuodongcode',
//				name : 'huodongcode'
//			} ]
//		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '名称',
				id : 'Huodonghuodongname',
				name : 'huodongname'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'combo',
				emptyText : '请选择',
				store : projectStore,
				mode : 'local',
				displayField : 'name',
				valueField : 'name',
				hiddenName : 'name',
				triggerAction : 'all',
				fieldLabel : '项目(课程)',
				id : 'Huodonghuodongcardtype',
				name : 'huodongcardtype',
				editable : false
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡种',
				id : 'Huodonghuodongcardtypename',
				name : 'huodongcardtypename',
				triggers: {
			        bar: {
			            handler: function() {
			            	selectCardtype();
			            }
			        }
				}
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '数量',
				id : 'Huodonghuodongnum',
				name : 'huodongnum'
			} ]
		}
//		, {
//			columnWidth : .5,
//			layout : 'form',
//			items : [ {
//				xtype : 'textfield',
//				fieldLabel : '开始',
//				id : 'Huodonghuodongbegin',
//				name : 'huodongbegin'
//			} ]
//		}
//		, {
//			columnWidth : .5,
//			layout : 'form',
//			items : [ {
//				xtype : 'textfield',
//				fieldLabel : '结束',
//				id : 'Huodonghuodongend',
//				name : 'huodongend'
//			} ]
//		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '折让',
				id : 'Huodonghuodongmoney',
				name : 'huodongmoney'
			} ]
		}
//		, {
//			columnWidth : .5,
//			layout : 'form',
//			items : [ {
//				xtype : 'textfield',
//				fieldLabel : '状态',
//				id : 'Huodonghuodongstatue',
//				name : 'huodongstatue'
//			} ]
//		}
//		, {
//			columnWidth : .5,
//			layout : 'form',
//			items : [ {
//				xtype : 'textfield',
//				fieldLabel : '创建时间',
//				id : 'Huodonghuodonginswhen',
//				name : 'huodonginswhen'
//			} ]
//		}
//		, {
//			columnWidth : .5,
//			layout : 'form',
//			items : [ {
//				xtype : 'textfield',
//				fieldLabel : '创建人',
//				id : 'Huodonghuodonginswho',
//				name : 'huodonginswho'
//			} ]
//		}
		]
	});
	
	var Huodonggrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Huodongtitle,
		store : Huodongstore,
	    selModel: {
	        type: 'checkboxmodel'
	    },
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : 'ID',
			dataIndex : 'huodongid',
			hidden : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '场馆',
			dataIndex : 'huodongstadium',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '名称',
			dataIndex : 'huodongname',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '卡种',
			dataIndex : 'huodongcardtypename',
			width:250,
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '数量',
			dataIndex : 'huodongnum',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '折让',
			dataIndex : 'huodongmoney',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		],
		tbar : [
			{
				text : Ext.os.deviceType === 'Phone' ? null : "查看活动详情",
				iconCls : 'query',
				handler : function() {
					var selections = Huodonggrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					huodongdetail(selections[0]);
				}
			},'-',
			{
				text : Ext.os.deviceType === 'Phone' ? null : "新增",
				iconCls : 'add',
				handler : function() {
					HuodongdataForm.form.reset();
					Ext.getCmp("Huodonghuodongid").setEditable (true);
					createTextWindow(basePath + Huodongaction + "?method=addhuodong", "新增", HuodongdataForm, Huodongstore);
				}
			},'->',{
				xtype : 'textfield',
				id : 'queryHuodongmaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Huodongstore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryHuodongmaction").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Huodongstore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryHuodongmaction").getValue()
							}
					});
				}
			}
		]
	});
	Huodonggrid.region = 'center';
	Huodongstore.on("beforeload",function(){ 
		Huodongstore.getProxy().extraParams = {
				json : queryjson,
				query : Ext.getCmp("queryHuodongmaction").getValue()
		}; 
	});
	Huodongstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Huodonggrid ]
	});
})
