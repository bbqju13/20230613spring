<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>modify Page</title>
</head>
<body>
<h1>modify Page</h1>
<form action="/board/modify" method="post">
번호 : <input type="text" name="bno" value="${board.bno }">  <br> <br>
제목 : <input type="text" name="title" value="${board.title }"> <br> <br>
작성자 : <input type="text" name="writer" value="${board.writer }" readonly="readonly"> <br> <br>
등록일 : <input type="text" name="reg_date" value="${board.reg_date }"> <br> <br>
내용 : <br>
<textarea rows="10" cols="30">${board.content }</textarea> <br> <br>
<button>수정</button>
</form>
<a href="/board/list"> <button type="button">목록</button> </a>
<a href="/"> <button type="button">처음으로</button> </a>

</body>
</html>