Ext.onReady(function() {
	var Customerbigclassify = "customerbig";
	var Customerbigtitle = "当前位置:业务管理》" + Customerbigclassify;
	var CustomerbigService = "CustomerbigService.do";
	var Customerbigfields = ['cuscardid'
	        			    ,'cuscardcustomer' 
	        			    ,'cuscardstadium' 
	        			    ,'cuscardno' 
	        			    ,'cuscardpoint' 
	        			    ,'cuscardtypename' 
	        			    ,'cuscardbegin' 
	        			    ,'cuscardend' 
	        			    ,'cuscardprice' 
	        			    ,'cuscardnums' 
	        			    ,'cuscardmoney' 
	        			    ,'cuscardstopmoney' 
	        			    ,'cuscarddetail' 
	        			    ,'cuscardinswhen' 
	        			    ,'cuscardinswho' 
	        			    ,'cuscardupdwhen' 
	        			    ,'cuscardupdwho' 
	        			      ];// 全部字段
	var Customerbigkeycolumn = [ 'cuscardid' ];// 主键
	var Customerbigstore = dataStore(Customerbigfields, basePath + CustomerbigService + "?method=selQuery");// 定义Customerbigstore
	var CustomerbigdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'CustomerbigdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : .5,
			layout : 'form',
			hidden : true,
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Customerbigcuscardid',
				name : 'cuscardid'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '公司',
				id : 'Customerbigcuscardcustomer',
				name : 'cuscardcustomer'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场馆',
				id : 'Customerbigcuscardstadium',
				name : 'cuscardstadium'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '起始卡号',
				id : 'Customerbigcuscardno',
				name : 'cuscardno'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '发卡数量',
				id : 'Customerbigcuscardpoint',
				name : 'cuscardpoint'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡种',
				id : 'Customerbigcuscardtypename',
				name : 'cuscardtypename'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'datefield',
				format : 'Y-m-d',
				fieldLabel : '有效期开始',
				id : 'Customerbigcuscardbegin',
				name : 'cuscardbegin'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'datefield',
				format : 'Y-m-d',
				fieldLabel : '有效期结束',
				id : 'Customerbigcuscardend',
				name : 'cuscardend'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '价格',
				id : 'Customerbigcuscardprice',
				name : 'cuscardprice'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '刷卡总次数',
				id : 'Customerbigcuscardnums',
				name : 'cuscardnums'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '待付款',
				id : 'Customerbigcuscardmoney',
				name : 'cuscardmoney'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '已付款',
				id : 'Customerbigcuscardstopmoney',
				name : 'cuscardstopmoney'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '备注',
				id : 'Customerbigcuscarddetail',
				name : 'cuscarddetail'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'datefield',
				format : 'Y-m-d',
				fieldLabel : '创建时间',
				id : 'Customerbigcuscardinswhen',
				name : 'cuscardinswhen'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建人',
				id : 'Customerbigcuscardinswho',
				name : 'cuscardinswho'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'datefield',
				format : 'Y-m-d',
				fieldLabel : '收款时间',
				id : 'Customerbigcuscardupdwhen',
				name : 'cuscardupdwhen'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '收款人',
				id : 'Customerbigcuscardupdwho',
				name : 'cuscardupdwho'
			} ]
		}
		]
	});
	
	var Customerbigbbar = pagesizebar(Customerbigstore);//定义分页
	var Customerbiggrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Customerbigtitle,
		store : Customerbigstore,
		bbar : Customerbigbbar,
	    selModel: {
	        type: 'checkboxmodel'
	    },
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : 'ID',
			dataIndex : 'cuscardid',
			sortable : true, 
			hidden : true,
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '公司',
			dataIndex : 'cuscardcustomer',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '场馆',
			dataIndex : 'cuscardstadium',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '起始卡号',
			dataIndex : 'cuscardno',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '发卡数量',
			dataIndex : 'cuscardpoint',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '卡种',
			dataIndex : 'cuscardtypename',
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
			header : '价格',
			dataIndex : 'cuscardmoney',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '刷卡总次数',
			dataIndex : 'cuscardnums',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '待付款',
			dataIndex : 'cuscardprice',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '已付款',
			dataIndex : 'cuscardstopmoney',
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
			header : '创建时间',
			dataIndex : 'cuscardinswhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建人',
			dataIndex : 'cuscardinswho',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '收款时间',
			dataIndex : 'cuscardupdwhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '收款人',
			dataIndex : 'cuscardupdwho',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		],
		tbar : [{
				text : "统计总次数",
				iconCls : 'ok',
				handler : function() {
					var selections = Customerbiggrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					json = "["+Ext.encode(selections[0].getData())+"]";
					Ext.Ajax.request({
						url : basePath + CustomerbigService + "?method=zongcishu",
						method : 'POST',
						params : {
							json : json
						},
						success : function(response) {
							var resp = Ext.decode(response.responseText); 
							Ext.Msg.alert('提示', resp.msg, function(){
								selections[0].set("cuscardnums",resp.num);
								selections[0].set("cuscardprice",selections[0].get('cuscardmoney')*resp.num);
							});
						},
						failure : function(response) {
							Ext.Msg.alert('提示', '网络出现问题，请稍后再试');
						}
					});
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "新增",
				iconCls : 'add',
				handler : function() {
					CustomerbigdataForm.form.reset();
					Ext.getCmp("Customerbigcuscardid").setEditable (true);
					createTextWindow(basePath + CustomerbigService + "?method=insAll", "新增", CustomerbigdataForm, Customerbigstore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Customerbiggrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					CustomerbigdataForm.form.reset();
					Ext.getCmp("Customerbigcuscardid").setEditable (false);
					createTextWindow(basePath + CustomerbigService + "?method=updAll", "修改", CustomerbigdataForm, Customerbigstore);
					CustomerbigdataForm.form.loadRecord(selections[0]);
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
	        					var selections = Customerbiggrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + CustomerbigService + "?method=delAll",selections,Customerbigstore,Customerbigkeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + CustomerbigService + "?method=impAll","导入",Customerbigstore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + CustomerbigService + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryCustomerbigService").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Customerbiggrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Customerbigkeycolumn.length;i++){
	        						fid += selections[0].data[Customerbigkeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Customerbigclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Customerbigcuscardid").setEditable (true);
    							createQueryWindow("筛选", CustomerbigdataForm, Customerbigstore,Ext.getCmp("queryCustomerbigService").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryCustomerbigService',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Customerbigstore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryCustomerbigService").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Customerbigstore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryCustomerbigService").getValue()
							}
					});
				}
			}
		]
	});
	Customerbiggrid.region = 'center';
	Customerbigstore.on("beforeload",function(){ 
		Customerbigstore.getProxy().extraParams = {
				json : queryjson,
				query : Ext.getCmp("queryCustomerbigService").getValue()
		}; 
	});
	Customerbigstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Customerbiggrid ]
	});
})
