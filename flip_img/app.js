function flipImg (arry) {
    let newImg = [];
    for (j = 0; j < arry.length; j++ ){
        newImg.push([]);
        for (i = arry[0].length-1; i >=0; i--){
            newImg[j].push(arry[j][i]);
        }
    }
    console.log(newImg);
    return newImg;
}


flipImg([
    ["#2afed5","#2afad5","#2afee5"],
    ["#4a00d5","#2afaa5","#2afe55"],
    ["#3afed9","#2bfad5","#2acee5"]
])

