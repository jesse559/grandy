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

let header = document.querySelector('.header');

let invis = document.querySelector('.invisible');
let last_scrollY = window.scrollY;
let scrolling = false;
window.addEventListener('scroll', (e) => {
	if (last_scrollY == window.scrollY){
		return;
	}

	if (last_scrollY > window.scrollY){
		//scroll up`
		if (!scrolling){
			window.scroll({top:0, left:0, behavior:'smooth'});
			scrolling = true;
		}
	}else{
		//scroll down
		if (!scrolling && window.scrollY < header.clientHeight){
			window.scroll({top: header.clientHeight, left:0, behavior:'smooth'});
			scrolling = true;
		}

	}
	if (window.scrollY == header.clientHeight || window.scrollY == 0){
		scrolling = false;
	}
	last_scrollY = window.scrollY;

	if (isInViewport(invis)){
		invis.style.visibility = 'visible';
		invis.style.left = '0';
		invis.style.opacity = 1;
	}else{
		invis.style.visibility = 'hidden';
		invis.style.opacity = 0;
		invis.style.left = '500px';
	}
});
function isInViewport(el) {

    const rect = el.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}
function isInView(element){
	// Get it's position in the viewport
	var bounding = element.getBoundingClientRect();
	if (
		bounding.top >= 0 &&
		bounding.left >= 0 &&
		bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
		bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
	) {
		return true;
	} else {
		return false;
	}
}