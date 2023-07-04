let formulario = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");



formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
    formValidation();
  });
  

  let formValidation = () => {
    if (input.value === "") {
      msg.innerHTML = "Post cannot be blank";
    } else {
      msg.innerHTML = "";
      acceptData();
    }
  };

  // Aceptar campos de entrada
let data = {};

let acceptData = () => {
    data["text"] = input.value;
    createPost();
  };


  //Crear post
  let postCount = 0;

  let createPost = () => {
    postCount++;
    posts.innerHTML += `
    <div class="posteo post-${postCount}">
      <p>${data.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `;
    input.value = "";

    setTimeout(() => {
      const newPost = document.querySelector(`.post-${postCount}`);
      newPost.classList.add('show');
    }, 100);
  }

  let deletePost = (e) => {
    // Salta dos niveles para borrar el div abuelo
    e.parentElement.parentElement.remove();
  };

  let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
  };