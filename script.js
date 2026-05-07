document.addEventListener("DOMContentLoaded", () => {
  const commentForm = document.querySelector(".comment-form");

  if (commentForm) {
    commentForm.addEventListener("submit", function (event) {
      event.preventDefault();


      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const comment = document.querySelector("textarea").value.trim();

        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("comment",comment)



      if (name === "" || email === "" || comment === "") {
        alert("Please fill in all fields before posting.");
        return;
      }

      

      alert("Thank you, " + name + "! Your comment has been shared.");

      commentForm.reset();
    });
  }
});
