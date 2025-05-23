const post1 = document.getElementById("post1"); 
const heart1 = document.getElementById("heart1"); 

const likes1 = document.getElementById("nr-likes1"); 

let counter = Number(likes1.textContent); 

function addLike() {
    counter +=1; 
    likes1.textContent = counter.toString();
}

post1.addEventListener("dblclick", addLike); 

heart1.addEventListener("dblclick", addLike); 


