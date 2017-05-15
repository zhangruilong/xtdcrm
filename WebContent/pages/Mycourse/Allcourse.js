function selectAllcourse() {
	var Allcourseclassify = "allcourse";
	var Allcoursetitle = "当前位置:业务管理》" + Allcourseclassify;
	var Allcourseaction = "AllcourseService.do";
	var Allcoursefields = ['allcourseid'
	        			    ,'allcoursestadium' 
	        			    ,'allcoursecoach' 
	        			    ,'allcoursecoachname' 
	        			    ,'allcoursename' 
	        			    ,'allcoursenum' 
	        			    ,'allcoursemoney' 
	        			    ,'allcourseproject' 
	        			    ,'allcoursedetail' 
	        			    ,'allcoursetype' 
	        			    ,'allcoursebegin' 
	        			    ,'allcourseend' 
	        			      ];// 全部字段
	var Allcoursekeycolumn = [ 'allcourseid' ];// 主键
	var Allcoursestore = dataStore(Allcoursefields, basePath + Allcourseaction + "?method=selQuery");// 定义Allcoursestore
	
	var Allcoursebbar = pagesizebar(Allcoursestore);//定义分页
	var Allcoursegrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Allcoursetitle,
		store : Allcoursestore,
		bbar : Allcoursebbar,
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
			dataIndex : 'allcourseid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '场馆',
			dataIndex : 'allcoursestadium',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '教练',
			dataIndex : 'allcoursecoach',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '教练',
			dataIndex : 'allcoursecoachname',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '课程名',
			dataIndex : 'allcoursename',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '课时',
			dataIndex : 'allcoursenum',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '费用',
			dataIndex : 'allcoursemoney',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '项目',
			dataIndex : 'allcourseproject',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '备注',
			dataIndex : 'allcoursedetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '分类',
			dataIndex : 'allcoursetype',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '开始',
			dataIndex : 'allcoursebegin',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '结束',
			dataIndex : 'allcourseend',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		],
		tbar : [{
				xtype : 'textfield',
				id : 'queryAllcourseaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Allcoursestore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryAllcourseaction").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Allcoursestore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryAllcourseaction").getValue()
							}
					});
				}
			}
		]
	});
	Allcoursegrid.region = 'center';
	Allcoursestore.load();//加载数据
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
		items : Allcoursegrid, // 嵌入的表单面板
		buttons : [
					{
						text : '确定',
						iconCls : 'ok',
						handler : function() {
							var selectRows = Allcoursegrid.getSelection();
							if (selectRows.length != 1) {
								Ext.Msg.alert('提示', '请选择一条！', function() {
								});
								return;
							} 
							Ext.getCmp('Mycoursemycoursename').setValue(selectRows[0].get("allcoursename"));
							Ext.getCmp('Mycoursemycoursestadium').setValue(selectRows[0].get("allcoursestadium"));
							Ext.getCmp('Mycoursemycoursecoach').setValue(selectRows[0].get("allcoursecoach"));
							Ext.getCmp('Mycoursemycoursecoachname').setValue(selectRows[0].get("allcoursecoachname"));
							Ext.getCmp('Mycoursemycoursenum').setValue(selectRows[0].get("allcoursenum"));
							Ext.getCmp('Mycoursemycoursenuma').setValue(selectRows[0].get("allcoursenum"));
							Ext.getCmp('Mycoursemycourseprice').setValue(selectRows[0].get("allcoursemoney"));
							Ext.getCmp('Mycoursemycoursemoney').setValue(selectRows[0].get("allcoursemoney"));
							Ext.getCmp('Mycoursemycourseproject').setValue(selectRows[0].get("allcourseproject"));
							Ext.getCmp('Mycoursemycoursedetail').setValue(selectRows[0].get("allcoursedetail"));
							Ext.getCmp('Mycoursemycoursetype').setValue(selectRows[0].get("allcoursetype"));
							Ext.getCmp('Mycoursemycoursebegin').setValue(selectRows[0].get("allcoursebegin"));
							Ext.getCmp('Mycoursemycourseend').setValue(selectRows[0].get("allcourseend"));
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
