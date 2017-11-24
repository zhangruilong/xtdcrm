Ext.onReady(function() {
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
	var jccountNotesstore = dataStore(Notesfields, basePath + Notesaction + "?method=seljinchangcount");// 定义Notesstore
	jccountNotesstore.load();
	var jccount = Ext.create({
		   xtype: 'cartesian',
		   height : 350,
		   width : '100%',
		   store: jccountNotesstore,
		   axes: [{
		       type: 'numeric',
		       position: 'left',
		       fields: ['notesname'],
		       title: {
		           text: '人数',
		           fontSize: 15
		       },
		       grid: true,
		       minimum: 0
		   }, {
		       type: 'category',
		       position: 'bottom',
		       fields: ['notestype'],
		       title: {
		           text: '从5:00到22:00区间',
		           fontSize: 15
		       }
		   }],
		   series: [{
		       type: 'line',
		       style: {
		           stroke: '#30BDA7',
		           lineWidth: 2
		       },
		       xField: 'notestype',
		       yField: 'notesname',
		       marker: {
		           type: 'path',
		           path: ['M', - 4, 0, 0, 4, 4, 0, 0, - 4, 'Z'],
		           stroke: '#30BDA7',
		           lineWidth: 2,
		           fill: 'white'
		       }
		   }]
		});
	var jcageNotesstore = dataStore(Notesfields, basePath + Notesaction + "?method=seljcage");// 定义Notesstore
	jcageNotesstore.load();
	var jcage = Ext.create({
		   xtype: 'polar',
		   height : 300,
		   width : 520,
//		   innerPadding: '300 10 0 300',
		   theme: 'green',
		   interactions: ['rotate', 'itemhighlight'],
		   store: jcageNotesstore,
		   series: {
		       type: 'pie3d',
		       highlight: true,
		       angleField: 'notesname',
		       label: {
		           field: 'notestype',
		           display: 'rotate'
		       },
		       donut: 30
		   }
		});
	var jccardNotesstore = dataStore(Notesfields, basePath + Notesaction + "?method=seljccard");// 定义Notesstore
	jccardNotesstore.load();
	var jccard = Ext.create({
		   xtype: 'polar',
		   height : 300,
		   width : 520,
//		   innerPadding: '0 10 0 100',
		   theme: 'green',
		   interactions: ['rotate', 'itemhighlight'],
		   store: jccardNotesstore,
		   series: {
		       type: 'pie3d',
		       highlight: true,
		       angleField: 'notesname',
		       label: {
		           field: 'notestype',
		           display: 'rotate'
		       },
		       donut: 30
		   }
		});
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
	var Appiontstore = dataStore(Appiontfields, basePath + Appiontaction + "?method=selappsum");// 定义Appiontstore
	var Appiontgrid =  Ext.create('Ext.grid.Panel', {
		height : 300,
		width : '100%',
//		title : "当天累计预约人数",
		store : Appiontstore,
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
		, {
			header : '场馆',
			dataIndex : 'appointstadium',
			hidden : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '类型',
			dataIndex : 'appointtype',
			hidden : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '项目',
			dataIndex : 'appointproject',
			sortable : true, 
			width:350,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '预约',
			dataIndex : 'appointdate',
			hidden : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '人数',
			dataIndex : 'appointdetail',
			sortable : true, 
			width:350,
			editor: {
                xtype: 'textfield'
            }
		}
	]});
	Appiontgrid.region = 'center';
	Appiontstore.load();//加载数据
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
	var Notesmoneyskeycolumn = [ 'notesid' ];// 主键
	var Notesmoneysstore = dataStore(Notesmoneysfields, basePath + Notesmoneysaction + "?method=selmoney");// 定义Notesmoneysstore
	Notesmoneysstore.load();
	var money = Ext.create({
		   xtype: 'cartesian',
		   height : 300,
		   width : '100%',
		   innerPadding: '0 100 0 10',
		   store: Notesmoneysstore,
		   axes: [{
		       type: 'numeric3d',
		       position: 'left',
		       fields: ['notesmoney'],
		       title: {
		           text: '营业额',
		           fontSize: 15
		       },
		       grid: {
		           odd: {
		               fillStyle: 'rgba(255, 255, 255, 0.06)'
		           },
		           even: {
		               fillStyle: 'rgba(0, 0, 0, 0.03)'
		           }
		       }
		   }, {
		       type: 'category3d',
		       position: 'bottom',
		       title: {
		           text: '分类',
		           fontSize: 15
		       },
		       fields: 'notestype'
		   }],
		   series: {
		       type: 'bar3d',
		       xField: 'notestype',
		       yField: ['notesmoney']
		   }
		});
	Ext.create('Ext.container.Container',{
	    renderTo: Ext.getBody(),
	    height : 950,
	    width : '100%',
	    layout : 'border',
		autoScroll : true,
		bodyStyle : 'padding:10px;',
		items : [ 
			{
		        region: 'north',items: [jccount]
		    }, {
		        region: 'east',items: [money,Appiontgrid]
		    }, {
		        region: 'west',items: [jcage,jccard]
		    } ]
	});
})
