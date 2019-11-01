

function sumProduct (a,b) {
    let result = 0;
    let c = [];
    for (i = 0; i < a.length; i++){
        result = a[i]*b[i]
        c.push(result);
    }
    const sum = c.reduce((acc,cur) => 
        acc + cur
    );
    console.log(sum);
    return sum;
};


sumProduct([1,3,5,7,9],[2,4,6,8,10])


