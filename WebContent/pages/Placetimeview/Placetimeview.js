Ext.onReady(function() {
	var Placetimeviewclassify = "placetimeview";
	var Placetimeviewtitle = "当前位置:业务管理》" + Placetimeviewclassify;
	var Placetimeviewaction = "PlacetimeviewAction.do";
	var Placetimeviewfields = ['stadiumid'
	        			    ,'stadiumname' 
	        			    ,'placecode' 
	        			    ,'placeproject' 
	        			      ];// 全部字段
	var Placetimeviewkeycolumn = [ 'stadiumid' ];// 主键
	var Placetimeviewstore = dataStore(Placetimeviewfields, basePath + Placetimeviewaction + "?method=selLimit");// 定义Placetimeviewstore
	var PlacetimeviewdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'PlacetimeviewdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Placetimeviewstadiumid',
				name : 'stadiumid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '名称',
				id : 'Placetimeviewstadiumname',
				name : 'stadiumname',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Placetimeviewplacecode',
				name : 'placecode',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '项目',
				id : 'Placetimeviewplaceproject',
				name : 'placeproject',
				maxLength : 100
			} ]
		}
		]
	});
	
	//var Placetimeviewbbar = pagesizebar(Placetimeviewstore);//定义分页
	var Placetimeviewgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Placetimeviewtitle,
		store : Placetimeviewstore,
		//bbar : Placetimeviewbbar,
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
			dataIndex : 'stadiumid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
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
			header : '编码',
			dataIndex : 'placecode',
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
					PlacetimeviewdataForm.form.reset();
					Ext.getCmp("Placetimeviewstadiumid").setEditable (true);
					createTextWindow(basePath + Placetimeviewaction + "?method=insAll", "新增", PlacetimeviewdataForm, Placetimeviewstore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Placetimeviewgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Placetimeviewaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Placetimeviewgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					PlacetimeviewdataForm.form.reset();
					Ext.getCmp("Placetimeviewstadiumid").setEditable (false);
					createTextWindow(basePath + Placetimeviewaction + "?method=updAll", "修改", PlacetimeviewdataForm, Placetimeviewstore);
					PlacetimeviewdataForm.form.loadRecord(selections[0]);
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
	        					var selections = Placetimeviewgrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Placetimeviewaction + "?method=delAll",selections,Placetimeviewstore,Placetimeviewkeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Placetimeviewaction + "?method=impAll","导入",Placetimeviewstore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Placetimeviewaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryPlacetimeviewaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Placetimeviewgrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Placetimeviewkeycolumn.length;i++){
	        						fid += selections[0].data[Placetimeviewkeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Placetimeviewclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Placetimeviewstadiumid").setEditable (true);
    							createQueryWindow("筛选", PlacetimeviewdataForm, Placetimeviewstore,Ext.getCmp("queryPlacetimeviewaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryPlacetimeviewaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryPlacetimeviewaction").getValue()) {
								Placetimeviewstore.load({
									params : {
										json : queryjson
									}
								});
							} else {
								Placetimeviewstore.load({
									params : {
										json : queryjson,
										query : Ext.getCmp("queryPlacetimeviewaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Placetimeviewgrid.region = 'center';
	Placetimeviewstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Placetimeviewgrid ]
	});
})
