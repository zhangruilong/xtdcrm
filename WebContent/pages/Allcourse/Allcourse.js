Ext.onReady(function() {
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
	var AllcoursedataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'AllcoursedataForm',
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
				id : 'Allcourseallcourseid',
				name : 'allcourseid'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场馆',
				value : currentuser.roledetail,
				id : 'Allcourseallcoursestadium',
				name : 'allcoursestadium'
			} ]
		}
//		, {
//			columnWidth : .5,
//			layout : 'form',
//			items : [ {
//				xtype : 'textfield',
//				fieldLabel : '教练',
//				id : 'Allcourseallcoursecoach',
//				name : 'allcoursecoach'
//			} ]
//		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '教练',
				id : 'Allcourseallcoursecoachname',
				name : 'allcoursecoachname',
				triggers: {
			        bar: {
			            handler: function() {
			            	selectcoach();
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
				fieldLabel : '课程名',
				id : 'Allcourseallcoursename',
				name : 'allcoursename'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '课时',
				id : 'Allcourseallcoursenum',
				name : 'allcoursenum'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '费用',
				id : 'Allcourseallcoursemoney',
				name : 'allcoursemoney'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'combo',
				emptyText : '请选择',
				store : courseStore,
				mode : 'local',
				displayField : 'name',
				valueField : 'name',
				hiddenName : 'name',
				triggerAction : 'all',
				fieldLabel : '项目',
				id : 'Allcourseallcourseproject',
				name : 'allcourseproject'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '备注',
				id : 'Allcourseallcoursedetail',
				name : 'allcoursedetail'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '分类',
				id : 'Allcourseallcoursetype',
				name : 'allcoursetype'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'datefield',
				fieldLabel : '开始',
				format : 'Y-m-d',
				id : 'Allcourseallcoursebegin',
				name : 'allcoursebegin'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'datefield',
				fieldLabel : '结束',
				format : 'Y-m-d',
				id : 'Allcourseallcourseend',
				name : 'allcourseend'
			} ]
		}
		]
	});
	
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
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : 'ID',
			dataIndex : 'allcourseid',
			hidden : true,
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
				text : Ext.os.deviceType === 'Phone' ? null : "新增",
				iconCls : 'add',
				handler : function() {
					AllcoursedataForm.form.reset();
					Ext.getCmp("Allcourseallcourseid").setEditable (true);
					createTextWindow(basePath + Allcourseaction + "?method=insAll", "新增", AllcoursedataForm, Allcoursestore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Allcoursegrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Allcourseaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Allcoursegrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					AllcoursedataForm.form.reset();
					Ext.getCmp("Allcourseallcourseid").setEditable (false);
					createTextWindow(basePath + Allcourseaction + "?method=updAll", "修改", AllcoursedataForm, Allcoursestore);
					AllcoursedataForm.form.loadRecord(selections[0]);
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
	        					var selections = Allcoursegrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Allcourseaction + "?method=delAll",selections,Allcoursestore,Allcoursekeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Allcourseaction + "?method=impAll","导入",Allcoursestore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Allcourseaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryAllcourseaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Allcoursegrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Allcoursekeycolumn.length;i++){
	        						fid += selections[0].data[Allcoursekeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Allcourseclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Allcourseallcourseid").setEditable (true);
    							createQueryWindow("筛选", AllcoursedataForm, Allcoursestore,Ext.getCmp("queryAllcourseaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
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
	Allcoursestore.on("beforeload",function(){ 
		Allcoursestore.getProxy().extraParams = {
				json : queryjson,
				query : Ext.getCmp("queryAllcourseService").getValue()
		}; 
	});
	Allcoursestore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Allcoursegrid ]
	});
})
