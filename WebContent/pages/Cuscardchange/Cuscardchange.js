Ext.onReady(function() {
	var Cuscardchangeclassify = "cuscardchange";
	var Cuscardchangetitle = "当前位置:业务管理》" + Cuscardchangeclassify;
	var Cuscardchangeaction = "CuscardchangeAction.do";
	var Cuscardchangefields = ['cuscardid'
	        			    ,'cuscardcustomer' 
	        			    ,'cuscardtype' 
	        			    ,'cuscardno' 
	        			    ,'cuscardnonew' 
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
	        			      ];// 全部字段
	var Cuscardchangekeycolumn = [ 'cuscardid' ];// 主键
	var Cuscardchangestore = dataStore(Cuscardchangefields, basePath + Cuscardchangeaction + "?method=selLimit");// 定义Cuscardchangestore
	var CuscardchangedataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'CuscardchangedataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Cuscardchangecuscardid',
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
				id : 'Cuscardchangecuscardcustomer',
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
				id : 'Cuscardchangecuscardtype',
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
				id : 'Cuscardchangecuscardno',
				name : 'cuscardno',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '新卡号',
				id : 'Cuscardchangecuscardnonew',
				name : 'cuscardnonew',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '密码',
				id : 'Cuscardchangecuscardpsw',
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
				id : 'Cuscardchangecuscardbegin',
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
				id : 'Cuscardchangecuscardend',
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
				id : 'Cuscardchangecuscardmoney',
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
				id : 'Cuscardchangecuscardnums',
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
				id : 'Cuscardchangecuscardtimes',
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
				id : 'Cuscardchangecuscardint',
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
				id : 'Cuscardchangecuscarddetail',
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
				id : 'Cuscardchangecuscardstatue',
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
				id : 'Cuscardchangecreatetime',
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
				id : 'Cuscardchangecreator',
				name : 'creator',
				maxLength : 100
			} ]
		}
		]
	});
	
	//var Cuscardchangebbar = pagesizebar(Cuscardchangestore);//定义分页
	var Cuscardchangegrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Cuscardchangetitle,
		store : Cuscardchangestore,
		//bbar : Cuscardchangebbar,
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
			header : '新卡号',
			dataIndex : 'cuscardnonew',
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
		],
		tbar : [{
				text : Ext.os.deviceType === 'Phone' ? null : "新增",
				iconCls : 'add',
				handler : function() {
					CuscardchangedataForm.form.reset();
					Ext.getCmp("Cuscardchangecuscardid").setEditable (true);
					createTextWindow(basePath + Cuscardchangeaction + "?method=insAll", "新增", CuscardchangedataForm, Cuscardchangestore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Cuscardchangegrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Cuscardchangeaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Cuscardchangegrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					CuscardchangedataForm.form.reset();
					Ext.getCmp("Cuscardchangecuscardid").setEditable (false);
					createTextWindow(basePath + Cuscardchangeaction + "?method=updAll", "修改", CuscardchangedataForm, Cuscardchangestore);
					CuscardchangedataForm.form.loadRecord(selections[0]);
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
	        					var selections = Cuscardchangegrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Cuscardchangeaction + "?method=delAll",selections,Cuscardchangestore,Cuscardchangekeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Cuscardchangeaction + "?method=impAll","导入",Cuscardchangestore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Cuscardchangeaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryCuscardchangeaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Cuscardchangegrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Cuscardchangekeycolumn.length;i++){
	        						fid += selections[0].data[Cuscardchangekeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Cuscardchangeclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Cuscardchangecuscardid").setEditable (true);
    							createQueryWindow("筛选", CuscardchangedataForm, Cuscardchangestore,Ext.getCmp("queryCuscardchangeaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryCuscardchangeaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryCuscardchangeaction").getValue()) {
								Cuscardchangestore.load({
									params : {
										json : queryjson
									}
								});
							} else {
								Cuscardchangestore.load({
									params : {
										json : queryjson,
										query : Ext.getCmp("queryCuscardchangeaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Cuscardchangegrid.region = 'center';
	Cuscardchangestore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Cuscardchangegrid ]
	});
})
