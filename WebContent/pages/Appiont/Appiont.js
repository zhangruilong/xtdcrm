Ext.onReady(function() {
	var Appiontclassify = "appiont";
	var Appionttitle = "当前位置:业务管理》" + Appiontclassify;
	var Appiontaction = "AppiontAction.do";
	var Appiontfields = ['appointid'
	        			    ,'appointcustomer' 
	        			    ,'appointcard' 
	        			    ,'appointplace' 
	        			    ,'appointcourse' 
	        			    ,'appointplacename' 
	        			    ,'appointcoursename' 
	        			    ,'appointcoachname' 
	        			    ,'appointproject' 
	        			    ,'appointbegin' 
	        			    ,'appointend' 
	        			    ,'appointdetail' 
	        			    ,'appointstatue' 
	        			    ,'createtime' 
	        			    ,'creator' 
	        			      ];// 全部字段
	var Appiontkeycolumn = [ 'appointid' ];// 主键
	var Appiontstore = dataStore(Appiontfields, basePath + Appiontaction + "?method=selLimit");// 定义Appiontstore
	var AppiontdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'AppiontdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Appiontappointid',
				name : 'appointid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '会员ID',
				id : 'Appiontappointcustomer',
				name : 'appointcustomer',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '会员卡ID',
				id : 'Appiontappointcard',
				name : 'appointcard',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场地ID',
				id : 'Appiontappointplace',
				name : 'appointplace',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '课程ID',
				id : 'Appiontappointcourse',
				name : 'appointcourse',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场地',
				id : 'Appiontappointplacename',
				name : 'appointplacename',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '课程',
				id : 'Appiontappointcoursename',
				name : 'appointcoursename',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '教练',
				id : 'Appiontappointcoachname',
				name : 'appointcoachname',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '项目',
				id : 'Appiontappointproject',
				name : 'appointproject',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '开始时间',
				id : 'Appiontappointbegin',
				name : 'appointbegin',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '结束时间',
				id : 'Appiontappointend',
				name : 'appointend',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '备注',
				id : 'Appiontappointdetail',
				name : 'appointdetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'Appiontappointstatue',
				name : 'appointstatue',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建时间',
				id : 'Appiontcreatetime',
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
				id : 'Appiontcreator',
				name : 'creator',
				maxLength : 100
			} ]
		}
		]
	});
	
	//var Appiontbbar = pagesizebar(Appiontstore);//定义分页
	var Appiontgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Appionttitle,
		store : Appiontstore,
		//bbar : Appiontbbar,
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
			dataIndex : 'appointid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '会员ID',
			dataIndex : 'appointcustomer',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '会员卡ID',
			dataIndex : 'appointcard',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '场地ID',
			dataIndex : 'appointplace',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '课程ID',
			dataIndex : 'appointcourse',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '场地',
			dataIndex : 'appointplacename',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '课程',
			dataIndex : 'appointcoursename',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '教练',
			dataIndex : 'appointcoachname',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '项目',
			dataIndex : 'appointproject',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '开始时间',
			dataIndex : 'appointbegin',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '结束时间',
			dataIndex : 'appointend',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '备注',
			dataIndex : 'appointdetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '状态',
			dataIndex : 'appointstatue',
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
					AppiontdataForm.form.reset();
					Ext.getCmp("Appiontappointid").setEditable (true);
					createTextWindow(basePath + Appiontaction + "?method=insAll", "新增", AppiontdataForm, Appiontstore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Appiontgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Appiontaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Appiontgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					AppiontdataForm.form.reset();
					Ext.getCmp("Appiontappointid").setEditable (false);
					createTextWindow(basePath + Appiontaction + "?method=updAll", "修改", AppiontdataForm, Appiontstore);
					AppiontdataForm.form.loadRecord(selections[0]);
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
	        					var selections = Appiontgrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Appiontaction + "?method=delAll",selections,Appiontstore,Appiontkeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Appiontaction + "?method=impAll","导入",Appiontstore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Appiontaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryAppiontaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Appiontgrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Appiontkeycolumn.length;i++){
	        						fid += selections[0].data[Appiontkeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Appiontclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Appiontappointid").setEditable (true);
    							createQueryWindow("筛选", AppiontdataForm, Appiontstore,Ext.getCmp("queryAppiontaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryAppiontaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryAppiontaction").getValue()) {
								Appiontstore.load({
									params : {
										json : queryjson
									}
								});
							} else {
								Appiontstore.load({
									params : {
										json : queryjson,
										query : Ext.getCmp("queryAppiontaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Appiontgrid.region = 'center';
	Appiontstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Appiontgrid ]
	});
})
