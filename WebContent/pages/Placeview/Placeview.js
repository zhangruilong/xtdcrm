Ext.onReady(function() {
	var Placeviewclassify = "placeview";
	var Placeviewtitle = "当前位置:业务管理》" + Placeviewclassify;
	var Placeviewaction = "PlaceviewAction.do";
	var Placeviewfields = ['placeid'
	        			    ,'placestadium' 
	        			    ,'placecode' 
	        			    ,'placename' 
	        			    ,'placepeople' 
	        			    ,'placedetail' 
	        			    ,'placestatue' 
	        			    ,'placebegin' 
	        			    ,'placeend' 
	        			    ,'placeproject' 
	        			    ,'stadiumid' 
	        			    ,'stadiumcode' 
	        			    ,'stadiumname' 
	        			    ,'stadiumaddress' 
	        			    ,'stadiumdetail' 
	        			    ,'stadiumstatue' 
	        			    ,'stadiumx' 
	        			    ,'stadiumy' 
	        			      ];// 全部字段
	var Placeviewkeycolumn = [ 'placeid' ];// 主键
	var Placeviewstore = dataStore(Placeviewfields, basePath + Placeviewaction + "?method=selLimit");// 定义Placeviewstore
	var PlaceviewdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'PlaceviewdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Placeviewplaceid',
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
				id : 'Placeviewplacestadium',
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
				id : 'Placeviewplacecode',
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
				id : 'Placeviewplacename',
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
				id : 'Placeviewplacepeople',
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
				id : 'Placeviewplacedetail',
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
				id : 'Placeviewplacestatue',
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
				id : 'Placeviewplacebegin',
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
				id : 'Placeviewplaceend',
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
				id : 'Placeviewplaceproject',
				name : 'placeproject',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Placeviewstadiumid',
				name : 'stadiumid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Placeviewstadiumcode',
				name : 'stadiumcode',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '名称',
				id : 'Placeviewstadiumname',
				name : 'stadiumname',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '地址',
				id : 'Placeviewstadiumaddress',
				name : 'stadiumaddress',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '备注',
				id : 'Placeviewstadiumdetail',
				name : 'stadiumdetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'Placeviewstadiumstatue',
				name : 'stadiumstatue',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'X坐标',
				id : 'Placeviewstadiumx',
				name : 'stadiumx',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'Y坐标',
				id : 'Placeviewstadiumy',
				name : 'stadiumy',
				maxLength : 100
			} ]
		}
		]
	});
	
	//var Placeviewbbar = pagesizebar(Placeviewstore);//定义分页
	var Placeviewgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Placeviewtitle,
		store : Placeviewstore,
		//bbar : Placeviewbbar,
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
		, {
			header : 'ID',
			dataIndex : 'stadiumid',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '编码',
			dataIndex : 'stadiumcode',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '名称',
			dataIndex : 'stadiumname',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '地址',
			dataIndex : 'stadiumaddress',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '备注',
			dataIndex : 'stadiumdetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '状态',
			dataIndex : 'stadiumstatue',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : 'X坐标',
			dataIndex : 'stadiumx',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : 'Y坐标',
			dataIndex : 'stadiumy',
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
					PlaceviewdataForm.form.reset();
					Ext.getCmp("Placeviewplaceid").setEditable (true);
					createTextWindow(basePath + Placeviewaction + "?method=insAll", "新增", PlaceviewdataForm, Placeviewstore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Placeviewgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Placeviewaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Placeviewgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					PlaceviewdataForm.form.reset();
					Ext.getCmp("Placeviewplaceid").setEditable (false);
					createTextWindow(basePath + Placeviewaction + "?method=updAll", "修改", PlaceviewdataForm, Placeviewstore);
					PlaceviewdataForm.form.loadRecord(selections[0]);
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
	        					var selections = Placeviewgrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Placeviewaction + "?method=delAll",selections,Placeviewstore,Placeviewkeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Placeviewaction + "?method=impAll","导入",Placeviewstore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Placeviewaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryPlaceviewaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Placeviewgrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Placeviewkeycolumn.length;i++){
	        						fid += selections[0].data[Placeviewkeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Placeviewclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Placeviewplaceid").setEditable (true);
    							createQueryWindow("筛选", PlaceviewdataForm, Placeviewstore,Ext.getCmp("queryPlaceviewaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryPlaceviewaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryPlaceviewaction").getValue()) {
								Placeviewstore.load({
									params : {
										json : queryjson
									}
								});
							} else {
								Placeviewstore.load({
									params : {
										json : queryjson,
										query : Ext.getCmp("queryPlaceviewaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Placeviewgrid.region = 'center';
	Placeviewstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Placeviewgrid ]
	});
})
