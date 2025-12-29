const b = () => {
    console.log("dmm");
}
const a = (b) => {
    console.log("LOL")
    b();
}

console.log(a(b))