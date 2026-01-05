function showHome() {
    document.getElementById("home").classList.remove("hidden");
    document.getElementById("about").classList.add("hidden");
    document.getElementById("contact").classList.add("hidden");
}

function showAbout() {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("about").classList.remove("hidden");
    document.getElementById("contact").classList.add("hidden");
}

function showContact() {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("about").classList.add("hidden");
    document.getElementById("contact").classList.remove("hidden");
}

function searchBlog() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let homeSection = document.getElementById("home");
    let blogs = Array.from(document.querySelectorAll(".blog-card"));

    let matchedBlogs = [];
    let unmatchedBlogs = [];

    blogs.forEach(blog => {
        let title = blog.querySelector("h3").innerText.toLowerCase();

        if (title.includes(input)) {
            blog.style.display = "flex";
            matchedBlogs.push(blog);
        } else {
            blog.style.display = "none";
            unmatchedBlogs.push(blog);
        }
    });

    // Clear current order
    homeSection.innerHTML = "";

    // First add matched blogs
    matchedBlogs.forEach(blog => homeSection.appendChild(blog));

    // Then add unmatched blogs (hidden)
    unmatchedBlogs.forEach(blog => homeSection.appendChild(blog));
}

