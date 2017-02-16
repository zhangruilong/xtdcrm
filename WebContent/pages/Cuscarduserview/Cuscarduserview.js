Ext.onReady(function() {
	var Cuscarduserviewclassify = "cuscarduserview";
	var Cuscarduserviewtitle = "当前位置:业务管理》" + Cuscarduserviewclassify;
	var Cuscarduserviewaction = "CuscarduserviewAction.do";
	var Cuscarduserviewfields = ['cuscardid'
	        			    ,'cuscardcustomer' 
	        			    ,'cuscardcustomernew' 
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
	        			    ,'customerstadiumnew' 
	        			    ,'customercodenew' 
	        			    ,'customernamenew' 
	        			    ,'customerphonenew' 
	        			    ,'customerstadium' 
	        			    ,'customercode' 
	        			    ,'customername' 
	        			    ,'customerphone' 
	        			      ];// 全部字段
	var Cuscarduserviewkeycolumn = [ 'cuscardid' ];// 主键
	var Cuscarduserviewstore = dataStore(Cuscarduserviewfields, basePath + Cuscarduserviewaction + "?method=selLimit");// 定义Cuscarduserviewstore
	var CuscarduserviewdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'CuscarduserviewdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Cuscarduserviewcuscardid',
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
				id : 'Cuscarduserviewcuscardcustomer',
				name : 'cuscardcustomer',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '新会员ID',
				id : 'Cuscarduserviewcuscardcustomernew',
				name : 'cuscardcustomernew',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '分类',
				id : 'Cuscarduserviewcuscardtype',
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
				id : 'Cuscarduserviewcuscardno',
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
				id : 'Cuscarduserviewcuscardpsw',
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
				id : 'Cuscarduserviewcuscardbegin',
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
				id : 'Cuscarduserviewcuscardend',
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
				id : 'Cuscarduserviewcuscardmoney',
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
				id : 'Cuscarduserviewcuscardnums',
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
				id : 'Cuscarduserviewcuscardtimes',
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
				id : 'Cuscarduserviewcuscardint',
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
				id : 'Cuscarduserviewcuscarddetail',
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
				id : 'Cuscarduserviewcuscardstatue',
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
				id : 'Cuscarduserviewcreatetime',
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
				id : 'Cuscarduserviewcreator',
				name : 'creator',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场馆ID',
				id : 'Cuscarduserviewcustomerstadiumnew',
				name : 'customerstadiumnew',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Cuscarduserviewcustomercodenew',
				name : 'customercodenew',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '姓名',
				id : 'Cuscarduserviewcustomernamenew',
				name : 'customernamenew',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '手机',
				id : 'Cuscarduserviewcustomerphonenew',
				name : 'customerphonenew',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场馆ID',
				id : 'Cuscarduserviewcustomerstadium',
				name : 'customerstadium',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Cuscarduserviewcustomercode',
				name : 'customercode',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '姓名',
				id : 'Cuscarduserviewcustomername',
				name : 'customername',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '手机',
				id : 'Cuscarduserviewcustomerphone',
				name : 'customerphone',
				maxLength : 100
			} ]
		}
		]
	});
	
	//var Cuscarduserviewbbar = pagesizebar(Cuscarduserviewstore);//定义分页
	var Cuscarduserviewgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Cuscarduserviewtitle,
		store : Cuscarduserviewstore,
		//bbar : Cuscarduserviewbbar,
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
			header : '新会员ID',
			dataIndex : 'cuscardcustomernew',
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
			header : '场馆ID',
			dataIndex : 'customerstadiumnew',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '编码',
			dataIndex : 'customercodenew',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '姓名',
			dataIndex : 'customernamenew',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '手机',
			dataIndex : 'customerphonenew',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '场馆ID',
			dataIndex : 'customerstadium',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '编码',
			dataIndex : 'customercode',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '姓名',
			dataIndex : 'customername',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '手机',
			dataIndex : 'customerphone',
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
					CuscarduserviewdataForm.form.reset();
					Ext.getCmp("Cuscarduserviewcuscardid").setEditable (true);
					createTextWindow(basePath + Cuscarduserviewaction + "?method=insAll", "新增", CuscarduserviewdataForm, Cuscarduserviewstore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Cuscarduserviewgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Cuscarduserviewaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Cuscarduserviewgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					CuscarduserviewdataForm.form.reset();
					Ext.getCmp("Cuscarduserviewcuscardid").setEditable (false);
					createTextWindow(basePath + Cuscarduserviewaction + "?method=updAll", "修改", CuscarduserviewdataForm, Cuscarduserviewstore);
					CuscarduserviewdataForm.form.loadRecord(selections[0]);
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
	        					var selections = Cuscarduserviewgrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Cuscarduserviewaction + "?method=delAll",selections,Cuscarduserviewstore,Cuscarduserviewkeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Cuscarduserviewaction + "?method=impAll","导入",Cuscarduserviewstore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Cuscarduserviewaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryCuscarduserviewaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Cuscarduserviewgrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Cuscarduserviewkeycolumn.length;i++){
	        						fid += selections[0].data[Cuscarduserviewkeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Cuscarduserviewclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Cuscarduserviewcuscardid").setEditable (true);
    							createQueryWindow("筛选", CuscarduserviewdataForm, Cuscarduserviewstore,Ext.getCmp("queryCuscarduserviewaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryCuscarduserviewaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryCuscarduserviewaction").getValue()) {
								Cuscarduserviewstore.load({
									params : {
										json : queryjson
									}
								});
							} else {
								Cuscarduserviewstore.load({
									params : {
										json : queryjson,
										query : Ext.getCmp("queryCuscarduserviewaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Cuscarduserviewgrid.region = 'center';
	Cuscarduserviewstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Cuscarduserviewgrid ]
	});
})
