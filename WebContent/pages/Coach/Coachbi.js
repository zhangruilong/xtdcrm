Ext.onReady(function() {
	var wheresqlplus = "";
	if("教练"==currentuser.rolename) wheresqlplus="mycoursecoachname='"+currentuser.username+"' and ";
	var Coachclassify = "coach";
	var Coachtitle = "当前位置:业务管理》" + Coachclassify;
	var Coachaction = "CoachService.do";
	var Coachfields = ['coachid'
	        			    ,'coachstadium' 
	        			    ,'coachcode' 
	        			    ,'coachname' 
	        			    ,'coachphone' 
	        			    ,'coachprice' 
	        			    ,'coachaddress' 
	        			    ,'coachsex' 
	        			    ,'coachage' 
	        			    ,'coachimage' 
	        			    ,'coachdetail' 
	        			    ,'coachstatue' 
	        			    ,'coachinswho' 
	        			    ,'coachinswhen' 
	        			      ];// 全部字段
	var Coachkeycolumn = [ 'coachid' ];// 主键
	var Coachstore = dataStore(Coachfields, basePath + Coachaction + "?method=selBi");// 定义Coachstore
	var Coachgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Coachtitle,
		store : Coachstore,
	    selModel: {
	        type: 'checkboxmodel'
	    },
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : '场馆',
			dataIndex : 'coachstadium',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}, 
		{// 改
			header : '教练',
			dataIndex : 'coachid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '客户数量',
			dataIndex : 'coachphone',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '私教课数量',
			dataIndex : 'coachcode',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '转化率',
			dataIndex : 'coachname',
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
				id : 'queryCoachaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					var wheresqlstadium = "";
					if(!isnull(Ext.getCmp("stadium").getValue()))
						wheresqlstadium = "mycoursestadium='"+Ext.getCmp("stadium").getValue()+"' and ";
					Coachstore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								wheresql : wheresqlplus+wheresqlstadium+" mycourseinswhen >= '"+Ext.util.Format.date(Ext.getCmp("cuscardbegin").getValue(), 'Y-m-d')
								+"' and mycourseinswhen <= '"+Ext.util.Format.date(Ext.getCmp("cuscardend").getValue(), 'Y-m-d')
								+"'",
								query : Ext.getCmp("queryCoachaction").getValue()
							}
					});
				}
			}
		]
	});
	Coachgrid.region = 'center';
	Coachstore.on("beforeload",function(){ 
		Coachstore.getProxy().extraParams = {
				json : queryjson,
				wheresql : wheresqlplus+" mycourseinswhen >= '"+Ext.util.Format.date(Ext.getCmp("cuscardbegin").getValue(), 'Y-m-d')
				+"' and mycourseinswhen <= '"+Ext.util.Format.date(Ext.getCmp("cuscardend").getValue(), 'Y-m-d')
				+"'",
				query : Ext.getCmp("queryCoachaction").getValue()
		}; 
	});
	Coachstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Coachgrid ]
	});
})
