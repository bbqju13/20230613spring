async function removeFileToServer(uuid){
    try{
        const url = '/board/file/'+uuid;
        const config ={
            method : 'delete'
        };
        const resp = await fetch(url, config);
        const result = await resp.text();
        return result;
    }catch(err){
        console.log(err);
    }
}



document.addEventListener('click', (e)=>{
    console.log(e.target);
    if(e.target.classList.contains('file-x')){
        let uuid = e.target.dataset.uuid;
        console.log("uuid >>>>> : "+uuid);
        // 비동기로 데이터 삭제
        removeFileToServer(uuid).then(result =>{
            console.log(result);
            if(result>0){
                alert('파일삭제 성공');
                e.target.closest('li').remove();
            }
        })
    }
})