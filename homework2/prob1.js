function sumNumbers(n){
    let i=0;
    let sum=1;
    while(i<=n){
        sum=sum+i;
        i++;
    }
    return(sum)
}
let n=10;
res= sumNumbers(n)
console.log(res);

