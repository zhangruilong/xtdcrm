Ext.onReady(function() {
	var Stadiumclassify = "stadium";
	var Stadiumtitle = "当前位置:业务管理》" + Stadiumclassify;
	var Stadiumaction = "StadiumAction.do";
	var Stadiumfields = ['stadiumid'
	        			    ,'stadiumcode' 
	        			    ,'stadiumname' 
	        			    ,'stadiumaddress' 
	        			    ,'stadiumdetail' 
	        			    ,'stadiumimage' 
	        			    ,'stadiumx' 
	        			    ,'stadiumy' 
	        			      ];// 全部字段
	var Stadiumkeycolumn = [ 'stadiumid' ];// 主键
	var Stadiumstore = dataStore(Stadiumfields, basePath + Stadiumaction + "?method=selQuery");// 定义Stadiumstore
	var StadiumdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'StadiumdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Stadiumstadiumid',
				name : 'stadiumid'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Stadiumstadiumcode',
				name : 'stadiumcode'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '名称',
				id : 'Stadiumstadiumname',
				name : 'stadiumname'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '地址',
				id : 'Stadiumstadiumaddress',
				name : 'stadiumaddress'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '备注',
				id : 'Stadiumstadiumdetail',
				name : 'stadiumdetail'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '照片',
				id : 'Stadiumstadiumimage',
				name : 'stadiumimage'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'X坐标',
				id : 'Stadiumstadiumx',
				name : 'stadiumx'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'Y坐标',
				id : 'Stadiumstadiumy',
				name : 'stadiumy'
			} ]
		}
		]
	});
	
	var Stadiumbbar = pagesizebar(Stadiumstore);//定义分页
	var Stadiumgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Stadiumtitle,
		store : Stadiumstore,
		bbar : Stadiumbbar,
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
			dataIndex : 'stadiumid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '编码',
			dataIndex : 'stadiumcode',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '名称',
			dataIndex : 'stadiumname',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '地址',
			dataIndex : 'stadiumaddress',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '备注',
			dataIndex : 'stadiumdetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '照片',
			dataIndex : 'stadiumimage',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : 'X坐标',
			dataIndex : 'stadiumx',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : 'Y坐标',
			dataIndex : 'stadiumy',
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
					StadiumdataForm.form.reset();
					Ext.getCmp("Stadiumstadiumid").setEditable (true);
					createTextWindow(basePath + Stadiumaction + "?method=insAll", "新增", StadiumdataForm, Stadiumstore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Stadiumgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Stadiumaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Stadiumgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					StadiumdataForm.form.reset();
					Ext.getCmp("Stadiumstadiumid").setEditable (false);
					createTextWindow(basePath + Stadiumaction + "?method=updAll", "修改", StadiumdataForm, Stadiumstore);
					StadiumdataForm.form.loadRecord(selections[0]);
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
	        					var selections = Stadiumgrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Stadiumaction + "?method=delAll",selections,Stadiumstore,Stadiumkeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Stadiumaction + "?method=impAll","导入",Stadiumstore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Stadiumaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryStadiumaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Stadiumgrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Stadiumkeycolumn.length;i++){
	        						fid += selections[0].data[Stadiumkeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Stadiumclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Stadiumstadiumid").setEditable (true);
    							createQueryWindow("筛选", StadiumdataForm, Stadiumstore,Ext.getCmp("queryStadiumaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryStadiumaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Stadiumstore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryStadiumaction").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Stadiumstore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryStadiumaction").getValue()
							}
					});
				}
			}
		]
	});
	Stadiumgrid.region = 'center';
	Stadiumstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Stadiumgrid ]
	});
})
