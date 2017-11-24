Ext.onReady(function() {
	var Noticeclassify = "notice";
	var Noticetitle = "当前位置:业务管理》" + Noticeclassify;
	var NoticeService = "NoticeService.do";
	var Noticefields = ['noticeid'
	        			    ,'noticetitle' 
	        			    ,'noticedetail' 
	        			    ,'noticeinswhen' 
	        			    ,'noticeinswho' 
	        			      ];// 全部字段
	var Noticekeycolumn = [ 'noticeid' ];// 主键
	var Noticestore = dataStore(Noticefields, basePath + NoticeService + "?method=selQuery");// 定义Noticestore
	var NoticedataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'NoticedataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Noticenoticeid',
				name : 'noticeid'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '标题',
				id : 'Noticenoticetitle',
				name : 'noticetitle'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'htmleditor',
				fieldLabel : '内容',
				id : 'Noticenoticedetail',
				name : 'noticedetail'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'datefield',
				fieldLabel : '创建时间',
				format : 'Y-m-d',
				value : new Date(),
				id : 'Noticenoticeinswhen',
				name : 'noticeinswhen'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建人',
				value : currentuser.username,
				id : 'Noticenoticeinswho',
				name : 'noticeinswho'
			} ]
		}
		]
	});
	
	var Noticebbar = pagesizebar(Noticestore);//定义分页
	var Noticegrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Noticetitle,
		store : Noticestore,
		bbar : Noticebbar,
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
			dataIndex : 'noticeid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '标题',
			dataIndex : 'noticetitle',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '内容',
			dataIndex : 'noticedetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建时间',
			dataIndex : 'noticeinswhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建人',
			dataIndex : 'noticeinswho',
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
					NoticedataForm.form.reset();
					Ext.getCmp("Noticenoticeid").setEditable (true);
					createTextWindow(basePath + NoticeService + "?method=insAll", "新增", NoticedataForm, Noticestore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Noticegrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + NoticeService + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Noticegrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					NoticedataForm.form.reset();
					Ext.getCmp("Noticenoticeid").setEditable (false);
					createTextWindow(basePath + NoticeService + "?method=updAll", "修改", NoticedataForm, Noticestore);
					NoticedataForm.form.loadRecord(selections[0]);
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
	        					var selections = Noticegrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + NoticeService + "?method=delAll",selections,Noticestore,Noticekeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + NoticeService + "?method=impAll","导入",Noticestore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + NoticeService + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryNoticeService").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Noticegrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Noticekeycolumn.length;i++){
	        						fid += selections[0].data[Noticekeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Noticeclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Noticenoticeid").setEditable (true);
    							createQueryWindow("筛选", NoticedataForm, Noticestore,Ext.getCmp("queryNoticeService").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryNoticeService',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Noticestore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryNoticeService").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Noticestore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryNoticeService").getValue()
							}
					});
				}
			}
		]
	});
	Noticegrid.region = 'center';
	Noticestore.on("beforeload",function(){ 
		Noticestore.getProxy().extraParams = {
				json : queryjson,
				query : Ext.getCmp("queryNoticeService").getValue()
		}; 
	});
	Noticestore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Noticegrid ]
	});
})
