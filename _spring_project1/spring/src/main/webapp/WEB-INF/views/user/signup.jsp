<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>SignUp Page</title>
</head>
<body>
	<h1>SignUp Page</h1>
	
	<form action="/member/signup" method="post">
		ID : <input type="text" name="id" placeholder="아이디"> <br> <br>
		PW : <input type="password" name="pw" placeholder="비밀번호"> <br> <br>
		NAME : <input type="text" name="name" placeholder="이름"> <br> <br>
		EMAIL : <input type="text" name="email" placeholder="asd@asd.com"> <br> <br>
		HOME : <input type="text" name="home" placeholder="주소"> <br> <br>
		AGE : <input type="text" name="age" placeholder="나이"> <br> <br>
		<button>회원가입</button>
	</form>
	
</body>
</html>