async function postcmtToServer(cmtData){
    try{
        const url = '/comment/post';
        const config = {
            method : 'post',
            headers : {
                'content-type':'application/json; charset=utf-8',
            },
            body : JSON.stringify(cmtData),
        };
        const resp = await fetch(url, config);
        const result = await resp.text(); // isOk
        return result;
    }catch(err){
        console.log(err);
    }
    
}
document.getElementById('cmtPostBtn').addEventListener('click', ()=>{
const cmtText = document.getElementById('cmtText').value;
console.log(cmtText);
if(cmtText == "" || cmtText == null){
alert('댓글을 입력해주세요');
document.getElementById('cmtText').focus();
return false;
}else{
    let cmtData = {
        bno : bnoVal,
        writer : document.getElementById('cmtWriter').innerText,
        content : cmtText
    };
    console.log(cmtData);
    postcmtToServer(cmtData).then(result =>{
        // isOk 확인 데이터
        if(result > 0){
            alert('댓글 등록 성공 : ' + cmtData.content);
            getCmtList(cmtData.bno);
        }
    })
    document.getElementById('cmtText').value = "";
}
})

async function spreadCmtFromServer(bno){
    console.log(' >>>>> bno >>>>> : ' +bno);
    try{
        const resp = await fetch('/comment/list/' + bno);
        const result = await resp.json();
        return result;
    }catch(err){
        console.log(err);
    }
}


function getCmtList(bno){
    spreadCmtFromServer(bno).then(result =>{
        console.log(' >>>>> result >>>>> ' + result);
        const ul = document.getElementById('cmtListArea');
        if(result.length>0){
            ul.innerHTML = "";
            for(let cvo of result){
                let li = `<li data-cno="${cvo.cno}"><div><div>${cvo.writer}</div>`;
                li += `<input type="text" id="cmtTextMod" value="${cvo.content}"></div>`;
                li += `<span>${cvo.mod_date}</span>  &nbsp &nbsp <br>`;
                li += `<button type="button" class="ModBtn">수정</button> &nbsp &nbsp`;
                
                li += `<button type="button" class="DelBtn">삭제</button></li><br> <hr>`;
                ul.innerHTML+=li;
            }
        }else{
            let li =`<li>댓글리스트가 없습니다.</li>`;
            ul.innerHTML+=li;
        }
    })
}
// 수정 버튼 클릭 이벤트
document.addEventListener('click', function(event) {
  console.log(event.target);
    if (event.target.classList.contains('ModBtn')) {
        // 수정 버튼이 클릭된 경우

        // 클릭된 버튼의 부모 요소인 <li>태그를 가져옴
      const parentLi = event.target.parentNode;

        // 수정할 댓글의 고유 식별자인 cno를 가져옴
      const cno = parentLi.dataset.cno;

    //   수정된 댓글 내용을 가져옴
      const cmtTextMod = parentLi.querySelector('#cmtTextMod').value;
        
    //   수정할 댓글의 정보를 담은 객체 생성
      const cmtData = {
        bno: bnoVal,
        cno: cno,
        writer: document.getElementById('cmtWriter').innerText,
        content: cmtTextMod
      };
  
    // 서버로 댓글 수정 요청을 보냄
      postcmtUpdateToServer(cmtData).then(result => {
        if (result > 0) {
            // 댓글 수정 성공 
          alert('댓글 수정 성공: ' + cmtData.content);
          getCmtList(cmtData.bno);
        }else{
            // 댓글 수정 실패
            alert('댓글 수정 실패 : ')
        }
      });
    }
  });

//  async function editCmtToServer(cmtDataMod){
//   try{
//     const url = '/comment/'+cmtDataMod.cno;
//     const config ={
//       method : 'put',
//       headers : {
//         'content-type' : 'application/json; charset=utf-8'
//       },
//       body : JSON.stringify(cmtDataMod)
//     };
//     const resp = await fetch(url, config);
//     const result = await resp.text();
//     return result;

//   }catch(err){
//     console.log(err);
//   }
//  }

//  async function removeCmtToServer(cno){
//   try{
//     const url='/comment/'+cno;
//     const config ={
//       method : 'delete'
//     };
//     const resp = await fetch(url, config)
//     const result = await resp.text();
//   }catch(err){
//     console.log(err);
//   }
//  }


//   document.addEventListener('click', (e)=>{
//     console.log(e.target);
//     if(e.target.classList.contains('ModBtn')){
//       console.log('수정버튼 클릭시');

//       // 내가 클릭한 버튼의 댓글 뭉치
//       let li = e.target.closest('li');
//       let cnoVal = li.dataset.cno;
//       let textContent = li.querySelector('#cmtTextMod').value;
//       console.log('cno / content >>>>> : '+cnoVal+ ' / ' + textContent);

//       let cmtDataMod = {
//         cno : cnoVal,
//         content : textContent
//       };
//       console.log(cmtDataMod);
//       // 서버연결
//       editCmtToServer(cmtDataMod).then(result =>{
//         if(result>0){
//           alert('수정성공');
//         }
//         getCmtList(bnoVal);
//       })

//     }else if(e.target.classList.contains('DelBtn')){
//       let li = e.target.closest('li');
//       let cnoVal = li.dataset.cno;
//       console.log(cnoVal);
//       removeCmtToServer(cnoVal).then(result =>{
//         if(result>0){
//           alert('삭제성공')
//         }
//         getCmtList(bnoVal);
//       })
//     }
//   })
  
  // 삭제 버튼 클릭 이벤트
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('DelBtn')) {
        // 삭제 버튼이 클린된 경우

        // 클릭된 버튼의 부모요소인 <li>태그를 가져옴
      const parentLi = event.target.parentNode;

    //   삭제할 댓글의 고유 식별자인 cno가져옴
      const cno = parentLi.dataset.cno;
  
    //   서버로 댓글 삭제 요청을 보냄.
      postcmtDeleteToServer(cno).then(result => {
        if (result > 0) {
          alert('댓글 삭제 성공');
          getCmtList(bnoVal);
        }
      });
    }
  });
  
  // 수정 요청을 서버에 전송하는 함수
  async function postcmtUpdateToServer(cmtData) {
    try {
      const url = '/comment/update';
      const config = {
        method: 'post',
        headers: {
            'content-type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(cmtData),
        };
        const resp = await fetch(url, config);
        const result = await resp.text();
        return result;
        } catch (err) {
        console.log(err);
        }
        }
        
        // 삭제 요청을 서버에 전송하는 함수
        async function postcmtDeleteToServer(cno) {
        try {
        const url = '/comment/delete/' + cno;
        const config = {
        method: 'post',
        };
        const resp = await fetch(url, config);
        const result = await resp.text();
        return result;
        } catch (err) {
        console.log(err);
        }
        }
  