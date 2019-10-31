function arraySort(a) {
    let orderedA = [];
    let max = 0;
    let maxIndex = 0;
    while(a.length!==0) {
        for (i=0; i<a.length; i++) {    
            if (a[i] > max) {
                max = a[i];
                maxIndex = i;
            }
        }
        const temp = a.splice(maxIndex,1);
        orderedA.push(temp[0]);
        max = 0;
        maxIndex = 0;
        console.log(a);
        console.log(orderedA);
    }
    return orderedA;
}

console.log(arraySort([1,2,3,5,4]));


module.exports = arraySort;
