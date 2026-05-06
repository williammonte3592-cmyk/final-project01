document.addEventListener("DOMContentLoaded"), function () {
    const commentForm = document.querySelector('.comment-form');

    if (!commentForm) {
        console.warn("comment form not found.");
        return
    }

}


commentForm.addEventListener('submit', function (e)); {
e.preventdefault();

const nameinput = this.querySelector('input[placeholder="Enter Name"]');
const emailinput = this.querySelector('input[placeholder="Enter email"]')
const commentArea = this.querySelector('textarea');

const nameinput = nameinput.value.trim();
const email = emailinput.value.trim();
const comment = commentArea.value.trim()

if (!name) {
    showalert('please enter your name.', 'error');
    nameinput.focus();
    return;
}

if (!email || !isvalidEmail(email)){
    showalert('please enter a valid email address.', 'error');
    emailinput.focus();
    return;
}if (!comment){
    showalert('please write a comment before posting.', 'error');
    commentArea.focus();
    return;

}
showalert('Thank you,${name}! Your comment has been posted.', 'success');
commentForm.reset();

}