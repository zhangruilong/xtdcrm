<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
	<%@ include file="/zrlextpages/common/common.jsp" %>
	<script type="text/javascript" src="Emp.js"></script>
	<script type="text/javascript" src="Cardtype.js"></script>
	<script type="text/javascript" src="Cuscardadd.js"></script>
</head>
<OBJECT classid="CLSID:A8AC0369-45BA-4CF2-9F73-A0F065AD8495" id="ReadIDCardInfo" width="1" height="1" name="ReadIDCardInfo">
</OBJECT>
<script> 
		var ReadIDCardInfo=document.getElementById("ReadIDCardInfo");
		var port = 1001;
		var baud = 115200;
		var extendCmd = "abc";
		var idCardInfo = "abc";
		var timeout = 5;
		var ifCreatePhoto=0;
		var IDinfo = "123";
  </script>
</html>
