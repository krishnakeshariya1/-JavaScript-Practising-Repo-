// const button = document.querySelector('button');
// const getrandom = ()=>{
//     const rand = `hsl(${Math.floor(Math.random()*300)},70%,55%)`;
//     return rand;
// };
// button.addEventListener("click",()=>{
//     document.body.style.backgroundColor = getrandom();
// });

let button = document.querySelector("button");
// let input = document.querySelector("#inputBox");
// let input2 = document.querySelector("#inputBox2");
// let p = document.querySelector("p");
// button.addEventListener("click",()=>{
//     let sum = "";
//     sum = input.value +" "+ input2.value
//     p.textContent = sum
// });
// const img = document.querySelector("img");
// img.addEventListener("mouseover", ()=>{
//     img.src = "WhatsApp Image 2025-10-13 at 4.58.37 PM.jpeg";
// });
// img.addEventListener("mouseleave",()=>{
//     img.src = "WhatsApp Image 2025-10-13 at 4.58.33 PM.jpeg";
// });

// let checkBox = document.querySelector("#check");
// checkBox.addEventListener("change",()=>{
//     button.style.display = "block";
// })
// let input = document.querySelector("input");
// let p = document.querySelector("p");
// let rand = ()=>{
//      return Math.floor(Math.random()*256)
// }
// input.addEventListener("input",()=>{
//    p.textContent = input.value || "this text will change the color"
//    p.style.color = `rgb(${rand()},${rand()},${rand()})`
// })
// let select = document.querySelector("select");
// select.addEventListener("change",()=>{
//     document.body.style.backgroundColor = select.value || "black"
// })
// let input = document.querySelector("input");
// let toggle = document.querySelector("#toggle");
// toggle.addEventListener("click",()=>{
//     const ispass = input.type === "password";
//     input.type = ispass ? "text" : "password";
//     toggle.textContent = ispass ? "👁️": "🙈";
// })
// let plusSymbol = document.querySelector("#plus");
// let minusSymbol = document.querySelector("#minus");
// let count = document.querySelector("h2");
// plusSymbol.addEventListener("click",()=>{
//     count.textContent++;
// });
// minusSymbol.addEventListener("click",()=>{
//     count.textContent--;
// })

// day 7

// toggling class on the element
// let box = document.querySelector("div");
// button.addEventListener("click",()=>{
//     box.classList.toggle("edit"); 
// })

// now console.log()if the div clas edit after toggle

//  console.log(box.classList.contains("edit"));
 // write inside the eventlistner

 // make a list and change the color of the list when clicked

//  let lists = document.querySelectorAll("li");
//  lists.forEach(val =>{
//     val.addEventListener("click",()=>{
//         val.style.color = "skyblue"
//     });
//  });
// button.addEventListener("click",()=>{
//     const nextPara = button.nextElementSibling;
//     const previousPara = button.previousElementSibling;

//     if(previousPara){
//         previousPara.style.backgroundColor = "red";
//     }
// })
//dynamically create a new parra and append it into the div
// let newpara = document.createElement("p");
// let div = document.querySelector("div");
// newpara.textContent = "new paragraph "
// div.prepend(newpara);
// setTimeout(()=>{
//     newpara.remove();
// },3000);

// let ul = document.querySelector("ul").addEventListener("click",(ele)=>{
//     if(ele.target.tagName = "LI"){
//         alert(`click ${ele.target.textContent}`)
//     }
// });
// let input = document.querySelector("#inputs");
// let para = document.querySelector("p");
// input.addEventListener("input",()=>{
//     para.textContent = input.value === "" ? "NO content Here" : input.value;
// });

// const box = document.querySelector("div");
// button.addEventListener("click",()=>{
//     box.classList.toggle("red");
//     box.classList.toggle("pink");
//     box.classList.toggle("blue");
// })

// let para = document.querySelector("p");
// let div = document.querySelector("div");
// button.addEventListener("click",()=>{
//    let div2 = div.cloneNode(true);
//    div2.id = "box";
//     div2.style.backgroundColor = "pink";
//     let para2 = document.createElement("p")
//     para2.textContent = "keshariya";
//     div2.appendChild(para2);
//     document.body.appendChild(div2)
// })
let originalBox = document.querySelector(".original");
let h2 =  document.querySelector("h2");
// button.addEventListener("click",()=>{
//      let clone = originalBox.cloneNode(true) ;
//      document.body.appendChild(clone);
// })
button.addEventListener("click",()=>{
    document.body.appendChild(h2)
    button.style.display = "none";
    let para = document.createElement("p");
    para.textContent = "Sucessfully 🚀 shift the element"
    document.body.appendChild(para)
})