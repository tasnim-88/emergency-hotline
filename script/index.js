// Heart count
function heart(id) {
    const getheart = parseInt(document.getElementById(id).innerText)
    const update = getheart + 1
    return document.getElementById(id).innerText = update
}
let getHeart = document.querySelectorAll(".heart")
for (let hearts of getHeart) {
    hearts.addEventListener("click", function () {
        heart("heart-count")
    })
}

// Call Button
function makecall(button, id) {

    const card = button.closest(".card")
    const serviceName = card.querySelector(".service-name").innerText
    const serviceNo = card.querySelector(".service-no").innerText


    const coins = parseInt(document.getElementById(id).innerText)
    // Time
    const now = new Date()
    const time = now.toLocaleTimeString()
    let getCard = document.getElementById("add-card")

    if (coins >= 20) {
        let updatecoin = coins - 20
        document.getElementById(id).innerText = updatecoin
        alert(`📞 calling ${serviceName} ${serviceNo}...`)
        let newdiv = document.createElement("div")
        newdiv.innerHTML = `
                    <div class="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                        <div>
                            <p class="font-medium">${serviceName}</p>
                            <span class="text-sm text-gray-500">${serviceNo}</span>
                        </div>
                        <span class="text-xs text-gray-400">${time}</span>
                    </div>
    `
        getCard.append(newdiv)
    }
    else {
        alert(`❌ You do not have sufficient coins, need 20 coins to call...`)
    }

}
let calls = document.querySelectorAll(".call-btn")
for (let call of calls) {
    call.addEventListener("click", function () {
        makecall(this, "coins")
    })
}

// Clear button
const clear=document.getElementById("clear-btn")
const empty=document.getElementById("add-card")
clear.addEventListener("click",function(){
    empty.innerHTML=''
})

// Copy button
function copies(id) {
    const getCopy = parseInt(document.getElementById(id).innerText);
    const update = getCopy + 1;
    document.getElementById(id).innerText = update;
}

let copyButtons = document.querySelectorAll(".copy-btn");

for (let button of copyButtons) {
    button.addEventListener("click", function () {
        const card = button.closest(".card");
        if (!card) return;

        const textElement = card.querySelector(".service-no");
        if (!textElement) return;

        const text = textElement.innerText.trim();

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text)
                .then(() => {
                    copies("copy-count");
                    alert(`Copied: ${text}`);
                })
                .catch(() => {
                    alert("Copy failed. Please try again.");
                });
        } else {
            const ta = document.createElement("textarea");
            ta.value = text;
            ta.style.position = "fixed";
            ta.style.left = "-9999px";
            document.body.appendChild(ta);
            ta.select();
            try {
                document.execCommand("copy");
                copies("copy-count");
                alert(`Copied: ${text}`);
            } catch {
                alert("Copy failed. Please try again.");
            } finally {
                ta.remove();
            }
        }
    });
}

