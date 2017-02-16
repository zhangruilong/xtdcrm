Ext.onReady(function() {
	var Empclassify = "emp";
	var Emptitle = "当前位置:业务管理》" + Empclassify;
	var Empaction = "EmpAction.do";
	var Empfields = ['empid'
	        			    ,'empstadium' 
	        			    ,'empcode' 
	        			    ,'empname' 
	        			    ,'empage' 
	        			    ,'empsex' 
	        			    ,'empphone' 
	        			    ,'empemail' 
	        			    ,'empimage' 
	        			    ,'empaddress' 
	        			    ,'empdetail' 
	        			    ,'empstatue' 
	        			    ,'createtime' 
	        			    ,'creator' 
	        			    ,'updtime' 
	        			    ,'updor' 
	        			      ];// 全部字段
	var Empkeycolumn = [ 'empid' ];// 主键
	var Empstore = dataStore(Empfields, basePath + Empaction + "?method=selLimit");// 定义Empstore
	var EmpdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'EmpdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Empempid',
				name : 'empid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场馆ID',
				id : 'Empempstadium',
				name : 'empstadium',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Empempcode',
				name : 'empcode',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '姓名',
				id : 'Empempname',
				name : 'empname',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '年龄',
				id : 'Empempage',
				name : 'empage',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '性别',
				id : 'Empempsex',
				name : 'empsex',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '手机',
				id : 'Empempphone',
				name : 'empphone',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '邮箱',
				id : 'Empempemail',
				name : 'empemail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '照片',
				id : 'Empempimage',
				name : 'empimage',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '地址',
				id : 'Empempaddress',
				name : 'empaddress',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '备注',
				id : 'Empempdetail',
				name : 'empdetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'Empempstatue',
				name : 'empstatue',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建时间',
				id : 'Empcreatetime',
				name : 'createtime',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建人',
				id : 'Empcreator',
				name : 'creator',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '更新时间',
				id : 'Empupdtime',
				name : 'updtime',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '更新人',
				id : 'Empupdor',
				name : 'updor',
				maxLength : 100
			} ]
		}
		]
	});
	
	//var Empbbar = pagesizebar(Empstore);//定义分页
	var Empgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Emptitle,
		store : Empstore,
		//bbar : Empbbar,
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
			dataIndex : 'empid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '场馆ID',
			dataIndex : 'empstadium',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '编码',
			dataIndex : 'empcode',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '姓名',
			dataIndex : 'empname',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '年龄',
			dataIndex : 'empage',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '性别',
			dataIndex : 'empsex',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '手机',
			dataIndex : 'empphone',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '邮箱',
			dataIndex : 'empemail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '照片',
			dataIndex : 'empimage',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '地址',
			dataIndex : 'empaddress',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '备注',
			dataIndex : 'empdetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '状态',
			dataIndex : 'empstatue',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建时间',
			dataIndex : 'createtime',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建人',
			dataIndex : 'creator',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '更新时间',
			dataIndex : 'updtime',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '更新人',
			dataIndex : 'updor',
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
					EmpdataForm.form.reset();
					Ext.getCmp("Empempid").setEditable (true);
					createTextWindow(basePath + Empaction + "?method=insAll", "新增", EmpdataForm, Empstore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Empgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Empaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Empgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					EmpdataForm.form.reset();
					Ext.getCmp("Empempid").setEditable (false);
					createTextWindow(basePath + Empaction + "?method=updAll", "修改", EmpdataForm, Empstore);
					EmpdataForm.form.loadRecord(selections[0]);
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
	        					var selections = Empgrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Empaction + "?method=delAll",selections,Empstore,Empkeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Empaction + "?method=impAll","导入",Empstore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Empaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryEmpaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Empgrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Empkeycolumn.length;i++){
	        						fid += selections[0].data[Empkeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Empclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Empempid").setEditable (true);
    							createQueryWindow("筛选", EmpdataForm, Empstore,Ext.getCmp("queryEmpaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryEmpaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryEmpaction").getValue()) {
								Empstore.load({
									params : {
										json : queryjson
									}
								});
							} else {
								Empstore.load({
									params : {
										json : queryjson,
										query : Ext.getCmp("queryEmpaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Empgrid.region = 'center';
	Empstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Empgrid ]
	});
})
