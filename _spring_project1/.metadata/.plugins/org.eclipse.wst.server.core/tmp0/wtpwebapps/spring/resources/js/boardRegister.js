document.getElementById('trigger').addEventListener('click',()=>{
    document.getElementById('file').click();
})

// 정규표현식을 사용하여 생성자 함수를 만들기
// 실행파일 막기, 이미지파일인지 아닌지 체크
// fileupload할때 형식제한 함수

const regExp = new RegExp("\.(exe|sh|bat|msi|dll|js)$"); // 실행파일 막기
const regExpImg = new RegExp("\.(jpg|jpeg|png|gif|bmp)$"); // 이미지파일

const maxSize = 1024*1024*20; // 20M 보다 큰지 확인

function fileSizeValidation(fileName, fileSize){ // 첨부 가능한 파일인지 체크
    if(regExp.test(fileName)){ // true : 실행파일임
        return 0; // 안되는 케이스
    }else if(fileSize > maxSize){
        return 0;
    }else if(!regExpImg.test(fileName)){ // 이미지 파일이 아니면 첨부 X
        return 0;
    }
    else{
        return 1;
    }
}

// 첨부 file에 따라서 체크하여 등록가능한지 확인
document.addEventListener('change',(e)=>{
    console.log('e >>>>> : ' + e.target);
    if(e.target.id == 'file'){
        // 첨부되지 말아야 하는 파일이 들어왔을때 전송되는것을 방지
        document.getElementById('regBtn').disabled = false;
        const fileObj = document.getElementById('file').files; // 여러개의 파일이 배열로 들어옴
        console.log(fileObj);

        let div = document.getElementById('fileZone');
        div.innerHTML = '';
        let ul = `<ul>`;
        let isOk = 1; // fileSizeValidation 함수의 통과여부를 체크
        for(let file of fileObj){
            let vaildResult = fileSizeValidation(file.name, file.size);
            isOk *= vaildResult; // 모든 첨부파일의 결과가 1이여야 통과
            ul += `<li>`;
            // 업로드 가능 표시 1 = true / 0 = false
            ul += `${vaildResult ? '<div>업로드 가능' : '<div>업로드 불가능'} </div>`;
            ul += `${file.name}`;
            ul += `<span class="badge rounded-pill text-bg-${vaildResult ? 'success' : 'danger'}">${file.size} Bytes </span></li>`;
        }
        ul += `</ul>`;
        div.innerHTML = ul;

        if(isOk == 0){ // 불가 파일이 있다는 의미.
            document.getElementById('regBtn').disabled = true;
        }
    }
})
