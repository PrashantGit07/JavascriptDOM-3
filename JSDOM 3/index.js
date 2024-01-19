// //code-1

// const t1 = performance.now();
// for(let i=0;i<=100;i++)
// {
//     let newone = document.createElement('p');
//     newone.textContent = 'this is Para  '+i;

//     document.body.appendChild(newone)
// }

// const t2 = performance.now();
// console.log("this code took "+(t2-t1) +"ms to excute");

// //optimising code

// //checking performane of this code

// const t3 = performance.now();

// let mydiv = document.createElement('div');
// for(let i=0;i<=100;i++)
// {
//    let element   =document.createElement('p');
//    element.textContent ='this is Para  '+i;

//    mydiv.appendChild(element)
// }

// document.body.appendChild(mydiv)

// const t4 = performance.now();
// console.log("optimized function took "+(t4-t3) + "ms to excute")


// =========================>>>>>>>>>>>>>>>>>>>>================================>>>>>>>>>>>>>>>>>>>>>>>=============================>>>>>>>>>>>>>

// //document fragment     --->>> we use it when we need to update our DOM multiple times
// let fragment = document.createDocumentFragment();
// for(let i=0;i<=100;i++)
// {
//     let newone = document.createElement('p');
//     newone.textContent = 'this is Para  '+i;

//     document.body.appendChild(newone)
// }

// document.body.appendChild(fragment) //1 reflow and 1 repaint
// //performance enhanced



