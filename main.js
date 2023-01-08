
const bill = document.getElementById('Bill');
const people=document.getElementById('People')

const botones=document.getElementById('botones')
const btn5 = document.getElementById('btn5')
const btn10 = document.getElementById('btn10')
const btn15 = document.getElementById('btn15')
const btn25 = document.getElementById('btn25')
const btn50=document.getElementById('btn50')
const custom=document.getElementById('Custom')
const reset=document.getElementById('Reset')

const tipamount=document.getElementById('tipAmount')
const total=document.getElementById('Total')

let porcentaje
let factura
let Npeople

if(bill.value==""&&people.value==""){
    factura=0
    Npeople=0
}

custom.addEventListener('input',e=>{
    porcentaje=custom.value/100
})

botones.addEventListener("click",e=>{
    if(e.target.innerText=="5%"){
        porcentaje=0.05
    }else if(e.target.innerText=="10%"){
        porcentaje=0.10
    }else if(e.target.innerText=="15%"){
        porcentaje=0.15
    }else if(e.target.innerText=="25%"){
        porcentaje=0.25
    }else if(e.target.innerText=="50%"){
        porcentaje=0.50
    }else if(e.target.innerText=="5%\n10%\n15%\n25%\n50%"){
        porcentaje=0
    }  
   
})

people.addEventListener('input', e => {
    let tip
    let facturaP
    factura = bill.value
    Npeople = people.value
    tip = factura * porcentaje
    tip = (tip / Npeople).toFixed(2)
    facturaP=(factura/Npeople).toFixed(2)
    tipamount.innerHTML = `<p class="text-3xl text-Strongcyan">$${tip}</p>`
    total.innerHTML=`<p class="text-3xl text-Strongcyan">$${facturaP}</p>`
})

reset.addEventListener('click',e=>{
    bill.value=""
    people.value=""
    custom.value=""
    tipamount.innerHTML = `<p class="text-3xl text-Strongcyan">$0.00</p>`
    total.innerHTML=`<p class="text-3xl text-Strongcyan">$0.00</p>`
})


// function calculoP(porcentaje){
//     let factura
//     let Npeople
//     let total=0
//     
//     factura=bill.value
//     Npeople=people.value
//     total=factura*porcentaje
//     total=(total/Npeople).toFixed(2)
//     console.log(total)
//     tipamount.innerHTML=`<p class="text-3xl text-Strongcyan">$${total}</p>`

// }


