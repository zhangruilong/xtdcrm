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
			layout : 'form',
			hidden :true,
			items : [ {
				xtype : 'textfield',
				fieldLabel : '会员',
				id : 'Appiontappointcustomer',
				name : 'appointcustomer',
				value : mycourse.data['mycoursecustomer']
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
				value : mycourse.data['mycoursestadium']
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
				value : mycourse.data['mycourseproject']
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				allowBlank : false,
				fieldLabel : '场地',
				id : 'Appiontappointplacename',
				name : 'appointplacename'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			hidden :true,
			items : [ {
				xtype : 'textfield',
				fieldLabel : '课程',
				id : 'Appiontappointcourse',
				name : 'appointcourse',
				value : mycourse.data['mycourseid']
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				allowBlank : false,
				fieldLabel : '课程',
				id : 'Appiontappointcoursename',
				name : 'appointcoursename',
				value : mycourse.data['mycoursename']
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			hidden :true,
			items : [ {
				xtype : 'textfield',
				fieldLabel : '教练',
				id : 'Appiontappointcoach',
				name : 'appointcoach',
				value : mycourse.data['mycoursecoach']
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				allowBlank : false,
				fieldLabel : '教练',
				id : 'Appiontappointcoachname',
				name : 'appointcoachname',
				value : mycourse.data['mycoursecoachname']
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
				xtype : 'timefield',
				fieldLabel : '开始时间',
				allowBlank : false,
				id : 'Appiontappointbegin',
				name : 'appointbegin'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'timefield',
				fieldLabel : '结束时间',
				allowBlank : false,
				id : 'Appiontappointend',
				name : 'appointend'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '备注',
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
				value : '私教课'
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
				fieldLabel : '创建时间',
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
