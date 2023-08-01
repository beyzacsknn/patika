let firstname = prompt ("Adinizi giriniz: ");
console.log(firstname);

let myName=document.querySelector("#myName");
myName.innerHTML=firstname;


function date()
{
    const date=new Date;
    let hour=date.getHours();
    let minute=date.getMinutes();
    let second=date.getSeconds();

    let day=["Pazartesi","Salı","Carsamba", "Persembe", "Cuma","Cumartesi","Pazar"];
    let dayName=day[date.getDay()-1]

    let clock=document.querySelector("#myClock")
    clock.innerHTML=`${hour}:${minute}:${second} / ${dayName}`;

}

setInterval(date,1000);
