function alterarQuantidade (produto, acao){
    const quantidade = document.getElementById(`quantidade${produto}`)
    const preco = document.getElementById(`preco${produto}`)
    const total = document.getElementById(`total${produto}`)

if(acao == '-' && quantidade.innerHTML == 0) {
alert('A quantidade não pode ser menor que zero!')
} else {
    acao == '+' ?  quantidade.innerHTML++ : quantidade.innerHTML--

    const resultado = quantidade.innerHTML * preco.innerHTML.replace('R$ ', '').replace('.', '').replace(',', '.')
    total.innerHTML = `R$ ${resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
    somarTotal()
}}

function somarTotal(){ 
let soma = 0
for(let i = 1; i < 4; i++){
soma += Number(document.getElementById(`total${i}`).innerHTML.replace('R$ ', '').replace('.', '').replace(',', '.'))
document.getElementById('subtotal').innerHTML = `Subtotal: R$ ${soma.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
}}
