const validPin = 1234
const transactionData = []

function getInputValueNumber(id) {
    const inputfieldValueNumber = parseInt(document.getElementById(id).value)
    return inputfieldValueNumber
}
function getInputValue(id) {
    const inputfieldValueNumber = document.getElementById(id).value
    return inputfieldValueNumber
}
function getInputValueInnerText(id) {
    const inputfieldValueNumber = document.getElementById(id).innerText
    return inputfieldValueNumber
}

document.getElementById("add-money-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const bank = getInputValue("bank")
    const accountNumber = getInputValue("account-number")
    const pinNum = getInputValueNumber("add-pin")
    const addAmount = getInputValueNumber("add-amount")
    const availableBalance = parseInt(getInputValueInnerText("available-balance"))
    const totalNewAvailableBalance = availableBalance + addAmount
    if (!accountNumber || !addAmount || !pinNum) {
        alert("Please fill in all fields");
        return;
    }
    if (accountNumber.length < 11) {
        alert("Please add valid account number")
        return
    }
    if (pinNum != validPin) {
        alert("Please add valid pin number")
        return
    }
    if (addAmount < 0) {
        alert("Invalid Amount")
        return
    }
    document.getElementById("available-balance").innerText = totalNewAvailableBalance
    const data = {
        name:"Add-Money",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
})
document.getElementById("cash-out-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const agentAccountNumber = getInputValue("agent-account-number")
    const cashoutPinNum = getInputValueNumber("add-cashout-pin")
    const withdrawAmount = getInputValueNumber("add-withdraw-amount")
    const availableBalance = parseInt(getInputValueInnerText("available-balance"))
    const totalNewAvailableBalance = availableBalance - withdrawAmount
    if (!agentAccountNumber || !withdrawAmount || !cashoutPinNum) {
        alert("Please fill in all fields");
        return;
    }
    if (agentAccountNumber.length < 11) {
        alert("Please add valid account number")
        return
    }
    if (withdrawAmount > availableBalance) {
        alert("Insufficient balance")
        return
    }
    if (cashoutPinNum != validPin) {
        alert("Please add valid pin number")
        return
    }
    if (withdrawAmount < 0) {
        alert("Invalid Amount")
        return
    }
    document.getElementById("available-balance").innerText = totalNewAvailableBalance
    const data = {
        name:"Cash-Out",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
})
document.getElementById("transfer-money-btn").addEventListener('click', function (e) {
    e.preventDefault()
    const transferAccountNumber = getInputValue("transfer-account-number")
    const transferAmount = getInputValueNumber("transfer-amount")
    const transferPin = getInputValueNumber("transfer-pin")
    const availableBalance = parseInt(getInputValueInnerText("available-balance"))
    const totalNewAvailableBalance = availableBalance - transferAmount
    if (!transferAccountNumber || !transferAmount || !transferPin) {
        alert("Please fill in all fields");
        return;
    }
    if (transferAccountNumber.length < 11) {
        alert("Please add valid account number")
        return
    }
    if (transferAmount > availableBalance) {
        alert("Insufficient balance")
        return
    }
    if (transferAmount < 0) {
        alert("Invalid Amount")
        return
    }
    if (transferPin != validPin) {
        alert("Please add valid pin number")
        return
    }
    document.getElementById("available-balance").innerText = totalNewAvailableBalance
    const data = {
        name:"Money-Transfer",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
})
document.getElementById("pay-bill-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const billerBank = getInputValue("biller-bank")
    const billerAccountNumber = getInputValue("biller-account-number")
    const billerPinNum = getInputValueNumber("biller-pin")
    const payBillAmount = getInputValueNumber("bill-amount")
    const availableBalance = parseInt(getInputValueInnerText("available-balance"))
    const totalNewAvailableBalance = availableBalance - payBillAmount
    if (!billerAccountNumber || !payBillAmount || !billerPinNum) {
        alert("Please fill in all fields");
        return;
    }
    if (billerAccountNumber.length < 11) {
        alert("Please add valid account number")
        return
    }
    if (billerPinNum != validPin) {
        alert("Please add valid pin number")
        return
    }
    if (payBillAmount > availableBalance) {
        alert("Insufficient balance")
        return
    }
    if (payBillAmount < 0) {
        alert("Invalid Amount")
        return
    }
    document.getElementById("available-balance").innerText = totalNewAvailableBalance
    const data = {
        name:"Pay-Bill",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
})
document.getElementById("transactions").addEventListener("click", function(){
    const transactionContainer = document.getElementById("transaction-container")
    transactionContainer.innerText = ""
    for(const data of transactionData){
        const div = document.createElement("div")
        div.innerHTML = `
        <div class="rounded-xl bg-white p-3 flex justify-between items-center">
                <div class="flex items-center gap-5">
                    <div class="p-3 rounded-full bg-gray-200 ">
                        <img src="/Payoo-MFS-Resources/assets/wallet1.png" alt="">
                    </div>
                    <div>
                        <h1 class="font-bold">${data.name}</h1>
                        <p>${data.date}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis rotate-90"></i>
            </div>
        `
        transactionContainer.appendChild(div)
    }
})
const sections = document.querySelectorAll(".section")

function hideAll(active) {
    sections.forEach(section => {
        section.style.display = "none"
    })

    document.querySelectorAll(".activeBtn").forEach(button => {
        button.classList.remove("active")
    })

    document.getElementById(active).classList.add("active")
}
document.getElementById("add-money").addEventListener("click", function () {
    hideAll("add-money")
    document.getElementById("add-money-parent").style.display = "block"
})
document.getElementById("cash-out").addEventListener("click", function () {
    hideAll("cash-out")
    document.getElementById("cash-out-parent").style.display = "block"
})
document.getElementById("transfer-money").addEventListener("click", function () {
    hideAll("transfer-money")
    document.getElementById("transfer-money-parent").style.display = "block"
})
document.getElementById("pay-bill").addEventListener("click", function () {
    hideAll("pay-bill")
    document.getElementById("pay-bill-parent").style.display = "block"
})
document.getElementById("get-bonus").addEventListener("click", function () {
    hideAll("get-bonus")
    document.getElementById("get-bonus-parent").style.display = "block"
})
document.getElementById("transactions").addEventListener("click", function () {
    hideAll("transactions")
    document.getElementById("transaction-parent").style.display = "block"
})
document.getElementById("log-out").addEventListener("click",function(){
    window.location.href="./index.html"
})