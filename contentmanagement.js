// Dummy data for blog posts (you would typically fetch from a database)
const blogPosts = [
    { title: "First Post", content: "This is my first blog post.", image: "image1.jpg" },
    { title: "Second Post", content: "Here's my second post.", image: "image2.jpg" }
];

function createBlogPost() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const image = document.getElementById("image").value;

    const newPost = { title, content, image };
    blogPosts.push(newPost);

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
    document.getElementById("image").value = "";

    refreshBlogPosts();
}

function refreshBlogPosts() {
    const postsDiv = document.getElementById("posts");
    postsDiv.innerHTML = "";

    blogPosts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.className = "blog-post card my-2";
        postDiv.innerHTML = `
            <img src="${post.image}" class="card-img-top" alt="${post.title}">
            <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${post.content}</p>
            </div>
        `;

        postsDiv.appendChild(postDiv);
    });
}

// Initial display of blog posts
refreshBlogPosts();
