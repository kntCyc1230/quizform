console.log("fuck niggers")

//interface variables
let ansForm = document.querySelector(".ansForm");
let strtButton = document.querySelector(".strtButton");
let btnDiv = document.querySelector(".btnDiv");
let body = document.getElementById("body")
let link = document.querySelector(".subBtn");
let results = document.querySelector(".theResults");
let backBtn = document.querySelector("#backBtn");
let elementInput = document.querySelectorAll('input[type="radio"]');
let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let coverRes2 = document.querySelector(".coverRes2");
let coverRes3 = document.querySelector(".coverRes3");
let coverRes = document.querySelector(".coverRes");
let gbackBtn = document.getElementById("gbackBtn");


//score variables
let scorerh1 = document.getElementById("scorerh1");
let score = 0;
let answer1 = document.getElementById("rd2");

//questions variables
let q1 = "";
let q2 = "";
let q3 = "";
let q4 = "";
let q5 = "";
let q6 = "";
let q7 = "";
let q8 = "";
let q9 = "";
let q10 = "";

//correct and user answer variables
let usrAns = document.getElementById("urAns");
let usrAns2 = document.getElementById("urAns2");
let usrAns3 = document.getElementById("urAns3");
let usrAns4 = document.getElementById("urAns4");
let usrAns5 = document.getElementById("urAns5");
let usrAns6 = document.getElementById("urAns6");
let usrAns7 = document.getElementById("urAns7");
let usrAns8 = document.getElementById("urAns8");
let usrAns9 = document.getElementById("urAns9");
let usrAns10 = document.getElementById("urAns10");


link.addEventListener("click", () => {

	results.style.opacity = "1";
	results.style.pointerEvents = "auto";
	ansForm.style.opacity = "80%";
});

noBtn.addEventListener("click", () => {

	results.style.opacity = "0";
	results.style.pointerEvents = "none";
	ansForm.style.opacity = "100%";
});

yesBtn.addEventListener("click", () => {

	results.style.opacity = "1";
	results.style.pointerEvents = "auto";
	ansForm.style.opacity = "80%";
	coverRes2.style.transform = "translateX(-200%)";
	coverRes2.style.opacity = "0";
	coverRes.style.transform = "scale(1)";
	coverRes.style.pointerEvents = "auto";
	
	elementInput.forEach(input => {
	
	input.disabled = true;
	});
	
	
	if (q1 == "B. Hyper Text Markup Language"){
		
		score = score + 1;
		scorerh1.innerHTML = score;
		usrAns.style.color = "lightgreen";
	}else{
		score = score;
		scorerh1.innerHTML = score;
		usrAns.style.color = "red";
		
	};
	
	
	if (q2 == "D. HTML"){
	
	score = score + 1;
	scorerh1.innerHTML = score;
	usrAns2.style.color = "lightgreen";
	
	}else{
	score = score;
	scorerh1.innerHTML = score;
	usrAns2.style.color = "red";
	
	};
	
	if (q3 == "C. Python"){
	
	score = score + 1;
	scorerh1.innerHTML = score;
	usrAns3.style.color = "lightgreen";
	
	}else{
	score = score;
	scorerh1.innerHTML = score;
	usrAns3.style.color = "red";
	
	};
	
	if (q4 == "D. A block of code that performs <br>a specific task"){
	
	score = score + 1;
	scorerh1.innerHTML = score;
	usrAns4.style.color = "lightgreen";
	
	}else{
	score = score;
	scorerh1.innerHTML = score;
	usrAns4.style.color = "red";
	
	};
	
	if (q5 == "B. If statement"){
	
	score = score + 1;
	scorerh1.innerHTML = score;
	usrAns5.style.color = "lightgreen";
	
	}else{
	score = score;
	scorerh1.innerHTML = score;
	usrAns5.style.color = "red";
	
	};
	
	if (q6 == "A. To store multiple values in a<br>single variable"){
	
	score = score + 1;
	scorerh1.innerHTML = score;
	usrAns6.style.color = "lightgreen";
	
	}else{
	score = score;
	scorerh1.innerHTML = score;
	usrAns6.style.color = "red";
	
	};
	
	if (q7 == "C. String"){
	
	score = score + 1;
	scorerh1.innerHTML = score;
	usrAns7.style.color = "lightgreen";
	
	}else{
	score = score;
	scorerh1.innerHTML = score;
	usrAns7.style.color = "red";
	
	};
	
	if (q8 == "B. To remove errors and bugs<br>from code"){
	
	score = score + 1;
	scorerh1.innerHTML = score;
	usrAns8.style.color = "lightgreen";
	
	}else{
	score = score;
	scorerh1.innerHTML = score;
	usrAns8.style.color = "red";
	
	};
	
	if (q9 == "D. C++"){
	
	score = score + 1;
	scorerh1.innerHTML = score;
	usrAns9.style.color = "lightgreen";
	
	}else{
	score = score;
	scorerh1.innerHTML = score;
	usrAns9.style.color = "red";
	
	};
	
	if (q10 == "D. To execute a block of code repeatedly"){
	
	score = score + 1;
	scorerh1.innerHTML = score;
	usrAns10.style.color = "lightgreen";
	
	}else{
	score = score;
	scorerh1.innerHTML = score;
	usrAns10.style.color = "red";
	
	};
	
	if (score == 0){
	scorerh1.style.color = "red";
	scorerh1.style.textShadow = " 0 0 20px rgba(255, 0, 0, 0.9)"
	
	}else if (score <= 5){
	scorerh1.style.color = "yellow";
	scorerh1.style.textShadow = " 0 0 20px rgba(255, 255, 0, 0.9)"
	
	}else if (score > 5){
	scorerh1.style.color = "lightgreen";
	scorerh1.style.textShadow = " 0 0 20px rgba(127, 255, 127, 0.9)"
	};
	
});

backBtn.addEventListener("click", () => {
	coverRes3.style.opacity = "1";
	coverRes3.style.pointerEvents = "auto";
	gbackBtn.style.pointerEvents = "auto";
	gbackBtn.style.opacity = "1";
	coverRes.style.opacity = "0";
	coverRes.style.pointerEvents = "none";
	
	usrAns.innerHTML = "Your answer: <br>" + q1;
	usrAns2.innerHTML = "Your answer: <br>" + q2;
	usrAns3.innerHTML = "Your answer: <br>" + q3;
	usrAns4.innerHTML = "Your answer: <br>" + q4;
	usrAns5.innerHTML = "Your answer: <br>" + q5;
	usrAns6.innerHTML = "Your answer: <br>" + q6;
	usrAns7.innerHTML = "Your answer: <br>" + q7;
	usrAns8.innerHTML = "Your answer: <br>" + q8;
	usrAns9.innerHTML = "Your answer: <br>" + q9;
	usrAns10.innerHTML = "Your answer: <br>" + q10;
	
});

gbackBtn.addEventListener("click", () => {
	coverRes3.style.opacity = "0";
	coverRes3.style.pointerEvents = "none";
	gbackBtn.style.pointerEvents = "none";
	gbackBtn.style.opacity = "0";
	coverRes.style.opacity = "1";
	coverRes.style.pointerEvents = "auto";
	

});


strtButton.addEventListener("click", () => {

	strtButton.style.transform = "scale(1.20)";
	strtButton.style.opacity = "0";
	btnDiv.style.display = "none"
	ansForm.style.opacity = '1';
	ansForm.style.filter = "blur(0)";
	ansForm.style.display = "block";
	body.style.overflow = "auto";
});


// answer function

//q1
function answerQ1A(){
	q1 = "A. High Text Main Language";
};

function answerQ1B(){
	q1 = "B. Hyper Text Markup Language";
};

function answerQ1C(){
	q1 = "C. Hyperlinks Text Main Language";
};

function answerQ1D(){
	q1 = "D. Hyperlinks Text Machine Language";

};

//q2
function answerQ2A(){
	q2 = "A. Python";
};

function answerQ2B(){
	q2 = "B. Ruby";
};

function answerQ2C(){
	q2 = "C. Javascript";
};

function answerQ2D(){
	q2 = "D. HTML";

};

//q3
function answerQ3A(){
	q3 = "A. Java";
};

function answerQ3B(){
	q3 = "B. C++";
};

function answerQ3C(){
	q3 = "C. Python";
};

function answerQ3D(){
	q3 = "D. JavaScript";

};

//q4
function answerQ4A(){
	q4 = "A. An input device for a computer";
};

function answerQ4B(){
	q4 = "B. A variable that holds a value";
};

function answerQ4C(){
	q4 = "C. A statement that evaluates<br>to true or false";
};

function answerQ4D(){
	q4 = "D. A block of code that performs <br>a specific task";

};

//q5
function answerQ5A(){
	q5 = "A. Switch statement";
};

function answerQ5B(){
	q5 = "B. If statement";
};

function answerQ5C(){
	q5 = "C. While loop";
};

function answerQ5D(){
	q5 = "D. For loop";

};

//q6
function answerQ6A(){
	q6 = "A. To store multiple values in a<br>single variable";
};

function answerQ6B(){
	q6 = "B. To execute a block of code<br>repeatedly";
};

function answerQ6C(){
	q6 = "C. To perform mathematical<br>calculations";
};

function answerQ6D(){
	q6 = "D. To create a user interface";

};

//q7
function answerQ7A(){
	q7 = "A. Loop";
};

function answerQ7B(){
	q7 = "B. Function";
};

function answerQ7C(){
	q7 = "C. String";
};

function answerQ7D(){
	q7 = "D. Object";

};

//q8
function answerQ8A(){
	q8 = "A. To create a user interface";
};

function answerQ8B(){
	q8 = "B. To remove errors and bugs<br>from code";
};

function answerQ8C(){
	q8 = "C. To add new features<br>to a program";
};

function answerQ8D(){
	q8 = "D.  To make code more efficient";

};

//q9
function answerQ9A(){
	q9 = "A. Python";
};

function answerQ9B(){
	q9 = "B. Ruby";
};

function answerQ9C(){
	q9 = "C. Javascript";
};

function answerQ9D(){
	q9 = "D. C++";

};

//q10
function answerQ10A(){
	q10 = "A. To perform mathematical calculations";
};

function answerQ10B(){
	q10 = "B. To store data in a database";
};

function answerQ10C(){
	q10 = "C. To create a user interface";
};

function answerQ10D(){
	q10 = "D. To execute a block of code repeatedly";

};