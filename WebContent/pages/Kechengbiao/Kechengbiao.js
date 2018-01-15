Ext.onReady(function() {
	var wheresql = "1=1";
	if(!isnull(currentuser.roledetail)) wheresql="placetimestadium='"+currentuser.roledetail+"'";
	Ext.create({
		xtype : 'calendar',
		renderTo : Ext.getBody(),
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		store : {
			autoLoad : true,
			proxy : {
				type : 'ajax',
				url : 'calendars.json'
			},
			eventStoreDefaults : {
				proxy : {
					type : 'ajax',
//					url : 'calendars2.json'
					url : "PlacetimeService.do?method=selAll&wheresql="+wheresql,
					reader: {
			             type: 'json',
			             rootProperty: 'root',
			             totalProperty : 'total',
			         }
				}
			}
		}
	});
})
