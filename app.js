let x
const elements = document.querySelectorAll(".numbers")
const btn = document.getElementById("btn")

elements.forEach(element => {
    element.addEventListener("click", (e)=>{
        x = (element.innerHTML)
    })
})

if (window.location.href == "file:///C:/Users/User/desktop/frontendmentor/index.html"){
    btn.addEventListener("click", (e)=>{
        localStorage.setItem("b", x)
        successPage()
    })
}

if (window.location.href == "file:///C:/Users/User/desktop/frontendmentor/success.html"){
    let y = localStorage.getItem("b")
    document.getElementById("targ").innerHTML=`You selected ${y} out of 5`
}

function successPage(){
    window.location.href="C:/Users/User/desktop/frontendmentor/success.html"    
}

