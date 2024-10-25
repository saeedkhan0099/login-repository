function onSubmit(){
    console.log('click')
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    console.log(email,password)

if(!email || !password){
    alert("not login")
}

if(password.length  > 8  ){
    if(email === "saeedkhan123@gmail.com" && password === "123456789"){
        alert("login success")
        window.location.href="./index2.html"
        
    }else{
        alert("invalid not ")
        // console.log(document.getElementById('email','password').style.border ='2px solid red')
    }

}
else{
    alert("password should be attest 8 characters")
}
}
if(email.length==='@gmail.com'){
    if(email === "saeedkhan123@gmail.com" && password === "123456789"){
        alert("login success")
        window.location.href="./index2.html"
        
    }else{
        alert("invalid not ")
        // console.log(document.getElementById('email','password').style.border ='2px solid red')
    }

}
else{
    alert("Please write @gmail.com")
}


function myFunction(){
    var inset=document.getElementById('password');
    var but=document.getElementById('icon');
   if(inset.getAttribute('type'=='password')){
      console.log(true)
     inset.setAttribute('type','text')
     but.innerHTML='hide'
}else{
     inset.setAttribute('type','password')
     but.innerHTML='show'
}
}