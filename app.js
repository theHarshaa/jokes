// GET 

const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');


//  PROMISES
//   const setHeader={
//         headers:{
//             Accept:"application/json"
//         }
//     }
//     fetch("https://icanhazdadjoke.com",setHeader )
//     .then((res)=> res.json())
//     .then((data) =>{
//         jokes.innerHTML=data.joke;
//     })
//     .catch((error)=>{
//         jokes.innerHTML="connection lost 🥲";
//     })
// }

// async-await

const generateJokes = async () => {

    try{
        const setHeader={
            headers:{
                Accept:"application/json"
            }
        }
        const res =await fetch("https://icanhazdadjoke.com",setHeader )
             const data = await res.json();
             jokes.innerHTML=data.joke;
    }catch(err){
        jokes.innerHTML="connection lost🥺🤌"
    }
}

        
        
    //     .then((res)=> res.json())
    //     .then((data) =>{
    //         jokes.innerHTML=data.joke;
    //     })
    //     .catch((error)=>{
    //         jokes.innerHTML="connection lost 🥲";
    //     })
    // }



jokeBtn.addEventListener('click',generateJokes);
generateJokes()
