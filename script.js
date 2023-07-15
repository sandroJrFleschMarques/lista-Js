let digitado = document.getElementById('digitado')
let tabela = document.getElementById('seltab')
    
function lista() { 
    if (digitado.value == '') {
        alert('Favor digite algum item para a lista!')
    }  else{
        let d = digitado.value    
        let item = document.createElement('li')
            item.innerText = `${d}`
            tabela.appendChild(item)
            digitado.value = ''
            digitado.focus()
    }
}
     
        digitado.addEventListener("keyup", ({key}) => {
            if (key === "Enter") {
                lista()
            }
        })

