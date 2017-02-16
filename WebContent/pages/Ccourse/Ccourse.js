Ext.onReady(function() {
	var Ccourseclassify = "ccourse";
	var Ccoursetitle = "当前位置:业务管理》" + Ccourseclassify;
	var Ccourseaction = "CcourseAction.do";
	var Ccoursefields = ['ccourseid'
	        			    ,'ccoursecustomer' 
	        			    ,'ccoursecourse' 
	        			      ];// 全部字段
	var Ccoursekeycolumn = [ 'ccourseid' ];// 主键
	var Ccoursestore = dataStore(Ccoursefields, basePath + Ccourseaction + "?method=selLimit");// 定义Ccoursestore
	var CcoursedataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'CcoursedataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Ccourseccourseid',
				name : 'ccourseid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '会员',
				id : 'Ccourseccoursecustomer',
				name : 'ccoursecustomer',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '课程',
				id : 'Ccourseccoursecourse',
				name : 'ccoursecourse',
				maxLength : 100
			} ]
		}
		]
	});
	
	//var Ccoursebbar = pagesizebar(Ccoursestore);//定义分页
	var Ccoursegrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Ccoursetitle,
		store : Ccoursestore,
		//bbar : Ccoursebbar,
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
			dataIndex : 'ccourseid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '会员',
			dataIndex : 'ccoursecustomer',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '课程',
			dataIndex : 'ccoursecourse',
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
					CcoursedataForm.form.reset();
					Ext.getCmp("Ccourseccourseid").setEditable (true);
					createTextWindow(basePath + Ccourseaction + "?method=insAll", "新增", CcoursedataForm, Ccoursestore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Ccoursegrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Ccourseaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Ccoursegrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					CcoursedataForm.form.reset();
					Ext.getCmp("Ccourseccourseid").setEditable (false);
					createTextWindow(basePath + Ccourseaction + "?method=updAll", "修改", CcoursedataForm, Ccoursestore);
					CcoursedataForm.form.loadRecord(selections[0]);
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
	        					var selections = Ccoursegrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Ccourseaction + "?method=delAll",selections,Ccoursestore,Ccoursekeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Ccourseaction + "?method=impAll","导入",Ccoursestore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Ccourseaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryCcourseaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Ccoursegrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Ccoursekeycolumn.length;i++){
	        						fid += selections[0].data[Ccoursekeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Ccourseclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Ccourseccourseid").setEditable (true);
    							createQueryWindow("筛选", CcoursedataForm, Ccoursestore,Ext.getCmp("queryCcourseaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryCcourseaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryCcourseaction").getValue()) {
								Ccoursestore.load({
									params : {
										json : queryjson
									}
								});
							} else {
								Ccoursestore.load({
									params : {
										json : queryjson,
										query : Ext.getCmp("queryCcourseaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Ccoursegrid.region = 'center';
	Ccoursestore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Ccoursegrid ]
	});
})
