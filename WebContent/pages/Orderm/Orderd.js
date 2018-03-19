function showorderd(orderdorderm) {
	var Orderdclassify = "orderd";
	var Orderdtitle = "当前位置:业务管理》" + Orderdclassify;
	var OrderdService = "OrderdService.do";
	var Orderdfields = ['orderdid'
	        			    ,'orderdorderm' 
	        			    ,'orderdcode' 
	        			    ,'orderdname' 
	        			    ,'orderdclass' 
	        			    ,'orderdprice' 
	        			    ,'orderdnum' 
	        			    ,'orderdmoney' 
	        			    ,'orderddiscount' 
	        			    ,'orderdrightmoney' 
	        			    ,'orderddetail' 
	        			      ];// 全部字段
	var Orderdkeycolumn = [ 'orderdid' ];// 主键
	var Orderdstore = dataStore(Orderdfields, basePath + OrderdService + "?method=selQuery&wheresql=orderdorderm='"+orderdorderm+"'");// 定义Orderdstore
	var OrderddataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'OrderddataForm',
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
				id : 'Orderdorderdid',
				name : 'orderdid'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			hidden : true,
			items : [ {
				xtype : 'textfield',
				fieldLabel : '订单总表',
				value:orderdorderm,
				id : 'Orderdorderdorderm',
				name : 'orderdorderm'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Orderdorderdcode',
				name : 'orderdcode'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '名称',
				id : 'Orderdorderdname',
				name : 'orderdname'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '分类',
				id : 'Orderdorderdclass',
				name : 'orderdclass'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '单价',
				id : 'Orderdorderdprice',
				name : 'orderdprice'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '数量',
				id : 'Orderdorderdnum',
				name : 'orderdnum'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '下单金额',
				id : 'Orderdorderdmoney',
				name : 'orderdmoney'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '打折',
				id : 'Orderdorderddiscount',
				name : 'orderddiscount'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '实际金额',
				id : 'Orderdorderdrightmoney',
				name : 'orderdrightmoney'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '备注',
				id : 'Orderdorderddetail',
				name : 'orderddetail'
			} ]
		}
		]
	});
	
	var Orderdbbar = pagesizebar(Orderdstore);//定义分页
	var Orderdgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Orderdtitle,
		store : Orderdstore,
		bbar : Orderdbbar,
	    selModel: {
	        type: 'checkboxmodel'
	    },
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : 'ID',
			dataIndex : 'orderdid',
			hidden : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '订单总表',
			dataIndex : 'orderdorderm',
			hidden : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '编码',
			dataIndex : 'orderdcode',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '名称',
			dataIndex : 'orderdname',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '分类',
			dataIndex : 'orderdclass',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '单价',
			dataIndex : 'orderdprice',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '数量',
			dataIndex : 'orderdnum',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '下单金额',
			dataIndex : 'orderdmoney',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '打折',
			dataIndex : 'orderddiscount',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '实际金额',
			dataIndex : 'orderdrightmoney',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '备注',
			dataIndex : 'orderddetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		],
		tbar : [{
				xtype : 'textfield',
				id : 'queryOrderdService',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Orderdstore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryOrderdService").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Orderdstore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryOrderdService").getValue()
							}
					});
				}
			}
		]
	});
	Orderdgrid.region = 'center';
	Orderdstore.on("beforeload",function(){ 
		Orderdstore.getProxy().extraParams = {
				json : queryjson,
				query : Ext.getCmp("queryOrderdService").getValue()
		}; 
	});
	Orderdstore.load();//加载数据
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
		items : Orderdgrid, // 嵌入的表单面板
		buttons : [
					{
						text : '确定',
						iconCls : 'ok',
						handler : function() {
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
