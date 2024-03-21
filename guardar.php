<?php
include('conexion.php');
$nom = $_POST['nom'];
$apel = $_POST['apel'];
$ced = $_POST['ced'];
$dir = $_POST['dir'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$cont = $_POST['cont'];

$consulta = "INSERT INTO datos VALUES ('$nom','$apel','$ced','$dir','$tel','$email','$cont')";
mysqli_query ($conn, $consulta);
// header("location: registrarme.html");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aquí Store Online</title>
    <link rel="stylesheet" href="./assets/css/01-normalize.css">
    <link rel="stylesheet" href="./assets/css/02-reset.css">
    <link rel="stylesheet" href="./assets/css/03-main.css">
    <link rel="stylesheet" href="./assets/css/complemento.css">    
    <link rel="icon" href="./assets/img/Logo_Aqui_Store-removebg-preview.png">
</head>
<body>
    <header class="cabecera">
        <div class="cabecera__container">
            <a href="index.html"><img class="cabecera__imagen" src="./assets/img/Logo_Aqui_Store-removebg-preview.png" alt="logo-aqui store"></a>
        </div>
    </header>

    <section class="regresar-container"> 
        <div class="-regresar-caja-container">
            <p class="regresar-parrafo">Datos guardados con exito!.</p>
            <h2><a class="regresar-link" href="index.html">Regresar</a></h2>
        </div>
    </section>



    <section class="rodapie">
        <div class="footer">
            <div class="footer__container">
                <div class="footer__logo"><img src="./assets/img/Logo_Aqui_Store-removebg-preview.png" alt="logo" width="250px" height="250px"></div>
                <div class="footer__links">
                    <a class="footer__link" href="#">Quienes Somos</a>
                    <a class="footer__link" href="#">Politicas de seguridad</a>
                    <a class="footer__link" href="#">Programa de fidelidad</a>
                    <a class="footer__link" href="#">Nuestras tiendas</a>
                    <a class="footer__link" href="#">Quiero ser franquiciado</a>
                    <a class="footer__link" href="#">Anuncie aqui!</a>
                </div>
                <div class="footer__contacto">
                    <form action="#">
                        <h2 class="footer__titulo">Hable con nosostros</h2>
                        <label class="footer__nombre" for="nombre">Nombre</label>
                        <input class="footer__input" id="nombre" type="text" required placeholder="Equipo Aquí Store">
                        <textarea class="footer__textarea" name="text-area" id="" cols="20" rows="5" placeholder="Escribe tu mensaje"></textarea>
                        <button class="footer__btn-enviar-mensaje">Enviar mensaje</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="final">
            <a href="#"><img class="logo-team" src="./assets/img/logo-removebg-team-preview.png" alt="logo-team" width="150px" height="150px"></a>
            <a href="#"><p>Creado por ADSO - TEAM 07</p></a>
            <a href="#"><img class="logo-sena" src="./assets/img/logo_sena-removebg-preview.png" alt="logo-sena" width="150px" height="150px"></a>
        </div>
    </section>
</body>
</html>