Ext.onReady(function() {
	var wheresqlplus = "";
	if("会籍"==currentuser.rolename) wheresqlplus="customeremp='"+currentuser.username+"' and ";
	var Empclassify = "emp";
	var Emptitle = "当前位置:业务管理》" + Empclassify;
	var EmpService = "EmpService.do";
	var Empfields = ['empid'
	        			    ,'empstadium' 
	        			    ,'empcode' 
	        			    ,'empsysname' 
	        			    ,'empname' 
	        			    ,'empposition' 
	        			    ,'emppposition' 
	        			    ,'empage' 
	        			    ,'empsex' 
	        			    ,'empphone' 
	        			    ,'empemail' 
	        			    ,'empimage' 
	        			    ,'empdetail' 
	        			    ,'empstatue' 
	        			    ,'empinswhen' 
	        			    ,'empinswho' 
	        			      ];// 全部字段
	var Empkeycolumn = [ 'empid' ];// 主键
	var Empstore = dataStore(Empfields, basePath + EmpService + "?method=selBi");// 定义Empstore
	
	var Empgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Emptitle,
		store : Empstore,
	    selModel: {
	        type: 'checkboxmodel'
	    },
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : '场馆',
			dataIndex : 'empstadium',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}, 
		{// 改
			header : '会籍',
			dataIndex : 'empid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '录入客户',
			dataIndex : 'empphone',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '培训课',
			dataIndex : 'empcode',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '会员卡',
			dataIndex : 'empsysname',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '培训课转化率',
			dataIndex : 'empname',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '会员卡转化率',
			dataIndex : 'empposition',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		],
		tbar : [{
			xtype : 'combo',
			emptyText : '请选择场馆',
			store : stadiumStore,
			mode : 'local',
			displayField : 'name',
			valueField : 'name',
			hiddenName : 'name',
			triggerAction : 'all',
			id : 'stadium',
			name : 'stadium'
		},{
			xtype : 'datefield',
			fieldLabel : '开始日期',
			id : 'cuscardbegin',
			name : 'cuscardbegin',
			format : 'Y-m-d',
			value : new Date(),
			anchor : '100%'
		},{
			xtype : 'datefield',
			fieldLabel : '截止日期',
			id : 'cuscardend',
			name : 'cuscardend',
			format : 'Y-m-d',
			value : new Date(),
			anchor : '100%'
		},{
				xtype : 'textfield',
				id : 'queryEmpService',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					var wheresqlstadium = "";
					if(!isnull(Ext.getCmp("stadium").getValue()))
						wheresqlstadium = "customerstadium='"+Ext.getCmp("stadium").getValue()+"' and ";
					Empstore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								wheresql : wheresqlplus+wheresqlstadium+" customerinswhen >= '"+Ext.util.Format.date(Ext.getCmp("cuscardbegin").getValue(), 'Y-m-d')
										+"' and customerinswhen <= '"+Ext.util.Format.date(Ext.getCmp("cuscardend").getValue(), 'Y-m-d')
										+"'",
								query : Ext.getCmp("queryEmpService").getValue()
							}
					});
				}
			}
		]
	});
	Empgrid.region = 'center';
	Empstore.on("beforeload",function(){ 
		Empstore.getProxy().extraParams = {
				json : queryjson,
				wheresql : wheresqlplus+" customerinswhen >= '"+Ext.util.Format.date(Ext.getCmp("cuscardbegin").getValue(), 'Y-m-d')
				+"' and customerinswhen <= '"+Ext.util.Format.date(Ext.getCmp("cuscardend").getValue(), 'Y-m-d')
				+"'",
				query : Ext.getCmp("queryEmpService").getValue()
		}; 
	});
	Empstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Empgrid ]
	});
})
