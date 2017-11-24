
function zhajitoken(){
	Ext.Ajax.request({
		url : 'http://172.168.1.98/interface_xtd.php',
		method : 'POST',
		params : {
			ACTION : 'TOKEN',
			DATA : 'NTXTDJSHS2015NTXTDJSHS2015ABCDEF'
		},
		success : function(response) {
			var resp = Ext.decode(response.responseText); 
			if(resp.CODE==0){
				Ext.Msg.alert('提示', resp.TOKEN, function(){
				});
				window.localStorage.setItem("TOKEN",resp.TOKEN);
			}
		},
		failure : function(response) {
			Ext.Msg.alert('提示', '闸机网络出现问题，请稍后再试');
		}
	});
}
function zhajiuser(zhajicard){
	Ext.Ajax.request({
		url : 'http://172.168.1.98/interface_xtd.php',
		method : 'POST',
		params : {
			ACTION : 'YH_XG',
			UID : zhajicard.UID,
			TOKEN : window.localStorage.getItem("TOKEN"),
			CARD : zhajicard.CARD,
			CARD_XTD : zhajicard.CARD_XTD,
			EXPIRE_FROM : zhajicard.EXPIRE_FROM,
			EXPIRE_TO : zhajicard.EXPIRE_TO
		},
		success : function(response) {
			var resp = Ext.decode(response.responseText); 
			if(resp.CODE==0){
				Ext.Msg.alert('提示', resp.RESULT, function(){
				});
			}
		},
		failure : function(response) {
			Ext.Msg.alert('提示', '闸机网络出现问题，请稍后再试');
		}
	});
}
function zhajiall(zhajicard){
	Ext.Ajax.request({
		url : 'http://172.168.1.98/interface_xtd.php',
		method : 'POST',
		params : {
			ACTION : 'TOKEN',
			DATA : 'NTXTDJSHS2015NTXTDJSHS2015ABCDEF'
		},
		success : function(response) {
			var resp = Ext.decode(response.responseText); 
			if(resp.CODE==0){
				Ext.Msg.alert('提示', resp.TOKEN, function(){
				});
				window.localStorage.setItem("TOKEN",resp.TOKEN);
				Ext.Ajax.request({
					url : 'http://172.168.1.98/interface_xtd.php',
					method : 'POST',
					params : {
						ACTION : 'YH_XG',
						UID : zhajicard.UID,
						TOKEN : window.localStorage.getItem("TOKEN"),
						CARD : zhajicard.CARD,
						CARD_XTD : zhajicard.CARD_XTD,
						EXPIRE_FROM : zhajicard.EXPIRE_FROM,
						EXPIRE_TO : zhajicard.EXPIRE_TO
					},
					success : function(response) {
						var resp = Ext.decode(response.responseText); 
						if(resp.CODE==0){
							Ext.Msg.alert('提示', resp.RESULT, function(){
							});
						}
					},
					failure : function(response) {
						Ext.Msg.alert('提示', '闸机网络出现问题，请稍后再试');
					}
				});
			}
		},
		failure : function(response) {
			Ext.Msg.alert('提示', '闸机网络出现问题，请稍后再试');
		}
	});
	
}
function GetRandomNum(Min,Max)
{   
	var Range = Max - Min;   
	var Rand = Math.random();   
	return(Min + Math.round(Rand * Range));   
}   
var statueStore = new Ext.data.ArrayStore({//状态下拉
	fields:["name"],
	data:[["启用"],["禁用"]]
});
var customerStore = new Ext.data.ArrayStore({//状态下拉
	fields:["name"],
	data:[["启用"],["禁用"],["潜在"],["死单"],["培训"],["大客户"],["潜在大客户"]]
});
var sexStore = new Ext.data.ArrayStore({//性别下拉
	fields:["name"],
	data:[["男"],["女"]]
});
var projectStore = new Ext.data.ArrayStore({//项目下拉
	fields:["name"],
	data:[["健身"],["单车"],["游泳"],["游泳加健身"],["健美操"],["舞蹈"],["瑜伽"],["篮球"],["羽毛球"]]
});
var courseStore = new Ext.data.ArrayStore({//项目下拉
	fields:["name"],
	data:[["普拉提"],["瑜伽"],["单车"],["舞蹈"],["有氧操"]]
});
var stadiumStore = new Ext.data.ArrayStore({//场馆下拉
	fields:["name"],
	data:[["新天地旗舰馆"],["新天地二附馆"],["新天地东城馆"],["新天地万科馆"],["通用"]]
});
var cardStore = new Ext.data.ArrayStore({//卡种分类下拉
	fields:["name"],
	data:[["时间卡"],["次数卡"],["特殊卡"],["后付费卡"]]
});
var changciStore = new Ext.data.ArrayStore({//卡种分类下拉
	fields:["name"],
	data:[["早场"],["中场"],["晚场"],["全天"]]
});
var ruhuiStore = new Ext.data.ArrayStore({//卡种分类下拉
	fields:["name"],
	data:[["第一类"],["第二类"],["第三类"],["第四类"],["第五类"]]
});
var coachStore = new Ext.data.ArrayStore({//卡种分类下拉
	fields:["name"],
	data:[["在岗"],["离职"],["兼职"]]
});