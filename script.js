console.log("script.js running");

let button = document.body.querySelectorAll(".button")
let results = document.querySelector(".result")
var string="";



Array.from(button).forEach(element => {
    element.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="C"){
            results.innerHTML="0"
            string=""
        }else{
        if(e.target.innerHTML=="="){
            let ans = eval(string)
            string=ans;
            results.innerHTML=ans
        }else{
        string = string+e.target.innerHTML;
        results.innerHTML=string;
        }
    }
    });
});

