// updates is already defined as an array of post objects
var section = document.getElementById("updates");
for(var i = 0; i < updates.length; i++) {
    var post = updates[i];
    var postWrapper = document.createElement("section");
    postWrapper.className = "post";
    section.appendChild(postWrapper);

    var title = document.createElement("div");
    title.className = "post-title";
    title.innerHTML = post.title;
    postWrapper.appendChild(title);

    var date = document.createElement("div");
    date.className = "post-date";
    date.innerHTML = post.date;
    postWrapper.appendChild(date);

    var content = document.createElement("div");
    content.className = "post-content";
    content.innerHTML = post.content;
    postWrapper.appendChild(content);
}