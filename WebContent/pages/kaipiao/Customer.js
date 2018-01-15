function selectCustomer() {
	var Customerclassify = "customer";
	var Customertitle = "当前位置:业务管理》" + Customerclassify;
	var Customeraction = "CustomerService.do";
	var Customerfields = ['customerid'
	        			    ,'customerstadium' 
	        			    ,'openid' 
	        			    ,'customercode' 
	        			    ,'customername' 
	        			    ,'customersex' 
	        			    ,'customerage' 
	        			    ,'customercdcard' 
	        			    ,'customerhome' 
	        			    ,'customercompany' 
	        			    ,'customerphone' 
	        			    ,'customerbirthday' 
	        			    ,'customeremail' 
	        			    ,'customerhow' 
	        			    ,'customerimage' 
	        			    ,'customeremp' 
	        			    ,'customerdetail' 
	        			    ,'customerstatue' 
	        			    ,'customerinswhen' 
	        			    ,'customerinswho' 
	        			    ,'customerupdwhen' 
	        			    ,'customerupdwho' 
	        			      ];// 全部字段
	var Customerkeycolumn = [ 'customerid' ];// 主键
	var Customerstore = dataStore(Customerfields, basePath + Customeraction + "?method=selQuery");// 定义Customerstore
	
	var Customerbbar = pagesizebar(Customerstore);//定义分页
	var Customergrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Customertitle,
		store : Customerstore,
		bbar : Customerbbar,
	    selModel: {
	        type: 'checkboxmodel'
	    },
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : 'ID',
			dataIndex : 'customerid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '场馆',
			dataIndex : 'customerstadium',
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
			header : '全民健身卡',
			dataIndex : 'customerhome',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '单位',
			dataIndex : 'customercompany',
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
			header : '生日',
			dataIndex : 'customerbirthday',
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
			header : '照片',
			dataIndex : 'customerimage',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '会籍管家',
			dataIndex : 'customeremp',
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
		, {
			header : '创建时间',
			dataIndex : 'customerinswhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建人',
			dataIndex : 'customerinswho',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '更新时间',
			dataIndex : 'customerupdwhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '更新人',
			dataIndex : 'customerupdwho',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		],
		tbar : [{
				xtype : 'textfield',
				id : 'queryCustomeraction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Customerstore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryCustomeraction").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Customerstore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryCustomeraction").getValue()
							}
					});
				}
			}
		]
	});
	Customergrid.region = 'center';
	Customerstore.on("beforeload",function(){ 
		Customerstore.getProxy().extraParams = {
				json : queryjson,
				query : Ext.getCmp("queryCustomeraction").getValue()
		}; 
	});
	Customerstore.load();//加载数据
	var selectgridWindow = new Ext.Window({
		layout : 'fit', // 设置窗口布局模式
		width : 620, // 窗口宽度
		height : 580, // 窗口高度
		modal : true,
		//closeAction: 'hide',
		closable : true, // 是否可关闭
		collapsible : true, // 是否可收缩
		maximizable : true, // 设置是否可以最大化
		border : false, // 边框线设置
		constrain : true, // 设置窗口是否可以溢出父容器
		animateTarget : Ext.getBody(),
		pageY : 50, // 页面定位Y坐标
		pageX : document.body.clientWidth / 2 - 620 / 2, // 页面定位X坐标
		items : Customergrid, // 嵌入的表单面板
		buttons : [
					{
						text : '确定',
						iconCls : 'ok',
						handler : function() {
							var selectRows = Customergrid.getSelection();
							if (selectRows.length != 1) {
								Ext.Msg.alert('提示', '请选择一条！', function() {
								});
								return;
							} 
							Ext.getCmp('Tuifeituifeidetail').setValue(selectRows[0].get("customername"));
							selectgridWindow.close();
						}
					}, '-', {
						text : '关闭',
						iconCls : 'close',
						handler : function() {
							selectgridWindow.close();
						}
					}]
	});
	selectgridWindow.show();
}
