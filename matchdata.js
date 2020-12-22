const database=firebase.database();

function addData(){
    const Matchteam=document.getElementById("Matchteam");
    const date=document.getElementById("date");
    const time=document.getElementById("time");
    
    const stadiuminfo={
        StadiumName:"KARACHI STADIUM",
        Country:"Pakistan"

    }
    const matchinfo={
        Matchvs:Matchteam.value,
        Mdate:date.value,
        Mtime:time.value
        
    }
    database.ref('stadium/stadiumInfo').set(stadiuminfo)
    database.ref('stadium/MatchInfo').push(matchinfo);
    
}
