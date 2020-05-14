// Selectors

const xmlGetBtn = document.querySelector("#btn-get-xml");
const xmlPostBtn = document.querySelector("#btn-post-xml");

const inputTitle = document.querySelector("#post-input-title");
const inputMessage = document.querySelector("#post-input-message");

// Functions

const xmlRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.responseType = "json";

        if (data) {
            xhr.setRequestHeader('Content-type', 'application/json');
        }

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status <= 299) {
                resolve(xhr.response)
            } else {
                reject(xhr.response)
            }  
        }

        xhr.onerror = () => {
            reject(xhr.response)
        }

        xhr.send(JSON.stringify(data))
    });
    return promise
};

const xmlGet = async () => {
    // const a = performance.now();
    renderStatus("waiting")
    try {
        const res = await xmlRequest("GET", "https://jsonplaceholder.typicode.com/posts")
        console.log(res)
        // Change Alert Container and Message
        renderStatus("success")
        // Display Results
        renderData(res)
    } catch (err) {
        console.log(err)
        // Change Alert Container and Message
        renderStatus("error")
    }
    // const b = performance.now();
    // console.log(b-a)
};

const xmlPost = async () => {
    // const a = performance.now();
    renderStatus("waiting")
    const title = inputTitle.value;
    const message = inputMessage.value;

    if (!title || !message) {
        renderStatus("error")
        console.log("Enter a title and message");
        return
    }

    const data = { title: title, body: message }

    try {
        const res = await xmlRequest("POST", "https://jsonplaceholder.typicode.com/posts", data)
        console.log(res)
        // Change Alert Container and Message
        renderStatus("success")
        // Display Results
        resArr = [];
        resArr.push(res)
        renderData(resArr)
    } catch (err) {
        console.log(err)
        // Change Alert Container and Message
        renderStatus("error")
    }
    // const b = performance.now();
    // console.log(b-a)
};

// Event Listeners

xmlGetBtn.addEventListener("click", xmlGet)
xmlPostBtn.addEventListener("click", xmlPost)
