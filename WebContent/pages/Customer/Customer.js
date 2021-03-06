Ext.onReady(function() {
	var wheresql = "";
	if(!isnull(currentuser.roledetail)) wheresql="customerstadium='"+currentuser.roledetail+"'";
	var Customerclassify = "customer";
	var Customertitle = "当前位置:业务管理》" + Customerclassify;
	var Customeraction = "CustomerService.do";
	var Customerfields = ['customerid'
	        			    ,'customerstadium' 
	        			    ,'openid' 
	        			    ,'customercode' 
	        			    ,'customername' 
	        			    ,'customersex' 
	        			    ,'customerage' 
	        			    ,'customercdcard' 
	        			    ,'customerhome' 
	        			    ,'customercompany' 
	        			    ,'customerphone' 
	        			    ,'customerbirthday' 
	        			    ,'customeremail' 
	        			    ,'customerhow' 
	        			    ,'customerimage' 
	        			    ,'customeremp' 
	        			    ,'customerdetail' 
	        			    ,'customerstatue' 
	        			    ,'customerinswhen' 
	        			    ,'customerinswho' 
	        			    ,'customerupdwhen' 
	        			    ,'customerupdwho' 
	        			      ];// 全部字段
	var Customerkeycolumn = [ 'customerid' ];// 主键
	var Customerstore = dataStore(Customerfields, basePath + Customeraction + "?method=selQuery&wheresql="+wheresql);// 定义Customerstore
	var CustomerdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'CustomerdataForm',
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
				id : 'Customercustomerid',
				name : 'customerid'
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
				id : 'Customercustomerstadium',
				name : 'customerstadium'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'OPENID',
				id : 'Customeropenid',
				name : 'openid'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Customercustomercode',
				name : 'customercode'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '姓名',
				id : 'Customercustomername',
				name : 'customername'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '性别',
				id : 'Customercustomersex',
				name : 'customersex'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '年龄',
				id : 'Customercustomerage',
				name : 'customerage'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '身份证',
				id : 'Customercustomercdcard',
				name : 'customercdcard',
				listeners : {
					focus : function(field, e) {
						timer = setInterval(myrefresh,5000); //指定5秒刷新一次
					},
					blur : function(field, e) {
						clearInterval(timer);
					}
				}
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '全民健身卡',
				id : 'Customercustomerhome',
				name : 'customerhome'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '单位',
				id : 'Customercustomercompany',
				name : 'customercompany'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '手机',
				id : 'Customercustomerphone',
				name : 'customerphone'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '生日',
				id : 'Customercustomerbirthday',
				name : 'customerbirthday'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '邮箱',
				id : 'Customercustomeremail',
				name : 'customeremail'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '入会途径',
				id : 'Customercustomerhow',
				name : 'customerhow'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '照片',
				id : 'Customercustomerimage',
				name : 'customerimage'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '会籍管家',
				id : 'Customercustomeremp',
				name : 'customeremp',
				triggers: {
			        bar: {
			            handler: function() {
			            	selectemp();
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
				fieldLabel : '教练管家',
				id : 'Customercustomerdetail',
				name : 'customerdetail',
				triggers: {
			        bar: {
			            handler: function() {
			            	selectcoach();
			            }
			        }
				}
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'combo',
				emptyText : '请选择',
				store : customerStore,
				mode : 'local',
				displayField : 'name',
				valueField : 'name',
				hiddenName : 'name',
				triggerAction : 'all',
				fieldLabel : '状态',
				id : 'Customercustomerstatue',
				name : 'customerstatue'
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
				id : 'Customercustomerinswhen',
				name : 'customerinswhen'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建人',
				value : currentuser.username,
				id : 'Customercustomerinswho',
				name : 'customerinswho'
			} ]
		}
		]
	});
	
	var Customerbbar = pagesizebar(Customerstore);//定义分页
	var Customergrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Customertitle,
		store : Customerstore,
		bbar : Customerbbar,
	    selModel: {
	        type: 'checkboxmodel'
	    },
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : 'ID',
			dataIndex : 'customerid',
			hidden : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : 'OPENID',
			dataIndex : 'openid',
			hidden : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '编码',
			dataIndex : 'customercode',
			hidden : true,  
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
			header : '性别',
			dataIndex : 'customersex',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '年龄',
			dataIndex : 'customerage',
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
			header : '身份证号',
			dataIndex : 'customercdcard',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '入会途径',
			dataIndex : 'customerhow',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '所属场馆',
			dataIndex : 'customerstadium',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '会籍管家',
			dataIndex : 'customeremp',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '教练管家',
			dataIndex : 'customerdetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '生日',
			dataIndex : 'customerbirthday',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '单位',
			dataIndex : 'customercompany',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '邮箱',
			dataIndex : 'customeremail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '照片',
			dataIndex : 'customerimage',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '全民健身卡',
			dataIndex : 'customerhome',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '状态',
			dataIndex : 'customerstatue',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建时间',
			dataIndex : 'customerinswhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建人',
			dataIndex : 'customerinswho',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '更新时间',
			dataIndex : 'customerupdwhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '更新人',
			dataIndex : 'customerupdwho',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		],
		tbar : [{
					id : "caozuobutton",
					text : "操作查询",
					handler : function() {
						var selections = Customergrid.getSelection();
						if (selections.length != 1) {
							Ext.Msg.alert('提示', '请选择一条数据！', function() {
							});
							return;
						}
						getnotes(selections[0].data["customerid"]);
					}
				},'-',{
					text : Ext.os.deviceType === 'Phone' ? null : "分配管家",
					iconCls : 'edit',
					handler : function() {
						var selections = Customergrid.getSelection();
    					if (Ext.isEmpty(selections)) {
    						Ext.Msg.alert('提示', '请至少选择一条数据！');
    						return;
    					}
    					updallemp(basePath + Customeraction + "?method=updAll",selections,Customerstore,Customerkeycolumn);
					}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "新增",
				iconCls : 'add',
				handler : function() {
					CustomerdataForm.form.reset();
					Ext.getCmp("Customercustomerid").setEditable (true);
					createTextWindow(basePath + Customeraction + "?method=insAll", "新增", CustomerdataForm, Customerstore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Customergrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Customeraction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Customergrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					CustomerdataForm.form.reset();
					Ext.getCmp("Customercustomerid").setEditable (false);
					createTextWindow(basePath + Customeraction + "?method=updAll", "修改", CustomerdataForm, Customerstore);
					CustomerdataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "上传照片",
				iconCls : 'edit',
				handler : function() {
					var selections = Customergrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					commonImageUpload("Customer","Customerimage","Customerid",selections[0].data['customerid']);
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
	        					var selections = Customergrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Customeraction + "?method=delAll",selections,Customerstore,Customerkeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Customeraction + "?method=impAll","导入",Customerstore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Customeraction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryCustomeraction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Customergrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Customerkeycolumn.length;i++){
	        						fid += selections[0].data[Customerkeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Customerclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Customercustomerid").setEditable (true);
    							createQueryWindow("筛选", CustomerdataForm, Customerstore,Ext.getCmp("queryCustomeraction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryCustomeraction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Customerstore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryCustomeraction").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Customerstore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryCustomeraction").getValue()
							}
					});
				}
			}
		]
	});
	Customergrid.region = 'center';
	Customerstore.on("beforeload",function(){ 
		Customerstore.getProxy().extraParams = {
			json : queryjson,
			query : Ext.getCmp("queryCustomeraction").getValue()
		}; 
	});
	Customerstore.load();//加载数据
	if("sui"==currentuser.rolecode) Ext.getCmp("caozuobutton").hide();
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Customergrid ]
	});
	function myrefresh(){ 
		IDinfo = ReadIDCardInfo.ReadIDCardInfo(port, baud, timeout, ifCreatePhoto);	
		var str = IDinfo.toString();
		var arr = str.split("|");
		var age = new Date().getFullYear() - arr[3].substr(0, 4);
		
		Ext.getCmp("Customercustomerage").setValue(age);
		Ext.getCmp("Customercustomername").setValue(arr[0]);
		Ext.getCmp("Customercustomersex").setValue(arr[1]);
		Ext.getCmp("Customercustomerbirthday").setValue(arr[3]);
		Ext.getCmp("Customercustomercdcard").setValue(arr[5]);
	}
})
