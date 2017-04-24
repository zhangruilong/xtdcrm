Ext.onReady(function() {
	var Huodongclassify = "huodong";
	var Huodongtitle = "当前位置:业务管理》" + Huodongclassify;
	var Huodongaction = "HuodongService.do";
	var Huodongfields = ['huodongid'
	        			    ,'huodongstadium' 
	        			    ,'huodongcode' 
	        			    ,'huodongname' 
	        			    ,'huodongcardtype' 
	        			    ,'huodongcardtypename' 
	        			    ,'huodongnum' 
	        			    ,'huodongbegin' 
	        			    ,'huodongend' 
	        			    ,'huodongmoney' 
	        			    ,'huodongstatue' 
	        			    ,'huodonginswhen' 
	        			    ,'huodonginswho' 
	        			      ];// 全部字段
	var Huodongkeycolumn = [ 'huodongid' ];// 主键
	var Huodongstore = dataStore(Huodongfields, basePath + Huodongaction + "?method=selQuery");// 定义Huodongstore
	var HuodongdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'HuodongdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '',
				id : 'Huodonghuodongid',
				name : 'huodongid'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场馆',
				id : 'Huodonghuodongstadium',
				name : 'huodongstadium'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '优惠码',
				id : 'Huodonghuodongcode',
				name : 'huodongcode'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '名称',
				id : 'Huodonghuodongname',
				name : 'huodongname'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡种',
				id : 'Huodonghuodongcardtype',
				name : 'huodongcardtype'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡种',
				id : 'Huodonghuodongcardtypename',
				name : 'huodongcardtypename'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '数量',
				id : 'Huodonghuodongnum',
				name : 'huodongnum'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '开始',
				id : 'Huodonghuodongbegin',
				name : 'huodongbegin'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '结束',
				id : 'Huodonghuodongend',
				name : 'huodongend'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '折让',
				id : 'Huodonghuodongmoney',
				name : 'huodongmoney'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'Huodonghuodongstatue',
				name : 'huodongstatue'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建时间',
				id : 'Huodonghuodonginswhen',
				name : 'huodonginswhen'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建人',
				id : 'Huodonghuodonginswho',
				name : 'huodonginswho'
			} ]
		}
		]
	});
	
	var Huodongbbar = pagesizebar(Huodongstore);//定义分页
	var Huodonggrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Huodongtitle,
		store : Huodongstore,
		bbar : Huodongbbar,
	    selModel: {
	        type: 'checkboxmodel'
	    },
	    plugins: {
	         ptype: 'cellediting',
	         clicksToEdit: 1
	    },
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : '',
			dataIndex : 'huodongid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '场馆',
			dataIndex : 'huodongstadium',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '优惠码',
			dataIndex : 'huodongcode',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '名称',
			dataIndex : 'huodongname',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '卡种',
			dataIndex : 'huodongcardtype',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '卡种',
			dataIndex : 'huodongcardtypename',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '数量',
			dataIndex : 'huodongnum',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '开始',
			dataIndex : 'huodongbegin',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '结束',
			dataIndex : 'huodongend',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '折让',
			dataIndex : 'huodongmoney',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '状态',
			dataIndex : 'huodongstatue',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建时间',
			dataIndex : 'huodonginswhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建人',
			dataIndex : 'huodonginswho',
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
					HuodongdataForm.form.reset();
					Ext.getCmp("Huodonghuodongid").setEditable (true);
					createTextWindow(basePath + Huodongaction + "?method=insAll", "新增", HuodongdataForm, Huodongstore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Huodonggrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Huodongaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Huodonggrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					HuodongdataForm.form.reset();
					Ext.getCmp("Huodonghuodongid").setEditable (false);
					createTextWindow(basePath + Huodongaction + "?method=updAll", "修改", HuodongdataForm, Huodongstore);
					HuodongdataForm.form.loadRecord(selections[0]);
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
	        					var selections = Huodonggrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Huodongaction + "?method=delAll",selections,Huodongstore,Huodongkeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Huodongaction + "?method=impAll","导入",Huodongstore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Huodongaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryHuodongaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Huodonggrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Huodongkeycolumn.length;i++){
	        						fid += selections[0].data[Huodongkeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Huodongclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Huodonghuodongid").setEditable (true);
    							createQueryWindow("筛选", HuodongdataForm, Huodongstore,Ext.getCmp("queryHuodongaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryHuodongaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Huodongstore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryHuodongaction").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Huodongstore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryHuodongaction").getValue()
							}
					});
				}
			}
		]
	});
	Huodonggrid.region = 'center';
	Huodongstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Huodonggrid ]
	});
})
