let loginForm=document.getElementById("loginform")

loginForm.addEventListener("submit", submitFormData)

function submitFormData(e){
    let loginButton=document.getElementById("loginbutton")
    e.preventDefault()
    let formData = new FormData(e.target);
    
    let uname=formData.get('uname')
    let pswd=formData.get('pswd')

    loginButton.disabled=true
    loginButton.style.opacity=0.3

    // response format= {"success":true,"token":token}

    fetch("/login",{
        method:"post",
        body:JSON.stringify({uname,pswd})
    }).then((res)=>{
        return res.json()
    }).then((data)=>{
        if(data.success){
            document.cookie=`token=${data.token}`
            // redierection
        }else{
           //login failed wrong credentials

        }
    })
    .catch(e=>{
        loginButton.disabled=false
        loginButton.style.opacity=1;
        alert("server error")
    })

    
}

