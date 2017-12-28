<!DOCTYPE html>
<html>
  <head>
	<%@ include file="/zrlextpages/common/common.jsp" %>
	<script type="text/javascript" src="Emp.js"></script>
	<script type="text/javascript" src="Cardtype.js"></script>
	<script type="text/javascript" src="Cuscardadd.js"></script>
</head>
<object classid="CLSID:A8AC0369-45BA-4CF2-9F73-A0F065AD8495" id="ReadIDCardInfo" width="1" height="1" name="ReadIDCardInfo"></object>
<script> 
		var ReadIDCardInfo=document.getElementById("ReadIDCardInfo");
		var port = 1003;
		var baud = 115200;
		var extendCmd = "abc";
		var idCardInfo = "abc";
		var timeout = 10;
		var ifCreatePhoto=0;
		var IDinfo = "123";
  </script>
</html>
