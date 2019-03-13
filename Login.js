function check(form){
    if (form.userid.value === "Admin2019" && form.pswrd.value === "Password2019"){
        window.open('index.html')
    }
    else{
        alert("This is just a consept page, the password for this page is Password2019 and the username is Admin2019")
    }
};



function next(){

var step2 = document.getElementById("step2");
step2.style.fill = "#0C8140";
step2.style.stroke = "#0C8140";

var stepto2 = document.getElementById("stepto2");
stepto2.style.fill = "#0C8140";

var basic = document.getElementById("basicinfo");
basic.style.display = "none";
      
var tomore = document.getElementById("moreinfo");
tomore.style.display = "block"
}


function next2(){

var step3 = document.getElementById("step3");
step3.style.fill = "#0C8140";
step3.style.stroke = "#0C8140";

var stepto3 = document.getElementById("stepto3");
stepto3.style.fill = "#0C8140";

var more = document.getElementById("moreinfo");
more.style.display = "none";
      
var tomore = document.getElementById("thanksinfo");
tomore.style.display = "block"

document.getElementById("headline").textContent="You're done!";
};

function Done(){
    window.location.href = "Login.html"
};

