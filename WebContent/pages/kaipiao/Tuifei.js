Ext.onReady(function() {
	var Tuifeiclassify = "tuifei";
	var Tuifeititle = "当前位置:业务管理》" + Tuifeiclassify;
	var Tuifeiaction = "TuifeiService.do";
	var Tuifeifields = ['tuifeiid'
	        			    ,'tuifeistadium' 
	        			    ,'tuifeiname' 
	        			    ,'tuifeidetail' 
	        			    ,'tuifeimoney' 
	        			    ,'tuifeiinswhen' 
	        			    ,'tuifeiinswho' 
	        			      ];// 全部字段
	var Tuifeikeycolumn = [ 'tuifeiid' ];// 主键
	var Tuifeistore = dataStore(Tuifeifields, basePath + Tuifeiaction + "?method=selQuery");// 定义Tuifeistore
	var TuifeidataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'TuifeidataForm',
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
				id : 'Tuifeituifeiid',
				name : 'tuifeiid'
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
				id : 'Tuifeituifeistadium',
				name : 'tuifeistadium'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '会员卡',
				id : 'Tuifeituifeiname',
				name : 'tuifeiname'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '课程',
				id : 'Tuifeituifeimoney',
				name : 'tuifeimoney'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '备注',
				id : 'Tuifeituifeidetail',
				name : 'tuifeidetail'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'datefield',
				fieldLabel : '操作时间',
				format : 'Y-m-d',
				hidden: true,
				value : new Date(),
				id : 'Tuifeituifeiinswhen',
				name : 'tuifeiinswhen'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '操作人',
				hidden: true,
				value : currentuser.username,
				id : 'Tuifeituifeiinswho',
				name : 'tuifeiinswho'
			} ]
		}
		]
	});
	
	var Tuifeibbar = pagesizebar(Tuifeistore);//定义分页
	var Tuifeigrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Tuifeititle,
		store : Tuifeistore,
		bbar : Tuifeibbar,
	    selModel: {
	        type: 'checkboxmodel'
	    },
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : 'ID',
			dataIndex : 'tuifeiid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '场馆',
			dataIndex : 'tuifeistadium',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '会员卡',
			dataIndex : 'tuifeiname',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '课程',
			dataIndex : 'tuifeimoney',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '备注',
			dataIndex : 'tuifeidetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建时间',
			dataIndex : 'tuifeiinswhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建人',
			dataIndex : 'tuifeiinswho',
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
					TuifeidataForm.form.reset();
					Ext.getCmp("Tuifeituifeiid").setEditable (true);
					createTextWindow(basePath + Tuifeiaction + "?method=insAll", "新增", TuifeidataForm, Tuifeistore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Tuifeigrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Tuifeiaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Tuifeigrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					TuifeidataForm.form.reset();
					Ext.getCmp("Tuifeituifeiid").setEditable (false);
					createTextWindow(basePath + Tuifeiaction + "?method=updAll", "修改", TuifeidataForm, Tuifeistore);
					TuifeidataForm.form.loadRecord(selections[0]);
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
	        					var selections = Tuifeigrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Tuifeiaction + "?method=delAll",selections,Tuifeistore,Tuifeikeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Tuifeiaction + "?method=impAll","导入",Tuifeistore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Tuifeiaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryTuifeiaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Tuifeigrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Tuifeikeycolumn.length;i++){
	        						fid += selections[0].data[Tuifeikeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Tuifeiclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Tuifeituifeiid").setEditable (true);
    							createQueryWindow("筛选", TuifeidataForm, Tuifeistore,Ext.getCmp("queryTuifeiaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryTuifeiaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Tuifeistore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryTuifeiaction").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Tuifeistore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryTuifeiaction").getValue()
							}
					});
				}
			}
		]
	});
	Tuifeigrid.region = 'center';
	Tuifeistore.on("beforeload",function(){ 
		Tuifeistore.getProxy().extraParams = {
				json : queryjson,
				query : Ext.getCmp("queryTuifeiaction").getValue()
		}; 
	});
	Tuifeistore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Tuifeigrid ]
	});
})
