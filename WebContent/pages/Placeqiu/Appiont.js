function selAppiont(place){
	var Appiontclassify = "appiont";
	var Appionttitle = "当前位置:业务管理》" + Appiontclassify;
	var Appiontaction = "AppiontService.do";
	var Appiontfields = ['appointid'
	        			    ,'appointcustomer' 
	        			    ,'appointcard' 
	        			    ,'appointstadium' 
	        			    ,'appointproject' 
	        			    ,'appointplace' 
	        			    ,'appointplacename' 
	        			    ,'appointcourse' 
	        			    ,'appointcoursename' 
	        			    ,'appointcoach' 
	        			    ,'appointcoachname' 
	        			    ,'appointdate' 
	        			    ,'appointbegin' 
	        			    ,'appointend' 
	        			    ,'appointdetail' 
	        			    ,'appointtype' 
	        			    ,'appointstatue' 
	        			    ,'appointinswhen' 
	        			    ,'appointupdwhen' 
	        			    ,'customername' 
	        			      ];// 全部字段
	var Appiontkeycolumn = [ 'appointid' ];// 主键
	var Appiontstore = dataStore(Appiontfields, basePath + "AppiontviewService.do" + "?method=selQuery&wheresql=appointplace='"+place.get('placecode')+"' and appointplacename='"+place.get('placename')+"'");// 定义Appiontstore
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
			header : '预约',
			dataIndex : 'appointdate',
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
		],
		tbar : [{
        	text : "取消预约",
			iconCls : 'delete',
			handler : function() {
				var selections = Appiontgrid.getSelection();
				if (Ext.isEmpty(selections)) {
					Ext.Msg.alert('提示', '请至少选择一条数据！');
					return;
				}
				commonDelete(basePath + Appiontaction + "?method=delAll",selections,Appiontstore,Appiontkeycolumn);
			}
        },{
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
		items : Appiontgrid
	});
	selectgridWindow.show();
}
