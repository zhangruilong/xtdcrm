Ext.onReady(function() {
	var Courseclassify = "course";
	var Coursetitle = "当前位置:业务管理》" + Courseclassify;
	var Courseaction = "CourseAction.do";
	var Coursefields = ['courseid'
	        			    ,'courseplace' 
	        			    ,'coursecoach' 
	        			    ,'coursecode' 
	        			    ,'coursename' 
	        			    ,'coursebegin' 
	        			    ,'courseend' 
	        			    ,'coursedetail' 
	        			    ,'coursestatue' 
	        			    ,'createtime' 
	        			    ,'creator' 
	        			    ,'updtime' 
	        			    ,'updor' 
	        			      ];// 全部字段
	var Coursekeycolumn = [ 'courseid' ];// 主键
	var Coursestore = dataStore(Coursefields, basePath + Courseaction + "?method=selLimit");// 定义Coursestore
	var CoursedataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'CoursedataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Coursecourseid',
				name : 'courseid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场地ID',
				id : 'Coursecourseplace',
				name : 'courseplace',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '教练ID',
				id : 'Coursecoursecoach',
				name : 'coursecoach',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Coursecoursecode',
				name : 'coursecode',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '名称',
				id : 'Coursecoursename',
				name : 'coursename',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '开始时间',
				id : 'Coursecoursebegin',
				name : 'coursebegin',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '结束时间',
				id : 'Coursecourseend',
				name : 'courseend',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '备注',
				id : 'Coursecoursedetail',
				name : 'coursedetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'Coursecoursestatue',
				name : 'coursestatue',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建时间',
				id : 'Coursecreatetime',
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
				id : 'Coursecreator',
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
				id : 'Courseupdtime',
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
				id : 'Courseupdor',
				name : 'updor',
				maxLength : 100
			} ]
		}
		]
	});
	
	//var Coursebbar = pagesizebar(Coursestore);//定义分页
	var Coursegrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Coursetitle,
		store : Coursestore,
		//bbar : Coursebbar,
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
			dataIndex : 'courseid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '场地ID',
			dataIndex : 'courseplace',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '教练ID',
			dataIndex : 'coursecoach',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '编码',
			dataIndex : 'coursecode',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '名称',
			dataIndex : 'coursename',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '开始时间',
			dataIndex : 'coursebegin',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '结束时间',
			dataIndex : 'courseend',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '备注',
			dataIndex : 'coursedetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '状态',
			dataIndex : 'coursestatue',
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
					CoursedataForm.form.reset();
					Ext.getCmp("Coursecourseid").setEditable (true);
					createTextWindow(basePath + Courseaction + "?method=insAll", "新增", CoursedataForm, Coursestore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Coursegrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Courseaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Coursegrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					CoursedataForm.form.reset();
					Ext.getCmp("Coursecourseid").setEditable (false);
					createTextWindow(basePath + Courseaction + "?method=updAll", "修改", CoursedataForm, Coursestore);
					CoursedataForm.form.loadRecord(selections[0]);
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
	        					var selections = Coursegrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Courseaction + "?method=delAll",selections,Coursestore,Coursekeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Courseaction + "?method=impAll","导入",Coursestore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Courseaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryCourseaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Coursegrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Coursekeycolumn.length;i++){
	        						fid += selections[0].data[Coursekeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Courseclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Coursecourseid").setEditable (true);
    							createQueryWindow("筛选", CoursedataForm, Coursestore,Ext.getCmp("queryCourseaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryCourseaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryCourseaction").getValue()) {
								Coursestore.load({
									params : {
										json : queryjson
									}
								});
							} else {
								Coursestore.load({
									params : {
										json : queryjson,
										query : Ext.getCmp("queryCourseaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Coursegrid.region = 'center';
	Coursestore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Coursegrid ]
	});
})
