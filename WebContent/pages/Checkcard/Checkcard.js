Ext.onReady(function() {
	var Ccourseclassify = "会员检票";
	var Ccoursetitle = "当前位置:业务管理》" + Ccourseclassify;
	var Customercuscardviewaction = "CuscardviewService.do";
	var Customercuscardviewfields = ['cuscardid'
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
	    ,'customerid' 
	    ,'customerstadium' 
	    ,'openid' 
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
	var Customercuscardviewkeycolumn = [ 'cuscardid' ];// 主键
	var Customercuscardviewstore = dataStore(Customercuscardviewfields, basePath + Customercuscardviewaction + "?method=selAll");// 定义Customercuscardviewstore
	var CustomercuscardviewdataForm = new Ext.form.FormPanel({// 定义新增和修改的FormPanel
		id:'CustomercuscardviewdataForm',
		title:Ccoursetitle,
		bodyStyle:'padding:50px;',
		labelAlign : 'right',
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
			} ]
		}
		, {
			columnWidth : .3,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡号',
				id : 'cuscardno',
				name : 'cuscardno',
				allowBlank : false,
				maxLength : 100,
				anchor : '100%',
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Customercuscardviewstore.load({
								params : {
									wheresql : "cuscardno like '%"+field.getValue()+"%'"
								},
								callback : formloadRecord
							});
						}
					},
					focus : function(field, e) {
						timer = setInterval(myrefresh,2000); //指定2秒刷新一次
					},
					blur : function(field, e) {
						clearInterval(timer);
					}
				}
			},{
				xtype : 'textfield',
				fieldLabel : '证件号码',
				id : 'customercdcard',
				name : 'customercdcard',
				maxLength : 100,
				readOnly:true,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '生日',
				id : 'customerbirthday',
				name : 'customerbirthday',
				maxLength : 100,
				readOnly:true,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '入会途径',
				id : 'customerhow',
				name : 'customerhow',
				maxLength : 100,
				readOnly:true,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '会籍管家',
				id : 'customeremp',
				name : 'customeremp',
				maxLength : 100,
				readOnly:true,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '有效期开始',
				id : 'cuscardbegin',
				name : 'cuscardbegin',
				readOnly:true,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '分类',
				id : 'cuscardtype',
				name : 'cuscardtype',
				maxLength : 100,
				readOnly:true,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '卡余次',
				id : 'cuscardtimes',
				name : 'cuscardtimes',
				readOnly:true,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '场次',
				id : 'cuscardchangci',
				name : 'cuscardchangci',
				readOnly:true,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'customerstatue',
				name : 'customerstatue',
				maxLength : 100,
				readOnly:true,
				anchor : '100%'
			} ]
		}
		, {
			columnWidth : .3,
			layout : 'form',
			items : [{
				xtype : 'textfield',
				fieldLabel : '会员姓名',
				id : 'customername',
				name : 'customername',
				maxLength : 100,
				anchor : '100%',
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Customercuscardviewstore.load({
								params : {
									wheresql : "customername like '%"+field.getValue()+"%'"
								},
								callback : formloadRecord
							});
						}
					}
				}
			},{
				xtype : 'textfield',
				fieldLabel : '性别',
				id : 'customersex',
				name : 'customersex',
				readOnly:true,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '公司',
				id : 'customercompany',
				name : 'customercompany',
				readOnly:true,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '手机',
				id : 'customerphone',
				name : 'customerphone',
				maxLength : 100,
				readOnly:true,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '邮箱',
				id : 'customeremail',
				name : 'customeremail',
				maxLength : 100,
				readOnly:true,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '入会时间',
				id : 'customerinswhen',
				name : 'customerinswhen',
				maxLength : 100,
				readOnly:true,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '有效期结束',
				id : 'cuscardend',
				name : 'cuscardend',
				maxLength : 100,
				readOnly:true,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '卡种',
				id : 'cuscardtypename',
				name : 'cuscardtypename',
				maxLength : 100,
				readOnly:true,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '售价',
				id : 'cuscardmoney',
				name : 'cuscardmoney',
				maxLength : 100,
				readOnly:true,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '卡积分',
				id : 'cuscardpoint',
				name : 'cuscardpoint',
				readOnly:true,
				maxLength : 100,
				anchor : '100%'
			} ]
		}
		, {
			columnWidth : .3,
			layout : 'form',
			items : [ {
				xtype : 'box',
				fieldLabel : '照片',
				height : 200,
				id : 'customerimage',
				name : 'customerimage',
				autoEl : {  
	                tag : 'img'
	            },
				anchor : '100%'
			}]
		}
		],
		tbar : [{
			text : "进场刷卡",
			iconCls : 'add',
			handler : function() {
				insNotesupdCuscard();
			}
		}
	]
	});
	function insNotesupdCuscard() {
		if(Ext.getCmp("cuscardtimes").getValue()==0){
			Ext.Msg.alert('提示', '剩余卡次为0', function() {
			});
			return;
		}
		if (CustomercuscardviewdataForm.form.isValid()) {
			Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要要进场刷卡？', function(btn, text) {
				if (btn == 'yes') {
					var json = "[" + Ext.encode(CustomercuscardviewdataForm.form.getFieldValues(false)) + "]";
					CustomercuscardviewdataForm.form.submit({
						url : basePath + "CuscardService.do?method=insNotesupdCuscard",
						waitTitle : '提示',
						params : {//改
							json : json
						},
						success : function(form, action) {
							Ext.Msg.alert('提示', action.result.msg,function(){
								CustomercuscardviewdataForm.form.reset();
							});
						},
						failure : function(form, action) {
							Ext.Msg.alert('提示', '网络出现问题，请稍后再试');
						},
						waitMsg : '正在处理数据,请稍候...'
					});
				}
			})
		} else {
	        Ext.Msg.alert('提示', '请正确填写表单!');
	    }
	}
	function formloadRecord() {
		CustomercuscardviewdataForm.form.reset();
		Customercuscardviewstore.each(function(record) {
			CustomercuscardviewdataForm.form.loadRecord(record);
			Ext.getCmp("customerimage").getEl().dom.src = "../../"+record.data["customerimage"];
		    return;
		});
	}
	CustomercuscardviewdataForm.form.isValid();
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'fit',
		bodyStyle : 'padding:0px;',
		items : [ CustomercuscardviewdataForm ]
	});
	
	function myrefreshcallback() {
		CustomercuscardviewdataForm.form.reset();
		Customercuscardviewstore.each(function(record) {
			CustomercuscardviewdataForm.form.loadRecord(record);
			Ext.getCmp("customerimage").getEl().dom.src = "../../"+record.data["customerimage"];
			//进场刷卡
			insNotesupdCuscard();
		    return;
		});
		
	}
	function myrefresh(){ 
		if(!isnull(Ext.getCmp("cuscardno").getValue()))
		{
			Customercuscardviewstore.load({
				params : {
					wheresql : "cuscardno like '%"+Ext.getCmp("cuscardno").getValue()+"%'"
				},
				callback : myrefreshcallback
			});
		}
	}
})
