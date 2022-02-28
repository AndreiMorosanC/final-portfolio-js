const txt = document.querySelectorAll(".txt");
const btn = document.querySelectorAll(".btn");
let menu1 = btn.item(0);
let menu2 = btn.item(1);
let menu3 = btn.item(2);
let txt1 = txt.item(0)
let txt2 = txt.item(1)
let txt3 = txt.item(2)
let count1 = 0;
let count2 = 0;
let count3 = 0;
menu1.addEventListener("click", ()=>{
    count1++
    if(count1 === 1){
    txt1.style.display = "grid";
    
    }
    else if(count1 <= 2){
        txt1.style.display = "none";
        count1 = 0;
       
    }
    
});

menu2.addEventListener("click", ()=>{
        count2++
        if(count2 === 1){
        txt2.style.display = "grid";
        
        }
        else if(count2 <= 2){
            txt2.style.display = "none";
            count2 = 0;
           
        }
        
})
menu3.addEventListener("click", ()=>{
    count3++
    if(count3 === 1){
    txt3.style.display = "grid";
    
    }
    else if(count1 <= 2){
        txt3.style.display = "none";
        count3 = 0;
       
    }
    
})
