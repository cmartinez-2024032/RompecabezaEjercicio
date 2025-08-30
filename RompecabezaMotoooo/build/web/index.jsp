<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>RompeCabezas 4x4 - Cristopher Martinez</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/estilo.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <div class="container">
      
        <h2>Rompecabezas 4x4</h2>
        <p id="mensaje"></p>
        <p>Haz click en una pieza adyacente al espacio vacío para moverla.</p>
        <div id="puzzle" class="puzzle"></div>
        <p id="mensaje"></p>
        <button onclick="reiniciar()">Reiniciar</button>
    </div>
    
    <div class="ImagenReferencia">
<h2>Imagen de Referencia</h2>
<p>Utiliza esta imagen de referencia para armarlo.</p>
<img src="img/imagenreferencia.jpg" alt="Imagen de referencia De KIKI MBAPPE">
</div>
    
    <script src="js/script.js"></script>
</body>
</html>
