<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
<title>detail Page</title>
</head>
<body>
<h1>detail Page</h1>

<c:set var="board" value="${boardDTO.bvo }"></c:set>
<table border="2">
		<tr>
			<th>번호</th>
			<td>${board.bno }</td>
		</tr>
		<tr>
			<th>제목</th>
			<td>${board.title }</td>
		</tr>
		<tr>
			<th>작성자</th>
			<td>${board.writer }</td>
		</tr>
		<tr>
			<th>조회수</th>
			<td>${board.read_count }</td>
		</tr>
		<tr>
			<th>등록일</th>
			<td>${board.reg_date }</td>
		</tr>
		<tr>
			<th>내용</th>
			<td>${board.content }</td>
		</tr>
</table>
<!-- file 표현 영역 -->
<div>
	<c:set var="flist" value="#{boardDTO.flist }"></c:set>
	<ul>
		<c:forEach items="${flist }" var="fvo">
			<li>
				<c:choose>
					<c:when test="${fvo.file_type > 0 }">
						<div>
							<img alt="XXX" src="/upload/${fn:replace(fvo.save_dir, '\\','/') }/${fvo.uuid}_th_${fvo.file_name}">
						</div>
					</c:when>
					<c:otherwise>
						<div>
							<!-- 클립모양 같은 파일 아이콘 모양 값을 넣을 수 있음. -->
						</div>
					</c:otherwise>
				</c:choose>
					<div>
						<div>
						 ${fvo.file_name }
						</div>
						 ${fvo.reg_date }
					</div>
					<span>${fvo.file_size } Bytes</span>
			</li>
		</c:forEach>
	</ul>
</div>
 <br> <br> <br>

<a href="/board/list"> <button>목록</button> </a>  &nbsp &nbsp &nbsp


<!-- 로그인 ID와 게시글의 작성자가 같지 않으면 수정,삭제 버튼 안보이게 -->

<c:if test="${ses != null && ses.id == board.writer }">

<a href="/board/modify?bno=${board.bno }"> <button>수정</button> </a> &nbsp &nbsp &nbsp
<a href="/board/delete?bno=${board.bno }"> <button>삭제</button> </a> &nbsp &nbsp &nbsp
</c:if>
<br> <br>
<br> <br> <hr>
<!-- 댓글 -->

<div>
<!-- 댓글 작성 라인 -->
<h3>댓 글 작 성 라 인</h3>
	<div>
		<span id="cmtWriter">${ses.id }</span> >>
		<input type="text" id="cmtText" placeholder="댓글작성"> &nbsp &nbsp
		<button type="button" id="cmtPostBtn">댓글등록</button>
	</div>
	
	
	
	
<!-- 댓글 표시 라인 -->
<h3>댓 글 표 시 라 인</h3>
	<div>
		<!-- li 하나가 하나의 댓글 객체 -->
		<ul id="cmtListArea">
			<li>
				<div>
				<div>작성자</div>
					댓글내용
				</div>
				<span>수정날짜</span>
			</li>
		</ul>
	</div>
</div>
<hr>




<script type="text/javascript">
const bnoVal = '<c:out value="${boardDTO.bvo.bno}" />';
console.log(" >>>>> bno >>>>> : " + bnoVal);
</script>
<script type="text/javascript" src="/resources/js/comment.js"></script>
<script type="text/javascript">
getCmtList(bnoVal);
</script>


</body>
</html>