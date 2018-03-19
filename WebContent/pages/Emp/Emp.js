Ext.onReady(function() {
	var wheresql = "";
	if(!isnull(currentuser.roledetail)) wheresql="empstadium='"+currentuser.roledetail+"'";
	var Empclassify = "emp";
	var Emptitle = "当前位置:业务管理》" + Empclassify;
	var EmpService = "EmpService.do";
	var Empfields = ['empid'
	        			    ,'empstadium' 
	        			    ,'empcode' 
	        			    ,'empsysname' 
	        			    ,'empname' 
	        			    ,'empposition' 
	        			    ,'emppposition' 
	        			    ,'empage' 
	        			    ,'empsex' 
	        			    ,'empphone' 
	        			    ,'empemail' 
	        			    ,'empimage' 
	        			    ,'empdetail' 
	        			    ,'empstatue' 
	        			    ,'empinswhen' 
	        			    ,'empinswho' 
	        			      ];// 全部字段
	var Empkeycolumn = [ 'empid' ];// 主键
	var Empstore = dataStore(Empfields, basePath + EmpService + "?method=selQuery&wheresql="+wheresql);// 定义Empstore
	var EmpdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'EmpdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Empempid',
				name : 'empid'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场馆',
				id : 'Empempstadium',
				name : 'empstadium'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '工号',
				id : 'Empempcode',
				name : 'empcode'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '系统账号',
				id : 'Empempsysname',
				name : 'empsysname'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '姓名',
				id : 'Empempname',
				name : 'empname'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '职位',
				id : 'Empempposition',
				name : 'empposition'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '上级',
				id : 'Empemppposition',
				name : 'emppposition'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '年龄',
				id : 'Empempage',
				name : 'empage'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '性别',
				id : 'Empempsex',
				name : 'empsex'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '手机',
				id : 'Empempphone',
				name : 'empphone'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '邮箱',
				id : 'Empempemail',
				name : 'empemail'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '照片',
				id : 'Empempimage',
				name : 'empimage'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '备注',
				id : 'Empempdetail',
				name : 'empdetail'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'Empempstatue',
				name : 'empstatue'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'datefield',
				format : 'Y-m-d',
				value : new Date(),
				fieldLabel : '创建时间',
				id : 'Empempinswhen',
				name : 'empinswhen'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				value : currentuser.username,
				fieldLabel : '创建人',
				id : 'Empempinswho',
				name : 'empinswho'
			} ]
		}
		]
	});
	
	var Empbbar = pagesizebar(Empstore);//定义分页
	var Empgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Emptitle,
		store : Empstore,
		bbar : Empbbar,
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
			header : '场馆',
			dataIndex : 'empstadium',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '工号',
			dataIndex : 'empcode',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '系统账号',
			dataIndex : 'empsysname',
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
			header : '职位',
			dataIndex : 'empposition',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '上级',
			dataIndex : 'emppposition',
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
			dataIndex : 'empinswhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建人',
			dataIndex : 'empinswho',
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
					createTextWindow(basePath + EmpService + "?method=insAll", "新增", EmpdataForm, Empstore);
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
					commonSave(basePath + EmpService + "?method=updAll",selections);
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
					createTextWindow(basePath + EmpService + "?method=updAll", "修改", EmpdataForm, Empstore);
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
	        					commonDelete(basePath + EmpService + "?method=delAll",selections,Empstore,Empkeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + EmpService + "?method=impAll","导入",Empstore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + EmpService + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryEmpService").getValue(); 
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
    							createQueryWindow("筛选", EmpdataForm, Empstore,Ext.getCmp("queryEmpService").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryEmpService',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Empstore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryEmpService").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Empstore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryEmpService").getValue()
							}
					});
				}
			}
		]
	});
	Empgrid.region = 'center';
	Empstore.on("beforeload",function(){ 
		Empstore.getProxy().extraParams = {
				json : queryjson,
				query : Ext.getCmp("queryEmpService").getValue()
		}; 
	});
	Empstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Empgrid ]
	});
})
