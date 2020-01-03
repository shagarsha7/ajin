let signupForm=document.getElementById('signupform')

signupForm.addEventListener('submit',submitFormData)

function submitFormData(e){
    e.preventDefault()

    let signupButton=document.getElementById('signupbtn')   
    let formData=new FormData(e.target)
    let signupData={}

    for(value of formData.keys()){
        signupData[value]=formData.get(value)
    }
    if(signupData.pswd!=signupData.cpswd){
        alert("password mismatch")
        return
    }

    signupButton.style.opacity=0.3
    signupButton.disabled=true

    fetch("/signup",{
        method:"post",
        body:JSON.stringify(signupData)
    }).then((res)=>{
        return res.json()
    }).then((data)=>{
        if(data.success){
            document.cookie=`token=${data.token}`
            // redierection
        }else{
           // problem with the server

        }
    })
    .catch(e=>{
        signupButton.disabled=false
        signupButton.style.opacity=1;
        alert("server error or network problems")
    })
}