<?php
$token = "8243108926:AAH3ytiNNKxmf5SYTQfMVnBO4ObQLBFKRqc";
$chat_id = "5076651431";

$name = $_POST['name'];
$message = $_POST['message'];

$text = "Новое сообщение с сайта:\nИмя: $name\nСообщение: $message";

file_get_contents("https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=".urlencode($text));

echo "ok";
?>
