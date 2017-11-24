function insappiont(mycourse) {
	var Appiontaction = "AppiontService.do";
	var Appiontfields = ['appointid'
	        			    ,'appointcustomer' 
	        			    ,'appointcard' 
	        			    ,'appointstadium' 
	        			    ,'appointproject' 
	        			    ,'appointplace' 
	        			    ,'appointplacename' 
	        			    ,'appointcourse' 
	        			    ,'appointcoursename' 
	        			    ,'appointcoach' 
	        			    ,'appointcoachname' 
	        			    ,'appointdate' 
	        			    ,'appointbegin' 
	        			    ,'appointend' 
	        			    ,'appointdetail' 
	        			    ,'appointtype' 
	        			    ,'appointstatue' 
	        			    ,'appointinswhen' 
	        			    ,'appointupdwhen' 
	        			      ];// 全部字段
	var Appiontkeycolumn = [ 'appointid' ];// 主键
	var Appiontstore = dataStore(Appiontfields, basePath + Appiontaction + "?method=selQuery");// 定义Appiontstore
	var AppiontdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'AppiontdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [{
			columnWidth : .5,
			hidden : true,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '会员',
				id : 'Appiontappointcustomer',
				name : 'appointcustomer',
				value : mycourse.data['cuscardcustomer']
			} ]
		},
		{
			columnWidth : .5,
			layout : 'form',
			hidden : true,
			items : [ {
				xtype : 'textfield',
				fieldLabel : '会员卡',
				id : 'Appiontappointcard',
				name : 'appointcard',
				value : mycourse.data['cuscardid']
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'combo',
				allowBlank : false,
				emptyText : '请选择',
				store : stadiumStore,
				mode : 'local',
				displayField : 'name',
				valueField : 'name',
				hiddenName : 'name',
				triggerAction : 'all',
				fieldLabel : '场馆',
				id : 'Appiontappointstadium',
				name : 'appointstadium',
				value : mycourse.data['cuscardstadium']
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				allowBlank : false,
				fieldLabel : '项目',
				id : 'Appiontappointproject',
				name : 'appointproject',
				value : mycourse.data['cuscardproject']
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'datefield',
				allowBlank : false,
				fieldLabel : '预约日期',
				minValue: new Date(),
				format : 'Y-m-d',
				id : 'Appiontappointdate',
				name : 'appointdate'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				allowBlank : false,
				fieldLabel : '位置',
				id : 'Appiontappointplace',
				name : 'appointplace',
				triggers: {
			        bar: {
			            handler: function() {
			            	selectPlace(mycourse.data['cuscardproject']);
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
				fieldLabel : '场地',
				id : 'Appiontappointplacename',
				name : 'appointplacename'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '时间段',
				id : 'Appiontappointdetail',
				name : 'appointdetail'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '类型',
				allowBlank : false,
				id : 'Appiontappointtype',
				name : 'appointtype',
				value : '球类'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建时间',
				id : 'Appiontappointinswhen',
				name : 'appointinswhen',
				value : getdatetime()
			} ]
		}
		, {
			columnWidth : .5,
			hidden : true,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'Appiontappointstatue',
				name : 'appointstatue',
				value : '已预约'
			} ]
		}
		]
	});
	var dataWindow = new Ext.Window({
		layout : 'fit', // 设置窗口布局模式
		width : Ext.os.deviceType === 'Phone' ? '100%' : 750, // 窗口宽度
		modal : true,
//		closeAction: 'hide',
		closable : true, // 是否可关闭
		collapsible : true, // 是否可收缩
		maximizable : true, // 设置是否可以最大化
		border : false, // 边框线设置
		animateTarget : Ext.getBody(),
		pageY : 0, // 页面定位Y坐标
		pageX : Ext.os.deviceType === 'Phone' ? 0 : document.body.clientWidth / 2 - 720 / 2, // 页面定位X坐标
		items : AppiontdataForm, // 嵌入的表单面板
		buttons : [
				{
					text : '提交',
					iconCls : 'ok',
					handler : function() {
						if (AppiontdataForm.form.isValid()) {
							var json = "[" + Ext.encode(AppiontdataForm.form.getValues(false)) + "]";
							AppiontdataForm.form.submit({
								url : basePath + Appiontaction + "?method=insAll",
								waitTitle : '提示',
								params : {//改
									json : json
								},
								success : function(form, action) {
									Ext.Msg.alert('提示', action.result.msg,function(){
										dataWindow.close();
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
				}, {
					text : '关闭',
					iconCls : 'close',
					handler : function() {
						dataWindow.close();
					}
				}]
	});
	dataWindow.removeAll(false);
	dataWindow.items.add(AppiontdataForm);
	dataWindow.show();
}
