Ext.onReady(function() {
	var Notesclassify = "notes";
	var Notestitle = "当前位置:业务管理》" + Notesclassify;
	var Notesaction = "NotesAction.do";
	var Notesfields = ['notesid'
	        			    ,'notescustomer' 
	        			    ,'notescard' 
	        			    ,'notesplace' 
	        			    ,'notescourse' 
	        			    ,'notesproject' 
	        			    ,'notesbegin' 
	        			    ,'notesend' 
	        			    ,'creator' 
	        			      ];// 全部字段
	var Noteskeycolumn = [ 'notesid' ];// 主键
	var Notesstore = dataStore(Notesfields, basePath + Notesaction + "?method=selLimit");// 定义Notesstore
	var NotesdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'NotesdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Notesnotesid',
				name : 'notesid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '会员ID',
				id : 'Notesnotescustomer',
				name : 'notescustomer',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '会员卡ID',
				id : 'Notesnotescard',
				name : 'notescard',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场地ID',
				id : 'Notesnotesplace',
				name : 'notesplace',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '课程ID',
				id : 'Notesnotescourse',
				name : 'notescourse',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '项目',
				id : 'Notesnotesproject',
				name : 'notesproject',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '入场时间',
				id : 'Notesnotesbegin',
				name : 'notesbegin',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '离场时间',
				id : 'Notesnotesend',
				name : 'notesend',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建人',
				id : 'Notescreator',
				name : 'creator',
				maxLength : 100
			} ]
		}
		]
	});
	
	//var Notesbbar = pagesizebar(Notesstore);//定义分页
	var Notesgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Notestitle,
		store : Notesstore,
		//bbar : Notesbbar,
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
			dataIndex : 'notesid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '会员ID',
			dataIndex : 'notescustomer',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '会员卡ID',
			dataIndex : 'notescard',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '场地ID',
			dataIndex : 'notesplace',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '课程ID',
			dataIndex : 'notescourse',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '项目',
			dataIndex : 'notesproject',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '入场时间',
			dataIndex : 'notesbegin',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '离场时间',
			dataIndex : 'notesend',
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
					NotesdataForm.form.reset();
					Ext.getCmp("Notesnotesid").setEditable (true);
					createTextWindow(basePath + Notesaction + "?method=insAll", "新增", NotesdataForm, Notesstore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Notesgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Notesaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Notesgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					NotesdataForm.form.reset();
					Ext.getCmp("Notesnotesid").setEditable (false);
					createTextWindow(basePath + Notesaction + "?method=updAll", "修改", NotesdataForm, Notesstore);
					NotesdataForm.form.loadRecord(selections[0]);
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
	        					var selections = Notesgrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Notesaction + "?method=delAll",selections,Notesstore,Noteskeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Notesaction + "?method=impAll","导入",Notesstore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Notesaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryNotesaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Notesgrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Noteskeycolumn.length;i++){
	        						fid += selections[0].data[Noteskeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Notesclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Notesnotesid").setEditable (true);
    							createQueryWindow("筛选", NotesdataForm, Notesstore,Ext.getCmp("queryNotesaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryNotesaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryNotesaction").getValue()) {
								Notesstore.load({
									params : {
										json : queryjson
									}
								});
							} else {
								Notesstore.load({
									params : {
										json : queryjson,
										query : Ext.getCmp("queryNotesaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Notesgrid.region = 'center';
	Notesstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Notesgrid ]
	});
})
