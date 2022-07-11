const leftbtn = document.querySelector(".l-btn");
const rightbtn = document.querySelector(".r-btn");
//sağa dönüş
rightbtn.addEventListener('click', function(event){
    console.log('oldu');
    const conent = document.querySelector('.product-slide');
    conent.scrollLeft +=1100;
    event.preventDefault();
});
//sola dönüş
leftbtn.addEventListener('click', function(event){
    console.log('oldu');
    const conent = document.querySelector('.product-slide');
    conent.scrollLeft -=1100;
    event.preventDefault();
})

//ikinci slider 
//class değişmezsen aynı anda ikiside dönüyor :D 

const leftbtn1 = document.querySelector(".btn-1b");
const rightbtn1 = document.querySelector(".btn-1a");
//sağa dönüş
rightbtn1.addEventListener('click', function(event){
    console.log('oldu');
    const conent = document.querySelector('.product-slide-1');
    conent.scrollLeft +=1100;
    event.preventDefault();
});
//sola dönüş
leftbtn1.addEventListener('click', function(event){
    console.log('oldu');
    const conent = document.querySelector('.product-slide-1');
    conent.scrollLeft -=1100;
    event.preventDefault();
})

//back to top button start
const backtop = document.querySelector(".backtop");

backtop.addEventListener("click", ()=>{
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
})
//back to top button end

//sidebar side start
const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".fa-xmark");
const black = document.querySelector(".black");
const sidebtn = document.querySelector(".second-1");

sidebtn.addEventListener("click", ()=>{
    sidebar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
    document.body.classList.add("stop-scrool");
    

})
//kapatma kısmı x i 
cross.addEventListener("click", ()=>{
    sidebar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active");
    

})

//sidebar side end 

//acounts seciton start
const sign= document.querySelector(".ac");
const tri= document.querySelector("triangle");
const signin= document.querySelector(".hdn-sign");

sign.addEventListener("click",()=>{
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    tri.classList.toggle("active");

})
//acounts seciton end