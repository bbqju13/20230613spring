document.getElementById('trigger').addEventListener('click',()=>{
    document.getElementById('file').click();
})

// 정규표현식을 사용하여 생성자 함수를 만들기
// 실행파일 막기, 이미지파일인지 아닌지 체크
// fileupload할때 형식제한 함수

const regExp = new RegExp("\.(exe|sh|bat|msi|dll|js)$"); // 실행파일 막기
const regExpImg = new RegExp("\.(jpg|jpeg|png|gif|bmp)$"); // 이미지파일

const maxSize = 1024*1024*20; // 20M 보다 큰지 확인

function fileSizeValidation(fileName, fileSize){
    if(regExp.test(fileName)){ // true : 실행파일임
        return 0; // 안되는 케이스
    }else if(fileSize > maxSize){
        return 0;
    }else{
        return 1;
    }
}

// 이미지 파일에 따라서 체크