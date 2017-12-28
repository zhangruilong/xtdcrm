Ext.onReady(function() {
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
	        			    ,'customername' 
	        			      ];// 全部字段
	var Recordskeycolumn = [ 'recordsid' ];// 主键
	var Recordsstore = dataStore(Recordsfields, basePath + "RecordsviewService.do" + "?method=selQuery&wheresql=recordstitle='死单'");// 定义Recordsstore
	var RecordsdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'RecordsdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : .5,
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
			layout : 'form',
			items : [ {
				xtype : 'textfield',
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
				fieldLabel : '会籍',
				id : 'Recordsrecordsemp',
				name : 'recordsemp'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '步骤',
				id : 'Recordsrecordstitle',
				name : 'recordstitle'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '内容',
				id : 'Recordsrecordsdetail',
				name : 'recordsdetail'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建时间',
				id : 'Recordsrecordsinswhen',
				name : 'recordsinswhen'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建人',
				id : 'Recordsrecordsinswho',
				name : 'recordsinswho'
			} ]
		}
		]
	});
	
	var Recordsbbar = pagesizebar(Recordsstore);//定义分页
	var Recordsgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Recordstitle,
		store : Recordsstore,
		bbar : Recordsbbar,
	    selModel: {
	        type: 'checkboxmodel'
	    },
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : 'ID',
			dataIndex : 'recordsid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '客户',
			dataIndex : 'customername',
			sortable : true,  
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
				xtype : 'textfield',
				id : 'queryRecordsService',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Recordsstore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryRecordsService").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Recordsstore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryRecordsService").getValue()
							}
					});
				}
			}
		]
	});
	Recordsgrid.region = 'center';
	Recordsstore.on("beforeload",function(){ 
		Recordsstore.getProxy().extraParams = {
				json : queryjson,
				query : Ext.getCmp("queryRecordsService").getValue()
		}; 
	});
	Recordsstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Recordsgrid ]
	});
})
