let a= 10;
if ((a % 4 === 0 && a % 100 !== 0) || a % 400 === 0) {
    console.log("Y");
} else {
    console.log("N");
}