Ext.onReady(function() {
	var Notesmoneysclassify = "notesmoneys";
	var Notesmoneystitle = "当前位置:业务管理》" + Notesmoneysclassify;
	var Notesmoneysaction = "NotesmoneysService.do";
	var Notesmoneysfields = ['notesid'
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
	        			      ];// 全部字段
	var Notesmoneyskeycolumn = [ 'notesid' ];// 主键
	var Notesmoneysstore = dataStore(Notesmoneysfields, basePath + Notesmoneysaction + "?method=selQuery&wheresql=notestype='退费'");// 定义Notesmoneysstore
	var NotesmoneysdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'NotesmoneysdataForm',
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
				id : 'Notesmoneysnotesid',
				name : 'notesid'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '会员',
				id : 'Notesmoneysnotescustomer',
				name : 'notescustomer',
				triggers: {
			        bar: {
			            cls: 'my-bar-trigger',
			            handler: function() {
			            	selectCustomer();
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
				fieldLabel : '会员卡',
				id : 'Notesmoneysnotescard',
				name : 'notescard'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'combo',
				emptyText : '请选择',
				store : stadiumStore,
				mode : 'local',
				displayField : 'name',
				valueField : 'name',
				hiddenName : 'name',
				triggerAction : 'all',
				fieldLabel : '场馆',
				id : 'Notesmoneysnotesstadium',
				name : 'notesstadium'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '教练',
				id : 'Notesmoneysnotescoach',
				name : 'notescoach'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '课程',
				id : 'Notesmoneysnotescourse',
				name : 'notescourse'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '金额',
				id : 'Notesmoneysnotesmoney',
				name : 'notesmoney'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'combo',
				emptyText : '请选择',
				store : cwStore,
				mode : 'local',
				displayField : 'name',
				valueField : 'name',
				hiddenName : 'name',
				triggerAction : 'all',
				fieldLabel : '事件',
				id : 'Notesmoneysnotesname',
				name : 'notesname'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '详细',
				id : 'Notesmoneysnotesdetail',
				name : 'notesdetail'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '分类',
				value : '退费',
				id : 'Notesmoneysnotestype',
				name : 'notestype'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建时间',
				value : getdatetime(),
				id : 'Notesmoneysnotesinswhen',
				name : 'notesinswhen'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建人',
				value : currentuser.username,
				id : 'Notesmoneysnotesinswho',
				name : 'notesinswho'
			} ]
		}
		]
	});
	
	var Notesmoneysbbar = pagesizebar(Notesmoneysstore);//定义分页
	var Notesmoneysgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Notesmoneystitle,
		store : Notesmoneysstore,
		bbar : Notesmoneysbbar,
	    selModel: {
	        type: 'checkboxmodel'
	    },
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : 'ID',
			dataIndex : 'notesid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '会员',
			dataIndex : 'notescustomer',
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
		, {
			header : '详细',
			dataIndex : 'notesdetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '分类',
			dataIndex : 'notestype',
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
				text : Ext.os.deviceType === 'Phone' ? null : "新增",
				iconCls : 'add',
				handler : function() {
					NotesmoneysdataForm.form.reset();
					Ext.getCmp("Notesmoneysnotesid").setEditable (true);
					createTextWindow(basePath + Notesmoneysaction + "?method=insAll", "新增", NotesmoneysdataForm, Notesmoneysstore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Notesmoneysgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Notesmoneysaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Notesmoneysgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					NotesmoneysdataForm.form.reset();
					Ext.getCmp("Notesmoneysnotesid").setEditable (false);
					createTextWindow(basePath + Notesmoneysaction + "?method=updAll", "修改", NotesmoneysdataForm, Notesmoneysstore);
					NotesmoneysdataForm.form.loadRecord(selections[0]);
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
	        					var selections = Notesmoneysgrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Notesmoneysaction + "?method=delAll",selections,Notesmoneysstore,Notesmoneyskeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Notesmoneysaction + "?method=impAll","导入",Notesmoneysstore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Notesmoneysaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryNotesmoneysaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Notesmoneysgrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Notesmoneyskeycolumn.length;i++){
	        						fid += selections[0].data[Notesmoneyskeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Notesmoneysclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Notesmoneysnotesid").setEditable (true);
    							createQueryWindow("筛选", NotesmoneysdataForm, Notesmoneysstore,Ext.getCmp("queryNotesmoneysaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryNotesmoneysaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Notesmoneysstore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryNotesmoneysaction").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Notesmoneysstore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryNotesmoneysaction").getValue()
							}
					});
				}
			}
		]
	});
	Notesmoneysgrid.region = 'center';
	Notesmoneysstore.on("beforeload",function(){ 
		Notesmoneysstore.getProxy().extraParams = {
				json : queryjson,
				query : Ext.getCmp("queryNotesmoneysaction").getValue()
		}; 
	});
	Notesmoneysstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Notesmoneysgrid ]
	});
})
