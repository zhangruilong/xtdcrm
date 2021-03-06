Ext.onReady(function() {
	var Ccourseclassify = "发卡操作";
	var Ccoursetitle = "当前位置:业务管理》" + Ccourseclassify;
	var Cardtypefields = ['cardtypeid'
	        			    ,'cardtypecode' 
	        			    ,'cardtypename' 
	        			    ,'cardtypeclass' 
	        			    ,'cardtypeday' 
	        			    ,'cardtypeprice' 
	        			    ,'cardtypemoney' 
	        			    ,'cardtypetimes' 
	        			    ,'cardtypedetail' 
	        			    ,'cardtypestatue' 
	        			      ];// 全部字段
	var Cardtypestore = dataStore(Cardtypefields, basePath + "CardtypeService.do?method=selAll");// 定义Cardtypestore
	Cardtypestore.load();
	
	var CustomercuscardviewdataForm = new Ext.form.FormPanel({// 定义新增和修改的FormPanel
		id:'CustomercuscardviewdataForm',
		title:Ccoursetitle,
		bodyStyle:'padding:20px;',
		labelAlign : 'right',
		fileUpload : true,
		frame : true,
		layout : 'column',
		items : [ {
			items : [ {
				xtype : 'textfield',
				id : 'cuscardid',
				name : 'cuscardid',
				hidden : true
			},{
				xtype : 'textfield',
				id : 'cuscardcustomer',
				name : 'cuscardcustomer',
				hidden : true
			},{
				xtype : 'textfield',
				id : 'customercode',
				name : 'customercode',
				hidden : true
			},{
				xtype : 'textfield',
				id : 'customerstadium',
				name : 'customerstadium',
				hidden : true
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [{
				xtype : 'textfield',
				fieldLabel : '起始卡号',
				id : 'cuscardno',
				name : 'cuscardno',
				allowBlank : false,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '卡种',
				id : 'cuscardtypename',
				name : 'cuscardtypename',
				allowBlank : false,
				editable : false,
				maxLength : 100,
				anchor : '100%',
				triggers: {
			        bar: {
			            cls: 'my-bar-trigger',
			            handler: function() {
			            	selectCardtype();
			            }
			        }
				}
			},{
				xtype : 'textfield',
				fieldLabel : '分类',
				id : 'cuscardtypeclass',
				name : 'cuscardtypeclass',
				maxLength : 100,
				hidden : true,
				readOnly:true,
				anchor : '100%'
			},{
				xtype : 'numberfield',
				fieldLabel : '原价',
				id : 'cuscardprice',
				name : 'cuscardprice',
				allowBlank : false,
				hidden : true,
				readOnly:true,
				maxLength : 100,
				anchor : '100%'
			}
			,{
				xtype : 'numberfield',
				fieldLabel : '折扣',
				id : 'cuscarddikou',
				name : 'cuscarddikou',
				allowBlank : false,
				hidden : true,
				value : 0,
				maxLength : 100,
				anchor : '100%',
				listeners : {
					blur : function(field, e) {
						Ext.getCmp("cuscardmoney").setValue(Ext.getCmp("cuscardprice").getValue()-Ext.getCmp("cuscarddikou").getValue());
					}
				}
			}
			,{
				xtype : 'numberfield',
				fieldLabel : '售价',
				id : 'cuscardmoney',
				name : 'cuscardmoney',
				hidden : true,
				allowBlank : false,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'datefield',
				fieldLabel : '有效期开始',
				id : 'cuscardbegin',
				name : 'cuscardbegin',
				format : 'Y-m-d',
				allowBlank : false,
				maxLength : 100,
				anchor : '100%',
				listeners : {
					blur : function(field, e) {
						var dt = Ext.Date.add(new Date(Ext.getCmp("cuscardbegin").getValue()), Ext.Date.DAY, Ext.getCmp("cuscardday").getValue());
						Ext.getCmp("cuscardend").setValue(dt);
					}
				}
			},{
				xtype : 'textfield',
				fieldLabel : '有效期',
				id : 'cuscardday',
				name : 'cuscardday',
				maxLength : 100,
				readOnly:true,
				anchor : '100%'
			},{
				xtype : 'datefield',
				fieldLabel : '有效期结束',
				id : 'cuscardend',
				name : 'cuscardend',
				format : 'Y-m-d',
				allowBlank : false,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'numberfield',
				fieldLabel : '卡余次',
				id : 'cuscardtimes',
				readOnly:true,
				name : 'cuscardtimes',
				allowBlank : false,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '场次',
				id : 'cuscardchangci',
				readOnly:true,
				name : 'cuscardchangci',
				allowBlank : false,
				hidden : true,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'numberfield',
				fieldLabel : '卡积分',
				id : 'cuscardint',
				name : 'cuscardint',
				allowBlank : false,
				value : 0,
				hidden : true,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '场馆',
				id : 'cuscardstadium',
				name : 'cuscardstadium',
				maxLength : 100,
				hidden : true,
				readOnly:true,
				anchor : '100%'
			},{
				xtype : 'numberfield',
				fieldLabel : '停用期限',
				id : 'cuscardstop',
				name : 'cuscardstop',
				hidden : true,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'numberfield',
				fieldLabel : '停用费用',
				id : 'cuscardstopmoney',
				name : 'cuscardstopmoney',
				hidden : true,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '项目',
				id : 'cuscardproject',
				name : 'cuscardproject',
				hidden : true,
				maxLength : 100,
				anchor : '100%'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [{
				xtype : 'numberfield',
				fieldLabel : '发卡数量',
				id : 'cuscardaddnum',
				name : 'cuscardaddnum',
				allowBlank : false,
				maxLength : 100,
				anchor : '100%'
			}, {
				xtype : 'textfield',
				fieldLabel : '会员姓名',
				id : 'customername',
				name : 'customername',
				allowBlank : false,
				hidden : true,
				value : '批量发卡',
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'combo',
				fieldLabel : '性别',
				id : 'customersex',
				name : 'customersex',
				emptyText : '请选择',
				store : sexStore,
				mode : 'local',
				displayField : 'name',
				valueField : 'name',
				hiddenName : 'customersex',
				triggerAction : 'all',
				hidden : true,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'numberfield',
				fieldLabel : '年龄',
				id : 'customerage',
				name : 'customerage',
				hidden : true,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '手机',
				id : 'customerphone',
				name : 'customerphone',
				maxLength : 100,
				hidden : true,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '公司',
				id : 'customercompany',
				name : 'customercompany',
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '邮箱',
				id : 'customeremail',
				name : 'customeremail',
				hidden : true,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'filefield',
				fieldLabel : '照片',
				id : 'customerimage',
				name : 'customerimage',
				hidden : true,
				anchor : '95%'
			},{
				xtype : 'textfield',
				fieldLabel : '证件号码',
				id : 'customercdcard',
				name : 'customercdcard',
				hidden : true,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'datefield',
				fieldLabel : '生日',
				id : 'customerbirthday',
				name : 'customerbirthday',
				maxLength : 100,
				hidden : true,
				format : 'Y-m-d',
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '入会途径',
				id : 'customerhow',
				name : 'customerhow',
				hidden : true,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '会籍管家',
				id : 'customeremp',
				name : 'customeremp',
				hidden : true,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '全民健身卡',
				id : 'customerhome',
				name : 'customerhome',
				hidden : true,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '备注',
				id : 'cuscarddetail',
				name : 'cuscarddetail',
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'datefield',
				fieldLabel : '创建时间',
				id : 'cuscardinswhen',
				name : 'cuscardinswhen',
				format : 'Y-m-d',
				value : new Date(),
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '创建人',
				id : 'cuscardinswho',
				name : 'cuscardinswho',
				value : currentuser.username,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'datefield',
				fieldLabel : '创建时间',
				id : 'customerinswhen',
				name : 'customerinswhen',
				format : 'Y-m-d',
				value : new Date(),
				hidden : true,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'hidden',
				fieldLabel : '创建人',
				id : 'customerinswho',
				name : 'customerinswho',
				value : currentuser.username,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '卡状态',
				id : 'cuscardstatue',
				name : 'cuscardstatue',
				maxLength : 100,
				value : "启用",
				readOnly:true,
				anchor : '100%'
			}]
		}
		],
		tbar : [{
			text : "确认发卡",
			iconCls : 'add',
			handler : function() {
				if (CustomercuscardviewdataForm.form.isValid()) {
					var json = "[" + Ext.encode(CustomercuscardviewdataForm.form.getValues(false)) + "]";
					CustomercuscardviewdataForm.form.submit({
						url : basePath + "CuscardService.do?method=insAllCuscard&cuscardaddnum="+Ext.getCmp("cuscardaddnum").getValue()+"&json="+json,
						waitTitle : '提示',
						waitMsg : '正在处理数据,请稍候...',
						method : 'GET',
						params : {//改
							cuscardaddnum : Ext.getCmp("cuscardaddnum").getValue(),
							json : json
						},
						success : function(form, action) {
							Ext.Msg.alert('提示', action.result.msg,function(){
							});
						},
						failure : function(form, action) {
							Ext.Msg.alert('提示', '网络出现问题，请稍后再试');
						},
						waitMsg : '正在处理数据,请稍候...'
					});
				} else {
			        Ext.Msg.alert('提示', '请正确填写表单!');
			    }
			}
		}
	]
	});
	CustomercuscardviewdataForm.form.isValid();
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'fit',
		bodyStyle : 'padding:0px;',
		items : [ CustomercuscardviewdataForm ]
	});
})
