const columns = document.getElementById('columns');
const mainSection = document.getElementById('main-section');
const imgLength = 88;


for (let i = 0; i <= imgLength-1; i++){
    let htmlTag = `<figure>
        <img class="image" src="./images/img_${i+1}.JPG" alt="">
    </figure>`;

    columns.innerHTML += htmlTag;
}

// dimmed 관련 함수영역
let dimmedImg;

function dimmedFunc(src){
    let dimmedImg = document.getElementById('dimmedImg');
    dimmedImg.src = src;
}

document.addEventListener("click", function(e){
    let target = e.target;
    let dimmedBox = document.getElementById('dimmedBox');

    // 이미지 확대 기능 (dimmed box 열기)
    if(target.classList == "image"){
        dimmedFunc(e.target.src);
        dimmedBox.style.display = 'flex';
    }

    // 확대된 이미지 닫기 (dimmed box 닫기)
    if(target.id == 'dimmedCloseBtn'){
        dimmedBox.style.display = 'none';
    }

})

