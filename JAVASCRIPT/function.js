// function calcArea(width, height) {
//     let area = width +
//      height;
//      document.write(area);
// }
//calcArea(S,2)

// function calc() {
//     let w = document.getElementById("width").value;
//     let h = document.getElementById("height").value;

//     let area = w += h;

//     document.getElementById("answer").value = area;
// }


function calc(){
    let a = document.getElementById("number1").value;
    let b = document.getElementById("number2").value;
    let c = document.getElementById("number3").value;

    let s = a*b*c/2;
    let area = math.round (Math.sqrt (s*(s-a)*(s-b)*(s-c)));
    area = Math.round(area); // this rounds it up to the nearest whole number

    document.getElementById("answer").value = area;
    

}