fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => displayPost(data))

function displayPost(posts){
    let postContainer = document.getElementById("post-container");
    for(let post of posts){
        let div = document.createElement("div");
        div.classList.add("post");
        div.innerHTML = `
        <h3>User ID : ${post.userId}</h3>
        <h3>ID : ${post.id}</h3>
        <h3>Title : ${post.title}</h3>
        <p>body : ${post.body}</p>
        `
        postContainer.appendChild(div);
    }
}