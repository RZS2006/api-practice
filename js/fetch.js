// Selectors

const fetchGetBtn = document.querySelector("#btn-get-fetch");
const fetchPostBtn = document.querySelector("#btn-post-fetch");

// const inputTitle = document.querySelector("#post-input-title");
// const inputMessage = document.querySelector("#post-input-message");

// Functions

const fetchGet = async () => {
    // const a = performance.now();
    renderStatus("waiting")
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (res.ok) {
            const json = await res.json()
            console.log(json)
            // Change Alert Container and Message
            renderStatus("success")
            // Display Results
            renderData(json)
        } else {
            throw new Error("Request Failed!")
        }
    } catch (err) {
        console.log(err)
        // Change Alert Container and Message
        renderStatus("error")
    }
    // const b = performance.now();
    // console.log(b-a)
}

const fetchPost = async () => {
    // const a = performance.now();
    renderStatus("waiting")
    const title = inputTitle.value;
    const message = inputMessage.value;

    if (!title || !message) {
        renderStatus("error")
        console.log("Enter a title and message");
        return
    }

    const data = { title: title, body: message };

    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": 'application/json'
            }
        })
        if (res.ok) {
            const json = await res.json()
            console.log(json);
            // Change Alert Container and Message
            renderStatus("success")
            // Display Results
            jsonArr = [];
            jsonArr.push(json)
            renderData(jsonArr)
        } else {
            throw new Error("Request Failed!")
        }
    } catch (err) {
        console.log(err)
        // Change Alert Container and Message
        renderStatus("error")
    }
    // const b = performance.now();
    // console.log(b-a)
}

// Event Listeners

fetchGetBtn.addEventListener("click", fetchGet)
fetchPostBtn.addEventListener("click", fetchPost)