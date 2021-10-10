const columns = document.getElementById('columns');
const imgLength = 88;

for (let i = 0; i <= imgLength-1; i++){
    let htmlTag = `<figure>
        <img src="./images/img_${i+1}.JPG" alt="">
    </figure>`;

    columns.innerHTML += htmlTag;
}