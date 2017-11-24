function getnotes(dataid) {
	var Notesclassify = "notes";
	var Notestitle = "当前位置:业务管理》" + Notesclassify;
	var Notesaction = "NotesService.do";
	var Notesfields = ['notesid'
	        			    ,'notescustomer' 
	        			    ,'notescard' 
	        			    ,'notesstadium' 
	        			    ,'notesname' 
	        			    ,'notesdetail' 
	        			    ,'notestype' 
	        			    ,'notesinswhen' 
	        			    ,'notesinswho' 
	        			      ];// 全部字段
	var Noteskeycolumn = [ 'notesid' ];// 主键
	var Notesstore = dataStore(Notesfields, basePath + Notesaction + "?method=selQuery&wheresql=notescustomer='"+dataid+"'");// 定义Notesstore
	
	var Notesbbar = pagesizebar(Notesstore);//定义分页
	var Notesgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 84,
		width : '100%',
		//title : Notestitle,
		store : Notesstore,
		bbar : Notesbbar,
	    selModel: {
	        type: 'checkboxmodel'
	    },
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : 'ID',
			dataIndex : 'notesid',
			hidden : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
//		, {
//			header : '会员',
//			dataIndex : 'notescustomer',
//			sortable : true,  
//			editor: {
//                xtype: 'textfield'
//            }
//		}
		, {
			header : '会员卡',
			dataIndex : 'notescard',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '场馆',
			dataIndex : 'notesstadium',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '事件',
			dataIndex : 'notesname',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '详细',
			dataIndex : 'notesdetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '分类',
			dataIndex : 'notestype',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建时间',
			dataIndex : 'notesinswhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建人',
			dataIndex : 'notesinswho',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		],
		tbar : [{
				xtype : 'textfield',
				id : 'queryNotesaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Notesstore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryNotesaction").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Notesstore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryNotesaction").getValue()
							}
					});
				}
			}
		]
	});
	Notesgrid.region = 'center';
	Notesstore.on("beforeload",function(){ 
		Notesstore.getProxy().extraParams = {
				json : queryjson,
				query : Ext.getCmp("queryNotesaction").getValue()
		}; 
	});
	Notesstore.load();//加载数据
	
	var Notesmoneysaction = "NotesmoneysService.do";
	var Notesmoneysfields = ['notesid'
	        			    ,'notescustomer' 
	        			    ,'notescard' 
	        			    ,'notesstadium' 
	        			    ,'notescoach' 
	        			    ,'notescourse' 
	        			    ,'notesmoney' 
	        			    ,'notesname' 
	        			    ,'notesdetail' 
	        			    ,'notestype' 
	        			    ,'notesinswhen' 
	        			    ,'notesinswho' 
	        			      ];// 全部字段
	var Notesmoneysstore = dataStore(Notesmoneysfields, basePath + Notesmoneysaction + "?method=selQuery&wheresql=notescustomer='"+dataid+"' and notestype='卡操作'");// 定义Notesmoneysstore
	var Notesmoneysbbar = pagesizebar(Notesmoneysstore);//定义分页
	var Notesmoneysgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 84,
		width : '100%',
		//title : Notesmoneystitle,
		store : Notesmoneysstore,
		bbar : Notesmoneysbbar,
	    selModel: {
	        type: 'checkboxmodel'
	    },
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : 'ID',
			dataIndex : 'notesid',
			hidden : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
//		, {
//			header : '会员',
//			dataIndex : 'notescustomer',
//			sortable : true,  
//			editor: {
//                xtype: 'textfield'
//            }
//		}
		, {
			header : '会员卡',
			dataIndex : 'notescard',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '场馆',
			dataIndex : 'notesstadium',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '教练',
			dataIndex : 'notescoach',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '课程',
			dataIndex : 'notescourse',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '金额',
			dataIndex : 'notesmoney',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '事件',
			dataIndex : 'notesname',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '详细',
			dataIndex : 'notesdetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '分类',
			dataIndex : 'notestype',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建时间',
			dataIndex : 'notesinswhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建人',
			dataIndex : 'notesinswho',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		],
		tbar : [{
				xtype : 'textfield',
				id : 'queryNotesmoneysaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Notesmoneysstore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryNotesmoneysaction").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Notesmoneysstore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryNotesmoneysaction").getValue()
							}
					});
				}
			}
		]
	});
	Notesmoneysgrid.region = 'center';
	Notesmoneysstore.on("beforeload",function(){ 
		Notesmoneysstore.getProxy().extraParams = {
				json : queryjson,
				query : Ext.getCmp("queryNotesmoneysaction").getValue()
		}; 
	});
	Notesmoneysstore.load();//加载数据
	
	var Notesmoneyskechengstore = dataStore(Notesmoneysfields, basePath + Notesmoneysaction + "?method=selQuery&wheresql=notescustomer='"+dataid+"'and notestype='课程'");// 定义Notesmoneysstore
	var Notesmoneyskechengbbar = pagesizebar(Notesmoneyskechengstore);//定义分页
	var Notesmoneyskechenggrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 84,
		width : '100%',
		//title : Notesmoneystitle,
		store : Notesmoneyskechengstore,
		bbar : Notesmoneyskechengbbar,
	    selModel: {
	        type: 'checkboxmodel'
	    },
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : 'ID',
			dataIndex : 'notesid',
			hidden : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
//		, {
//			header : '会员',
//			dataIndex : 'notescustomer',
//			sortable : true,  
//			editor: {
//                xtype: 'textfield'
//            }
//		}
//		, {
//			header : '会员卡',
//			dataIndex : 'notescard',
//			sortable : true,  
//			editor: {
//                xtype: 'textfield'
//            }
//		}
		, {
			header : '场馆',
			dataIndex : 'notesstadium',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '教练',
			dataIndex : 'notescoach',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '课程',
			dataIndex : 'notescourse',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '金额',
			dataIndex : 'notesmoney',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '事件',
			dataIndex : 'notesname',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '详细',
			dataIndex : 'notesdetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '分类',
			dataIndex : 'notestype',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建时间',
			dataIndex : 'notesinswhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建人',
			dataIndex : 'notesinswho',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		],
		tbar : [{
				xtype : 'textfield',
				id : 'queryNotesmoneysaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Notesmoneyskechengstore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryNotesmoneysaction").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Notesmoneyskechengstore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryNotesmoneysaction").getValue()
							}
					});
				}
			}
		]
	});
	Notesmoneyskechenggrid.region = 'center';
	Notesmoneyskechengstore.on("beforeload",function(){ 
		Notesmoneyskechengstore.getProxy().extraParams = {
				json : queryjson,
				query : Ext.getCmp("queryNotesmoneysaction").getValue()
		}; 
	});
	Notesmoneyskechengstore.load();//加载数据
	
	var Notesmoneyschiyoustore = dataStore(Notesmoneysfields, basePath + Notesmoneysaction + "?method=selQuery&wheresql=notescustomer='"+dataid+"'");// 定义Notesmoneysstore
	var Notesmoneyschiyoubbar = pagesizebar(Notesmoneyschiyoustore);//定义分页
	var Notesmoneyschiyougrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 84,
		width : '100%',
		//title : Notesmoneystitle,
		store : Notesmoneyschiyoustore,
		bbar : Notesmoneyschiyoubbar,
	    selModel: {
	        type: 'checkboxmodel'
	    },
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : 'ID',
			dataIndex : 'notesid',
			hidden : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
//		, {
//			header : '会员',
//			dataIndex : 'notescustomer',
//			sortable : true,  
//			editor: {
//                xtype: 'textfield'
//            }
//		}
//		, {
//			header : '会员卡',
//			dataIndex : 'notescard',
//			sortable : true,  
//			editor: {
//                xtype: 'textfield'
//            }
//		}
		, {
			header : '场馆',
			dataIndex : 'notesstadium',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '教练',
			dataIndex : 'notescoach',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '课程',
			dataIndex : 'notescourse',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '金额',
			dataIndex : 'notesmoney',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '事件',
			dataIndex : 'notesname',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '详细',
			dataIndex : 'notesdetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '分类',
			dataIndex : 'notestype',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建时间',
			dataIndex : 'notesinswhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建人',
			dataIndex : 'notesinswho',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		],
		tbar : [{
				xtype : 'textfield',
				id : 'queryNotesmoneysaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Notesmoneyschiyoustore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryNotesmoneysaction").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Notesmoneyschiyoustore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryNotesmoneysaction").getValue()
							}
					});
				}
			}
		]
	});
	Notesmoneyschiyougrid.region = 'center';
	Notesmoneyschiyoustore.on("beforeload",function(){ 
		Notesmoneyschiyoustore.getProxy().extraParams = {
				json : queryjson,
				query : Ext.getCmp("queryNotesmoneysaction").getValue()
		}; 
	});
	Notesmoneyschiyoustore.load();//加载数据
	
	var Notesmoneystuifeistore = dataStore(Notesmoneysfields, basePath + Notesmoneysaction + "?method=selQuery&wheresql=notescustomer='"+dataid+"'and notestype='退费'");// 定义Notesmoneysstore
	var Notesmoneystuifeibbar = pagesizebar(Notesmoneystuifeistore);//定义分页
	var Notesmoneystuifeigrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 84,
		width : '100%',
		//title : Notesmoneystitle,
		store : Notesmoneystuifeistore,
		bbar : Notesmoneystuifeibbar,
	    selModel: {
	        type: 'checkboxmodel'
	    },
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : 'ID',
			dataIndex : 'notesid',
			hidden : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
//		, {
//			header : '会员',
//			dataIndex : 'notescustomer',
//			sortable : true,  
//			editor: {
//                xtype: 'textfield'
//            }
//		}
		, {
			header : '会员卡',
			dataIndex : 'notescard',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '场馆',
			dataIndex : 'notesstadium',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '教练',
			dataIndex : 'notescoach',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '课程',
			dataIndex : 'notescourse',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '金额',
			dataIndex : 'notesmoney',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '事件',
			dataIndex : 'notesname',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '详细',
			dataIndex : 'notesdetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '分类',
			dataIndex : 'notestype',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建时间',
			dataIndex : 'notesinswhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建人',
			dataIndex : 'notesinswho',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		],
		tbar : [{
				xtype : 'textfield',
				id : 'queryNotesmoneysaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Notesmoneystuifeistore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryNotesmoneysaction").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Notesmoneystuifeistore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryNotesmoneysaction").getValue()
							}
					});
				}
			}
		]
	});
	Notesmoneystuifeigrid.region = 'center';
	Notesmoneystuifeistore.on("beforeload",function(){ 
		Notesmoneystuifeistore.getProxy().extraParams = {
				json : queryjson,
				query : Ext.getCmp("queryNotesmoneysaction").getValue()
		}; 
	});
	Notesmoneystuifeistore.load();//加载数据
	
	var Appiontclassify = "appiont";
	var Appionttitle = "当前位置:业务管理》" + Appiontclassify;
	var Appiontaction = "AppiontviewService.do";
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
	        			    ,'cuscardno' 
	        			      ];// 全部字段
	var Appiontkeycolumn = [ 'appointid' ];// 主键
	var Appiontstore = dataStore(Appiontfields, basePath + Appiontaction + "?method=selQuery&wheresql=appointcustomer='"+dataid+"'and appointtype='公共课'");// 定义Appiontstore
	var Appiontbbar = pagesizebar(Appiontstore);//定义分页
	var Appiontgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 84,
		width : '100%',
		//title : Appionttitle,
		store : Appiontstore,
		bbar : Appiontbbar,
	    selModel: {
	        type: 'checkboxmodel'
	    },
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : 'ID',
			dataIndex : 'appointid',
			hidden : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
//		, {
//			header : '会员',
//			dataIndex : 'appointcustomer',
//			sortable : true,  
//			editor: {
//                xtype: 'textfield'
//            }
//		}
//		, {
//			header : '会员卡',
//			dataIndex : 'cuscardno',
//			sortable : true,  
//			editor: {
//                xtype: 'textfield'
//            }
//		}
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
			hidden : true,  
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
			header : '课程',
			dataIndex : 'appointcourse',
			hidden : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '课程名',
			dataIndex : 'appointcoursename',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '教练',
			dataIndex : 'appointcoach',
			hidden : true,  
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
			header : '类型',
			dataIndex : 'appointtype',
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
			header : '更新时间',
			dataIndex : 'appointupdwhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		],
		tbar : [{
				xtype : 'textfield',
				id : 'queryAppiontaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Appiontstore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryAppiontaction").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Appiontstore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryAppiontaction").getValue()
							}
					});
				}
			}
		]
	});
	Appiontgrid.region = 'center';
	Appiontstore.on("beforeload",function(){ 
		Appiontstore.getProxy().extraParams = {
				json : queryjson,
				query : Ext.getCmp("queryAppiontaction").getValue()
		}; 
	});
	Appiontstore.load();//加载数据
	
	var Appiontshijiaostore = dataStore(Appiontfields, basePath + Appiontaction + "?method=selQuery&wheresql=appointcustomer='"+dataid+"'and appointtype='私教课'");// 定义Appiontstore
	var Appiontshijiaobbar = pagesizebar(Appiontshijiaostore);//定义分页
	var Appiontshijiaogrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 84,
		width : '100%',
		//title : Appionttitle,
		store : Appiontshijiaostore,
		bbar : Appiontshijiaobbar,
	    selModel: {
	        type: 'checkboxmodel'
	    },
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : 'ID',
			dataIndex : 'appointid',
			hidden : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
//		, {
//			header : '会员',
//			dataIndex : 'appointcustomer',
//			sortable : true,  
//			editor: {
//                xtype: 'textfield'
//            }
//		}
//		, {
//			header : '会员卡',
//			dataIndex : 'cuscardno',
//			sortable : true,  
//			editor: {
//                xtype: 'textfield'
//            }
//		}
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
			hidden : true,  
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
			header : '课程',
			dataIndex : 'appointcourse',
			hidden : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '课程名',
			dataIndex : 'appointcoursename',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
//		, {
//			header : '教练',
//			dataIndex : 'appointcoach',
//			sortable : true,  
//			editor: {
//                xtype: 'textfield'
//            }
//		}
		, {
			header : '教练',
			dataIndex : 'appointcoachname',
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
			header : '类型',
			dataIndex : 'appointtype',
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
			header : '更新时间',
			dataIndex : 'appointupdwhen',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		],
		tbar : [{
        	text : "取消",
			iconCls : 'delete',
			handler : function() {
				var selections = Appiontshijiaogrid.getSelection();
				if (selections.length != 1) {
					Ext.Msg.alert('提示', '请选择一条数据！', function() {
					});
					return;
				}else if("已确认"==selections[0].get('appointstatue')){
					Ext.Msg.alert('提示', '已确认的记录不能取消！', function() {
					});
				}
				commonDelete(basePath + "AppiontService.do?method=delAll",selections,Appiontshijiaostore,Appiontkeycolumn);
			}
        },'-',{
				xtype : 'textfield',
				id : 'queryAppiontaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Appiontshijiaostore.load({
									params : {
										start : 0,
										limit : PAGESIZE,
										json : queryjson,
										query : Ext.getCmp("queryAppiontaction").getValue()
									}
							});
						}
					}
				}
			},{
				text : "查询",
				xtype: 'button',
				handler : function() {
					Appiontshijiaostore.load({
							params : {
								start : 0,
								limit : PAGESIZE,
								json : queryjson,
								query : Ext.getCmp("queryAppiontaction").getValue()
							}
					});
				}
			}
		]
	});
	Appiontshijiaogrid.region = 'center';
	Appiontshijiaostore.on("beforeload",function(){ 
		Appiontshijiaostore.getProxy().extraParams = {
				json : queryjson,
				query : Ext.getCmp("queryAppiontaction").getValue()
		}; 
	});
	Appiontshijiaostore.load();//加载数据
	
	var alltabpanel = Ext.create('Ext.TabPanel', {
		height : document.documentElement.clientHeight - 50,
		width : '100%',
	    items: [
	    	{
	            title: '持有权益',
	            items : [Notesmoneyschiyougrid]
	        },
	        {
	            title: '卡类操作',
	            items : [Notesmoneysgrid]
	        },
	        {
	            title: '进出场',
	            items : [Notesgrid]
	        },
	        {
	            title: '课程购买',
	            items : [Notesmoneyskechenggrid]
	        },
	        {
	            title: '公共预约',
	            items : [Appiontgrid]
	        },
	        {
	            title: '私教预约',
	            items : [Appiontshijiaogrid]
	        },
	        {
	            title: '其他',
	            items : [Notesmoneystuifeigrid]
	        }
	    ]
	});
	var dataWindow = new Ext.Window({
		layout : 'fit', // 设置窗口布局模式
		width : Ext.os.deviceType === 'Phone' ? '100%' : 750, // 窗口宽度
		modal : true,
		closeAction: 'hide',
		closable : true, // 是否可关闭
		collapsible : true, // 是否可收缩
		maximizable : true, // 设置是否可以最大化
		border : false, // 边框线设置
		animateTarget : Ext.getBody(),
		pageY : 0, // 页面定位Y坐标
		pageX : Ext.os.deviceType === 'Phone' ? 0 : document.body.clientWidth / 2 - 720 / 2, // 页面定位X坐标
		items : alltabpanel
	});
	dataWindow.show();
}
