Ext.onReady(function() {
	var Coachviewclassify = "coachview";
	var Coachviewtitle = "当前位置:业务管理》" + Coachviewclassify;
	var Coachviewaction = "CoachviewAction.do";
	var Coachviewfields = ['coachid'
	        			    ,'coachstadium' 
	        			    ,'coachcode' 
	        			    ,'coachname' 
	        			    ,'coachphone' 
	        			    ,'coachaddress' 
	        			    ,'coachsex' 
	        			    ,'coachage' 
	        			    ,'coachimage' 
	        			    ,'coachdetail' 
	        			    ,'coachstatue' 
	        			    ,'createtime' 
	        			    ,'creator' 
	        			    ,'stadiumid' 
	        			    ,'stadiumcode' 
	        			    ,'stadiumname' 
	        			    ,'stadiumaddress' 
	        			    ,'stadiumdetail' 
	        			    ,'stadiumstatue' 
	        			    ,'stadiumx' 
	        			    ,'stadiumy' 
	        			      ];// 全部字段
	var Coachviewkeycolumn = [ 'coachid' ];// 主键
	var Coachviewstore = dataStore(Coachviewfields, basePath + Coachviewaction + "?method=selLimit");// 定义Coachviewstore
	var CoachviewdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'CoachviewdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Coachviewcoachid',
				name : 'coachid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场馆ID',
				id : 'Coachviewcoachstadium',
				name : 'coachstadium',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Coachviewcoachcode',
				name : 'coachcode',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '姓名',
				id : 'Coachviewcoachname',
				name : 'coachname',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '手机',
				id : 'Coachviewcoachphone',
				name : 'coachphone',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '地址',
				id : 'Coachviewcoachaddress',
				name : 'coachaddress',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '性别',
				id : 'Coachviewcoachsex',
				name : 'coachsex',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '年龄',
				id : 'Coachviewcoachage',
				name : 'coachage',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '照片',
				id : 'Coachviewcoachimage',
				name : 'coachimage',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '备注',
				id : 'Coachviewcoachdetail',
				name : 'coachdetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'Coachviewcoachstatue',
				name : 'coachstatue',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建时间',
				id : 'Coachviewcreatetime',
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
				id : 'Coachviewcreator',
				name : 'creator',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Coachviewstadiumid',
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
				id : 'Coachviewstadiumcode',
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
				id : 'Coachviewstadiumname',
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
				id : 'Coachviewstadiumaddress',
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
				id : 'Coachviewstadiumdetail',
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
				id : 'Coachviewstadiumstatue',
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
				id : 'Coachviewstadiumx',
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
				id : 'Coachviewstadiumy',
				name : 'stadiumy',
				maxLength : 100
			} ]
		}
		]
	});
	
	//var Coachviewbbar = pagesizebar(Coachviewstore);//定义分页
	var Coachviewgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Coachviewtitle,
		store : Coachviewstore,
		//bbar : Coachviewbbar,
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
			dataIndex : 'coachid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '场馆ID',
			dataIndex : 'coachstadium',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '编码',
			dataIndex : 'coachcode',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '姓名',
			dataIndex : 'coachname',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '手机',
			dataIndex : 'coachphone',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '地址',
			dataIndex : 'coachaddress',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '性别',
			dataIndex : 'coachsex',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '年龄',
			dataIndex : 'coachage',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '照片',
			dataIndex : 'coachimage',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '备注',
			dataIndex : 'coachdetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '状态',
			dataIndex : 'coachstatue',
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
					CoachviewdataForm.form.reset();
					Ext.getCmp("Coachviewcoachid").setEditable (true);
					createTextWindow(basePath + Coachviewaction + "?method=insAll", "新增", CoachviewdataForm, Coachviewstore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Coachviewgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Coachviewaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Coachviewgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					CoachviewdataForm.form.reset();
					Ext.getCmp("Coachviewcoachid").setEditable (false);
					createTextWindow(basePath + Coachviewaction + "?method=updAll", "修改", CoachviewdataForm, Coachviewstore);
					CoachviewdataForm.form.loadRecord(selections[0]);
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
	        					var selections = Coachviewgrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Coachviewaction + "?method=delAll",selections,Coachviewstore,Coachviewkeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Coachviewaction + "?method=impAll","导入",Coachviewstore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Coachviewaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryCoachviewaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Coachviewgrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Coachviewkeycolumn.length;i++){
	        						fid += selections[0].data[Coachviewkeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Coachviewclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Coachviewcoachid").setEditable (true);
    							createQueryWindow("筛选", CoachviewdataForm, Coachviewstore,Ext.getCmp("queryCoachviewaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryCoachviewaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryCoachviewaction").getValue()) {
								Coachviewstore.load({
									params : {
										json : queryjson
									}
								});
							} else {
								Coachviewstore.load({
									params : {
										json : queryjson,
										query : Ext.getCmp("queryCoachviewaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Coachviewgrid.region = 'center';
	Coachviewstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Coachviewgrid ]
	});
})
