Ext.onReady(function() {
	var Coachcourseclassify = "coachcourse";
	var Coachcoursetitle = "当前位置:业务管理》" + Coachcourseclassify;
	var Coachcourseaction = "CoachcourseService.do";
	var Coachcoursefields = ['coachcourseid'
	        			    ,'coachcoursestadium' 
	        			    ,'coachcoursename' 
	        			    ,'coachcoursemoney' 
	        			    ,'coachcourseproject' 
	        			    ,'coachcoursedetail' 
	        			      ];// 全部字段
	var Coachcoursekeycolumn = [ 'coachcourseid' ];// 主键
	var Coachcoursestore = dataStore(Coachcoursefields, basePath + Coachcourseaction + "?method=selQuery");// 定义Coachcoursestore
	var CoachcoursedataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'CoachcoursedataForm',
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
				id : 'Coachcoursecoachcourseid',
				name : 'coachcourseid'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场馆',
				value : currentuser.roledetail,
				id : 'Coachcoursecoachcoursestadium',
				name : 'coachcoursestadium'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '名称',
				id : 'Coachcoursecoachcoursename',
				name : 'coachcoursename'
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
				id : 'Coachcoursecoachcourseproject',
				name : 'coachcourseproject'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '备注',
				id : 'Coachcoursecoachcoursedetail',
				name : 'coachcoursedetail'
			} ]
		}
		]
	});
	
	var Coachcoursebbar = pagesizebar(Coachcoursestore);//定义分页
	var Coachcoursegrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Coachcoursetitle,
		store : Coachcoursestore,
		bbar : Coachcoursebbar,
	    selModel: {
	        type: 'checkboxmodel'
	    },
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : 'ID',
			dataIndex : 'coachcourseid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '场馆',
			dataIndex : 'coachcoursestadium',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '名称',
			dataIndex : 'coachcoursename',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '项目',
			dataIndex : 'coachcourseproject',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '备注',
			dataIndex : 'coachcoursedetail',
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
					CoachcoursedataForm.form.reset();
					Ext.getCmp("Coachcoursecoachcourseid").setEditable (true);
					createTextWindow(basePath + Coachcourseaction + "?method=insAll", "新增", CoachcoursedataForm, Coachcoursestore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Coachcoursegrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Coachcourseaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Coachcoursegrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					CoachcoursedataForm.form.reset();
					Ext.getCmp("Coachcoursecoachcourseid").setEditable (false);
					createTextWindow(basePath + Coachcourseaction + "?method=updAll", "修改", CoachcoursedataForm, Coachcoursestore);
					CoachcoursedataForm.form.loadRecord(selections[0]);
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
	        					var selections = Coachcoursegrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Coachcourseaction + "?method=delAll",selections,Coachcoursestore,Coachcoursekeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Coachcourseaction + "?method=impAll","导入",Coachcoursestore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Coachcourseaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryCoachcourseaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Coachcoursegrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Coachcoursekeycolumn.length;i++){
	        						fid += selections[0].data[Coachcoursekeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Coachcourseclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Coachcoursecoachcourseid").setEditable (true);
    							createQueryWindow("筛选", CoachcoursedataForm, Coachcoursestore,Ext.getCmp("queryCoachcourseaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryCoachcourseaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Coachcoursestore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryCoachcourseaction").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Coachcoursestore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryCoachcourseaction").getValue()
							}
					});
				}
			}
		]
	});
	Coachcoursegrid.region = 'center';
	Coachcoursestore.on("beforeload",function(){ 
		Coachcoursestore.getProxy().extraParams = {
				json : queryjson,
				query : Ext.getCmp("queryCoachcourseaction").getValue()
		}; 
	});
	Coachcoursestore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Coachcoursegrid ]
	});
})
