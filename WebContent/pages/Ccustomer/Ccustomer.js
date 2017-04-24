Ext.onReady(function() {
	var Ccustomerclassify = "ccustomer";
	var Ccustomertitle = "当前位置:业务管理》" + Ccustomerclassify;
	var Ccustomeraction = "CcustomerService.do";
	var Ccustomerfields = ['ccustomerid'
	        			    ,'ccustomercoach' 
	        			    ,'ccustomercustomer' 
	        			    ,'ccustomerinswhen' 
	        			    ,'ccustomerinswho' 
	        			      ];// 全部字段
	var Ccustomerkeycolumn = [ 'ccustomerid' ];// 主键
	var Ccustomerstore = dataStore(Ccustomerfields, basePath + Ccustomeraction + "?method=selQuery");// 定义Ccustomerstore
	var CcustomerdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'CcustomerdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Ccustomerccustomerid',
				name : 'ccustomerid'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '教练ID',
				id : 'Ccustomerccustomercoach',
				name : 'ccustomercoach'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '会员ID',
				id : 'Ccustomerccustomercustomer',
				name : 'ccustomercustomer'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建时间',
				id : 'Ccustomerccustomerinswhen',
				name : 'ccustomerinswhen'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建人',
				id : 'Ccustomerccustomerinswho',
				name : 'ccustomerinswho'
			} ]
		}
		]
	});
	
	var Ccustomerbbar = pagesizebar(Ccustomerstore);//定义分页
	var Ccustomergrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Ccustomertitle,
		store : Ccustomerstore,
		bbar : Ccustomerbbar,
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
			dataIndex : 'ccustomerid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '教练ID',
			dataIndex : 'ccustomercoach',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '会员ID',
			dataIndex : 'ccustomercustomer',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建时间',
			dataIndex : 'ccustomerinswhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建人',
			dataIndex : 'ccustomerinswho',
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
					CcustomerdataForm.form.reset();
					Ext.getCmp("Ccustomerccustomerid").setEditable (true);
					createTextWindow(basePath + Ccustomeraction + "?method=insAll", "新增", CcustomerdataForm, Ccustomerstore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Ccustomergrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Ccustomeraction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Ccustomergrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					CcustomerdataForm.form.reset();
					Ext.getCmp("Ccustomerccustomerid").setEditable (false);
					createTextWindow(basePath + Ccustomeraction + "?method=updAll", "修改", CcustomerdataForm, Ccustomerstore);
					CcustomerdataForm.form.loadRecord(selections[0]);
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
	        					var selections = Ccustomergrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Ccustomeraction + "?method=delAll",selections,Ccustomerstore,Ccustomerkeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Ccustomeraction + "?method=impAll","导入",Ccustomerstore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Ccustomeraction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryCcustomeraction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Ccustomergrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Ccustomerkeycolumn.length;i++){
	        						fid += selections[0].data[Ccustomerkeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Ccustomerclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Ccustomerccustomerid").setEditable (true);
    							createQueryWindow("筛选", CcustomerdataForm, Ccustomerstore,Ext.getCmp("queryCcustomeraction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryCcustomeraction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Ccustomerstore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryCcustomeraction").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Ccustomerstore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryCcustomeraction").getValue()
							}
					});
				}
			}
		]
	});
	Ccustomergrid.region = 'center';
	Ccustomerstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Ccustomergrid ]
	});
})
