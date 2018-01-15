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
				value : currentuser.roledetail,
				hidden : true
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [{
				xtype : 'textfield',
				fieldLabel : '卡号',
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
				readOnly:true,
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
				id : 'cuscardid',
				name : 'cuscardid',
				maxLength : 100,
				anchor : '100%',
				listeners : {
					blur : function(field, e) {
						Ext.Ajax.request({
							url : basePath + "HuodongService.do?method=selAll",
							method : 'POST',
							params : {
								wheresql : "huodongcode='"+Ext.getCmp("cuscardid").getValue()
								+"' and huodongcardtypename='"+Ext.getCmp("cuscardtypename").getValue()
								+"' and huodongstatue is null"
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
				readOnly:true,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'datefield',
				fieldLabel : '有效期开始',
				id : 'cuscardbegin',
				name : 'cuscardbegin',
				format : 'Y-m-d',
				maxLength : 100,
				hidden : true,
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
				maxLength : 100,
				hidden : true,
				anchor : '100%'
			},{
				xtype : 'numberfield',
				fieldLabel : '卡余次',
				id : 'cuscardtimes',
				readOnly:true,
				name : 'cuscardtimes',
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'numberfield',
				fieldLabel : '卡种次数',
				id : 'cuscardnums',
				hidden:true,
				name : 'cuscardnums',
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '场次',
				id : 'cuscardchangci',
				readOnly:true,
				name : 'cuscardchangci',
				allowBlank : false,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'numberfield',
				fieldLabel : '卡积分',
				id : 'cuscardint',
				name : 'cuscardint',
				hidden : false,
				value : 0,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '场馆',
				id : 'cuscardstadium',
				name : 'cuscardstadium',
				maxLength : 100,
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
				xtype : 'combo',
				emptyText : '请选择',
				store : projectStore,
				mode : 'local',
				displayField : 'name',
				valueField : 'name',
				hiddenName : 'name',
				triggerAction : 'all',
				fieldLabel : '项目',
				id : 'cuscardproject',
				name : 'cuscardproject',
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'hidden',
				fieldLabel : '备注',
				id : 'cuscarddetail',
				name : 'cuscarddetail',
				maxLength : 100,
				value : currentuser.roledetail,
				anchor : '100%'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '会员姓名',
				id : 'customername',
				name : 'customername',
				allowBlank : false,
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
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'numberfield',
				fieldLabel : '年龄',
				id : 'customerage',
				name : 'customerage',
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '手机',
				id : 'customerphone',
				name : 'customerphone',
				maxLength : 100,
				allowBlank : false,
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
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'filefield',
				hidden : true,
				fieldLabel : '照片',
				id : 'customerimage',
				name : 'customerimage',
				anchor : '95%'
			},{
				xtype : 'textfield',
				fieldLabel : '证件号码',
				id : 'customercdcard',
				name : 'customercdcard',
				maxLength : 100,
				anchor : '100%',
				listeners : {
					focus : function(field, e) {
						timer = setInterval(myrefresh,5000); //指定5秒刷新一次
					},
					blur : function(field, e) {
						clearInterval(timer);
					}
				}
			},{
				xtype : 'datefield',
				fieldLabel : '生日',
				id : 'customerbirthday',
				name : 'customerbirthday',
				maxLength : 100,
				format : 'Y-m-d',
				anchor : '100%'
			},{
				xtype : 'combo',
				emptyText : '请选择',
				store : ruhuiStore,
				mode : 'local',
				displayField : 'name',
				valueField : 'name',
				hiddenName : 'name',
				triggerAction : 'all',
				fieldLabel : '入会途径',
				id : 'customerhow',
				name : 'customerhow',
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '会籍管家',
				id : 'customeremp',
				name : 'customeremp',
				value : currentuser.username,
				maxLength : 100,
				anchor : '100%',
				triggers: {
			        bar: {
			            handler: function() {
			            	selectemp();
			            }
			        }
				}
			},{
				xtype : 'textfield',
				fieldLabel : '全民健身卡',
				id : 'customerhome',
				name : 'customerhome',
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
				value : "停用",
				hidden:true,
				anchor : '100%'
			}]
		}
		],
		tbar : [{
			text : "确认发卡",
			iconCls : 'add',
			handler : function() {
				var num = GetRandomNum(1000000000,4294967294);//闸机的客户号4字节无符号整形
				Ext.getCmp("customercode").setValue(num);
				if (CustomercuscardviewdataForm.form.isValid()) {
					var dtbegin = Ext.Date.add(new Date(), Ext.Date.DAY, 180);
					Ext.getCmp("cuscardbegin").setValue(dtbegin);
					var dtend = Ext.Date.add(new Date(Ext.getCmp("cuscardbegin").getValue()), Ext.Date.DAY, Ext.getCmp("cuscardday").getValue());
					Ext.getCmp("cuscardend").setValue(dtend);
					var json = "[" + Ext.encode(CustomercuscardviewdataForm.form.getValues(false)) + "]";
					CustomercuscardviewdataForm.form.submit({
						url : basePath + "CuscardService.do?method=insCuscardinsCustomer&json="+json,
						waitTitle : '提示',
						waitMsg : '正在处理数据,请稍候...',
						method : 'GET',
						params : {//改
							huodong : Ext.getCmp("cuscardid").getValue(),
							json : json
						},
						success : function(form, action) {
							Ext.Msg.alert('提示', action.result.msg,function(){
//								var zhajicard;
//								zhajicard.UID = num;
//								zhajicard.CARD = Ext.getCmp("cuscardno").getValue();
//								zhajicard.CARD_XTD = Ext.getCmp("cuscardno").getValue();
//								zhajicard.EXPIRE_FROM = Ext.getCmp("cuscardbegin").getValue();
//								zhajicard.EXPIRE_TO = Ext.getCmp("cuscardend").getValue();
//								zhajiall(zhajicard);
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
	function myrefresh(){ 
		IDinfo = ReadIDCardInfo.ReadIDCardInfo(port, baud, timeout, ifCreatePhoto);	
		if(IDinfo.length > 100)
		{
			var str = IDinfo.toString();
			var arr = str.split("|");
			var age = new Date().getFullYear() - arr[3].substr(0, 4);
			Ext.getCmp("customerage").setValue(age);
			Ext.getCmp("customername").setValue(arr[0]);
			Ext.getCmp("customersex").setValue(arr[1]);
			Ext.getCmp("customerbirthday").setValue(arr[3]);
			Ext.getCmp("customercdcard").setValue(arr[5]);
		}
	}
})
