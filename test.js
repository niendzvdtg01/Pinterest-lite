let money = 500
function Hoang(a, b) {
    return new Promise(
        (resovle) => {
            setTimeout(() => {
                resovle(a)
            }, b);
        });
}
async function HoangActivity() {
    const a = await Hoang("Hoang di xem phim het 100000", 0)
    console.log(a + " con lai " + (money -= 100))
    const b = await Hoang("Hoang di an pho het 50000", 1500)
    console.log(b + " con lai " + (money -= 50))
    const c = await Hoang("Hoang di uong cafe het 40000", 2000)
    console.log(c + " con lai " + (money -= 40))
    const d = await Hoang("Hoang ve nha va con lai 310000", 1000)
    console.log(d + " con lai " + (money))
}
HoangActivity()


