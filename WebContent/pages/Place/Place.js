Ext.onReady(function() {
	var Placeclassify = "place";
	var Placetitle = "当前位置:业务管理》" + Placeclassify;
	var Placeaction = "PlaceAction.do";
	var Placefields = ['placeid'
	        			    ,'placestadium' 
	        			    ,'placecode' 
	        			    ,'placename' 
	        			    ,'placepeople' 
	        			    ,'placedetail' 
	        			    ,'placestatue' 
	        			    ,'placebegin' 
	        			    ,'placeend' 
	        			    ,'placeproject' 
	        			      ];// 全部字段
	var Placekeycolumn = [ 'placeid' ];// 主键
	var Placestore = dataStore(Placefields, basePath + Placeaction + "?method=selLimit");// 定义Placestore
	var PlacedataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'PlacedataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Placeplaceid',
				name : 'placeid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场馆ID',
				id : 'Placeplacestadium',
				name : 'placestadium',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Placeplacecode',
				name : 'placecode',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '名称',
				id : 'Placeplacename',
				name : 'placename',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '人数',
				id : 'Placeplacepeople',
				name : 'placepeople',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '备注',
				id : 'Placeplacedetail',
				name : 'placedetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'Placeplacestatue',
				name : 'placestatue',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '开始时间',
				id : 'Placeplacebegin',
				name : 'placebegin',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '结束时间',
				id : 'Placeplaceend',
				name : 'placeend',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '项目',
				id : 'Placeplaceproject',
				name : 'placeproject',
				maxLength : 100
			} ]
		}
		]
	});
	
	//var Placebbar = pagesizebar(Placestore);//定义分页
	var Placegrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Placetitle,
		store : Placestore,
		//bbar : Placebbar,
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
			dataIndex : 'placeid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '场馆ID',
			dataIndex : 'placestadium',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '编码',
			dataIndex : 'placecode',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '名称',
			dataIndex : 'placename',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '人数',
			dataIndex : 'placepeople',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '备注',
			dataIndex : 'placedetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '状态',
			dataIndex : 'placestatue',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '开始时间',
			dataIndex : 'placebegin',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '结束时间',
			dataIndex : 'placeend',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '项目',
			dataIndex : 'placeproject',
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
					PlacedataForm.form.reset();
					Ext.getCmp("Placeplaceid").setEditable (true);
					createTextWindow(basePath + Placeaction + "?method=insAll", "新增", PlacedataForm, Placestore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Placegrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Placeaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Placegrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					PlacedataForm.form.reset();
					Ext.getCmp("Placeplaceid").setEditable (false);
					createTextWindow(basePath + Placeaction + "?method=updAll", "修改", PlacedataForm, Placestore);
					PlacedataForm.form.loadRecord(selections[0]);
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
	        					var selections = Placegrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Placeaction + "?method=delAll",selections,Placestore,Placekeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Placeaction + "?method=impAll","导入",Placestore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Placeaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryPlaceaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Placegrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Placekeycolumn.length;i++){
	        						fid += selections[0].data[Placekeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Placeclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Placeplaceid").setEditable (true);
    							createQueryWindow("筛选", PlacedataForm, Placestore,Ext.getCmp("queryPlaceaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryPlaceaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryPlaceaction").getValue()) {
								Placestore.load({
									params : {
										json : queryjson
									}
								});
							} else {
								Placestore.load({
									params : {
										json : queryjson,
										query : Ext.getCmp("queryPlaceaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Placegrid.region = 'center';
	Placestore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Placegrid ]
	});
})
