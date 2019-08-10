const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

const signUpBtn = document.getElementById('sign-up-btn');
const signUpBox =  document.getElementById('container').parentElement;

signUpBtn.addEventListener('click', () => {
    signUpBox.style.visibility = 'visible';
    signUpBox.style.opacity = '1';

})

const xbtn = document.querySelector('.x-btn');
xbtn.addEventListener('click', function(){
    signUpBox.style.opacity = '0';
    signUpBox.style.visibility = 'hidden';
});

function isParent(child, parent){
    while (child.parentElement != null){
        if (child == parent){
            return true;
        }
        child = child.parentElement;
    }
    return false;
}

document.body.addEventListener('click', function(e){
    console.log(e);
    if (e.target.contains(signUpBox))alert('sdf');
})