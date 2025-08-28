// Heart count
function heart(id){
    const getheart=parseInt(document.getElementById(id).innerText)
    const update=getheart+1
    return document.getElementById(id).innerText=update
}
let getHeart=document.querySelectorAll(".heart")
for(let hearts of getHeart){
    hearts.addEventListener("click", function(){
        heart("heart-count")
    })
}

// Call Button
function makecall(button,id){

    const card=button.closest(".card")
    const serviceName=card.querySelector(".service-name").innerText
    const serviceNo=card.querySelector(".service-no").innerText
    
    
    const coins=parseInt(document.getElementById(id).innerText)
    
    if(coins>=20){
        let updatecoin=coins-20
        document.getElementById(id).innerText=updatecoin
        alert(`📞 calling ${serviceName} ${serviceNo}...`)
    }
    else{
        alert(`❌ You do not have sufficient coins, need 20 coins to call...`)
    }
}

// document.getElementById("call-btn").addEventListener("click", function(){})

let calls=document.querySelectorAll(".call-btn")
for(let call of calls){
    call.addEventListener("click", function(){
        makecall(this,"coins")
    })
}