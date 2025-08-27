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