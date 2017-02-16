Ext.onReady(function() {
	var Mycourseviewclassify = "mycourseview";
	var Mycourseviewtitle = "当前位置:业务管理》" + Mycourseviewclassify;
	var Mycourseviewaction = "MycourseviewAction.do";
	var Mycourseviewfields = ['mycourseid'
	        			    ,'mycoursecoach' 
	        			    ,'mycoursecustomer' 
	        			    ,'mycoursename' 
	        			    ,'mycourseproject' 
	        			    ,'mycoursenum' 
	        			    ,'mycoursenuma' 
	        			    ,'mycoursemoney' 
	        			    ,'createtime' 
	        			    ,'creator' 
	        			    ,'updtime' 
	        			    ,'updor' 
	        			    ,'coachcode' 
	        			    ,'coachname' 
	        			    ,'coachphone' 
	        			      ];// 全部字段
	var Mycourseviewkeycolumn = [ 'mycourseid' ];// 主键
	var Mycourseviewstore = dataStore(Mycourseviewfields, basePath + Mycourseviewaction + "?method=selLimit");// 定义Mycourseviewstore
	var MycourseviewdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'MycourseviewdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Mycourseviewmycourseid',
				name : 'mycourseid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '教练ID',
				id : 'Mycourseviewmycoursecoach',
				name : 'mycoursecoach',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '会员ID',
				id : 'Mycourseviewmycoursecustomer',
				name : 'mycoursecustomer',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '课程名',
				id : 'Mycourseviewmycoursename',
				name : 'mycoursename',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '项目',
				id : 'Mycourseviewmycourseproject',
				name : 'mycourseproject',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '课时',
				id : 'Mycourseviewmycoursenum',
				name : 'mycoursenum',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '剩余课时',
				id : 'Mycourseviewmycoursenuma',
				name : 'mycoursenuma',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '费用',
				id : 'Mycourseviewmycoursemoney',
				name : 'mycoursemoney',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建时间',
				id : 'Mycourseviewcreatetime',
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
				id : 'Mycourseviewcreator',
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
				id : 'Mycourseviewupdtime',
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
				id : 'Mycourseviewupdor',
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
				id : 'Mycourseviewcoachcode',
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
				id : 'Mycourseviewcoachname',
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
				id : 'Mycourseviewcoachphone',
				name : 'coachphone',
				maxLength : 100
			} ]
		}
		]
	});
	
	//var Mycourseviewbbar = pagesizebar(Mycourseviewstore);//定义分页
	var Mycourseviewgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Mycourseviewtitle,
		store : Mycourseviewstore,
		//bbar : Mycourseviewbbar,
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
			dataIndex : 'mycourseid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '教练ID',
			dataIndex : 'mycoursecoach',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '会员ID',
			dataIndex : 'mycoursecustomer',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '课程名',
			dataIndex : 'mycoursename',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '项目',
			dataIndex : 'mycourseproject',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '课时',
			dataIndex : 'mycoursenum',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '剩余课时',
			dataIndex : 'mycoursenuma',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '费用',
			dataIndex : 'mycoursemoney',
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
					MycourseviewdataForm.form.reset();
					Ext.getCmp("Mycourseviewmycourseid").setEditable (true);
					createTextWindow(basePath + Mycourseviewaction + "?method=insAll", "新增", MycourseviewdataForm, Mycourseviewstore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Mycourseviewgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Mycourseviewaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Mycourseviewgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					MycourseviewdataForm.form.reset();
					Ext.getCmp("Mycourseviewmycourseid").setEditable (false);
					createTextWindow(basePath + Mycourseviewaction + "?method=updAll", "修改", MycourseviewdataForm, Mycourseviewstore);
					MycourseviewdataForm.form.loadRecord(selections[0]);
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
	        					var selections = Mycourseviewgrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Mycourseviewaction + "?method=delAll",selections,Mycourseviewstore,Mycourseviewkeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Mycourseviewaction + "?method=impAll","导入",Mycourseviewstore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Mycourseviewaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryMycourseviewaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Mycourseviewgrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Mycourseviewkeycolumn.length;i++){
	        						fid += selections[0].data[Mycourseviewkeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Mycourseviewclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Mycourseviewmycourseid").setEditable (true);
    							createQueryWindow("筛选", MycourseviewdataForm, Mycourseviewstore,Ext.getCmp("queryMycourseviewaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryMycourseviewaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryMycourseviewaction").getValue()) {
								Mycourseviewstore.load({
									params : {
										json : queryjson
									}
								});
							} else {
								Mycourseviewstore.load({
									params : {
										json : queryjson,
										query : Ext.getCmp("queryMycourseviewaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Mycourseviewgrid.region = 'center';
	Mycourseviewstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Mycourseviewgrid ]
	});
})
