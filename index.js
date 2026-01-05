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
    let blogs = document.querySelectorAll(".blog-card");

    blogs.forEach(blog => {
        let title = blog.querySelector("h3").innerText.toLowerCase();
        blog.style.display = title.includes(input) ? "flex" : "none";
    });
}
