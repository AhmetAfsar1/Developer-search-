
let input=document.querySelector("#input");
let button=document.querySelector("#btn");
let button2=document.querySelector("#btn2");
let Developername=document.querySelector("#Developer-name");
let desc = document.querySelector("#desc");
let list1=document.querySelector("#list1");
let list2 = document.querySelector("#list2");
let list3 = document.querySelector("#list3");
let dprofil = document.querySelector(".Developer-profile");
let form = document.getElementsByTagName("form")[0];
let fotograf = document.querySelector("#Fotograf");
let snc = document.querySelector(".snc");
let Kullanicikontrol=false;
// Veriseti
var users = [
    {
        name: "Atakan Adalı",
        photo: "img/img3.png",
        desc: "Full Stack Developer",
        skills: ["HTML","CSS","Javascript"]
    },
    {
        name: "Furkan Çakmaker",
        photo: "img/img1.jpg",
        desc: "Back-End Developer",
        skills: ["Javascript","Python"]
    },
    {
        name: "Elif Uğurel",
        photo: "img/img2.jpg",
        desc: "Front-End Developer",
        skills: ["HTML","CSS","Bootstrap"]
    }
    
]
function Yaz()
{
 for(var i=0; i<users.length; i++)
     {
       if(users[i].name==input.value)
       {
             Developername.textContent=users[i].name;
           desc.textContent = users[i].desc;
           fotograf.style.display = "inline-block";
             fotograf.src=users[i].photo;
           list1.innerHTML = users[i].skills[0];
           snc.style.backgroundColor = "#a9a9a9";
             list2.innerHTML=users[i].skills[1];
           list3.innerHTML = users[i].skills[2];
           title2.textContent = "Yetenekler";
           dprofil.textContent = "Developer-profile";
           button2.textContent = "Yeniden ara";
           form.remove();
           button.remove()
             Kullanicikontrol=true;
             
          }  
     }
     let isim=input.value;
   if(Kullanicikontrol==false)
   {
    alert(isim+" adında bir kullanıcı bulunamadı");
   }
   input.value="";
} 

function sıfırla()
{
    window.location.reload(false)
}
button2.addEventListener("click", sıfırla)
button.addEventListener("click", Yaz);

