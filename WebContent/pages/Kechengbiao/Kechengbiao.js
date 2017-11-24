Ext.onReady(function() {
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
					url : "PlacetimeService.do?method=selAll",
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
