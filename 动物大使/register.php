<?php
/**
 * Created by PhpStorm.
 * User: HahaLh
 * Date: 2018/12/17
 * Time: 23:55
 */
$useremail = $_GET['email'];
$conn = mysqli_connect('localhost','root','123456') or die('数据库连接失败，错误信息：'.mysqli_error());
mysqli_select_db($conn,'test')or die('数据库错误，错误信息：'.mysqli_error());
mysqli_query($conn,'SET NAMES utf8')or die('字符集设置错误：'.mysqli_error())  ;

$sql="SELECT * FROM userdata where email='$useremail'"; //查询邮箱
$result=mysqli_query($conn,$sql);
$num=mysqli_num_rows($result);

if($num > 0){
    echo  '0';
//    json_encode($attr)
}else{
    echo '1';
}