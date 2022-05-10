let x
const elements = document.querySelectorAll(".numbers")
const btn = document.getElementById("btn")

elements.forEach(element => {
    element.addEventListener("click", ()=>{
        changeClasses(element)
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
    
    x ? window.location.href="C:/Users/User/desktop/frontendmentor/success.html" : alert("give us a rating before clicking submit")
}



function changeClasses(target){
    elements.forEach(element => {
        if(element == target){
            element.classList.add("active")
            x=element.innerHTML
        }
        else{
            element.classList.remove("active")
        }
        
    })
}