function msgTeste () {
    console.log("Funcionou Minha função!")
    //"Ctrl + Alt + N" para executar
    //"Ctrl + S" para salvar
}

msgTeste()

function msgTesteArgumento (param) {
    console.log(
        "O parâmetro passado foi:", 
        param, 
        "e o tipo dele é",
        typeof param
        )
}
msgTesteArgumento("Olá")
msgTesteArgumento(4)

function Soma (n1, n2) {
    let result = 0 //se vc escrever "oi" vira string no lugar de number
    try {
        result = n1 + n2
        typeof result == Number ? result : "Erro"
    }   catch (e) {
        return e
    }
    
    if(typeof n1 == Number || typeof n2 == Number) {
    return result = n1 + n2
    }
    
    
    return "Não vai não."
    
        //return result = n1 + n2 //Não precisa do result escrito (e também da para se escrever n1, n2 no lugar de n1 + n2)
}

console.log(Soma(4, 7))    
//console.log(Soma("oi", 7))

const funcaoArrow = () => {
console.log("Isso é uma arrow function")}

//se vc escrever "console.log(result)" não funcionará.