Ext.onReady(function() {
	var Notesmoneysclassify = "notesmoneys";
	var Notesmoneystitle = "当前位置:业务管理》" + Notesmoneysclassify;
	var Notesmoneysaction = "NotesmoneysService.do";
	var Notesmoneysfields = ['notesid'
	        			    ,'notescustomer' 
	        			    ,'notescard' 
	        			    ,'notesstadium' 
	        			    ,'notescoach' 
	        			    ,'notescourse' 
	        			    ,{name: 'notesmoney', type: 'float'}
	        			    ,'notesname' 
	        			    ,'notesdetail' 
	        			    ,'notestype' 
	        			    ,'notesinswhen' 
	        			    ,'notesinswho' 
	        			      ];// 全部字段
	var Notesmoneyskeycolumn = [ 'notesid' ];// 主键
	var Notesmoneysstore = dataStore(Notesmoneysfields, basePath + Notesmoneysaction + "?method=selBi");// 定义Notesmoneysstore
	var Notesmoneysgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		features: [{
	        ftype: 'summary'
	    }],
		store : Notesmoneysstore,
		columns : [{xtype: 'rownumberer',width:50}, 
		{
			header : '场馆',
			dataIndex : 'notesstadium',
			sortable : true,
			width:250
		}
		, {
			header : '分类',
			dataIndex : 'notestype',
			sortable : true,
			width:250
		}
		, {
			header : '金额',
			dataIndex : 'notesmoney',
			summaryType: 'sum',
            field: {
                xtype: 'numberfield'
            },
			width:250
		}
		],
		tbar : [{
			xtype : 'combo',
			emptyText : '请选择',
			store : stadiumStore,
			mode : 'local',
			displayField : 'name',
			valueField : 'name',
			hiddenName : 'name',
			triggerAction : 'all',
			fieldLabel : '场馆',
			id : 'stadium',
			name : 'stadium'
		},{
			xtype : 'datefield',
			fieldLabel : '有效期开始',
			id : 'begin',
			name : 'begin',
			format : 'Y-m-d',
			maxLength : 100,
			anchor : '100%'
		},{
			xtype : 'datefield',
			fieldLabel : '有效期结束',
			id : 'end',
			name : 'end',
			format : 'Y-m-d',
			maxLength : 100,
			anchor : '100%'
		},{
			text : "查询",
			xtype: 'button',
			handler : function() {
				var wheresql = " 1=1 ";
				
				if(Ext.getCmp("stadium").getValue()) wheresql += " and notesstadium='"+Ext.getCmp("stadium").getValue()+"'"
				if(Ext.getCmp("begin").getValue()) wheresql += " and notesinswhen>='"+Ext.Date.format(new Date(Ext.getCmp("begin").getValue()),'Y-m-d')+"'"
				if(Ext.getCmp("end").getValue()) wheresql += " and notesinswhen<='"+Ext.Date.format(new Date(Ext.getCmp("end").getValue()),'Y-m-d')+"'"
				Notesmoneysstore.load({
						params : {
							wheresql : wheresql
						}
				});
			}
		}
	]
	});
	Notesmoneysgrid.region = 'center';
	Notesmoneysstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Notesmoneysgrid ]
	});
})
