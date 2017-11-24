Ext.onReady(function() {
	var Mycourseclassify = "mycourse";
	var Mycoursetitle = "当前位置:业务管理》" + Mycourseclassify;
	var Mycourseaction = "MycourseService.do";
	var Mycoursefields = ['mycourseid'
	        			    ,'mycoursecustomer' 
	        			    ,'mycoursename' 
	        			    ,'mycoursestadium' 
	        			    ,'mycoursecoach' 
	        			    ,'mycoursecoachname' 
	        			    ,'mycoursenum' 
	        			    ,'mycoursenuma' 
	        			    ,'mycourseprice' 
	        			    ,'mycoursedikou' 
	        			    ,'mycoursemoney' 
	        			    ,'mycourseproject' 
	        			    ,'mycoursedetail' 
	        			    ,'mycoursetype' 
	        			    ,'mycoursebegin' 
	        			    ,'mycourseend' 
	        			    ,'mycourseinswhen' 
	        			    ,'mycourseupdwhen' 
	        			    ,'customername' 
	        			      ];// 全部字段
	var Mycoursekeycolumn = [ 'mycourseid' ];// 主键
	var Mycoursestore = dataStore(Mycoursefields, basePath + "MycourseviewService.do?method=selQuery&wheresql=mycoursetype='私教课'");// 定义Mycoursestore
	var MycoursedataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'MycoursedataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			xtype : 'hidden',
			fieldLabel : 'ID',
			id : 'Mycoursemycourseid',
			name : 'mycourseid'
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '会员',
				id : 'customername',
				name : 'customername',
				allowBlank : false,
				editable : false,
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
			hidden : true,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '会员',
				id : 'Mycoursemycoursecustomer',
				name : 'mycoursecustomer',
				allowBlank : false,
				editable : false
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '课程名',
				id : 'Mycoursemycoursename',
				name : 'mycoursename',
				allowBlank : false,
				editable : false,
				triggers: {
			        bar: {
			            cls: 'my-bar-trigger',
			            handler: function() {
			            	selectAllcourse();
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
				fieldLabel : '场馆',
				id : 'Mycoursemycoursestadium',
				name : 'mycoursestadium',
				editable : false
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '教练',
				id : 'Mycoursemycoursecoachname',
				name : 'mycoursecoachname',
				allowBlank : false,
				triggers: {
			        bar: {
			            cls: 'my-bar-trigger',
			            handler: function() {
			            	selectcoach(Ext.getCmp("Mycoursemycoursestadium").getValue());
			            }
			        }
				}
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'numberfield',
				fieldLabel : '课时',
				id : 'Mycoursemycoursenum',
				name : 'mycoursenum',
				allowBlank : false,
				listeners : {
					blur : function(field, e) {
						Ext.getCmp("Mycoursemycoursenuma").setValue(Ext.getCmp("Mycoursemycoursenum").getValue());
					}
				}
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			hidden : true,
			items : [ {
				xtype : 'numberfield',
				fieldLabel : '剩余课时',
				id : 'Mycoursemycoursenuma',
				name : 'mycoursenuma',
				allowBlank : false
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '单节价格',
				id : 'Mycoursemycourseprice',
				name : 'mycourseprice',
				editable : false
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '优惠码',
				id : 'Mycoursemycoursecoach',
				name : 'mycoursecoach',
				maxLength : 100,
				anchor : '100%',
				listeners : {
					blur : function(field, e) {
						Ext.Ajax.request({
							url : basePath + "HuodongService.do?method=selAll",
							method : 'POST',
							params : {
								wheresql : "huodongcode='"+Ext.getCmp("Mycoursemycoursecoach").getValue()
								+"' and huodongcardtype='"+Ext.getCmp("Mycoursemycourseproject").getValue()
								+"' and huodongstatue is null"
							},
							success : function(response) {
								var resp = Ext.decode(response.responseText); 
								Ext.getCmp("Mycoursemycoursedikou").setValue(0);
								Ext.each(resp.root, function(temp, index) {  
									Ext.getCmp("Mycoursemycoursedikou").setValue(temp.huodongmoney);
									window.localStorage.setItem("huodong",temp.huodongid);
							    });
								Ext.getCmp("Mycoursemycoursemoney").setValue(Ext.getCmp("Mycoursemycourseprice").getValue()*Ext.getCmp("Mycoursemycoursenuma").getValue()-Ext.getCmp("Mycoursemycoursedikou").getValue());
							},
							failure : function(response) {
								Ext.Msg.alert('提示', '网络出现问题，请稍后再试');
							}
						});
					}
				}
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'numberfield',
				fieldLabel : '抵扣',
				id : 'Mycoursemycoursedikou',
				name : 'mycoursedikou',
				value : 0,
				listeners : {
					blur : function(field, e) {
						Ext.getCmp("Mycoursemycoursemoney").setValue(Ext.getCmp("Mycoursemycourseprice").getValue()*Ext.getCmp("Mycoursemycoursenuma").getValue()-Ext.getCmp("Mycoursemycoursedikou").getValue());
					}
				}
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'numberfield',
				fieldLabel : '售价',
				id : 'Mycoursemycoursemoney',
				name : 'mycoursemoney'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '项目',
				id : 'Mycoursemycourseproject',
				name : 'mycourseproject',
				editable : false
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'datefield',
				fieldLabel : '开始',
				id : 'Mycoursemycoursebegin',
				name : 'mycoursebegin',
				format : 'Y-m-d',
				allowBlank : false
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'datefield',
				fieldLabel : '结束',
				id : 'Mycoursemycourseend',
				name : 'mycourseend',
				format : 'Y-m-d',
				allowBlank : false
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '分类',
				id : 'Mycoursemycoursetype',
				name : 'mycoursetype',
				editable : false
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '备注(场次)',
				id : 'Mycoursemycoursedetail',
				name : 'mycoursedetail'
			} ]
		}
		]
	});
	
	var Mycoursebbar = pagesizebar(Mycoursestore);//定义分页
	var Mycoursegrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Mycoursetitle,
		store : Mycoursestore,
		bbar : Mycoursebbar,
	    selModel: {
	        type: 'checkboxmodel'
	    },
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : 'ID',
			dataIndex : 'mycourseid',
			hidden : true,  
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '会员',
			dataIndex : 'mycoursecustomer',
			hidden : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '会员',
			dataIndex : 'customername',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '课程名',
			dataIndex : 'mycoursename',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '场馆',
			dataIndex : 'mycoursestadium',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '优惠码',
			dataIndex : 'mycoursecoach',
			hidden : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '教练',
			dataIndex : 'mycoursecoachname',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '课时',
			dataIndex : 'mycoursenum',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '剩余课时',
			dataIndex : 'mycoursenuma',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '价格',
			dataIndex : 'mycourseprice',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '抵扣',
			dataIndex : 'mycoursedikou',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '售价',
			dataIndex : 'mycoursemoney',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '项目',
			dataIndex : 'mycourseproject',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '备注',
			dataIndex : 'mycoursedetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '分类',
			dataIndex : 'mycoursetype',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '开始',
			dataIndex : 'mycoursebegin',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '结束',
			dataIndex : 'mycourseend',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建时间',
			dataIndex : 'mycourseinswhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '更新时间',
			dataIndex : 'mycourseupdwhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		],
		tbar : [{
				text : Ext.os.deviceType === 'Phone' ? null : "预约私教课",
				iconCls : 'add',
				handler : function() {
					var selections = Mycoursegrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					insappiont(selections[0]);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "购买私教课",
				iconCls : 'add',
				handler : function() {
					MycoursedataForm.form.reset();
					createTextWindow(basePath + Mycourseaction + "?method=buycourse&huodong="+window.localStorage.getItem("huodong"), "新增", MycoursedataForm, Mycoursestore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Mycoursegrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Mycourseaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Mycoursegrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					MycoursedataForm.form.reset();
					createTextWindow(basePath + Mycourseaction + "?method=updAll", "修改", MycoursedataForm, Mycoursestore);
					MycoursedataForm.form.loadRecord(selections[0]);
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
	        					var selections = Mycoursegrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Mycourseaction + "?method=delAll",selections,Mycoursestore,Mycoursekeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Mycourseaction + "?method=impAll","导入",Mycoursestore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Mycourseaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryMycourseaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Mycoursegrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Mycoursekeycolumn.length;i++){
	        						fid += selections[0].data[Mycoursekeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Mycourseclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Mycoursemycourseid").setEditable (true);
    							createQueryWindow("筛选", MycoursedataForm, Mycoursestore,Ext.getCmp("queryMycourseaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryMycourseaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Mycoursestore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryMycourseaction").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Mycoursestore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryMycourseaction").getValue()
							}
					});
				}
			}
		]
	});
	Mycoursegrid.region = 'center';
	Mycoursestore.on("beforeload",function(){ 
		Mycoursestore.getProxy().extraParams = {
				json : queryjson,
				query : Ext.getCmp("queryMycourseaction").getValue()
		}; 
	});
	Mycoursestore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Mycoursegrid ]
	});
})
