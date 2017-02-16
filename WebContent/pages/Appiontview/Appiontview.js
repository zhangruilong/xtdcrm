Ext.onReady(function() {
	var Appiontviewclassify = "appiontview";
	var Appiontviewtitle = "当前位置:业务管理》" + Appiontviewclassify;
	var Appiontviewaction = "AppiontviewAction.do";
	var Appiontviewfields = ['appointid'
	        			    ,'appointcustomer' 
	        			    ,'appointcard' 
	        			    ,'appointplace' 
	        			    ,'appointcourse' 
	        			    ,'appointplacename' 
	        			    ,'appointcoursename' 
	        			    ,'appointcoachname' 
	        			    ,'appointproject' 
	        			    ,'appointbegin' 
	        			    ,'appointend' 
	        			    ,'appointdetail' 
	        			    ,'appointstatue' 
	        			    ,'createtime' 
	        			    ,'creator' 
	        			    ,'customercode' 
	        			    ,'openid' 
	        			    ,'customername' 
	        			    ,'customerphone' 
	        			    ,'cuscardtype' 
	        			    ,'cuscardno' 
	        			    ,'cuscarddetail' 
	        			      ];// 全部字段
	var Appiontviewkeycolumn = [ 'appointid' ];// 主键
	var Appiontviewstore = dataStore(Appiontviewfields, basePath + Appiontviewaction + "?method=selLimit");// 定义Appiontviewstore
	var AppiontviewdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'AppiontviewdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Appiontviewappointid',
				name : 'appointid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '会员ID',
				id : 'Appiontviewappointcustomer',
				name : 'appointcustomer',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '会员卡ID',
				id : 'Appiontviewappointcard',
				name : 'appointcard',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场地ID',
				id : 'Appiontviewappointplace',
				name : 'appointplace',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '课程ID',
				id : 'Appiontviewappointcourse',
				name : 'appointcourse',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场地',
				id : 'Appiontviewappointplacename',
				name : 'appointplacename',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '课程',
				id : 'Appiontviewappointcoursename',
				name : 'appointcoursename',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '教练',
				id : 'Appiontviewappointcoachname',
				name : 'appointcoachname',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '项目',
				id : 'Appiontviewappointproject',
				name : 'appointproject',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '开始时间',
				id : 'Appiontviewappointbegin',
				name : 'appointbegin',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '结束时间',
				id : 'Appiontviewappointend',
				name : 'appointend',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '备注',
				id : 'Appiontviewappointdetail',
				name : 'appointdetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'Appiontviewappointstatue',
				name : 'appointstatue',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建时间',
				id : 'Appiontviewcreatetime',
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
				id : 'Appiontviewcreator',
				name : 'creator',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Appiontviewcustomercode',
				name : 'customercode',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'OPENID',
				id : 'Appiontviewopenid',
				name : 'openid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '姓名',
				id : 'Appiontviewcustomername',
				name : 'customername',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '手机',
				id : 'Appiontviewcustomerphone',
				name : 'customerphone',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '分类',
				id : 'Appiontviewcuscardtype',
				name : 'cuscardtype',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡号',
				id : 'Appiontviewcuscardno',
				name : 'cuscardno',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '备注',
				id : 'Appiontviewcuscarddetail',
				name : 'cuscarddetail',
				maxLength : 100
			} ]
		}
		]
	});
	
	//var Appiontviewbbar = pagesizebar(Appiontviewstore);//定义分页
	var Appiontviewgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Appiontviewtitle,
		store : Appiontviewstore,
		//bbar : Appiontviewbbar,
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
			dataIndex : 'appointid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '会员ID',
			dataIndex : 'appointcustomer',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '会员卡ID',
			dataIndex : 'appointcard',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '场地ID',
			dataIndex : 'appointplace',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '课程ID',
			dataIndex : 'appointcourse',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '场地',
			dataIndex : 'appointplacename',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '课程',
			dataIndex : 'appointcoursename',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '教练',
			dataIndex : 'appointcoachname',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '项目',
			dataIndex : 'appointproject',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '开始时间',
			dataIndex : 'appointbegin',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '结束时间',
			dataIndex : 'appointend',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '备注',
			dataIndex : 'appointdetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '状态',
			dataIndex : 'appointstatue',
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
			header : '编码',
			dataIndex : 'customercode',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : 'OPENID',
			dataIndex : 'openid',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '姓名',
			dataIndex : 'customername',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '手机',
			dataIndex : 'customerphone',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '分类',
			dataIndex : 'cuscardtype',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '卡号',
			dataIndex : 'cuscardno',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '备注',
			dataIndex : 'cuscarddetail',
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
					AppiontviewdataForm.form.reset();
					Ext.getCmp("Appiontviewappointid").setEditable (true);
					createTextWindow(basePath + Appiontviewaction + "?method=insAll", "新增", AppiontviewdataForm, Appiontviewstore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Appiontviewgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Appiontviewaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Appiontviewgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					AppiontviewdataForm.form.reset();
					Ext.getCmp("Appiontviewappointid").setEditable (false);
					createTextWindow(basePath + Appiontviewaction + "?method=updAll", "修改", AppiontviewdataForm, Appiontviewstore);
					AppiontviewdataForm.form.loadRecord(selections[0]);
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
	        					var selections = Appiontviewgrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Appiontviewaction + "?method=delAll",selections,Appiontviewstore,Appiontviewkeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Appiontviewaction + "?method=impAll","导入",Appiontviewstore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Appiontviewaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryAppiontviewaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Appiontviewgrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Appiontviewkeycolumn.length;i++){
	        						fid += selections[0].data[Appiontviewkeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Appiontviewclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Appiontviewappointid").setEditable (true);
    							createQueryWindow("筛选", AppiontviewdataForm, Appiontviewstore,Ext.getCmp("queryAppiontviewaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryAppiontviewaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryAppiontviewaction").getValue()) {
								Appiontviewstore.load({
									params : {
										json : queryjson
									}
								});
							} else {
								Appiontviewstore.load({
									params : {
										json : queryjson,
										query : Ext.getCmp("queryAppiontviewaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Appiontviewgrid.region = 'center';
	Appiontviewstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Appiontviewgrid ]
	});
})
