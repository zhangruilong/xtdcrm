Ext.onReady(function() {
	var Coachclassify = "coach";
	var Coachtitle = "当前位置:业务管理》" + Coachclassify;
	var Coachaction = "CoachAction.do";
	var Coachfields = ['coachid'
	        			    ,'coachstadium' 
	        			    ,'coachcode' 
	        			    ,'coachname' 
	        			    ,'coachphone' 
	        			    ,'coachaddress' 
	        			    ,'coachsex' 
	        			    ,'coachage' 
	        			    ,'coachimage' 
	        			    ,'coachdetail' 
	        			    ,'coachstatue' 
	        			    ,'createtime' 
	        			    ,'creator' 
	        			      ];// 全部字段
	var Coachkeycolumn = [ 'coachid' ];// 主键
	var Coachstore = dataStore(Coachfields, basePath + Coachaction + "?method=selLimit");// 定义Coachstore
	var CoachdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'CoachdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Coachcoachid',
				name : 'coachid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场馆ID',
				id : 'Coachcoachstadium',
				name : 'coachstadium',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Coachcoachcode',
				name : 'coachcode',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '姓名',
				id : 'Coachcoachname',
				name : 'coachname',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '手机',
				id : 'Coachcoachphone',
				name : 'coachphone',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '地址',
				id : 'Coachcoachaddress',
				name : 'coachaddress',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '性别',
				id : 'Coachcoachsex',
				name : 'coachsex',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '年龄',
				id : 'Coachcoachage',
				name : 'coachage',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '照片',
				id : 'Coachcoachimage',
				name : 'coachimage',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '备注',
				id : 'Coachcoachdetail',
				name : 'coachdetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'Coachcoachstatue',
				name : 'coachstatue',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建时间',
				id : 'Coachcreatetime',
				name : 'createtime',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建人',
				id : 'Coachcreator',
				name : 'creator',
				maxLength : 100
			} ]
		}
		]
	});
	
	//var Coachbbar = pagesizebar(Coachstore);//定义分页
	var Coachgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Coachtitle,
		store : Coachstore,
		//bbar : Coachbbar,
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
			dataIndex : 'coachid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '场馆ID',
			dataIndex : 'coachstadium',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '编码',
			dataIndex : 'coachcode',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '姓名',
			dataIndex : 'coachname',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '手机',
			dataIndex : 'coachphone',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '地址',
			dataIndex : 'coachaddress',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '性别',
			dataIndex : 'coachsex',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '年龄',
			dataIndex : 'coachage',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '照片',
			dataIndex : 'coachimage',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '备注',
			dataIndex : 'coachdetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '状态',
			dataIndex : 'coachstatue',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建时间',
			dataIndex : 'createtime',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建人',
			dataIndex : 'creator',
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
					CoachdataForm.form.reset();
					Ext.getCmp("Coachcoachid").setEditable (true);
					createTextWindow(basePath + Coachaction + "?method=insAll", "新增", CoachdataForm, Coachstore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Coachgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Coachaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Coachgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					CoachdataForm.form.reset();
					Ext.getCmp("Coachcoachid").setEditable (false);
					createTextWindow(basePath + Coachaction + "?method=updAll", "修改", CoachdataForm, Coachstore);
					CoachdataForm.form.loadRecord(selections[0]);
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
	        					var selections = Coachgrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Coachaction + "?method=delAll",selections,Coachstore,Coachkeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Coachaction + "?method=impAll","导入",Coachstore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Coachaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryCoachaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Coachgrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Coachkeycolumn.length;i++){
	        						fid += selections[0].data[Coachkeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Coachclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Coachcoachid").setEditable (true);
    							createQueryWindow("筛选", CoachdataForm, Coachstore,Ext.getCmp("queryCoachaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryCoachaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryCoachaction").getValue()) {
								Coachstore.load({
									params : {
										json : queryjson
									}
								});
							} else {
								Coachstore.load({
									params : {
										json : queryjson,
										query : Ext.getCmp("queryCoachaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Coachgrid.region = 'center';
	Coachstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Coachgrid ]
	});
})
