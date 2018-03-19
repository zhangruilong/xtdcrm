Ext.onReady(function() {
	var CuscardviewsuiService = "CuscardviewService.do";
	if("sui"==currentuser.rolecode) CuscardviewsuiService = "CuscardviewsuiService.do";
	var wheresql = "";
	if(!isnull(currentuser.roledetail)) wheresql="cuscarddetail='"+currentuser.roledetail+"'";
	var Cuscardclassify = "cuscard";
	var Cuscardtitle = "当前位置:业务管理》" + Cuscardclassify;
	var Cuscardaction = "CuscardService.do";
	var Cuscardfields = ['cuscardid'
	        			    ,'cuscardcustomer' 
	        			    ,'cuscardstadium' 
	        			    ,'cuscardno' 
	        			    ,'cuscardtypename' 
	        			    ,'cuscardtypeclass' 
	        			    ,'cuscardday' 
	        			    ,'cuscardbegin' 
	        			    ,'cuscardend' 
	        			    ,'cuscardprice' 
	        			    ,'cuscarddikou' 
	        			    ,'cuscardmoney' 
	        			    ,'cuscardstop' 
	        			    ,'cuscardstopmoney' 
	        			    ,'cuscardnums' 
	        			    ,'cuscardtimes' 
	        			    ,'cuscardpoint' 
	        			    ,'cuscarddetail' 
	        			    ,'cuscardchangci' 
	        			    ,'cuscardproject' 
	        			    ,'cuscardstatue' 
	        			    ,'cuscardinswhen' 
	        			    ,'cuscardinswho' 
	        			    ,'cuscardupdwhen' 
	        			    ,'cuscardupdwho' 
	        			    ,'customername' 
	        			      ];// 全部字段
	var Cuscardkeycolumn = [ 'cuscardid' ];// 主键
	var Cuscardstore = dataStore(Cuscardfields, basePath + CuscardviewsuiService+"?method=selQuery&wheresql="+wheresql);// 定义Cuscardstore
	var CuscarddataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'CuscarddataForm',
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
				id : 'Cuscardcuscardid',
				name : 'cuscardid'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '会员ID',
				id : 'Cuscardcuscardcustomer',
				name : 'cuscardcustomer'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场馆',
				id : 'Cuscardcuscardstadium',
				name : 'cuscardstadium'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡号',
				id : 'Cuscardcuscardno',
				name : 'cuscardno'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡种',
				id : 'Cuscardcuscardtypename',
				name : 'cuscardtypename'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '分类',
				id : 'Cuscardcuscardtypeclass',
				name : 'cuscardtypeclass'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '有效期',
				id : 'Cuscardcuscardday',
				name : 'cuscardday'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '有效期开始',
				id : 'Cuscardcuscardbegin',
				name : 'cuscardbegin'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '有效期结束',
				id : 'Cuscardcuscardend',
				name : 'cuscardend'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '价格',
				id : 'Cuscardcuscardprice',
				name : 'cuscardprice'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '抵扣',
				id : 'Cuscardcuscarddikou',
				name : 'cuscarddikou'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '售价',
				id : 'Cuscardcuscardmoney',
				name : 'cuscardmoney'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '停用期限',
				id : 'Cuscardcuscardstop',
				name : 'cuscardstop'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '停用价格',
				id : 'Cuscardcuscardstopmoney',
				name : 'cuscardstopmoney'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '余次',
				id : 'Cuscardcuscardtimes',
				name : 'cuscardtimes'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '积分',
				id : 'Cuscardcuscardpoint',
				name : 'cuscardpoint'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '所属场馆',
				id : 'Cuscardcuscarddetail',
				name : 'cuscarddetail'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场次',
				id : 'Cuscardcuscardchangci',
				name : 'cuscardchangci'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '项目',
				id : 'Cuscardcuscardproject',
				name : 'cuscardproject'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'Cuscardcuscardstatue',
				name : 'cuscardstatue'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建时间',
				id : 'Cuscardcuscardinswhen',
				name : 'cuscardinswhen'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建人',
				id : 'Cuscardcuscardinswho',
				name : 'cuscardinswho'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '手环号',
				id : 'Cuscardcuscardupdwhen',
				name : 'cuscardupdwhen'
			} ]
		}
//		, {
//			columnWidth : .5,
//			layout : 'form',
//			items : [ {
//				xtype : 'textfield',
//				fieldLabel : '更新人',
//				id : 'Cuscardcuscardupdwho',
//				name : 'cuscardupdwho'
//			} ]
//		}
		]
	});
	var CuscardchangedataForm = new Ext.form.FormPanel({// 定义新增和修改的FormPanel
		id:'CuscardchangedataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [{
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '新卡号',
				id : 'Cuscardchangenonew',
				name : 'cuscardnonew',
				maxLength : 100,
				allowBlank : false,
				anchor : '95%'
			} ]
		}
		,{
				xtype : 'textfield',
				id : 'Cuscardchangeid',
				name : 'cuscardid',
				hidden : true
		}
		,{
			xtype : 'textfield',
			id : 'Cuscardchangedetail',
			name : 'cuscarddetail',
			hidden : true
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'hidden',
				fieldLabel : '会员ID',
				id : 'Cuscardchangecustomer',
				name : 'cuscardcustomer',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '旧卡号',
				id : 'Cuscardchangeno',
				name : 'cuscardno',
				maxLength : 100,
				editable : false,
				anchor : '95%'
			} ]
		}
		]
	});
	var CuscardcontinuedataForm = new Ext.form.FormPanel({// 定义新增和修改的FormPanel
		id:'CuscardcontinuedataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [{
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡种',
				id : 'cuscardtypename',
				name : 'cuscardtypename',
				allowBlank : false,
				editable : false,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'numberfield',
				fieldLabel : '原价',
				id : 'cuscardprice',
				name : 'cuscardprice',
				allowBlank : false,
				readOnly:true,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '优惠码',
				id : 'huodongcuscarddikou',
				name : 'huodongcuscarddikou',
				maxLength : 100,
				anchor : '100%',
				listeners : {
					blur : function(field, e) {
						Ext.Ajax.request({
							url : basePath + "HuodongService.do?method=selAll",
							method : 'POST',
							params : {
								wheresql : "huodongcode='"+Ext.getCmp("huodongcuscarddikou").getValue()
								+"' and huodongcardtypename='"+Ext.getCmp("cuscardtypename").getValue()
								+"'"
							},
							success : function(response) {
								var resp = Ext.decode(response.responseText); 
								Ext.getCmp("cuscarddikou").setValue(0);
								Ext.each(resp.root, function(temp, index) {  
									Ext.getCmp("cuscarddikou").setValue(temp.huodongmoney);
									window.localStorage.setItem("huodong",temp.huodongid);
							    });
								Ext.getCmp("cuscardmoney").setValue(Ext.getCmp("cuscardprice").getValue()-Ext.getCmp("cuscarddikou").getValue());
							},
							failure : function(response) {
								Ext.Msg.alert('提示', '网络出现问题，请稍后再试');
							}
						});
					}
				}
			},{
				xtype : 'numberfield',
				fieldLabel : '折让',
				id : 'cuscarddikou',
				name : 'cuscarddikou',
				value : 0,
				maxLength : 100,
				anchor : '100%',
				listeners : {
					blur : function(field, e) {
						Ext.getCmp("cuscardmoney").setValue(Ext.getCmp("cuscardprice").getValue()-Ext.getCmp("cuscarddikou").getValue());
					}
				}
			},{
				xtype : 'numberfield',
				fieldLabel : '售价',
				id : 'cuscardmoney',
				name : 'cuscardmoney',
				allowBlank : false,
				maxLength : 100,
				anchor : '100%'
			} ]
		},{
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '新卡余次',
				id : 'Cuscardcontinuetimesnew',
				name : 'cuscardtimesnew',
				maxLength : 100,
				allowBlank : false,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'datefield',
				fieldLabel : '新有效期结束',
				id : 'Cuscardcontinueend',
				name : 'cuscardendnew',
				format : 'Y-m-d',
				allowBlank : false,
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		,{
				xtype : 'textfield',
				id : 'Cuscardcontinueid',
				name : 'cuscardid',
				hidden : true
		}
		,{
			xtype : 'textfield',
			id : 'Cuscardcontinuedetail',
			name : 'cuscarddetail',
			hidden : true
		}
		,{
			xtype : 'hidden',
			name : 'cuscarddetail'
		}
		,{
			xtype : 'hidden',
			name : 'cuscardtypeclass'
		}
		,{
			xtype : 'hidden',
			name : 'cuscardupdwhen'
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'hidden',
				fieldLabel : '会员ID',
				id : 'Cuscardcontinuecustomer',
				name : 'cuscardcustomer',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'hidden',
				fieldLabel : '卡号',
				id : 'Cuscardcontinueno',
				name : 'cuscardno',
				maxLength : 100,
				allowBlank : false,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'hidden',
				fieldLabel : '卡总次数',
				id : 'Cuscardcontinuenums',
				name : 'cuscardnums',
				maxLength : 100,
				editable : false,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'numberfield',
				fieldLabel : '卡余次',
				id : 'Cuscardcontinuetimes',
				name : 'cuscardtimes',
				maxLength : 100,
				editable : false,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'datefield',
				fieldLabel : '有效期开始',
				id : 'xuCuscardcuscardbegin',
				name : 'cuscardbegin',
				format : 'Y-m-d',
				allowBlank : false,
				maxLength : 100,
				anchor : '95%'
			} ]
		},{
			xtype : 'hidden',
			fieldLabel : '有效期',
			id : 'xuCuscardcuscardday',
			name : 'cuscardday',
			maxLength : 100,
			readOnly:true,
			anchor : '100%'
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'datefield',
				fieldLabel : '有效期结束',
				id : 'xuCuscardcuscardend',
				name : 'cuscardend',
				format : 'Y-m-d',
				allowBlank : false,
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		]
	});
	var CuscardfengdataForm = new Ext.form.FormPanel({// 定义新增和修改的FormPanel
		id:'CuscardfengdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [{
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡种',
				name : 'cuscardtypename',
				allowBlank : false,
				editable : false,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '单价',
				editable : false,
				value : '一天一元',
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'numberfield',
				fieldLabel : '封卡天数',
				id : 'fengcuscardmoney',
				name : 'cuscardmoney',
				allowBlank : false,
				maxLength : 100,
				anchor : '100%',
				listeners : {
					blur : function(field, e) {
						if(Ext.getCmp("fengcuscardstop").getValue()<Ext.getCmp("fengcuscardmoney").getValue()){
							alert('不能超过剩余停用天数！');
							Ext.getCmp("fengcuscardmoney").setValue("");
							return;
						}
						var dtend = Ext.Date.add(new Date(Ext.getCmp("fengcuscardend").getValue()), Ext.Date.DAY, Ext.getCmp("fengcuscardmoney").getValue());
						Ext.getCmp("fengcuscardend").setValue(dtend);
						Ext.getCmp("fengcuscardstop").setValue(Ext.getCmp("fengcuscardstop").getValue()-Ext.getCmp("fengcuscardmoney").getValue());
					}
				}
			} ]
		},{
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'datefield',
				fieldLabel : '有效期开始',
				id : 'fengcuscardbegin',
				name : 'cuscardbegin',
				format : 'Y-m-d',
				editable : false,
				maxLength : 100,
				anchor : '95%'
			},{
				xtype : 'datefield',
				fieldLabel : '有效期结束',
				id : 'fengcuscardend',
				name : 'cuscardend',
				format : 'Y-m-d',
				editable : false,
				maxLength : 100,
				anchor : '95%'
			},{
				xtype : 'numberfield',
				fieldLabel : '剩余停用天数',
				id : 'fengcuscardstop',
				name : 'cuscardstop',
				editable : false,
				maxLength : 100,
				anchor : '95%'
			} ]

		},{
				xtype : 'textfield',
				name : 'cuscardid',
				hidden : true
		}
		,{
			xtype : 'hidden',
			name : 'cuscardno'
		}
		,{
			xtype : 'hidden',
			name : 'cuscarddetail'
		}
		,{
			xtype : 'hidden',
			name : 'cuscardtypeclass'
		}
		,{
			xtype : 'hidden',
			name : 'cuscardupdwhen'
		}
		,{
			xtype : 'hidden',
			name : 'cuscardcustomer'
		}
		,{
			xtype : 'hidden',
			name : 'cuscardstadium'
		}
		]
	});
	var Cuscardbbar = pagesizebar(Cuscardstore);//定义分页
	var Cuscardgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Cuscardtitle,
		store : Cuscardstore,
		bbar : Cuscardbbar,
	    selModel: {
	        type: 'checkboxmodel'
	    },
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : 'ID',
			dataIndex : 'cuscardid',
			hidden : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '会员ID',
			dataIndex : 'cuscardcustomer',
			hidden : true,  
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
			header : '卡种',
			dataIndex : 'cuscardtypename',
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
			header : '联系方式',
			dataIndex : 'customerphone',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '有效期开始',
			dataIndex : 'cuscardbegin',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '有效期结束',
			dataIndex : 'cuscardend',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '场馆',
			dataIndex : 'cuscardstadium',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '场次',
			dataIndex : 'cuscardchangci',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '分类',
			dataIndex : 'cuscardtypeclass',
			hidden : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '有效期',
			dataIndex : 'cuscardday',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '价格',
			dataIndex : 'cuscardprice',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '抵扣',
			dataIndex : 'cuscarddikou',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '售价',
			dataIndex : 'cuscardmoney',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '停用期限',
			dataIndex : 'cuscardstop',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '停用价格',
			dataIndex : 'cuscardstopmoney',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '卡种次数',
			dataIndex : 'cuscardnums',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '余次',
			dataIndex : 'cuscardtimes',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '积分',
			dataIndex : 'cuscardpoint',
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
		, {
			header : '项目',
			dataIndex : 'cuscardproject',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '状态',
			dataIndex : 'cuscardstatue',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建时间',
			dataIndex : 'cuscardinswhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建人',
			dataIndex : 'cuscardinswho',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '手环号',
			dataIndex : 'cuscardupdwhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
//		, {
//			header : '更新人',
//			dataIndex : 'cuscardupdwho',
//			sortable : true,  
//			editor: {
//                xtype: 'textfield'
//            }
//		}
		],
		tbar : [{
					text :"操作查询",
					handler : function() {
						var selections = Cuscardgrid.getSelection();
						if (selections.length != 1) {
							Ext.Msg.alert('提示', '请选择一条数据！', function() {
							});
							return;
						}
						getnotes(selections[0].data["cuscardno"]);
					}
			},'-',{
			text : "开卡",
			iconCls : 'edit',
			handler : function() {
				var selections = Cuscardgrid.getSelection();
				if (selections.length != 1) {
					Ext.Msg.alert('提示', '请选择一条要开卡的记录！', function() {
					});
					return;
				}
				var cuscardbegin = getstringdate();
				var dtend = Ext.Date.add(new Date(), Ext.Date.DAY, selections[0].data["cuscardday"]);
				var cuscardend = getstringdate(dtend);
				Ext.Ajax.request({
					url : basePath + "CuscardService.do" + "?method=ckaika",
					method : 'POST',
					params : {
						json : "[{'cuscardstatue':'启用','cuscardbegin':'"+cuscardbegin + "','cuscardend':'"+cuscardend
							+"','cuscardid':'"+selections[0].data["cuscardid"]+"','cuscarddetail':'"+selections[0].data["cuscarddetail"]
							+"','cuscardtypeclass':'"+selections[0].data["cuscardtypeclass"]+"','cuscardupdwhen':'"+selections[0].data["cuscardupdwhen"]
							+"','cuscardno':'"+selections[0].data["cuscardno"]+"'}]"
					},
					success : function(response) {
						var resp = Ext.decode(response.responseText); 
						Ext.Msg.alert('提示', resp.msg, function(){
//							if("时间卡"==selections[0].data["cuscardtypeclass"]){
//								var mcuscardbegin = cuscardbegin.replace(/-/g,"");
//								var mcuscardend = cuscardend.replace(/-/g,"");
//								var zhajicard;
//								zhajicard.UID = cuscardno;
//								zhajicard.CARD = cuscardno;
//								zhajicard.CARD_XTD = cuscardno;
//								zhajicard.EXPIRE_FROM = mcuscardbegin;
//								zhajicard.EXPIRE_TO = mcuscardend;
//								zhajiall(zhajicard);
//							}
							Cuscardstore.reload();
						});
					},
					failure : function(response) {
						Ext.Msg.alert('提示', '网络出现问题，请稍后再试');
					}
				});
			}
		},'-',{
			text : "过户",
			iconCls : 'edit',
			handler : function() {
				var selections = Cuscardgrid.getSelection();
				if (selections.length != 1) {
					Ext.Msg.alert('提示', '请选择一条要过户的记录！', function() {
					});
					return;
				}
				selectCustomer(selections[0]);
			}
		},'-',{
			text : "换卡",
			iconCls : 'edit',
			handler : function() {
				var selections = Cuscardgrid.getSelection();
				if (selections.length != 1) {
					Ext.Msg.alert('提示', '请选择一条要换卡的记录！', function() {
					});
					return;
				}
				createTextWindow(basePath + "CuscardService.do" + "?method=change", "换卡", CuscardchangedataForm, Cuscardstore);
				CuscardchangedataForm.form.loadRecord(selections[0]);
			}
		},'-',{
			text : "续卡",
			iconCls : 'edit',
			handler : function() {
				var selections = Cuscardgrid.getSelection();
				if (selections.length != 1) {
					Ext.Msg.alert('提示', '请选择一条要续卡的记录！', function() {
					});
					return;
				}
				selections[0].data["cuscardtimesnew"] = parseInt(selections[0].data["cuscardtimes"])+parseInt(selections[0].data["cuscardnums"]);
				var dtend = Ext.Date.add(new Date(selections[0].data["cuscardend"]), Ext.Date.DAY, selections[0].data["cuscardday"]);
				selections[0].data["cuscardendnew"] = getstringdate(dtend);
				createTextWindow(basePath + "CuscardService.do?method=ccontinue&huodong="+window.localStorage.getItem("huodong"), "续卡", CuscardcontinuedataForm, Cuscardstore);
				CuscardcontinuedataForm.form.loadRecord(selections[0]);
			}
		},'-',{
			text : "封卡",
			iconCls : 'edit',
			handler : function() {
				var selections = Cuscardgrid.getSelection();
				if (selections.length != 1) {
					Ext.Msg.alert('提示', '请选择一条要续卡的记录！', function() {
					});
					return;
				}
				selections[0].data["cuscardmoney"] = 0;
				createTextWindow(basePath + "CuscardService.do?method=cfeng", "封卡", CuscardfengdataForm, Cuscardstore);
				CuscardfengdataForm.form.loadRecord(selections[0]);
			}
		},'-',{
			text : "掌静脉",
			iconCls : 'add',
			handler : function() {
				var selections = Cuscardgrid.getSelection();
				if (selections.length != 1) {
					Ext.Msg.alert('提示', '请选择一条记录！', function() {
					});
					return;
				}
				var uid = selections[0].data['cuscardno'];
				if(uid.length>6) uid = uid.substring(1);
				window.open("http://222.184.253.71:8081/zjm.php?uid="+uid);
			}
		},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "新增",
				iconCls : 'add',
				handler : function() {
					CuscarddataForm.form.reset();
					Ext.getCmp("Cuscardcuscardid").setEditable (true);
					createTextWindow(basePath + Cuscardaction + "?method=insAll", "新增", CuscarddataForm, Cuscardstore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Cuscardgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Cuscardaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Cuscardgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					CuscarddataForm.form.reset();
					Ext.getCmp("Cuscardcuscardid").setEditable (false);
					createTextWindow(basePath + Cuscardaction + "?method=updAll", "修改", CuscarddataForm, Cuscardstore);
					CuscarddataForm.form.loadRecord(selections[0]);
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
	        					var selections = Cuscardgrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Cuscardaction + "?method=delAll",selections,Cuscardstore,Cuscardkeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Cuscardaction + "?method=impAll","导入",Cuscardstore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Cuscardaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryCuscardaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Cuscardgrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Cuscardkeycolumn.length;i++){
	        						fid += selections[0].data[Cuscardkeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Cuscardclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Cuscardcuscardid").setEditable (true);
    							createQueryWindow("筛选", CuscarddataForm, Cuscardstore,Ext.getCmp("queryCuscardaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryCuscardaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Cuscardstore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryCuscardaction").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Cuscardstore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryCuscardaction").getValue()
							}
					});
				}
			}
		]
	});
	Cuscardgrid.region = 'center';
	Cuscardstore.on("beforeload",function(){ 
		Cuscardstore.getProxy().extraParams = {
				json : queryjson,
				query : Ext.getCmp("queryCuscardaction").getValue()
		}; 
	});
	Cuscardstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Cuscardgrid ]
	});
})
