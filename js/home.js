let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}
import { onAuthStateChanged, getAuth} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, set, child, get, onValue, update } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { firebaseConfig } from "./config.js";
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseApps = initializeApp(firebaseConfig);
const auth = firebase.auth();

const signoutBtn = document.querySelector('#signoutbtn');
signoutBtn.addEventListener('click', () => {
  auth.signOut()
    .then(() => {
      console.log('User signed out successfully');
      location.href = "index.html";
    })
    .catch((error) => {
      alert('Error signing out: ', error);
    });

});
let btns = document.querySelectorAll("#task"), btn = null;

for (let i = 0; i < btns.length; i += 1) {
    btns[i].onclick = function () {

        this.setAttribute('data-clicks', Number(this.getAttribute('data-clicks')) + 1)

        if (this.getAttribute('data-clicks') === '1') {
            this.setAttribute('disabled', 'disabled');
        }
    }
}


document.getElementById('back').style.visibility = 'hidden';
const mainForm = document.querySelector('.main.form');
const withdrawForm = document.querySelector('.withdraw.form');
const depositFrom = document.querySelector('.deposit.form');
const back = document.getElementById('back');
const anchors = document.querySelectorAll('a');
mainForm.style.display = 'block';
withdrawForm.style.display = 'none';
depositFrom.style.display = 'none';
anchors.forEach(anchor => {
  anchor.addEventListener('click', () => {
    const id = anchor.id;
    switch(id){
    case 'Qr':
        mainForm.style.display = 'none';
        withdrawForm.style.display = 'none';
        depositFrom.style.display = 'block';
		document.getElementById('back').style.visibility = 'visible';

        break;
	case 'wi':
        mainForm.style.display = 'none';
        depositFrom.style.display = 'none';
		withdrawForm.style.display = 'block';
		document.getElementById('back').style.visibility = 'visible';
        break;
		
	case 'back':
		mainForm.style.display = 'block';
        depositFrom.style.display = 'none';
		withdrawForm.style.display = 'none';
		document.getElementById('back').style.visibility = 'hidden';
		break;
		}
		  });
});
window.onbeforeunload = function(){

		mainForm.style.display = 'block';
        depositFrom.style.display = 'none';
		withdrawForm.style.display = 'none';
		document.getElementById('back').style.visibility = 'hidden';
}
const form = document.querySelector("#Form");
const qrCode = document.querySelector("#qr-code");

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
	

    const uid = user.uid;
    console.log(uid);
	//const username = user.email;
	const db = getDatabase();
	const auths = getAuth();
	const apply = document.getElementById("apply");

  apply.addEventListener('click', () => {
		  const waddress = document.getElementById("waddress").value;
			update(ref(db, uid),{
				waddress: waddress,
			})
			console.log(waddress);
			const input = document.getElementById ("waddress");
			input.placeholder = waddress;
         //document.getElementById('waddress')[0].placeholder= waddress;
	  
	  
  },);
	return onValue(ref(db, uid), (snapshot) => {
		const username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
		document.getElementById('usrid').innerHTML = username;
		const balance = (snapshot.val() && snapshot.val().balance);
		document.getElementById('bal').innerHTML = balance;
		const address = (snapshot.val() && snapshot.val().address);
		document.getElementById('address').innerHTML = address;
		const a = (snapshot.val() && snapshot.val().waddress);
		document.getElementById("waddress").value = a;
		
		const widthbtn = document.getElementById("widthbtn");
		
		widthbtn.addEventListener('click', () => {
			var wamount = document.getElementById("wamount").value;
			if(wamount > balance){
			alert("Enter valid amount")
			}
			else{
			let w;			
			w =  balance - wamount;
			update(ref(db, uid),{
				balance: w,
				widthamount: wamount,
			})
			}
			document.getElementById('wamount').value = "";
		
		})
		const url = address;
		const generateQrCode = (url) => {
		const qr = new QRCode(document.getElementById("qr-code"), {
			text: url,
			width: 300,
			height: 300,
		});
};

const clearQR = () => {
  qrCode.innerHTML = "";
};

generateQrCode(url);
		// ...
			}, );
	} 
	
else {
    // User is signed out
	location.href = "index.html";
    // ...
  }

});
const inputField = document.getElementById("wamount");
inputField.onkeydown = (event) => {
  // Only allow if the e.key value is a number or if it's 'Backspace'
  if(isNaN(event.key) && event.key !== 'Backspace') {
    event.preventDefault();
  }
};

