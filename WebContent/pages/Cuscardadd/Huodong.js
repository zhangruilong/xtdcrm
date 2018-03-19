function huodongdetail(huodongstadium,huodongcardtypename) {
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
	var Huodongstore = dataStore(Huodongfields, basePath + Huodongaction + "?method=selQuery&wheresql=huodongstadium='"
			+huodongstadium+"' and huodongcardtypename='"+huodongcardtypename+"'");// 定义Huodongstore
	var HuodongdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'HuodongdataForm',
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
				id : 'Huodonghuodongid',
				name : 'huodongid'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'combo',
				emptyText : '请选择',
				store : stadiumStore,
				mode : 'local',
				displayField : 'name',
				valueField : 'name',
				hiddenName : 'name',
				triggerAction : 'all',
				fieldLabel : '场馆',
				id : 'Huodonghuodongstadium',
				name : 'huodongstadium'
			} ]
		}
//		, {
//			columnWidth : .5,
//			layout : 'form',
//			items : [ {
//				xtype : 'textfield',
//				fieldLabel : '优惠码(起始)',
//				id : 'Huodonghuodongcode',
//				name : 'huodongcode'
//			} ]
//		}
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
				xtype : 'combo',
				emptyText : '请选择',
				store : projectStore,
				mode : 'local',
				displayField : 'name',
				valueField : 'name',
				hiddenName : 'name',
				triggerAction : 'all',
				fieldLabel : '项目(课程)',
				id : 'Huodonghuodongcardtype',
				name : 'huodongcardtype',
				editable : false
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡种',
				id : 'Huodonghuodongcardtypename',
				name : 'huodongcardtypename',
				triggers: {
			        bar: {
			            handler: function() {
			            	selectCardtype();
			            }
			        }
				}
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
				fieldLabel : '折让',
				id : 'Huodonghuodongmoney',
				name : 'huodongmoney'
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
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : 'ID',
			dataIndex : 'huodongid',
			hidden : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '优惠码',
			dataIndex : 'huodongcode',
			sortable : true,  
			width:180,
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
//		, {
//			header : '项目',
//			dataIndex : 'huodongcardtype',
//			editor: {
//                xtype: 'textfield'
//            }
//		}
		, {
			header : '卡种',
			dataIndex : 'huodongcardtypename',
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
		],
		tbar : [
			{
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
	Huodongstore.on("beforeload",function(){ 
		Huodongstore.getProxy().extraParams = {
				json : queryjson,
				query : Ext.getCmp("queryHuodongaction").getValue()
		}; 
	});
	Huodongstore.load();//加载数据
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
		items : Huodonggrid, // 嵌入的表单面板
		buttons : [
					{
						text : '确定',
						iconCls : 'ok',
						handler : function() {
							var selectRows = Huodonggrid.getSelection();
							if (selectRows.length != 1) {
								Ext.Msg.alert('提示', '请选择一条！', function() {
								});
								return;
							}
							if("已使用"==selectRows[0].data["huodongstatue"]){
								Ext.Msg.alert('提示', '请选择一条未使用的活动！', function() {
								});
								return;
							}
							Ext.getCmp("cuscardid").setValue(selectRows[0].data["huodongid"]);
							Ext.getCmp("cuscardhuodong").setValue(selectRows[0].data["huodongid"]);
							Ext.getCmp("cuscarddikou").setValue(selectRows[0].data["huodongmoney"]);
							Ext.getCmp("cuscardmoney").setValue(Ext.getCmp("cuscardprice").getValue()-Ext.getCmp("cuscarddikou").getValue());
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
