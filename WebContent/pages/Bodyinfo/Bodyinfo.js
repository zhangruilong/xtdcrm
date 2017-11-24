Ext.onReady(function() {
	var Bodyinfoclassify = "bodyinfo";
	var Bodyinfotitle = "当前位置:业务管理》" + Bodyinfoclassify;
	var Bodyinfoaction = "BodyinfoService.do";
	var Bodyinfofields = ['bodyinfoid'
	        			    ,'bodyinfoname' 
	        			    ,'bodyinfophone' 
	        			    ,'bodyinfohight' 
	        			    ,'bodyinfoweight' 
	        			    ,'bodyinfobmi' 
	        			    ,'bodyinfoggj' 
	        			    ,'bodyinfozf' 
	        			    ,'bodyinfoytzfb' 
	        			    ,'bodyinfoxt' 
	        			    ,'bodyinfoxz' 
	        			    ,'bodyinfoxy' 
	        			    ,'bodyinfoinswhen' 
	        			    ,'bodyinfoinswho' 
	        			      ];// 全部字段
	var Bodyinfokeycolumn = [ 'bodyinfoid' ];// 主键
	var Bodyinfostore = dataStore(Bodyinfofields, basePath + Bodyinfoaction + "?method=selQuery");// 定义Bodyinfostore
	var BodyinfodataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'BodyinfodataForm',
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
				id : 'Bodyinfobodyinfoid',
				name : 'bodyinfoid'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '姓名',
				id : 'Bodyinfobodyinfoname',
				name : 'bodyinfoname',
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
				fieldLabel : '手机',
				id : 'Bodyinfobodyinfophone',
				name : 'bodyinfophone'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '身高',
				id : 'Bodyinfobodyinfohight',
				name : 'bodyinfohight'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '体重',
				id : 'Bodyinfobodyinfoweight',
				name : 'bodyinfoweight'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '身体质量参数',
				id : 'Bodyinfobodyinfobmi',
				name : 'bodyinfobmi'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '骨骼肌',
				id : 'Bodyinfobodyinfoggj',
				name : 'bodyinfoggj'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '脂肪',
				id : 'Bodyinfobodyinfozf',
				name : 'bodyinfozf'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '腰臀脂肪比',
				id : 'Bodyinfobodyinfoytzfb',
				name : 'bodyinfoytzfb'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '血糖',
				id : 'Bodyinfobodyinfoxt',
				name : 'bodyinfoxt'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '血脂',
				id : 'Bodyinfobodyinfoxz',
				name : 'bodyinfoxz'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '血压',
				id : 'Bodyinfobodyinfoxy',
				name : 'bodyinfoxy'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建时间',
				id : 'Bodyinfobodyinfoinswhen',
				name : 'bodyinfoinswhen'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建人',
				id : 'Bodyinfobodyinfoinswho',
				name : 'bodyinfoinswho'
			} ]
		}
		]
	});
	
	var Bodyinfobbar = pagesizebar(Bodyinfostore);//定义分页
	var Bodyinfogrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Bodyinfotitle,
		store : Bodyinfostore,
		bbar : Bodyinfobbar,
	    selModel: {
	        type: 'checkboxmodel'
	    },
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : 'ID',
			hidden : true,
			dataIndex : 'bodyinfoid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '姓名',
			dataIndex : 'bodyinfoname',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '手机',
			dataIndex : 'bodyinfophone',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '身高',
			dataIndex : 'bodyinfohight',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '体重',
			dataIndex : 'bodyinfoweight',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '身体质量参数',
			dataIndex : 'bodyinfobmi',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '骨骼肌',
			dataIndex : 'bodyinfoggj',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '脂肪',
			dataIndex : 'bodyinfozf',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '腰臀脂肪比',
			dataIndex : 'bodyinfoytzfb',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '血糖',
			dataIndex : 'bodyinfoxt',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '血脂',
			dataIndex : 'bodyinfoxz',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '血压',
			dataIndex : 'bodyinfoxy',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建时间',
			dataIndex : 'bodyinfoinswhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建人',
			dataIndex : 'bodyinfoinswho',
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
					BodyinfodataForm.form.reset();
					Ext.getCmp("Bodyinfobodyinfoid").setEditable (true);
					Ext.getCmp("Bodyinfobodyinfoinswhen").setValue (getdatetime());
					Ext.getCmp("Bodyinfobodyinfoinswho").setValue (currentuser.username);
					createTextWindow(basePath + Bodyinfoaction + "?method=insAll", "新增", BodyinfodataForm, Bodyinfostore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Bodyinfogrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Bodyinfoaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Bodyinfogrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					BodyinfodataForm.form.reset();
					Ext.getCmp("Bodyinfobodyinfoid").setEditable (false);
					createTextWindow(basePath + Bodyinfoaction + "?method=updAll", "修改", BodyinfodataForm, Bodyinfostore);
					BodyinfodataForm.form.loadRecord(selections[0]);
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
	        					var selections = Bodyinfogrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Bodyinfoaction + "?method=delAll",selections,Bodyinfostore,Bodyinfokeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Bodyinfoaction + "?method=impAll","导入",Bodyinfostore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Bodyinfoaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryBodyinfoaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Bodyinfogrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Bodyinfokeycolumn.length;i++){
	        						fid += selections[0].data[Bodyinfokeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Bodyinfoclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Bodyinfobodyinfoid").setEditable (true);
    							createQueryWindow("筛选", BodyinfodataForm, Bodyinfostore,Ext.getCmp("queryBodyinfoaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryBodyinfoaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Bodyinfostore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryBodyinfoaction").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Bodyinfostore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryBodyinfoaction").getValue()
							}
					});
				}
			}
		]
	});
	Bodyinfogrid.region = 'center';
	Bodyinfostore.on("beforeload",function(){ 
		Bodyinfostore.getProxy().extraParams = {
				json : queryjson,
				query : Ext.getCmp("queryBodyinfoaction").getValue()
		}; 
	});
	Bodyinfostore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Bodyinfogrid ]
	});
})
