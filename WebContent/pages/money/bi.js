Ext.onReady(function() {
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
	Ext.create({
		   xtype: 'cartesian',
		   renderTo: Ext.getBody(),
		   height : document.documentElement.clientHeight - 4,
		   width : '100%',
		   innerPadding: '0 10 0 10',
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
})
