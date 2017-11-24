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
	var Ordermstore = dataStore(Ordermfields, basePath + Ordermaction + "?method=selQuery");// 定义Ordermstore
	var OrdermdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'OrdermdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : .5,
			hidden : true,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Ordermorderid',
				name : 'orderid'
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
				id : 'Ordermorderstadium',
				name : 'orderstadium'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '手机号',
				id : 'Ordermorderupdwhen',
				name : 'orderupdwhen'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '会员',
				id : 'Ordermorderupdwho',
				name : 'orderupdwho'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '商品编码',
				id : 'Ordermordercode',
				name : 'ordercode'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '商品名称',
				id : 'Ordermordername',
				name : 'ordername'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '商品分类',
				id : 'Ordermorderclass',
				name : 'orderclass'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '数量',
				id : 'Ordermorderstatue',
				name : 'orderstatue'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '下单金额',
				id : 'Ordermordermoney',
				name : 'ordermoney'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '打折',
				id : 'Ordermorderdiscount',
				name : 'orderdiscount'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '实际金额',
				id : 'Ordermorderrightmoney',
				name : 'orderrightmoney'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '备注',
				id : 'Ordermorderdetail',
				name : 'orderdetail'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'datefield',
				fieldLabel : '创建时间',
				format : 'Y-m-d',
				value : new Date(),
				id : 'Ordermorderinswhen',
				name : 'orderinswhen'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建人',
				value : currentuser.username,
				id : 'Ordermorderinswho',
				name : 'orderinswho'
			} ]
		}
		]
	});
	
	var Ordermbbar = pagesizebar(Ordermstore);//定义分页
	var Ordermgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Ordermtitle,
		store : Ordermstore,
		bbar : Ordermbbar,
	    selModel: {
	        type: 'checkboxmodel'
	    },
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : 'ID',
			dataIndex : 'orderid',
			sortable : true, 
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
			header : '手机号',
			dataIndex : 'orderupdwhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '会员',
			dataIndex : 'orderupdwho',
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
			header : '数量',
			dataIndex : 'orderstatue',
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
		, {
			header : '备注',
			dataIndex : 'orderdetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建时间',
			dataIndex : 'orderinswhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建人',
			dataIndex : 'orderinswho',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		],
		tbar : [{
				text : Ext.os.deviceType === 'Phone' ? null : "新增",
				iconCls : 'add',
				handler : function() {
					OrdermdataForm.form.reset();
					Ext.getCmp("Ordermorderid").setEditable (true);
					createTextWindow(basePath + Ordermaction + "?method=insAll", "新增", OrdermdataForm, Ordermstore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Ordermgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Ordermaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Ordermgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					OrdermdataForm.form.reset();
					Ext.getCmp("Ordermorderid").setEditable (false);
					createTextWindow(basePath + Ordermaction + "?method=updAll", "修改", OrdermdataForm, Ordermstore);
					OrdermdataForm.form.loadRecord(selections[0]);
				}
			},'-',{
	            text: '操作',
	            menu: {
	                xtype: 'menu',
	                items: {
	                    xtype: 'buttongroup',
	                    columns: 3,
	                    items: [{
	                    	text : "删除",
	        				iconCls : 'delete',
	        				handler : function() {
	        					var selections = Ordermgrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Ordermaction + "?method=delAll",selections,Ordermstore,Ordermkeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Ordermaction + "?method=impAll","导入",Ordermstore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Ordermaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryOrdermaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Ordermgrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Ordermkeycolumn.length;i++){
	        						fid += selections[0].data[Ordermkeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Ordermclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Ordermorderid").setEditable (true);
    							createQueryWindow("筛选", OrdermdataForm, Ordermstore,Ext.getCmp("queryOrdermaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
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
	Ordermstore.on("beforeload",function(){ 
		Ordermstore.getProxy().extraParams = {
				json : queryjson,
				query : Ext.getCmp("queryOrdermaction").getValue()
		}; 
	});
	Ordermstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Ordermgrid ]
	});
})
