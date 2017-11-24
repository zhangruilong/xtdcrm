Ext.onReady(function() {
	var Placetimeclassify = "placetime";
	var Placetimetitle = "当前位置:业务管理》" + Placetimeclassify;
	var Placetimeaction = "PlacetimeService.do";
	var Placetimefields = ['placetimeid'
	        			    ,'placetimestadium' 
	        			    ,'placetimeproject' 
	        			    ,'placetimeplace' 
	        			    ,'placetimeplacename' 
	        			    ,'placetimecoach' 
	        			    ,'placetimecoachname' 
	        			    ,'placetimename' 
	        			    ,'placetimedate' 
	        			    ,'placetimedetail' 
	        			    ,'calendarId' 
	        			    ,'title' 
	        			    ,'startDate' 
	        			    ,'endDate' 
	        			    ,'description' 
	        			      ];// 全部字段
	var Placetimekeycolumn = [ 'placetimeid' ];// 主键
	var Placetimestore = dataStore(Placetimefields, basePath + Placetimeaction + "?method=selQuery");// 定义Placetimestore
	var PlacetimedataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'PlacetimedataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : .5,
			layout : 'form',
			hidden : true,
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Placetimeplacetimeid',
				name : 'placetimeid'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场馆',
				id : 'Placetimeplacetimestadium',
				name : 'placetimestadium'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '项目',
				id : 'Placetimeplacetimeproject',
				name : 'placetimeproject'
			} ]
		}
//		, {
//			columnWidth : .5,
//			layout : 'form',
//			items : [ {
//				xtype : 'textfield',
//				fieldLabel : '场地',
//				id : 'Placetimeplacetimeplace',
//				name : 'placetimeplace'
//			} ]
//		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场地',
				id : 'Placetimeplacetimeplacename',
				name : 'placetimeplacename'
			} ]
		}
//		, {
//			columnWidth : .5,
//			layout : 'form',
//			items : [ {
//				xtype : 'textfield',
//				fieldLabel : '教练',
//				id : 'Placetimeplacetimecoach',
//				name : 'placetimecoach'
//			} ]
//		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '教练',
				id : 'Placetimeplacetimecoachname',
				name : 'placetimecoachname'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '名称',
				id : 'Placetimeplacetimename',
				name : 'placetimename'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '日期',
				id : 'Placetimeplacetimedate',
				name : 'placetimedate'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场次',
				id : 'Placetimeplacetimedetail',
				name : 'placetimedetail'
			} ]
		}
//		, {
//			columnWidth : .5,
//			layout : 'form',
//			items : [ {
//				xtype : 'textfield',
//				fieldLabel : 'calendarId',
//				id : 'PlacetimecalendarId',
//				name : 'calendarId'
//			} ]
//		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '标题',
				id : 'Placetimetitle',
				name : 'title'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '开始时间',
				id : 'PlacetimestartDate',
				name : 'startDate'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '结束时间',
				id : 'PlacetimeendDate',
				name : 'endDate'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '描述',
				id : 'Placetimedescription',
				name : 'description'
			} ]
		}
		]
	});
	
	var Placetimebbar = pagesizebar(Placetimestore);//定义分页
	var Placetimegrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Placetimetitle,
		store : Placetimestore,
		bbar : Placetimebbar,
	    selModel: {
	        type: 'checkboxmodel'
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
			header : '场馆',
			dataIndex : 'placetimestadium',
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
//		, {
//			header : '场地',
//			dataIndex : 'placetimeplace',
//			sortable : true,  
//			editor: {
//                xtype: 'textfield'
//            }
//		}
		, {
			header : '场地',
			dataIndex : 'placetimeplacename',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
//		, {
//			header : '教练',
//			dataIndex : 'placetimecoach',
//			sortable : true,  
//			editor: {
//                xtype: 'textfield'
//            }
//		}
		, {
			header : '教练',
			dataIndex : 'placetimecoachname',
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
			header : '日期',
			dataIndex : 'placetimedate',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '场次',
			dataIndex : 'placetimedetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '标题',
			dataIndex : 'title',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '开始时间',
			dataIndex : 'startDate',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '结束时间',
			dataIndex : 'endDate',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '描述',
			dataIndex : 'description',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		],
		tbar : [{
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
				text : Ext.os.deviceType === 'Phone' ? null : "查看预约会员",
				iconCls : 'query',
				handler : function() {
					var selections = Placetimegrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					selAppiont(selections[0]);
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
							Placetimestore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryPlacetimeaction").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Placetimestore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryPlacetimeaction").getValue()
							}
					});
				}
			}
		]
	});
	Placetimegrid.region = 'center';
	Placetimestore.on("beforeload",function(){ 
		Placetimestore.getProxy().extraParams = {
				json : queryjson,
				query : Ext.getCmp("queryPlacetimeaction").getValue()
		}; 
	});
	Placetimestore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Placetimegrid ]
	});
})
