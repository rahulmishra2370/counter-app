let constvalue=document.querySelector(".conter-value")


const increment=()=>{
   let value=parseInt(constvalue.innerText);
   value=value+1;
   constvalue.innerText=value;
};

const decrement=()=>{
    let value=parseInt(constvalue.innerText);
    value=value-1;
    constvalue.innerText=value;

};

