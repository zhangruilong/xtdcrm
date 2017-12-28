function getrecords(selections) {
	var wheresql = "recordscustomer='"+selections[0].get('customerid')+"' and recordsemp='"+selections[0].get('customeremp')+"'";
	var Recordsclassify = "records";
	var Recordstitle = "当前位置:业务管理》" + Recordsclassify;
	var RecordsService = "RecordsService.do";
	var Recordsfields = ['recordsid'
	        			    ,'recordscustomer' 
	        			    ,'recordsemp' 
	        			    ,'recordstitle' 
	        			    ,'recordsdetail' 
	        			    ,'recordsinswhen' 
	        			    ,'recordsinswho' 
	        			      ];// 全部字段
	var Recordskeycolumn = [ 'recordsid' ];// 主键
	var Recordsstore = dataStore(Recordsfields, basePath + RecordsService + "?method=selAll&wheresql="+wheresql);// 定义Recordsstore
	
	
	var Recordsgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Recordstitle,
		store : Recordsstore,
	    selModel: {
	        type: 'checkboxmodel'
	    },
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : 'ID',
			dataIndex : 'recordsid',
			hidden : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '客户',
			dataIndex : 'recordscustomer',
			hidden : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '会籍',
			dataIndex : 'recordsemp',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '步骤',
			dataIndex : 'recordstitle',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '内容',
			dataIndex : 'recordsdetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建时间',
			dataIndex : 'recordsinswhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建人',
			dataIndex : 'recordsinswho',
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
					createTextWindow1(basePath + RecordsService + "?method=insAll", "新增", null, Recordsstore,selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selection = Recordsgrid.getSelection();
					if (selection.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					createTextWindow1(basePath + RecordsService + "?method=updAll", "修改", selection, Recordsstore,selections);
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
	        					var selection = Recordsgrid.getSelection();
	        					if (Ext.isEmpty(selection)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + RecordsService + "?method=delAll",selection,Recordsstore,Recordskeycolumn);
	        				}
	                    }]
	                }
	            }
			}
		]
	});
	Recordsgrid.region = 'center';
	Recordsstore.load();//加载数据
	var selectgridWindow1 = new Ext.Window({
		layout : 'fit', // 设置窗口布局模式
		width : 620, // 窗口宽度
		height : 580, // 窗口高度
		modal : true,
		closeAction: 'hide',
		closable : true, // 是否可关闭
		collapsible : true, // 是否可收缩
		maximizable : true, // 设置是否可以最大化
		border : false, // 边框线设置
		constrain : true, // 设置窗口是否可以溢出父容器
		animateTarget : Ext.getBody(),
		pageY : 50, // 页面定位Y坐标
		pageX : document.body.clientWidth / 2 - 620 / 2, // 页面定位X坐标
		items : Recordsgrid
	});
	selectgridWindow1.removeAll(false);
	selectgridWindow1.items.add(Recordsgrid);
	selectgridWindow1.show();
}
function createTextWindow1(url,title,selection,store,selections) {
	var RecordsdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'RecordsdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : .5,
			hidden : true,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Recordsrecordsid',
				name : 'recordsid'
			} ]
		}
		, {
			columnWidth : .5,
			hidden : true,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				value : selections[0].get('customerid'),
				fieldLabel : '客户',
				id : 'Recordsrecordscustomer',
				name : 'recordscustomer'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				value : selections[0].get('customeremp'),
				fieldLabel : '会籍',
				id : 'Recordsrecordsemp',
				name : 'recordsemp'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'combo',
				emptyText : '请选择',
				store : crmStore,
				mode : 'local',
				displayField : 'name',
				valueField : 'name',
				hiddenName : 'name',
				triggerAction : 'all',
				fieldLabel : '步骤',
				id : 'Recordsrecordstitle',
				name : 'recordstitle'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textarea',
				fieldLabel : '内容',
				id : 'Recordsrecordsdetail',
				name : 'recordsdetail'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'datefield',
				fieldLabel : '创建时间',
				format : 'Y-m-d',
				value : new Date(),
				id : 'Recordsrecordsinswhen',
				name : 'recordsinswhen'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				value : currentuser.username,
				fieldLabel : '创建人',
				id : 'Recordsrecordsinswho',
				name : 'recordsinswho'
			} ]
		}
		]
	});
	RecordsdataForm.form.reset();
	if("修改"==title)
	RecordsdataForm.form.loadRecord(selection[0]);
	var dataWindow1 = new Ext.Window({
		title : title, // 窗口标题
		layout : 'fit', // 设置窗口布局模式
		width : Ext.os.deviceType === 'Phone' ? '100%' : 750, // 窗口宽度
		modal : true,
//		closeAction: 'hide',
		closable : true, // 是否可关闭
		collapsible : true, // 是否可收缩
		maximizable : true, // 设置是否可以最大化
		border : false, // 边框线设置
		pageY : 0, // 页面定位Y坐标
		pageX : Ext.os.deviceType === 'Phone' ? 0 : document.body.clientWidth / 2 - 720 / 2, // 页面定位X坐标
		buttons : [
				{
					text : '提交',
					iconCls : 'ok',
					handler : function() {
						if (RecordsdataForm.form.isValid()) {
							var json = "[" + Ext.encode(RecordsdataForm.form.getValues(false)) + "]";
							RecordsdataForm.form.submit({
								url : url,
								waitTitle : '提示',
								params : {//改
									json : json
								},
								success : function(form, action) {
									Ext.Msg.alert('提示', action.result.msg,function(){
										if("死单"==Ext.getCmp("Recordsrecordstitle").getValue())
										Ext.Ajax.request({
											url : basePath + "CustomerService.do?method=updAll",
											method : 'POST',
											params : {
												json : "[{'customerid':'"+selections[0].get('customerid')
												+"','customerstatue':'死单'}]"
											},
											success : function(response) {
											},
											failure : function(response) {
												Ext.Msg.alert('提示', '网络出现问题，请稍后再试');
											}
										});
										dataWindow1.close();
										store.reload();
									});
								},
								failure : function(form, action) {
									Ext.Msg.alert('提示', '网络出现问题，请稍后再试');
								},
								waitMsg : '正在处理数据,请稍候...'
							});
						} else {
					        Ext.Msg.alert('提示', '请正确填写表单!');
					    }
					}
				}, {
					text : '关闭',
					iconCls : 'close',
					handler : function() {
						dataWindow1.close();
					}
				}]
	});
	dataWindow1.removeAll(false);
	dataWindow1.items.add(RecordsdataForm);
	dataWindow1.show();
}
