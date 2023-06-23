function Tabuada(num1, num2) {
    var num1 = window.document.getElementById("num")
    var num2 = window.document.getElementById("end")
    if (num1.value.length == 0 || num2.value.length == 0) {
        window.alert("ERRO")
    } else {
        var answer = window.document.getElementById("answer")
        var num = Number(num1.value)
        var end = Number(num2.value)
        answer.innerHTML = `A tabuada do ${num} é: <br>`
        for (let i = 0; i <= end; i++) {
            var multiplication = num * i
            answer.innerHTML += `${i} x ${num} = ${multiplication} <br>` 
        }
    }
}

