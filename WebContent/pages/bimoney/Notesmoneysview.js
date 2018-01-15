function detail(selections) {
	var wheresqldetail = "notesstadium='"+selections[0].get('notesstadium')+"' and notesname='"+selections[0].get('notesname')+"'";
	var Notesmoneysviewclassify = "notesmoneysview";
	var Notesmoneysviewtitle = "当前位置:业务管理》" + Notesmoneysviewclassify;
	var NotesmoneysviewService = "NotesmoneysviewService.do";
	var Notesmoneysviewfields = ['notesid'
	        			    ,'notescustomer' 
	        			    ,'notescard' 
	        			    ,'notesstadium' 
	        			    ,'notescoach' 
	        			    ,'notescourse' 
	        			    ,'notesmoney' 
	        			    ,'notesname' 
	        			    ,'notesdetail' 
	        			    ,'notestype' 
	        			    ,'notesinswhen' 
	        			    ,'notesinswho' 
	        			    ,'customername' 
	        			    ,'customersex' 
	        			    ,'customerage' 
	        			    ,'customercdcard' 
	        			    ,'customercompany' 
	        			    ,'customerphone' 
	        			    ,'customeremp' 
	        			    ,'customerdetail' 
	        			    ,'customerstatue' 
	        			    ,'cuscardid' 
	        			    ,'cuscardstadium' 
	        			    ,'cuscardno' 
	        			    ,'cuscardtypename' 
	        			    ,'cuscardtypeclass' 
	        			    ,'cuscardday' 
	        			    ,'cuscardbegin' 
	        			    ,'cuscardend' 
	        			    ,'cuscardprice' 
	        			    ,'cuscarddikou' 
	        			    ,'cuscardmoney' 
	        			    ,'cuscardstop' 
	        			    ,'cuscardstopmoney' 
	        			    ,'cuscardnums' 
	        			    ,'cuscardtimes' 
	        			    ,'cuscardpoint' 
	        			    ,'cuscarddetail' 
	        			    ,'cuscardchangci' 
	        			    ,'cuscardproject' 
	        			    ,'cuscardstatue' 
	        			    ,'cuscardinswhen' 
	        			    ,'cuscardinswho' 
	        			      ];// 全部字段
	var Notesmoneysviewkeycolumn = [ 'notesid' ];// 主键
	var Notesmoneysviewstore = dataStore(Notesmoneysviewfields, basePath + NotesmoneysviewService + "?method=selQuery");// 定义Notesmoneysviewstore
	
	var Notesmoneysviewbbar = pagesizebar(Notesmoneysviewstore);//定义分页
	var Notesmoneysviewgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Notesmoneysviewtitle,
		store : Notesmoneysviewstore,
		bbar : Notesmoneysviewbbar,
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
			dataIndex : 'notesid',
			hidden : true, 
			editor: {
                xtype: 'textfield',
                editable: false
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
			header : '会员卡',
			dataIndex : 'notescard',
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
			header : '单位',
			dataIndex : 'customercompany',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '场馆',
			dataIndex : 'notesstadium',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '教练',
			dataIndex : 'notescoach',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '课程',
			dataIndex : 'notescourse',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '金额',
			dataIndex : 'notesmoney',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '事件',
			dataIndex : 'notesname',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
//		, {
//			header : '详细',
//			dataIndex : 'notesdetail',
//			sortable : true,  
//			editor: {
//                xtype: 'textfield'
//            }
//		}
		, {
			header : '价格',
			dataIndex : 'cuscardprice',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '抵扣',
			dataIndex : 'cuscarddikou',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '售价',
			dataIndex : 'cuscardmoney',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '积分',
			dataIndex : 'cuscardpoint',
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
			dataIndex : 'notesinswhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建人',
			dataIndex : 'notesinswho',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		],
		tbar : [{
				xtype : 'textfield',
				id : 'queryNotesmoneysviewService',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Notesmoneysviewstore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryNotesmoneysviewService").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Notesmoneysviewstore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryNotesmoneysviewService").getValue()
							}
					});
				}
			}
		]
	});
	Notesmoneysviewgrid.region = 'center';
	Notesmoneysviewstore.on("beforeload",function(){ 
		Notesmoneysviewstore.getProxy().extraParams = {
				json : queryjson,
				wheresql : wheresqldetail,
				query : Ext.getCmp("queryNotesmoneysviewService").getValue()
		}; 
	});
	Notesmoneysviewstore.load();//加载数据
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
		items : Notesmoneysviewgrid, // 嵌入的表单面板
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
