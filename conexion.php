<?php 
$conn=new mysqli("localhost","root","J2ceynldth*","aqui_store");
if (mysqli_connect_error()) {
    printf("Falló la conexión: %s\n", mysqli_connect_error());
    exit();
}
if(!$conn){
    die("imposible conectarse, error en el servidor".mysqli_error($conn));
}
if(@mysqli_connect_error()){
    die("conexiona la BD fallado:".mysqli_connect_error().":".mysqli_connect_error());
}
return $conn;
?>