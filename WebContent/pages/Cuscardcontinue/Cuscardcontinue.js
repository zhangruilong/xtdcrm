Ext.onReady(function() {
	var Cuscardcontinueclassify = "cuscardcontinue";
	var Cuscardcontinuetitle = "当前位置:业务管理》" + Cuscardcontinueclassify;
	var Cuscardcontinueaction = "CuscardcontinueAction.do";
	var Cuscardcontinuefields = ['cuscardid'
	        			    ,'cuscardcustomer' 
	        			    ,'cuscardtype' 
	        			    ,'cuscardno' 
	        			    ,'cuscardpsw' 
	        			    ,'cuscardbegin' 
	        			    ,'cuscardend' 
	        			    ,'cuscardmoney' 
	        			    ,'cuscardnums' 
	        			    ,'cuscardtimes' 
	        			    ,'cuscardmoneynew' 
	        			    ,'cuscardnumsnew' 
	        			    ,'cuscardtimesnew' 
	        			    ,'cuscardint' 
	        			    ,'cuscarddetail' 
	        			    ,'cuscardstatue' 
	        			    ,'createtime' 
	        			    ,'creator' 
	        			      ];// 全部字段
	var Cuscardcontinuekeycolumn = [ 'cuscardid' ];// 主键
	var Cuscardcontinuestore = dataStore(Cuscardcontinuefields, basePath + Cuscardcontinueaction + "?method=selLimit");// 定义Cuscardcontinuestore
	var CuscardcontinuedataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'CuscardcontinuedataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Cuscardcontinuecuscardid',
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
				id : 'Cuscardcontinuecuscardcustomer',
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
				id : 'Cuscardcontinuecuscardtype',
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
				id : 'Cuscardcontinuecuscardno',
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
				id : 'Cuscardcontinuecuscardpsw',
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
				id : 'Cuscardcontinuecuscardbegin',
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
				id : 'Cuscardcontinuecuscardend',
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
				id : 'Cuscardcontinuecuscardmoney',
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
				id : 'Cuscardcontinuecuscardnums',
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
				id : 'Cuscardcontinuecuscardtimes',
				name : 'cuscardtimes',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡新余额',
				id : 'Cuscardcontinuecuscardmoneynew',
				name : 'cuscardmoneynew',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡新总次数',
				id : 'Cuscardcontinuecuscardnumsnew',
				name : 'cuscardnumsnew',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡新余次',
				id : 'Cuscardcontinuecuscardtimesnew',
				name : 'cuscardtimesnew',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡积分',
				id : 'Cuscardcontinuecuscardint',
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
				id : 'Cuscardcontinuecuscarddetail',
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
				id : 'Cuscardcontinuecuscardstatue',
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
				id : 'Cuscardcontinuecreatetime',
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
				id : 'Cuscardcontinuecreator',
				name : 'creator',
				maxLength : 100
			} ]
		}
		]
	});
	
	//var Cuscardcontinuebbar = pagesizebar(Cuscardcontinuestore);//定义分页
	var Cuscardcontinuegrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Cuscardcontinuetitle,
		store : Cuscardcontinuestore,
		//bbar : Cuscardcontinuebbar,
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
			header : '卡新余额',
			dataIndex : 'cuscardmoneynew',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '卡新总次数',
			dataIndex : 'cuscardnumsnew',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '卡新余次',
			dataIndex : 'cuscardtimesnew',
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
					CuscardcontinuedataForm.form.reset();
					Ext.getCmp("Cuscardcontinuecuscardid").setEditable (true);
					createTextWindow(basePath + Cuscardcontinueaction + "?method=insAll", "新增", CuscardcontinuedataForm, Cuscardcontinuestore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Cuscardcontinuegrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Cuscardcontinueaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Cuscardcontinuegrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					CuscardcontinuedataForm.form.reset();
					Ext.getCmp("Cuscardcontinuecuscardid").setEditable (false);
					createTextWindow(basePath + Cuscardcontinueaction + "?method=updAll", "修改", CuscardcontinuedataForm, Cuscardcontinuestore);
					CuscardcontinuedataForm.form.loadRecord(selections[0]);
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
	        					var selections = Cuscardcontinuegrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Cuscardcontinueaction + "?method=delAll",selections,Cuscardcontinuestore,Cuscardcontinuekeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Cuscardcontinueaction + "?method=impAll","导入",Cuscardcontinuestore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Cuscardcontinueaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryCuscardcontinueaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Cuscardcontinuegrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Cuscardcontinuekeycolumn.length;i++){
	        						fid += selections[0].data[Cuscardcontinuekeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Cuscardcontinueclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Cuscardcontinuecuscardid").setEditable (true);
    							createQueryWindow("筛选", CuscardcontinuedataForm, Cuscardcontinuestore,Ext.getCmp("queryCuscardcontinueaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryCuscardcontinueaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryCuscardcontinueaction").getValue()) {
								Cuscardcontinuestore.load({
									params : {
										json : queryjson
									}
								});
							} else {
								Cuscardcontinuestore.load({
									params : {
										json : queryjson,
										query : Ext.getCmp("queryCuscardcontinueaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Cuscardcontinuegrid.region = 'center';
	Cuscardcontinuestore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Cuscardcontinuegrid ]
	});
})
