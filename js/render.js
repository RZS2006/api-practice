// Selectors

const alertContainer = document.querySelector("#alert-container");
const alertMessage = document.querySelector("#alert-message");
const apiContainer = document.querySelector("#api-container");

// Functions

const renderStatus = (status) => {
    if (!status) return

    alertContainer.classList.remove("success")
    alertContainer.classList.remove("error")
    alertContainer.classList.remove("waiting")
    apiContainer.innerHTML = ""
    apiContainer.style.display = "none";

    if (status === "waiting") {
        alertContainer.classList.add("waiting");
        alertMessage.innerText = "Waiting for Response...";
    } else if (status === "success") {
        alertContainer.classList.add("success");
        alertMessage.innerText = "Request Successful! Check the console.";

    } else if (status === "error") {
        alertContainer.classList.add("error");
        alertMessage.innerText = "Request Rejected! Check the console.";
    }
}

const renderData = (data) => {
    let output = "";

    for (let i = 0; i < Math.min(10, data.length); i++) {
        let item = data[i];
        let itemHTML = `<div class="api-item"><h4>${item.title}</h4><p>${item.body}</p></div>`
        output += itemHTML
    }

    apiContainer.innerHTML = output;
    apiContainer.style.display = "block";
}