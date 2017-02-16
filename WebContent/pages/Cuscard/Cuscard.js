Ext.onReady(function() {
	var Cuscardclassify = "cuscard";
	var Cuscardtitle = "当前位置:业务管理》" + Cuscardclassify;
	var Cuscardaction = "CuscardAction.do";
	var Cuscardfields = ['cuscardid'
	        			    ,'cuscardcustomer' 
	        			    ,'cuscardtype' 
	        			    ,'cuscardno' 
	        			    ,'cuscardpsw' 
	        			    ,'cuscardbegin' 
	        			    ,'cuscardend' 
	        			    ,'cuscardmoney' 
	        			    ,'cuscardnums' 
	        			    ,'cuscardtimes' 
	        			    ,'cuscardint' 
	        			    ,'cuscarddetail' 
	        			    ,'cuscardstatue' 
	        			    ,'createtime' 
	        			    ,'creator' 
	        			    ,'updtime' 
	        			    ,'updor' 
	        			      ];// 全部字段
	var Cuscardkeycolumn = [ 'cuscardid' ];// 主键
	var Cuscardstore = dataStore(Cuscardfields, basePath + Cuscardaction + "?method=selLimit");// 定义Cuscardstore
	var CuscarddataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'CuscarddataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Cuscardcuscardid',
				name : 'cuscardid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '会员ID',
				id : 'Cuscardcuscardcustomer',
				name : 'cuscardcustomer',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '分类',
				id : 'Cuscardcuscardtype',
				name : 'cuscardtype',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡号',
				id : 'Cuscardcuscardno',
				name : 'cuscardno',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '密码',
				id : 'Cuscardcuscardpsw',
				name : 'cuscardpsw',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '有效期开始',
				id : 'Cuscardcuscardbegin',
				name : 'cuscardbegin',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '有效期结束',
				id : 'Cuscardcuscardend',
				name : 'cuscardend',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡余额',
				id : 'Cuscardcuscardmoney',
				name : 'cuscardmoney',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡总次数',
				id : 'Cuscardcuscardnums',
				name : 'cuscardnums',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡余次',
				id : 'Cuscardcuscardtimes',
				name : 'cuscardtimes',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡积分',
				id : 'Cuscardcuscardint',
				name : 'cuscardint',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '备注',
				id : 'Cuscardcuscarddetail',
				name : 'cuscarddetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'Cuscardcuscardstatue',
				name : 'cuscardstatue',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建时间',
				id : 'Cuscardcreatetime',
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
				id : 'Cuscardcreator',
				name : 'creator',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '更新时间',
				id : 'Cuscardupdtime',
				name : 'updtime',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '更新人',
				id : 'Cuscardupdor',
				name : 'updor',
				maxLength : 100
			} ]
		}
		]
	});
	
	//var Cuscardbbar = pagesizebar(Cuscardstore);//定义分页
	var Cuscardgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Cuscardtitle,
		store : Cuscardstore,
		//bbar : Cuscardbbar,
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
			dataIndex : 'cuscardid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '会员ID',
			dataIndex : 'cuscardcustomer',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '分类',
			dataIndex : 'cuscardtype',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '卡号',
			dataIndex : 'cuscardno',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '密码',
			dataIndex : 'cuscardpsw',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '有效期开始',
			dataIndex : 'cuscardbegin',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '有效期结束',
			dataIndex : 'cuscardend',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '卡余额',
			dataIndex : 'cuscardmoney',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '卡总次数',
			dataIndex : 'cuscardnums',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '卡余次',
			dataIndex : 'cuscardtimes',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '卡积分',
			dataIndex : 'cuscardint',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '备注',
			dataIndex : 'cuscarddetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '状态',
			dataIndex : 'cuscardstatue',
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
		, {
			header : '更新时间',
			dataIndex : 'updtime',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '更新人',
			dataIndex : 'updor',
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
					CuscarddataForm.form.reset();
					Ext.getCmp("Cuscardcuscardid").setEditable (true);
					createTextWindow(basePath + Cuscardaction + "?method=insAll", "新增", CuscarddataForm, Cuscardstore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Cuscardgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Cuscardaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Cuscardgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					CuscarddataForm.form.reset();
					Ext.getCmp("Cuscardcuscardid").setEditable (false);
					createTextWindow(basePath + Cuscardaction + "?method=updAll", "修改", CuscarddataForm, Cuscardstore);
					CuscarddataForm.form.loadRecord(selections[0]);
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
	        					var selections = Cuscardgrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Cuscardaction + "?method=delAll",selections,Cuscardstore,Cuscardkeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Cuscardaction + "?method=impAll","导入",Cuscardstore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Cuscardaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryCuscardaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Cuscardgrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Cuscardkeycolumn.length;i++){
	        						fid += selections[0].data[Cuscardkeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Cuscardclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Cuscardcuscardid").setEditable (true);
    							createQueryWindow("筛选", CuscarddataForm, Cuscardstore,Ext.getCmp("queryCuscardaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryCuscardaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryCuscardaction").getValue()) {
								Cuscardstore.load({
									params : {
										json : queryjson
									}
								});
							} else {
								Cuscardstore.load({
									params : {
										json : queryjson,
										query : Ext.getCmp("queryCuscardaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Cuscardgrid.region = 'center';
	Cuscardstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Cuscardgrid ]
	});
})
