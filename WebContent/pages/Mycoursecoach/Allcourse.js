function selectAllcourse() {
	var Coachcourseclassify = "coachcourse";
	var Coachcoursetitle = "当前位置:业务管理》" + Coachcourseclassify;
	var Coachcourseaction = "CoachcourseService.do";
	var Coachcoursefields = ['coachcourseid'
	        			    ,'coachcoursestadium' 
	        			    ,'coachcoursename' 
	        			    ,'coachcoursemoney' 
	        			    ,'coachcourseproject' 
	        			    ,'coachcoursedetail' 
	        			      ];// 全部字段
	var Coachcoursekeycolumn = [ 'coachcourseid' ];// 主键
	var Coachcoursestore = dataStore(Coachcoursefields, basePath + Coachcourseaction + "?method=selQuery");// 定义Coachcoursestore
	
	var Coachcoursebbar = pagesizebar(Coachcoursestore);//定义分页
	var Coachcoursegrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Coachcoursetitle,
		store : Coachcoursestore,
		bbar : Coachcoursebbar,
	    selModel: {
	        type: 'checkboxmodel'
	    },
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : 'ID',
			dataIndex : 'coachcourseid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '场馆',
			dataIndex : 'coachcoursestadium',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '名称',
			dataIndex : 'coachcoursename',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '单节价格',
			dataIndex : 'coachcoursemoney',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '项目',
			dataIndex : 'coachcourseproject',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '备注',
			dataIndex : 'coachcoursedetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		],
		tbar : [{
				xtype : 'textfield',
				id : 'queryCoachcourseaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Coachcoursestore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryCoachcourseaction").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Coachcoursestore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryCoachcourseaction").getValue()
							}
					});
				}
			}
		]
	});
	Coachcoursegrid.region = 'center';
	Coachcoursestore.on("beforeload",function(){ 
		Coachcoursestore.getProxy().extraParams = {
				json : queryjson,
				query : Ext.getCmp("queryCoachcourseaction").getValue()
		}; 
	});
	Coachcoursestore.load();//加载数据
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
		items : Coachcoursegrid, // 嵌入的表单面板
		buttons : [
					{
						text : '确定',
						iconCls : 'ok',
						handler : function() {
							var selectRows = Coachcoursegrid.getSelection();
							if (selectRows.length != 1) {
								Ext.Msg.alert('提示', '请选择一条！', function() {
								});
								return;
							}
							Ext.getCmp('Mycoursemycoursename').setValue(selectRows[0].get("coachcoursename"));
							Ext.getCmp('Mycoursemycoursestadium').setValue(selectRows[0].get("coachcoursestadium"));
							Ext.getCmp('Mycoursemycourseproject').setValue(selectRows[0].get("coachcourseproject"));
							Ext.getCmp('Mycoursemycoursedetail').setValue(selectRows[0].get("coachcoursedetail"));
							Ext.getCmp('Mycoursemycoursetype').setValue("私教课");
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
