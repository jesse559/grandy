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
xbtn.addEventListener('click', hide_box);

function hide_box(e){
	signUpBox.style.opacity = '0';
	signUpBox.style.visibility = 'hidden';
}

function isParent(child, parent){
	while (child.parentElement != null){
		if (child == parent){
			return true;
		}
		child = child.parentElement;
	}
	return false;
}

var first = false;
var reached = false;
var old_html;
var pp = document.querySelector('.landing p');
window.addEventListener('keydown', function(e){
	console.log(e.key);
	if (e.keyCode == 27){
		hide_box();
	}

		if (e.keyCode == 27){
			first = false;
			landingh1.innerHTML = '> Enter ...';
			if (reached){
				pp.innerHTML = old_html; 
				reached = false;
			}
		}
	if(!(e.ctrlKey || e.altKeyy || e.metaKey) && e.key.length < 2){

		if (first == false){
			landingh1.innerHTML = '';
			first = true;
		}
		if (e.key.length < 2 && landingh1.innerHTML.length < 20){
			landingh1.innerHTML += e.key;
		}


		e.preventDefault();
	}	

	if (landingh1.innerHTML.length >= 20){
		if (!reached){
			reached = true;
			old_html = pp.innerHTML;
			pp.innerHTML = 'Max Characters Reached!';
		}

	}
});

document.body.addEventListener('click', function(e){
	console.log(e);
	if (!isParent(e.target, signUpBox) && e.target != signUpBtn){
		hide_box(e);
	}
});

const landingh1 = document.querySelector('.landing h1');

