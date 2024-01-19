//promises
//represents the completion or rejection of an  asynchronous operation
//we should prefer  promise to write asynchronous operation

// let myPromise = new Promise(function(resolve , rejection)
// {
//     setTimeout(function()
//     {
//         console.log('I am a promise')
//     } ,4000 );

//     resolve(123);
// })

// console.log('done')


// let myPromise2 = new Promise(function(resolve , rejection)
// {
//     setTimeout(function()
//     {
//         console.log('I am a promise')
//     } ,4000 );

//     rejection(new Error('ye to reject kr diya'))
// });

// console.log('done')


//=================================================>>>>>>>>>>>>>>>>>>>>=======================================>>>>>>>>>>>>>>>>>>>>
//then() :- is used to handle output of resolve()
//catch() :- is usedto handle output of rejected()

// let myPromise2 = new Promise(function(resolve , rejection)
// {
//     setTimeout(function()
//     {
//         console.log('I am a promise')
//     } ,4000 );

//     resolve('ho gaya resolve')
// });


// myPromise2.then((value) => {console.log(value)});      //means....... then ke andar ek value aayi  , resolve() excute hone k baad hai usko print kr do
// console.log('done')



//catch()
// let myPromise2 = new Promise(function(resolve , rejection)
// {
//     setTimeout(function()
//     {
//         console.log('I am a promise')
//     } ,4000 );

//     rejection(new Error(('Reject ho gaya')))
// });


// myPromise2.catch((Error) => {console.log(Error)});      //means....... catch ke andar error messgae print kr do  , reject() excute hone k baad ayi hai
// console.log('done')


//=================================================>>>>>>>>>>>>>>>>>>>>=======================================>>>>>>>>>>>>>>>>>>>>====================================================>>>>>>>>>>>





//multiple promises

// let wada1  = new Promise(function(resolve,reject)
// {
//     setTimeout(function()
//     {
//     console.log('wada1 pura hua')

//     } , 2000);
//     resolve(true);
// })
// //wada1 ek promise banaya jo ki 2 second baad excute hoga aur hamen usko resolve mark kr diya
// //uske baad ham ek naye promise ke andar aaa gaye aur mark kiya ki dusri line 3 second ke baad esxcute hogi , aur fir usko bhi resolve mark kr diya aur usko return kr diya
// //iski value output ke andar print hogi

// //sabse pehle wada2 resolved print hoga
// //fir 2 second baad wada1 print hoga
// //fir 3 second baad wada2 print hoga
// let output = wada1.then(()=> {
//     let wada2 = new Promise(function(resolve,reject)
//     {   
//         setTimeout(function()
//         {
//         console.log('wada2 pura hua')
    
//         } , 3000);
//         resolve("wadaa 2 resolved")
//     })
    
//     return wada2;
// }).then((value) => console.log(value));





//=================================================>>>>>>>>>>>>>>>>>>>>=======================================>>>>>>>>>>>>>>>>>>>>====================================================>>>>>>>>>>>

//Async- Await
//await is used when we want to excute a function after completion of another function.
//they both return a promise


// async function abc()
// {
//     return 'Prashant';
// }


//example-2   async;
// async function Mausam(){
//     let LucknowMausam = new Promise((resolve , reject)=>
//     {
//         setTimeout(()=>
//         {
//             console.log('Lucknow ka mausam suhana hai')
//         },5000)
//     })


//     let kanpurMausam = new Promise((resolve,reject)=>
//     {
//     setTimeout(()=>
//     {
//         console.log('Kanpur ka mausam garam hai')
//     },8000)
//     })

//     let Lm = LucknowMausam;
//     let km = kanpurMausam;

//     return [Lm , km];

// }


//await
async function Mausam(){
    let LucknowMausam = new Promise((resolve , reject)=>
    {
        setTimeout(()=>
        {
            console.log('Lucknow ka mausam suhana hai')
        },5000)
    })


    let kanpurMausam = new Promise((resolve,reject)=>
    {
    setTimeout(()=>
    {
        console.log('Kanpur ka mausam garam hai')
    },8000)
    })

    let Lm = await LucknowMausam;
    let km = await kanpurMausam;

    return [Lm , km];

}