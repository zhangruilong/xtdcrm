Ext.onReady(function() {
	var Appiontviewclassify = "appiontview";
	var Appiontviewtitle = "当前位置:业务管理》" + Appiontviewclassify;
	var Appiontviewaction = "AppiontviewService.do";
	var Appiontviewfields = ['appointid'
	        			    ,'appointcustomer' 
	        			    ,'appointcard' 
	        			    ,'appointstadium' 
	        			    ,'appointproject' 
	        			    ,'appointplace' 
	        			    ,'appointcourse' 
	        			    ,'appointcoursename' 
	        			    ,'appointdate' 
	        			    ,'appointbegin' 
	        			    ,'appointend' 
	        			    ,'appointdetail' 
	        			    ,'appointstatue' 
	        			    ,'appointinswhen' 
	        			    ,'customerid' 
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
	        			    ,'cuscardid' 
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
	        			    ,'customerstadium' 
	        			    ,'appointplacename' 
	        			    ,'appointcoach' 
	        			    ,'appointcoachname' 
	        			    ,'appointtype' 
	        			    ,'appointupdwhen' 
	        			    ,'customercode' 
	        			      ];// 全部字段
	var Appiontviewkeycolumn = [ 'appointid' ];// 主键
	var Appiontviewstore = dataStore(Appiontviewfields, basePath + Appiontviewaction + "?method=selQuery");// 定义Appiontviewstore
	var AppiontviewdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'AppiontviewdataForm',
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
				id : 'Appiontviewappointid',
				name : 'appointid'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '会员',
				id : 'Appiontviewappointcustomer',
				name : 'appointcustomer'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '会员卡',
				id : 'Appiontviewappointcard',
				name : 'appointcard'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场馆',
				id : 'Appiontviewappointstadium',
				name : 'appointstadium'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '项目',
				id : 'Appiontviewappointproject',
				name : 'appointproject'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场地',
				id : 'Appiontviewappointplace',
				name : 'appointplace'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '课程',
				id : 'Appiontviewappointcourse',
				name : 'appointcourse'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '',
				id : 'Appiontviewappointcoursename',
				name : 'appointcoursename'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '预约',
				id : 'Appiontviewappointdate',
				name : 'appointdate'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '开始时间',
				id : 'Appiontviewappointbegin',
				name : 'appointbegin'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '结束时间',
				id : 'Appiontviewappointend',
				name : 'appointend'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '备注',
				id : 'Appiontviewappointdetail',
				name : 'appointdetail'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'Appiontviewappointstatue',
				name : 'appointstatue'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建时间',
				id : 'Appiontviewappointinswhen',
				name : 'appointinswhen'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			hidden : true,
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Appiontviewcustomerid',
				name : 'customerid'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'OPENID',
				id : 'Appiontviewopenid',
				name : 'openid'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '姓名',
				id : 'Appiontviewcustomername',
				name : 'customername'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '性别',
				id : 'Appiontviewcustomersex',
				name : 'customersex'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '年龄',
				id : 'Appiontviewcustomerage',
				name : 'customerage'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '身份证',
				id : 'Appiontviewcustomercdcard',
				name : 'customercdcard'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '全民健身卡',
				id : 'Appiontviewcustomerhome',
				name : 'customerhome'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '单位',
				id : 'Appiontviewcustomercompany',
				name : 'customercompany'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '手机',
				id : 'Appiontviewcustomerphone',
				name : 'customerphone'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '生日',
				id : 'Appiontviewcustomerbirthday',
				name : 'customerbirthday'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '邮箱',
				id : 'Appiontviewcustomeremail',
				name : 'customeremail'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '入会途径',
				id : 'Appiontviewcustomerhow',
				name : 'customerhow'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '照片',
				id : 'Appiontviewcustomerimage',
				name : 'customerimage'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '会籍管家',
				id : 'Appiontviewcustomeremp',
				name : 'customeremp'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '备注',
				id : 'Appiontviewcustomerdetail',
				name : 'customerdetail'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'Appiontviewcustomerstatue',
				name : 'customerstatue'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建时间',
				id : 'Appiontviewcustomerinswhen',
				name : 'customerinswhen'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建人',
				id : 'Appiontviewcustomerinswho',
				name : 'customerinswho'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '更新时间',
				id : 'Appiontviewcustomerupdwhen',
				name : 'customerupdwhen'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '更新人',
				id : 'Appiontviewcustomerupdwho',
				name : 'customerupdwho'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			hidden : true,
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ID',
				id : 'Appiontviewcuscardid',
				name : 'cuscardid'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '会员ID',
				id : 'Appiontviewcuscardcustomer',
				name : 'cuscardcustomer'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场馆',
				id : 'Appiontviewcuscardstadium',
				name : 'cuscardstadium'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡号',
				id : 'Appiontviewcuscardno',
				name : 'cuscardno'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡种',
				id : 'Appiontviewcuscardtypename',
				name : 'cuscardtypename'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '分类',
				id : 'Appiontviewcuscardtypeclass',
				name : 'cuscardtypeclass'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '有效期',
				id : 'Appiontviewcuscardday',
				name : 'cuscardday'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '有效期开始',
				id : 'Appiontviewcuscardbegin',
				name : 'cuscardbegin'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '有效期结束',
				id : 'Appiontviewcuscardend',
				name : 'cuscardend'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '价格',
				id : 'Appiontviewcuscardprice',
				name : 'cuscardprice'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '抵扣',
				id : 'Appiontviewcuscarddikou',
				name : 'cuscarddikou'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '售价',
				id : 'Appiontviewcuscardmoney',
				name : 'cuscardmoney'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '停用期限',
				id : 'Appiontviewcuscardstop',
				name : 'cuscardstop'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '停用价格',
				id : 'Appiontviewcuscardstopmoney',
				name : 'cuscardstopmoney'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '余次',
				id : 'Appiontviewcuscardtimes',
				name : 'cuscardtimes'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '积分',
				id : 'Appiontviewcuscardpoint',
				name : 'cuscardpoint'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '备注',
				id : 'Appiontviewcuscarddetail',
				name : 'cuscarddetail'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场次',
				id : 'Appiontviewcuscardchangci',
				name : 'cuscardchangci'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '项目',
				id : 'Appiontviewcuscardproject',
				name : 'cuscardproject'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'Appiontviewcuscardstatue',
				name : 'cuscardstatue'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建时间',
				id : 'Appiontviewcuscardinswhen',
				name : 'cuscardinswhen'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建人',
				id : 'Appiontviewcuscardinswho',
				name : 'cuscardinswho'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '更新时间',
				id : 'Appiontviewcuscardupdwhen',
				name : 'cuscardupdwhen'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '更新人',
				id : 'Appiontviewcuscardupdwho',
				name : 'cuscardupdwho'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场馆',
				id : 'Appiontviewcustomerstadium',
				name : 'customerstadium'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场地',
				id : 'Appiontviewappointplacename',
				name : 'appointplacename'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '教练',
				id : 'Appiontviewappointcoach',
				name : 'appointcoach'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '教练',
				id : 'Appiontviewappointcoachname',
				name : 'appointcoachname'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '类型',
				id : 'Appiontviewappointtype',
				name : 'appointtype'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '更新时间',
				id : 'Appiontviewappointupdwhen',
				name : 'appointupdwhen'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Appiontviewcustomercode',
				name : 'customercode'
			} ]
		}
		]
	});
	
	var Appiontviewbbar = pagesizebar(Appiontviewstore);//定义分页
	var Appiontviewgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Appiontviewtitle,
		store : Appiontviewstore,
		bbar : Appiontviewbbar,
	    selModel: {
	        type: 'checkboxmodel'
	    },
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : 'ID',
			dataIndex : 'appointid',
			hidden : true,
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '会员',
			dataIndex : 'appointcustomer',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '会员卡',
			dataIndex : 'appointcard',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '场馆',
			dataIndex : 'appointstadium',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '项目',
			dataIndex : 'appointproject',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '场地',
			dataIndex : 'appointplace',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '课程',
			dataIndex : 'appointcourse',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '',
			dataIndex : 'appointcoursename',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '预约',
			dataIndex : 'appointdate',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '开始时间',
			dataIndex : 'appointbegin',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '结束时间',
			dataIndex : 'appointend',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '备注',
			dataIndex : 'appointdetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '状态',
			dataIndex : 'appointstatue',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建时间',
			dataIndex : 'appointinswhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : 'ID',
			hidden : true,
			dataIndex : 'customerid',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : 'OPENID',
			dataIndex : 'openid',
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
			header : '身份证',
			dataIndex : 'customercdcard',
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
			header : '单位',
			dataIndex : 'customercompany',
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
			header : '生日',
			dataIndex : 'customerbirthday',
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
			header : '入会途径',
			dataIndex : 'customerhow',
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
			header : '会籍管家',
			dataIndex : 'customeremp',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '备注',
			dataIndex : 'customerdetail',
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
		, {
			header : 'ID',
			hidden : true,
			dataIndex : 'cuscardid',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '会员ID',
			dataIndex : 'cuscardcustomer',
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
			header : '分类',
			dataIndex : 'cuscardtypeclass',
			sortable : true,  
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
			header : '场次',
			dataIndex : 'cuscardchangci',
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
			header : '更新时间',
			dataIndex : 'cuscardupdwhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '更新人',
			dataIndex : 'cuscardupdwho',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '场馆',
			dataIndex : 'customerstadium',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '场地',
			dataIndex : 'appointplacename',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '教练',
			dataIndex : 'appointcoach',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '教练',
			dataIndex : 'appointcoachname',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '类型',
			dataIndex : 'appointtype',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '更新时间',
			dataIndex : 'appointupdwhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '编码',
			dataIndex : 'customercode',
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
					AppiontviewdataForm.form.reset();
					Ext.getCmp("Appiontviewappointid").setEditable (true);
					createTextWindow(basePath + Appiontviewaction + "?method=insAll", "新增", AppiontviewdataForm, Appiontviewstore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Appiontviewgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Appiontviewaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Appiontviewgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					AppiontviewdataForm.form.reset();
					Ext.getCmp("Appiontviewappointid").setEditable (false);
					createTextWindow(basePath + Appiontviewaction + "?method=updAll", "修改", AppiontviewdataForm, Appiontviewstore);
					AppiontviewdataForm.form.loadRecord(selections[0]);
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
	        					var selections = Appiontviewgrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Appiontviewaction + "?method=delAll",selections,Appiontviewstore,Appiontviewkeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Appiontviewaction + "?method=impAll","导入",Appiontviewstore);
	        				}
	                    },{
	                    	text : "导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Appiontviewaction + "?method=expAll&json="+queryjson+"&query="+Ext.getCmp("queryAppiontviewaction").getValue(); 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Appiontviewgrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Appiontviewkeycolumn.length;i++){
	        						fid += selections[0].data[Appiontviewkeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Appiontviewclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Appiontviewappointid").setEditable (true);
    							createQueryWindow("筛选", AppiontviewdataForm, Appiontviewstore,Ext.getCmp("queryAppiontviewaction").getValue());
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryAppiontviewaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Appiontviewstore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryAppiontviewaction").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Appiontviewstore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryAppiontviewaction").getValue()
							}
					});
				}
			}
		]
	});
	Appiontviewgrid.region = 'center';
	Appiontviewstore.on("beforeload",function(){ 
		Appiontviewstore.getProxy().extraParams = {
				json : queryjson,
				query : Ext.getCmp("queryAppiontviewService").getValue()
		}; 
	});
	Appiontviewstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Appiontviewgrid ]
	});
})
