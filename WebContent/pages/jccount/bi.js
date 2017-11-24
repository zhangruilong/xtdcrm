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
	var Notesstore = dataStore(Notesfields, basePath + Notesaction + "?method=seljinchangcount");// 定义Notesstore
	Notesstore.load();
	Ext.create({
		   xtype: 'cartesian',
		   renderTo: document.body,
		   height : document.documentElement.clientHeight - 4,
		   width : '100%',
		   insetPadding: 40,
		   store: Notesstore,
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
})
