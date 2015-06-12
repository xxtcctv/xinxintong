<?php
/**
 * 加载本地化设置
 */
file_exists(dirname(__FILE__).'/cus/app.php') && include_once(dirname(__FILE__).'/cus/app.php');
/**
 * database
 */
if (defined('SAE_MYSQL_HOST_M')) {
    $host = SAE_MYSQL_HOST_M;
    $port = SAE_MYSQL_PORT;
    $user = SAE_MYSQL_USER;
    $pwd = SAE_MYSQL_PASS;
    $dbname = SAE_MYSQL_DB;
} else {
    $host = TMS_MYSQL_HOST;
    $port = TMS_MYSQL_PORT;
    $user = TMS_MYSQL_USER;
    $pwd = TMS_MYSQL_PASS;
    $dbname = TMS_MYSQL_DB;
}

$mysqli = new mysqli("{$host}:{$port}", $user, $pwd, $dbname);
if ($mysqli->connect_errno)
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;

$mysqli->query("SET NAMES UTF8");
