Ext.onReady(function() {
	var Placetimeclassify = "placetime";
	var Placetimetitle = "当前位置:业务管理》" + Placetimeclassify;
	var Placetimeaction = "PlacetimeAction.do";
	var Placetimefields = ['placetimeid'
	        			    ,'placetimecode' 
	        			    ,'placetimename' 
	        			    ,'placetimedetail' 
	        			    ,'placetimestatue' 
	        			    ,'placetimebegin' 
	        			    ,'placetimeend' 
	        			    ,'placetimeproject' 
	        			      ];// 全部字段
	var Placetimekeycolumn = [ 'placetimeid' ];// 主键
	var Placetimestore = dataStore(Placetimefields, basePath + Placetimeaction + "?method=selLimit");// 定义Placetimestore
	var PlacetimedataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'PlacetimedataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Placetimeplacetimeid',
				name : 'placetimeid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Placetimeplacetimecode',
				name : 'placetimecode',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '名称',
				id : 'Placetimeplacetimename',
				name : 'placetimename',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '备注',
				id : 'Placetimeplacetimedetail',
				name : 'placetimedetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'Placetimeplacetimestatue',
				name : 'placetimestatue',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '开始时间',
				id : 'Placetimeplacetimebegin',
				name : 'placetimebegin',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '结束时间',
				id : 'Placetimeplacetimeend',
				name : 'placetimeend',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '项目',
				id : 'Placetimeplacetimeproject',
				name : 'placetimeproject',
				maxLength : 100
			} ]
		}
		]
	});
	
	//var Placetimebbar = pagesizebar(Placetimestore);//定义分页
	var Placetimegrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Placetimetitle,
		store : Placetimestore,
		//bbar : Placetimebbar,
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
			dataIndex : 'placetimeid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '编码',
			dataIndex : 'placetimecode',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '名称',
			dataIndex : 'placetimename',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '备注',
			dataIndex : 'placetimedetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '状态',
			dataIndex : 'placetimestatue',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '开始时间',
			dataIndex : 'placetimebegin',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '结束时间',
			dataIndex : 'placetimeend',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '项目',
			dataIndex : 'placetimeproject',
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
					PlacetimedataForm.form.reset();
					Ext.getCmp("Placetimeplacetimeid").setEditable (true);
					createTextWindow(basePath + Placetimeaction + "?method=insAll", "新增", PlacetimedataForm, Placetimestore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Placetimegrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Placetimeaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Placetimegrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					PlacetimedataForm.form.reset();
					Ext.getCmp("Placetimeplacetimeid").setEditable (false);
					createTextWindow(basePath + Placetimeaction + "?method=updAll", "修改", PlacetimedataForm, Placetimestore);
					PlacetimedataForm.form.loadRecord(selections[0]);
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
	        					var selections = Placetimegrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Placetimeaction + "?method=delAll",selections,Placetimestore,Placetimekeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Placetimeaction + "?method=impAll","导入",Placetimestore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Placetimeaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryPlacetimeaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Placetimegrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Placetimekeycolumn.length;i++){
	        						fid += selections[0].data[Placetimekeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Placetimeclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Placetimeplacetimeid").setEditable (true);
    							createQueryWindow("筛选", PlacetimedataForm, Placetimestore,Ext.getCmp("queryPlacetimeaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryPlacetimeaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryPlacetimeaction").getValue()) {
								Placetimestore.load({
									params : {
										json : queryjson
									}
								});
							} else {
								Placetimestore.load({
									params : {
										json : queryjson,
										query : Ext.getCmp("queryPlacetimeaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Placetimegrid.region = 'center';
	Placetimestore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Placetimegrid ]
	});
})
