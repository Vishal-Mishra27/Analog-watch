setInterval(()=>{
    d=new Date()
    h=d.getHours()
    m=d.getMinutes()
    s=d.getSeconds()

    hrotation=30*h+m/2;
    mrotation=6*m+s/10;
    srotation=6*s;

    hour.style.transform=`rotate(${hrotation}deg)`
    minutes.style.transform=`rotate(${mrotation}deg)`
    second.style.transform=`rotate(${srotation}deg)`
},1000)