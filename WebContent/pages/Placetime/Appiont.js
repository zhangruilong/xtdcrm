function selAppiont(selections) {
	var wheresql = "appointstadium='"+selections.data['placetimestadium']
	+"' and appointbegin='"+selections.data['startDate']
	+"' and appointend='"+selections.data['endDate']
	+"' and appointplacename='"+selections.data['placetimeplacename']
	+"'"
	var Appiontclassify = "appiont";
	var Appionttitle = "当前位置:业务管理》" + Appiontclassify;
	var Appiontaction = "AppiontviewService.do";
	var Appiontfields = ['appointid'
	    ,'appointcustomer' 
	    ,'appointcard' 
	    ,'appointstadium' 
	    ,'appointproject' 
	    ,'appointplace' 
	    ,'appointcourse' 
	    ,'appointcoursename' 
	    ,'appointdate' 
	    ,'appointbegin' 
	    ,'appointend' 
	    ,'appointdetail' 
	    ,'appointstatue' 
	    ,'appointinswhen' 
	    ,'customerid' 
	    ,'openid' 
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
	    ,'cuscardid' 
	    ,'cuscardcustomer' 
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
	    ,'cuscardtimes' 
	    ,'cuscardpoint' 
	    ,'cuscarddetail' 
	    ,'cuscardchangci' 
	    ,'cuscardproject' 
	    ,'cuscardstatue' 
	    ,'cuscardinswhen' 
	    ,'cuscardinswho' 
	    ,'cuscardupdwhen' 
	    ,'cuscardupdwho' 
	    ,'customerstadium' 
	    ,'appointplacename' 
	    ,'appointcoach' 
	    ,'appointcoachname' 
	    ,'appointtype' 
	    ,'appointupdwhen' 
	    ,'customercode' 
	      ];// 全部字段
	var Appiontkeycolumn = [ 'appointid' ];// 主键
	var Appiontstore = dataStore(Appiontfields, basePath + Appiontaction + "?method=selQuery&wheresql="+wheresql);// 定义Appiontstore
	
	var Appiontbbar = pagesizebar(Appiontstore);//定义分页
	var Appiontgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Appionttitle,
		store : Appiontstore,
		bbar : Appiontbbar,
	    selModel: {
	        type: 'checkboxmodel'
	    },
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : 'ID',
			hidden : true,
			dataIndex : 'appointid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '会员',
			dataIndex : 'customername',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '会员手机',
			dataIndex : 'customerphone',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '会员卡',
			dataIndex : 'cuscardno',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '位置',
			dataIndex : 'appointplace',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '场地',
			dataIndex : 'appointplacename',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '预约',
			dataIndex : 'appointdate',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '开始时间',
			dataIndex : 'appointbegin',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '结束时间',
			dataIndex : 'appointend',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '备注',
			dataIndex : 'appointdetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '类型',
			dataIndex : 'appointtype',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '状态',
			dataIndex : 'appointstatue',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建时间',
			dataIndex : 'appointinswhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '更新时间',
			dataIndex : 'appointupdwhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		],
		tbar : [{
				xtype : 'textfield',
				id : 'queryAppiontaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Appiontstore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryAppiontaction").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Appiontstore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryAppiontaction").getValue()
							}
					});
				}
			}
		]
	});
	Appiontgrid.region = 'center';
	Appiontstore.on("beforeload",function(){ 
		Appiontstore.getProxy().extraParams = {
				json : queryjson,
				query : Ext.getCmp("queryAppiontaction").getValue()
		}; 
	});
	Appiontstore.load();//加载数据
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
		items : Appiontgrid, // 嵌入的表单面板
		buttons : [
					{
						text : '确定',
						iconCls : 'ok',
						handler : function() {
							var selectRows = Appiontgrid.getSelection();
							if (selectRows.length != 1) {
								Ext.Msg.alert('提示', '请选择一条！', function() {
								});
								return;
							} 
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
