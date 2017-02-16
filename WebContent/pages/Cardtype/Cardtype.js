Ext.onReady(function() {
	var Cardtypeclassify = "cardtype";
	var Cardtypetitle = "当前位置:业务管理》" + Cardtypeclassify;
	var Cardtypeaction = "CardtypeAction.do";
	var Cardtypefields = ['cardtypeid'
	        			    ,'cardtypecode' 
	        			    ,'cardtypename' 
	        			    ,'cardtypeclass' 
	        			    ,'cardtypeday' 
	        			    ,'cardtypeprice' 
	        			    ,'cardtypemoney' 
	        			    ,'cardtypetimes' 
	        			    ,'cardtypedetail' 
	        			    ,'cardtypestatue' 
	        			      ];// 全部字段
	var Cardtypekeycolumn = [ 'cardtypeid' ];// 主键
	var Cardtypestore = dataStore(Cardtypefields, basePath + Cardtypeaction + "?method=selLimit");// 定义Cardtypestore
	var CardtypedataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'CardtypedataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Cardtypecardtypeid',
				name : 'cardtypeid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Cardtypecardtypecode',
				name : 'cardtypecode',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '名称',
				id : 'Cardtypecardtypename',
				name : 'cardtypename',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '分类',
				id : 'Cardtypecardtypeclass',
				name : 'cardtypeclass',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '有效期',
				id : 'Cardtypecardtypeday',
				name : 'cardtypeday',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '价格',
				id : 'Cardtypecardtypeprice',
				name : 'cardtypeprice',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡余额',
				id : 'Cardtypecardtypemoney',
				name : 'cardtypemoney',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡余次',
				id : 'Cardtypecardtypetimes',
				name : 'cardtypetimes',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '备注',
				id : 'Cardtypecardtypedetail',
				name : 'cardtypedetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'Cardtypecardtypestatue',
				name : 'cardtypestatue',
				maxLength : 100
			} ]
		}
		]
	});
	
	//var Cardtypebbar = pagesizebar(Cardtypestore);//定义分页
	var Cardtypegrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Cardtypetitle,
		store : Cardtypestore,
		//bbar : Cardtypebbar,
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
			header : '编码',
			dataIndex : 'cardtypecode',
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
			header : '卡余额',
			dataIndex : 'cardtypemoney',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '卡余次',
			dataIndex : 'cardtypetimes',
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
		],
		tbar : [{
				text : Ext.os.deviceType === 'Phone' ? null : "新增",
				iconCls : 'add',
				handler : function() {
					CardtypedataForm.form.reset();
					Ext.getCmp("Cardtypecardtypeid").setEditable (true);
					createTextWindow(basePath + Cardtypeaction + "?method=insAll", "新增", CardtypedataForm, Cardtypestore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Cardtypegrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Cardtypeaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Cardtypegrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					CardtypedataForm.form.reset();
					Ext.getCmp("Cardtypecardtypeid").setEditable (false);
					createTextWindow(basePath + Cardtypeaction + "?method=updAll", "修改", CardtypedataForm, Cardtypestore);
					CardtypedataForm.form.loadRecord(selections[0]);
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
	        					var selections = Cardtypegrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Cardtypeaction + "?method=delAll",selections,Cardtypestore,Cardtypekeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Cardtypeaction + "?method=impAll","导入",Cardtypestore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Cardtypeaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryCardtypeaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Cardtypegrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Cardtypekeycolumn.length;i++){
	        						fid += selections[0].data[Cardtypekeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Cardtypeclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Cardtypecardtypeid").setEditable (true);
    							createQueryWindow("筛选", CardtypedataForm, Cardtypestore,Ext.getCmp("queryCardtypeaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryCardtypeaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryCardtypeaction").getValue()) {
								Cardtypestore.load({
									params : {
										json : queryjson
									}
								});
							} else {
								Cardtypestore.load({
									params : {
										json : queryjson,
										query : Ext.getCmp("queryCardtypeaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Cardtypegrid.region = 'center';
	Cardtypestore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Cardtypegrid ]
	});
})
