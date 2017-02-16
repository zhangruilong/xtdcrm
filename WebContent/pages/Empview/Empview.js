Ext.onReady(function() {
	var Empviewclassify = "empview";
	var Empviewtitle = "当前位置:业务管理》" + Empviewclassify;
	var Empviewaction = "EmpviewAction.do";
	var Empviewfields = ['empid'
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
	        			    ,'stadiumid' 
	        			    ,'stadiumcode' 
	        			    ,'stadiumname' 
	        			    ,'stadiumaddress' 
	        			    ,'stadiumdetail' 
	        			    ,'stadiumstatue' 
	        			    ,'stadiumx' 
	        			    ,'stadiumy' 
	        			      ];// 全部字段
	var Empviewkeycolumn = [ 'empid' ];// 主键
	var Empviewstore = dataStore(Empviewfields, basePath + Empviewaction + "?method=selLimit");// 定义Empviewstore
	var EmpviewdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'EmpviewdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Empviewempid',
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
				id : 'Empviewempstadium',
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
				id : 'Empviewempcode',
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
				id : 'Empviewempname',
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
				id : 'Empviewempage',
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
				id : 'Empviewempsex',
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
				id : 'Empviewempphone',
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
				id : 'Empviewempemail',
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
				id : 'Empviewempimage',
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
				id : 'Empviewempaddress',
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
				id : 'Empviewempdetail',
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
				id : 'Empviewempstatue',
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
				id : 'Empviewcreatetime',
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
				id : 'Empviewcreator',
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
				id : 'Empviewupdtime',
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
				id : 'Empviewupdor',
				name : 'updor',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Empviewstadiumid',
				name : 'stadiumid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Empviewstadiumcode',
				name : 'stadiumcode',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '名称',
				id : 'Empviewstadiumname',
				name : 'stadiumname',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '地址',
				id : 'Empviewstadiumaddress',
				name : 'stadiumaddress',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '备注',
				id : 'Empviewstadiumdetail',
				name : 'stadiumdetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'Empviewstadiumstatue',
				name : 'stadiumstatue',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'X坐标',
				id : 'Empviewstadiumx',
				name : 'stadiumx',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'Y坐标',
				id : 'Empviewstadiumy',
				name : 'stadiumy',
				maxLength : 100
			} ]
		}
		]
	});
	
	//var Empviewbbar = pagesizebar(Empviewstore);//定义分页
	var Empviewgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Empviewtitle,
		store : Empviewstore,
		//bbar : Empviewbbar,
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
		, {
			header : 'ID',
			dataIndex : 'stadiumid',
			sortable : true,  
			editor: {
                xtype: 'textfield'
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
			header : '状态',
			dataIndex : 'stadiumstatue',
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
					EmpviewdataForm.form.reset();
					Ext.getCmp("Empviewempid").setEditable (true);
					createTextWindow(basePath + Empviewaction + "?method=insAll", "新增", EmpviewdataForm, Empviewstore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Empviewgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Empviewaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Empviewgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					EmpviewdataForm.form.reset();
					Ext.getCmp("Empviewempid").setEditable (false);
					createTextWindow(basePath + Empviewaction + "?method=updAll", "修改", EmpviewdataForm, Empviewstore);
					EmpviewdataForm.form.loadRecord(selections[0]);
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
	        					var selections = Empviewgrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Empviewaction + "?method=delAll",selections,Empviewstore,Empviewkeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Empviewaction + "?method=impAll","导入",Empviewstore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Empviewaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryEmpviewaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Empviewgrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Empviewkeycolumn.length;i++){
	        						fid += selections[0].data[Empviewkeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Empviewclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Empviewempid").setEditable (true);
    							createQueryWindow("筛选", EmpviewdataForm, Empviewstore,Ext.getCmp("queryEmpviewaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryEmpviewaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryEmpviewaction").getValue()) {
								Empviewstore.load({
									params : {
										json : queryjson
									}
								});
							} else {
								Empviewstore.load({
									params : {
										json : queryjson,
										query : Ext.getCmp("queryEmpviewaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Empviewgrid.region = 'center';
	Empviewstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Empviewgrid ]
	});
})
