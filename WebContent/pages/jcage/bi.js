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
	var Notesstore = dataStore(Notesfields, basePath + Notesaction + "?method=seljcage");// 定义Notesstore
	Notesstore.load();
	Ext.create({
		   xtype: 'polar',
		   renderTo: document.body,
		   height : document.documentElement.clientHeight - 4,
		   width : '100%',
		   insetPadding : '100 20 20 40', 
		   theme: 'green',
		   interactions: ['rotate', 'itemhighlight'],
		   store: Notesstore,
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
})
