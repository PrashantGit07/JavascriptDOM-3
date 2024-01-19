// // let content  = fetch('https://jsonplaceholder.typicode.com/todos/1')

// async function utility(){
//     let cont = await fetch('https://jsonplaceholder.typicode.com/todos/1')             //jab tak API data nhi aata tab tak exction next line tak nahi jayega
//     let output = await cont.json();
//     // cont.ok;
//     // cont.status;
//     // cont.text;
//     console.log(output);
// }
// utility();


//post call


// async function helper(){
//     let options =  {
//         method: 'POST', //post call kr diya
//         body: JSON.stringify({    //stringify:-  JSON format jo string me convrt kr deta hai
//           title: 'Prashant',   //ye data hai  , in fields ko send kr rahe hai niche diye huye server(link) pe , aur ye data usme store ho jayega
//           body: 'Tagdi wali',
//           userId: 001,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//     };
    
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts' , options);
//     let respose = content.json();
//     return respose;
// }

// async function utility()
// {
//     let ans = await helper();
//     console.log(ans);
// }
// utility();



//=================================================>>>>>>>>>>>>>>>>>>>>=======================================>>>>>>>>>>>>>>>>>>>>====================================================>>>>>>>>>>>
//closures

function init()
{
    var name = "MOZILLA";
    function displayName() //it is inner function that forms the closure:- isme function ka logic + jo bhi parameters function use kar raha hai vo data isme pada hoga(lexical environmnet)
    {
        console.log(name);
    }
    return displayName();
}
 let func1  = init();
 func1();