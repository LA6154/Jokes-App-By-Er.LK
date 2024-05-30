let get = document.getElementById("get");
async function myFun(){
    let getting= await fetch('https://icanhazdadjoke.com/',{
        headers:{
            accept:"application/json"
        }
    })
    let rk = await getting.json();
    let data =rk.joke;
    get.innerHTML=data;
    console.log(data);
}
myFun()