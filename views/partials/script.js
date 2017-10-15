function zav1() {
    var a = parseFloat(prompt("a=", "0"));
    var b = parseFloat(prompt("b=", "0"));
    var c = parseFloat(prompt("c=", "0"));
    var d = parseFloat(prompt("d=", "0"));
    var h = parseFloat(prompt("h=", "0"));

    var S = ((a + b)/2)*h;
    var P = a+b+c+d;

    //var z=document.getElementById(pp);
    //z.innerHTML=a+b+c+d;
    alert("S=" +S);
    alert("P=" +P);
};