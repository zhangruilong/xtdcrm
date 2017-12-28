Ext.onReady(function() {
	var Competclassify = "compet";
	var Compettitle = "当前位置:业务管理》" + Competclassify;
	var CompetService = "CompetService.do";
	var Competfields = ['competid'
	        			    ,'competcompany' 
	        			    ,'competproduct' 
	        			    ,'compethappen' 
	        			    ,'competdetail' 
	        			    ,'competinswhen' 
	        			    ,'competinswho' 
	        			      ];// 全部字段
	var Competkeycolumn = [ 'competid' ];// 主键
	var Competstore = dataStore(Competfields, basePath + CompetService + "?method=selQuery");// 定义Competstore
	var CompetdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'CompetdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : .5,
			hidden : true,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'id',
				id : 'Competcompetid',
				name : 'competid'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '公司',
				id : 'Competcompetcompany',
				name : 'competcompany'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '产品种类',
				id : 'Competcompetproduct',
				name : 'competproduct'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '影响',
				id : 'Competcompethappen',
				name : 'compethappen'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '备注',
				id : 'Competcompetdetail',
				name : 'competdetail'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'datefield',
				format : 'Y-m-d',
				value : new Date(),
				fieldLabel : '创建时间',
				id : 'Competcompetinswhen',
				name : 'competinswhen'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建人',
				value : currentuser.username,
				id : 'Competcompetinswho',
				name : 'competinswho'
			} ]
		}
		]
	});
	
	var Competbbar = pagesizebar(Competstore);//定义分页
	var Competgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Compettitle,
		store : Competstore,
		bbar : Competbbar,
	    selModel: {
	        type: 'checkboxmodel'
	    },
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : 'id',
			dataIndex : 'competid',
			hidden : true,
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '公司',
			dataIndex : 'competcompany',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '产品种类',
			dataIndex : 'competproduct',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '影响',
			dataIndex : 'compethappen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '备注',
			dataIndex : 'competdetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建时间',
			dataIndex : 'competinswhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建人',
			dataIndex : 'competinswho',
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
					CompetdataForm.form.reset();
					Ext.getCmp("Competcompetid").setEditable (true);
					createTextWindow(basePath + CompetService + "?method=insAll", "新增", CompetdataForm, Competstore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Competgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + CompetService + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Competgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					CompetdataForm.form.reset();
					Ext.getCmp("Competcompetid").setEditable (false);
					createTextWindow(basePath + CompetService + "?method=updAll", "修改", CompetdataForm, Competstore);
					CompetdataForm.form.loadRecord(selections[0]);
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
	        					var selections = Competgrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + CompetService + "?method=delAll",selections,Competstore,Competkeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + CompetService + "?method=impAll","导入",Competstore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + CompetService + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryCompetService").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Competgrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Competkeycolumn.length;i++){
	        						fid += selections[0].data[Competkeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Competclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Competcompetid").setEditable (true);
    							createQueryWindow("筛选", CompetdataForm, Competstore,Ext.getCmp("queryCompetService").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryCompetService',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Competstore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryCompetService").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Competstore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryCompetService").getValue()
							}
					});
				}
			}
		]
	});
	Competgrid.region = 'center';
	Competstore.on("beforeload",function(){ 
		Competstore.getProxy().extraParams = {
				json : queryjson,
				query : Ext.getCmp("queryCompetService").getValue()
		}; 
	});
	Competstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Competgrid ]
	});
})
