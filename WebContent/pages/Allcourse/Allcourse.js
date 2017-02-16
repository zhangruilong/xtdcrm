Ext.onReady(function() {
	var Allcourseclassify = "allcourse";
	var Allcoursetitle = "当前位置:业务管理》" + Allcourseclassify;
	var Allcourseaction = "AllcourseAction.do";
	var Allcoursefields = ['allcourseid'
	        			    ,'allcoursecoach' 
	        			    ,'allcoursename' 
	        			    ,'allcourseproject' 
	        			    ,'allcoursenum' 
	        			    ,'allcoursemoney' 
	        			    ,'createtime' 
	        			    ,'creator' 
	        			    ,'updtime' 
	        			    ,'updor' 
	        			      ];// 全部字段
	var Allcoursekeycolumn = [ 'allcourseid' ];// 主键
	var Allcoursestore = dataStore(Allcoursefields, basePath + Allcourseaction + "?method=selLimit");// 定义Allcoursestore
	var AllcoursedataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'AllcoursedataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Allcourseallcourseid',
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
				id : 'Allcourseallcoursecoach',
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
				id : 'Allcourseallcoursename',
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
				id : 'Allcourseallcourseproject',
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
				id : 'Allcourseallcoursenum',
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
				id : 'Allcourseallcoursemoney',
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
				id : 'Allcoursecreatetime',
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
				id : 'Allcoursecreator',
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
				id : 'Allcourseupdtime',
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
				id : 'Allcourseupdor',
				name : 'updor',
				maxLength : 100
			} ]
		}
		]
	});
	
	//var Allcoursebbar = pagesizebar(Allcoursestore);//定义分页
	var Allcoursegrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Allcoursetitle,
		store : Allcoursestore,
		//bbar : Allcoursebbar,
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
		],
		tbar : [{
				text : Ext.os.deviceType === 'Phone' ? null : "新增",
				iconCls : 'add',
				handler : function() {
					AllcoursedataForm.form.reset();
					Ext.getCmp("Allcourseallcourseid").setEditable (true);
					createTextWindow(basePath + Allcourseaction + "?method=insAll", "新增", AllcoursedataForm, Allcoursestore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Allcoursegrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Allcourseaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Allcoursegrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					AllcoursedataForm.form.reset();
					Ext.getCmp("Allcourseallcourseid").setEditable (false);
					createTextWindow(basePath + Allcourseaction + "?method=updAll", "修改", AllcoursedataForm, Allcoursestore);
					AllcoursedataForm.form.loadRecord(selections[0]);
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
	        					var selections = Allcoursegrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Allcourseaction + "?method=delAll",selections,Allcoursestore,Allcoursekeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Allcourseaction + "?method=impAll","导入",Allcoursestore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Allcourseaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryAllcourseaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Allcoursegrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Allcoursekeycolumn.length;i++){
	        						fid += selections[0].data[Allcoursekeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Allcourseclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Allcourseallcourseid").setEditable (true);
    							createQueryWindow("筛选", AllcoursedataForm, Allcoursestore,Ext.getCmp("queryAllcourseaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryAllcourseaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryAllcourseaction").getValue()) {
								Allcoursestore.load({
									params : {
										json : queryjson
									}
								});
							} else {
								Allcoursestore.load({
									params : {
										json : queryjson,
										query : Ext.getCmp("queryAllcourseaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Allcoursegrid.region = 'center';
	Allcoursestore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Allcoursegrid ]
	});
})
