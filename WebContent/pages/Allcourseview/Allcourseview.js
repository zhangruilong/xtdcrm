Ext.onReady(function() {
	var Allcourseviewclassify = "allcourseview";
	var Allcourseviewtitle = "当前位置:业务管理》" + Allcourseviewclassify;
	var Allcourseviewaction = "AllcourseviewAction.do";
	var Allcourseviewfields = ['allcourseid'
	        			    ,'allcoursecoach' 
	        			    ,'allcoursename' 
	        			    ,'allcourseproject' 
	        			    ,'allcoursenum' 
	        			    ,'allcoursemoney' 
	        			    ,'createtime' 
	        			    ,'creator' 
	        			    ,'updtime' 
	        			    ,'updor' 
	        			    ,'coachcode' 
	        			    ,'coachname' 
	        			    ,'coachphone' 
	        			      ];// 全部字段
	var Allcourseviewkeycolumn = [ 'allcourseid' ];// 主键
	var Allcourseviewstore = dataStore(Allcourseviewfields, basePath + Allcourseviewaction + "?method=selLimit");// 定义Allcourseviewstore
	var AllcourseviewdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'AllcourseviewdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Allcourseviewallcourseid',
				name : 'allcourseid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '教练ID',
				id : 'Allcourseviewallcoursecoach',
				name : 'allcoursecoach',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '课程名',
				id : 'Allcourseviewallcoursename',
				name : 'allcoursename',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '项目',
				id : 'Allcourseviewallcourseproject',
				name : 'allcourseproject',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '课时',
				id : 'Allcourseviewallcoursenum',
				name : 'allcoursenum',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '费用',
				id : 'Allcourseviewallcoursemoney',
				name : 'allcoursemoney',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建时间',
				id : 'Allcourseviewcreatetime',
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
				id : 'Allcourseviewcreator',
				name : 'creator',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '更新时间',
				id : 'Allcourseviewupdtime',
				name : 'updtime',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '更新人',
				id : 'Allcourseviewupdor',
				name : 'updor',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Allcourseviewcoachcode',
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
				id : 'Allcourseviewcoachname',
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
				id : 'Allcourseviewcoachphone',
				name : 'coachphone',
				maxLength : 100
			} ]
		}
		]
	});
	
	//var Allcourseviewbbar = pagesizebar(Allcourseviewstore);//定义分页
	var Allcourseviewgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Allcourseviewtitle,
		store : Allcourseviewstore,
		//bbar : Allcourseviewbbar,
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
			dataIndex : 'allcourseid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '教练ID',
			dataIndex : 'allcoursecoach',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '课程名',
			dataIndex : 'allcoursename',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '项目',
			dataIndex : 'allcourseproject',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '课时',
			dataIndex : 'allcoursenum',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '费用',
			dataIndex : 'allcoursemoney',
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
		, {
			header : '更新时间',
			dataIndex : 'updtime',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '更新人',
			dataIndex : 'updor',
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
		],
		tbar : [{
				text : Ext.os.deviceType === 'Phone' ? null : "新增",
				iconCls : 'add',
				handler : function() {
					AllcourseviewdataForm.form.reset();
					Ext.getCmp("Allcourseviewallcourseid").setEditable (true);
					createTextWindow(basePath + Allcourseviewaction + "?method=insAll", "新增", AllcourseviewdataForm, Allcourseviewstore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Allcourseviewgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Allcourseviewaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Allcourseviewgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					AllcourseviewdataForm.form.reset();
					Ext.getCmp("Allcourseviewallcourseid").setEditable (false);
					createTextWindow(basePath + Allcourseviewaction + "?method=updAll", "修改", AllcourseviewdataForm, Allcourseviewstore);
					AllcourseviewdataForm.form.loadRecord(selections[0]);
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
	        					var selections = Allcourseviewgrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Allcourseviewaction + "?method=delAll",selections,Allcourseviewstore,Allcourseviewkeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Allcourseviewaction + "?method=impAll","导入",Allcourseviewstore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Allcourseviewaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryAllcourseviewaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Allcourseviewgrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Allcourseviewkeycolumn.length;i++){
	        						fid += selections[0].data[Allcourseviewkeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Allcourseviewclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Allcourseviewallcourseid").setEditable (true);
    							createQueryWindow("筛选", AllcourseviewdataForm, Allcourseviewstore,Ext.getCmp("queryAllcourseviewaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryAllcourseviewaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryAllcourseviewaction").getValue()) {
								Allcourseviewstore.load({
									params : {
										json : queryjson
									}
								});
							} else {
								Allcourseviewstore.load({
									params : {
										json : queryjson,
										query : Ext.getCmp("queryAllcourseviewaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Allcourseviewgrid.region = 'center';
	Allcourseviewstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Allcourseviewgrid ]
	});
})
