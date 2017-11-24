function selectplace(stadiumname,project) {
	var Placeclassify = "place";
	var Placetitle = "当前位置:业务管理》" + Placeclassify;
	var Placeaction = "PlaceService.do";
	var Placefields = ['placeid'
	        			    ,'placestadium' 
	        			    ,'placecode' 
	        			    ,'placename' 
	        			    ,'placedetail' 
	        			    ,'placeproject' 
	        			    ,'placestatue' 
	        			      ];// 全部字段
	var Placekeycolumn = [ 'placeid' ];// 主键
	var Placestore = dataStore(Placefields, basePath + Placeaction + "?method=selPlacename&wheresql=placeproject!='球类' and placestadium='"+stadiumname+"' and placeproject='"+project+"'");// 定义Placestore
	var Placebbar = pagesizebar(Placestore);//定义分页
	var Placegrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Placetitle,
		store : Placestore,
		bbar : Placebbar,
	    selModel: {
	        type: 'checkboxmodel'
	    },
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : 'ID',
			dataIndex : 'placeid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '场馆',
			dataIndex : 'placestadium',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
//		, {
//			header : '位置',
//			dataIndex : 'placecode',
//			sortable : true,  
//			editor: {
//                xtype: 'textfield'
//            }
//		}
		, {
			header : '场地',
			dataIndex : 'placename',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '备注',
			dataIndex : 'placedetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '项目',
			dataIndex : 'placeproject',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
//		, {
//			header : '状态',
//			dataIndex : 'placestatue',
//			sortable : true,  
//			editor: {
//                xtype: 'textfield'
//            }
//		}
		],
		tbar : [{
				xtype : 'textfield',
				id : 'queryPlaceaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Placestore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryPlaceaction").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Placestore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryPlaceaction").getValue()
							}
					});
				}
			}
		]
	});
	Placegrid.region = 'center';
	Placestore.load();//加载数据
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
		items : Placegrid, // 嵌入的表单面板
		buttons : [
					{
						text : '确定',
						iconCls : 'ok',
						handler : function() {
							var selectRows = Placegrid.getSelection();
							if (selectRows.length != 1) {
								Ext.Msg.alert('提示', '请选择一条！', function() {
								});
								return;
							}
//							Ext.getCmp('Mycoursemycoursecoach').setValue(selectRows[0].get("coachid"));
							Ext.getCmp('placetimeplacename').setValue(selectRows[0].get("placename"));
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
