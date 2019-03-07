function check(form){
    if (form.userid.value === "Admin2019" && form.pswrd.value === "Password2019"){
        window.open('index.html')
    }
    else{
        alert("Wrong username or password")
    }
}

