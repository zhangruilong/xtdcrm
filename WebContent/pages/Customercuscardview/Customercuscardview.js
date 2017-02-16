Ext.onReady(function() {
	var Customercuscardviewclassify = "customercuscardview";
	var Customercuscardviewtitle = "当前位置:业务管理》" + Customercuscardviewclassify;
	var Customercuscardviewaction = "CustomercuscardviewAction.do";
	var Customercuscardviewfields = ['cuscardid'
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
	        			    ,'customerstadium' 
	        			    ,'customercode' 
	        			    ,'customername' 
	        			    ,'customerphone' 
	        			    ,'openid' 
	        			    ,'customersex' 
	        			    ,'customerage' 
	        			    ,'customercdcard' 
	        			    ,'customerhome' 
	        			    ,'customercompany' 
	        			    ,'customerbirthday' 
	        			    ,'customergoodday' 
	        			    ,'customeremail' 
	        			    ,'customerhow' 
	        			    ,'customertime' 
	        			    ,'customerimage' 
	        			    ,'customeremp' 
	        			    ,'customerlevel' 
	        			    ,'customerdetail' 
	        			    ,'customerstatue' 
	        			      ];// 全部字段
	var Customercuscardviewkeycolumn = [ 'cuscardid' ];// 主键
	var Customercuscardviewstore = dataStore(Customercuscardviewfields, basePath + Customercuscardviewaction + "?method=selLimit");// 定义Customercuscardviewstore
	var CustomercuscardviewdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'CustomercuscardviewdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Customercuscardviewcuscardid',
				name : 'cuscardid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Customercuscardviewcuscardcustomer',
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
				id : 'Customercuscardviewcuscardtype',
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
				id : 'Customercuscardviewcuscardno',
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
				id : 'Customercuscardviewcuscardpsw',
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
				id : 'Customercuscardviewcuscardbegin',
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
				id : 'Customercuscardviewcuscardend',
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
				id : 'Customercuscardviewcuscardmoney',
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
				id : 'Customercuscardviewcuscardnums',
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
				id : 'Customercuscardviewcuscardtimes',
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
				id : 'Customercuscardviewcuscardint',
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
				id : 'Customercuscardviewcuscarddetail',
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
				id : 'Customercuscardviewcuscardstatue',
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
				id : 'Customercuscardviewcreatetime',
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
				id : 'Customercuscardviewcreator',
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
				id : 'Customercuscardviewupdtime',
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
				id : 'Customercuscardviewupdor',
				name : 'updor',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场馆ID',
				id : 'Customercuscardviewcustomerstadium',
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
				id : 'Customercuscardviewcustomercode',
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
				id : 'Customercuscardviewcustomername',
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
				id : 'Customercuscardviewcustomerphone',
				name : 'customerphone',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'OPENID',
				id : 'Customercuscardviewopenid',
				name : 'openid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '性别',
				id : 'Customercuscardviewcustomersex',
				name : 'customersex',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '年龄',
				id : 'Customercuscardviewcustomerage',
				name : 'customerage',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '身份证',
				id : 'Customercuscardviewcustomercdcard',
				name : 'customercdcard',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '家庭住址',
				id : 'Customercuscardviewcustomerhome',
				name : 'customerhome',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '单位地址',
				id : 'Customercuscardviewcustomercompany',
				name : 'customercompany',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '生日',
				id : 'Customercuscardviewcustomerbirthday',
				name : 'customerbirthday',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '纪念日',
				id : 'Customercuscardviewcustomergoodday',
				name : 'customergoodday',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '邮箱',
				id : 'Customercuscardviewcustomeremail',
				name : 'customeremail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '入会途径',
				id : 'Customercuscardviewcustomerhow',
				name : 'customerhow',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '入会时间',
				id : 'Customercuscardviewcustomertime',
				name : 'customertime',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '照片',
				id : 'Customercuscardviewcustomerimage',
				name : 'customerimage',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '顾问',
				id : 'Customercuscardviewcustomeremp',
				name : 'customeremp',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '等级',
				id : 'Customercuscardviewcustomerlevel',
				name : 'customerlevel',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '备注',
				id : 'Customercuscardviewcustomerdetail',
				name : 'customerdetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'Customercuscardviewcustomerstatue',
				name : 'customerstatue',
				maxLength : 100
			} ]
		}
		]
	});
	
	//var Customercuscardviewbbar = pagesizebar(Customercuscardviewstore);//定义分页
	var Customercuscardviewgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Customercuscardviewtitle,
		store : Customercuscardviewstore,
		//bbar : Customercuscardviewbbar,
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
			header : 'ID',
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
		, {
			header : 'OPENID',
			dataIndex : 'openid',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '性别',
			dataIndex : 'customersex',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '年龄',
			dataIndex : 'customerage',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '身份证',
			dataIndex : 'customercdcard',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '家庭住址',
			dataIndex : 'customerhome',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '单位地址',
			dataIndex : 'customercompany',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '生日',
			dataIndex : 'customerbirthday',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '纪念日',
			dataIndex : 'customergoodday',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '邮箱',
			dataIndex : 'customeremail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '入会途径',
			dataIndex : 'customerhow',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '入会时间',
			dataIndex : 'customertime',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '照片',
			dataIndex : 'customerimage',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '顾问',
			dataIndex : 'customeremp',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '等级',
			dataIndex : 'customerlevel',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '备注',
			dataIndex : 'customerdetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '状态',
			dataIndex : 'customerstatue',
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
					CustomercuscardviewdataForm.form.reset();
					Ext.getCmp("Customercuscardviewcuscardid").setEditable (true);
					createTextWindow(basePath + Customercuscardviewaction + "?method=insAll", "新增", CustomercuscardviewdataForm, Customercuscardviewstore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Customercuscardviewgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Customercuscardviewaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Customercuscardviewgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					CustomercuscardviewdataForm.form.reset();
					Ext.getCmp("Customercuscardviewcuscardid").setEditable (false);
					createTextWindow(basePath + Customercuscardviewaction + "?method=updAll", "修改", CustomercuscardviewdataForm, Customercuscardviewstore);
					CustomercuscardviewdataForm.form.loadRecord(selections[0]);
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
	        					var selections = Customercuscardviewgrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Customercuscardviewaction + "?method=delAll",selections,Customercuscardviewstore,Customercuscardviewkeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Customercuscardviewaction + "?method=impAll","导入",Customercuscardviewstore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Customercuscardviewaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryCustomercuscardviewaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Customercuscardviewgrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Customercuscardviewkeycolumn.length;i++){
	        						fid += selections[0].data[Customercuscardviewkeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Customercuscardviewclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Customercuscardviewcuscardid").setEditable (true);
    							createQueryWindow("筛选", CustomercuscardviewdataForm, Customercuscardviewstore,Ext.getCmp("queryCustomercuscardviewaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryCustomercuscardviewaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryCustomercuscardviewaction").getValue()) {
								Customercuscardviewstore.load({
									params : {
										json : queryjson
									}
								});
							} else {
								Customercuscardviewstore.load({
									params : {
										json : queryjson,
										query : Ext.getCmp("queryCustomercuscardviewaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Customercuscardviewgrid.region = 'center';
	Customercuscardviewstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Customercuscardviewgrid ]
	});
})
