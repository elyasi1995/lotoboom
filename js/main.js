import { onAuthStateChanged, getAuth} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, set, child, get, onValue, push, update } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { firebaseConfig } from "./config.js";
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseApps = initializeApp(firebaseConfig);
const auth = firebase.auth();

document.getElementById('active1').style.visibility = 'hidden';
document.getElementById('active2').style.visibility = 'hidden';
document.getElementById('active3').style.visibility = 'hidden';
document.getElementById('active4').style.visibility = 'hidden';
document.getElementById('active5').style.visibility = 'hidden';
document.getElementById('active6').style.visibility = 'hidden';
document.getElementById('active7').style.visibility = 'hidden';
document.getElementById('active8').style.visibility = 'hidden';




onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log(uid);
	//const username = user.email;
	const db = getDatabase();
	const auths = getAuth();
	return onValue(ref(db, uid), (snapshot) => {
		var balance = (snapshot.val() && snapshot.val().balance);
		document.getElementById('bal').innerHTML = balance;
		const v1 = (snapshot.val() && snapshot.val().level1);
		const v2 = (snapshot.val() && snapshot.val().level2);
		const v3 = (snapshot.val() && snapshot.val().level3);
		const v4 = (snapshot.val() && snapshot.val().level4);
		const v5 = (snapshot.val() && snapshot.val().level5);
		const v6 = (snapshot.val() && snapshot.val().level6);
		const v7 = (snapshot.val() && snapshot.val().level7);
		const v8 = (snapshot.val() && snapshot.val().level8);
		const task = (snapshot.val() && snapshot.val().task);
		const clock = (snapshot.val() && snapshot.val().clock);

var a;
var b;
document.getElementById('task').style.visibility = task;
document.getElementById('clock').style.visibility = clock;

if(v1 == 1){
			document.getElementById('active1').style.visibility = 'visible';
			document.getElementById('vip1btn').style.visibility = "hidden";
			b = 13;
}
if(v2 == 1){
			document.getElementById('active1').style.visibility = 'visible';
			document.getElementById('vip1btn').style.visibility = 'hidden';
			document.getElementById('active2').style.visibility = 'visible';
			document.getElementById('vip2btn').style.visibility = 'hidden';
			b = 30;
}
if(v3 == 1){
			document.getElementById('active1').style.visibility = 'visible';
			document.getElementById('vip1btn').style.visibility = 'hidden';
			document.getElementById('active2').style.visibility = 'visible';
			document.getElementById('vip2btn').style.visibility = 'hidden';
			document.getElementById('active3').style.visibility = 'visible';
			document.getElementById('vip3btn').style.visibility = 'hidden';
			b = 100;
}
if(v4 == 1){
			document.getElementById('active1').style.visibility = 'visible';
			document.getElementById('vip1btn').style.visibility = 'hidden';
			document.getElementById('active2').style.visibility = 'visible';
			document.getElementById('vip2btn').style.visibility = 'hidden';
			document.getElementById('active3').style.visibility = 'visible';
			document.getElementById('vip3btn').style.visibility = 'hidden';
			document.getElementById('active4').style.visibility = 'visible';
			document.getElementById('vip4btn').style.visibility = 'hidden';
			b = 200;
}
if(v5 == 1){
			document.getElementById('active1').style.visibility = 'visible';
			document.getElementById('vip1btn').style.visibility = 'hidden';
			document.getElementById('active2').style.visibility = 'visible';
			document.getElementById('vip2btn').style.visibility = 'hidden';
			document.getElementById('active3').style.visibility = 'visible';
			document.getElementById('vip3btn').style.visibility = 'hidden';
			document.getElementById('active4').style.visibility = 'visible';
			document.getElementById('vip4btn').style.visibility = 'hidden';
			document.getElementById('active5').style.visibility = 'visible';
			document.getElementById('vip5btn').style.visibility = 'hidden';
			b = 500;
}
if(v6 == 1){
			document.getElementById('active1').style.visibility = 'visible';
			document.getElementById('vip1btn').style.visibility = 'hidden';
			document.getElementById('active2').style.visibility = 'visible';
			document.getElementById('vip2btn').style.visibility = 'hidden';
			document.getElementById('active3').style.visibility = 'visible';
			document.getElementById('vip3btn').style.visibility = 'hidden';
			document.getElementById('active4').style.visibility = 'visible';
			document.getElementById('vip4btn').style.visibility = 'hidden';
			document.getElementById('active5').style.visibility = 'visible';
			document.getElementById('vip5btn').style.visibility = 'hidden';
			document.getElementById('active6').style.visibility = 'visible';
			document.getElementById('vip6btn').style.visibility = 'hidden';
			b = 1500;
}
if(v7 == 1){
			document.getElementById('active1').style.visibility = 'visible';
			document.getElementById('vip1btn').style.visibility = 'hidden';
			document.getElementById('active2').style.visibility = 'visible';
			document.getElementById('vip2btn').style.visibility = 'hidden';
			document.getElementById('active3').style.visibility = 'visible';
			document.getElementById('vip3btn').style.visibility = 'hidden';
			document.getElementById('active4').style.visibility = 'visible';
			document.getElementById('vip4btn').style.visibility = 'hidden';
			document.getElementById('active5').style.visibility = 'visible';
			document.getElementById('vip5btn').style.visibility = 'hidden';
			document.getElementById('active6').style.visibility = 'visible';
			document.getElementById('vip6btn').style.visibility = 'hidden';
			document.getElementById('active7').style.visibility = 'visible';
			document.getElementById('vip7btn').style.visibility = 'hidden';
			b = 5000;
}
if(v8 == 1){
			document.getElementById('active1').style.visibility = 'visible';
			document.getElementById('vip1btn').style.visibility = 'hidden';
			document.getElementById('active2').style.visibility = 'visible';
			document.getElementById('vip2btn').style.visibility = 'hidden';
			document.getElementById('active3').style.visibility = 'visible';
			document.getElementById('vip3btn').style.visibility = 'hidden';
			document.getElementById('active4').style.visibility = 'visible';
			document.getElementById('vip4btn').style.visibility = 'hidden';
			document.getElementById('active5').style.visibility = 'visible';
			document.getElementById('vip5btn').style.visibility = 'hidden';
			document.getElementById('active6').style.visibility = 'visible';
			document.getElementById('vip6btn').style.visibility = 'hidden';
			document.getElementById('active7').style.visibility = 'visible';
			document.getElementById('vip7btn').style.visibility = 'hidden';
			document.getElementById('active8').style.visibility = 'visible';
			document.getElementById('vip8btn').style.visibility = 'hidden';
			b = 15000;
}

setInterval(function time(){
  var d = new Date();
  var hours = 0 + d.getHours();
  var min = 0 + d.getMinutes();
  if((min + '').length == 1){
    min = '0' + min;
  }
  var sec = 0 + d.getSeconds();
  if((sec + '').length == 1){
        sec = '0' + sec;
  }
  
  
  if (hours == 23 & min == 59 & sec == 59){
	document.getElementById('task').style.visibility = 'visible';
	document.getElementById('clock').style.visibility = 'hidden';
	update(ref(db, uid),{
		task: "visible",
		clock: "hidden",
	},);
}
else{
const button = document.getElementById("task");
button.addEventListener("click", function() {
    // Submit form
	let bl = (snapshot.val() && snapshot.val().b);
	let parcent = (15 / 100) * bl;
	let bal = balance + parcent;
	document.getElementById('task').style.visibility = 'hidden';
	document.getElementById('clock').style.visibility = 'visible';
	update(ref(db, uid),{
		task: "hidden",
		clock: "visible",
		balance: bal,
		
	},);
}, {once : true});
}

  jQuery('#clock p').html('<span>'+hours+'</span><span class="min">'+min+'<br></span><span class="seg">'+sec+'</span>')
}, 1000);


const anchors = document.querySelectorAll('button');

anchors.forEach(anchor => {
  anchor.addEventListener('click', () => {
    const id = anchor.id;
    switch(id){
    case 'vip1btn':
		if(balance < 13){
			
			}
		else
		{

			balance = balance - 13;
			a = 1;
			update(ref(db, uid),{
				balance: balance,
				level1 :  a,
				b: 13,
			})
			}
        break;
    case 'vip2btn':
			
			if (v1 == 1){
			var k = 17;
			}
			else
			{
			k = 30
			}
		if(balance < k){
			
			
			}
		else
		{
			a = 1;
			balance = balance - k;
			update(ref(db, uid),{
				balance: balance,
				level2 :  a,
				b: 30,
			})
        }
		break;
    case 'vip3btn':
		if (v2 == 1){
			var k = 70;
			}
			else
			{
			k = 100
			}
		if(balance < k){
			
			}
		else
		{
			a = 1;
			balance = balance - k;
			update(ref(db, uid),{
				balance: balance,
				level3 :  a,
				b: 100,
			})
			}
        break;
	case 'vip4btn':
		if (v3 == 1){
			var k = 100;
			}
			else
			{
			k = 200
			}
		if(balance < k){
			
			}
		else
		{
			a = 1;
			balance = balance - k;
			update(ref(db, uid),{
				balance: balance,
				level4 :  a,
				b: 200,
			})
		}
        break;
	case 'vip5btn':
		if (v4 == 1){
			var k = 300;
			}
			else
			{
			k = 500
			}
		if(balance < k){
			
			}
		else
		{
			a = 1;
			balance = balance - k;
			update(ref(db, uid),{
				balance: balance,
				level5 :  a,
				b: 500,
			})
			}
        break;
	case 'vip6btn':
		if (v5 == 1){
			var k = 1000;
			}
			else
			{
			k = 1500
			}
		if(balance < k ){
			
			}
		else
		{
			a = 1;
			balance = balance - k;
			update(ref(db, uid),{
				balance: balance,
				level6 :  a,
				b: 1500,
			})
			}
        break;
	case 'vip7btn':
		if (v6 == 1){
			var k = 3500;
			}
			else
			{
			k = 5000
			}
		if(balance < k){
			
			}
		else
		{
			a = 1;
			balance = balance - k;
			update(ref(db, uid),{
				balance: balance,
				level7 :  a,
				b: 5000,
			})
			}
        break; 
	case 'vip8btn':
		if (v7 == 1){
			var k = 10000;
			}
			else
			{
			k = 15000
			}
		if(balance < k){
			
			
			}
		else
		{
			a = 1;
			balance = balance - k;
			update(ref(db, uid),{
				balance: balance,
				level8 :  a,
				b: 15000,
			})
        }
		break;
    }
	
  });
});
		
}, );
			}
			else {
    // User is signed out
	location.href = "index.html";
    // ...
  }
	}, ); 
	



const back = document.getElementById("back");
back.addEventListener('click', () => {
	location.href = "home.html";
})







