<?php
    // Obtém os dados do formulário usando o método POST
    $nome = $_POST['name'];
    $email = $_POST['email'];

    // Exibe os dados do formulário
    echo "Nome: " . $nome . "<br>";
    echo "E-mail: " . $email . "<br>";

    // Aqui você pode adicionar código para armazenar os dados em um banco de dados, enviar e-mails, etc.
?>
