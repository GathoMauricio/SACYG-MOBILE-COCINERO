// JavaScript Document
function cargando()
{
	$("#contenedor").html("<br><br><br><center><img src='img/load2.gif' width='50%'></center>");
}
function loadInicio()
{
	
	$("body").load("http://sacygrestaurantes.com/mobile/cocinero/inicio.php");
}
function loadDomicilio()
{
	cargando();
	var id=window.localStorage.getItem("id_empleado");
	$("#contenedor").load("http://sacygrestaurantes.com/mobile/cocinero/domicilio.php?id="+id);
}
function loadOrden()
{
	cargando();
	$("#contenedor").load("http://sacygrestaurantes.com/mobile/cocinero/orden.php");
}

function validaEmpleado()
{
	var usuario =$("#txt_usuario_login").prop("value");
	var contrasena =$("#txt_contrasena_login").prop("value");
	$.post("http://sacygrestaurantes.com/control/valida_empleado.php",
		{
			usuario:usuario,
			contrasena:contrasena
		}
		,function(data){
			if(data >= 1)
			{
				window.localStorage.setItem("id_empleado",data);
				location.reload(true);
			}else{
				alert("Los datos son incorrectos");
			}
		});
}
function cerrarSesion()
{
	window.localStorage.clear();
	loadInicio();
}

function detallesPedidoDomicilio(id)
{
	$("#contenedor").load("http://sacygrestaurantes.com/mobile/cocinero/detalles_pedido.php?id="+id);
}
function salidaPedidoDomicilio(id)
{
	if(confirm("¿Confirmar salida de pedido?"))
	{

		$("#contenedor").load("http://sacygrestaurantes.com/mobile/cocinero/salida_pedido.php?id="+id);
		loadDomicilio();
	}
}