const date = new Date();
const renderCalendar=()=>{
    const monthsDays=document.querySelector('.days');
    const lastDay= new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
    const prevlastDay= new Date(date.getFullYear(),date.getMonth(),0).getDate();
    date.setDate(1);
    const firstDayIndex=date.getDay();
    const lastDayIndex=new Date(date.getFullYear(),date.getMonth()+1,0).getDay();
    const nextDays=6*7-(firstDayIndex+lastDay)+1;
    const months=[
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",  
    ];
    document.querySelector(".date h1").innerHTML
    =months[date.getMonth()];
    document.querySelector('.date p').innerHTML=new Date().toDateString();
    let days="";
    for (let x = firstDayIndex-1; x >0 ; x--) {
        days+=`<div class='prev-date'>${prevlastDay-x+1}</div>`
        
    }
    for (let i = 1; i <= lastDay;i++)
        {
            if(i===new Date().getDate()&&
            date.getMonth()===new Date().getMonth()){
                days+=`<div class='today'>${i}</div>`
            }
            else{
                days+=`<div>${i}</div>`
            }
    
        }
    for (let j = 1; j <= nextDays; j++) {
         days+=`<div class='next-date'>${j}</div>`
        
    }
    monthsDays.innerHTML=days;
}

document.querySelector('.prev').addEventListener('click',()=>{
    date.setMonth(date.getMonth()-1);

    renderCalendar();
})
document.querySelector('.next').addEventListener('click',()=>{
    date.setMonth(date.getMonth()+1);
  
    renderCalendar();
})
renderCalendar();