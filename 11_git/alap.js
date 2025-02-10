
let sz=""
let szamlalo=0
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
        //console.log(i+" "+j)
       sz+=`<img id="${szamlalo}" onmouseover="szegelyrajzol(this.id)" onmouseout="szegelylevesz(this.id)" onclick="nagyit(this.id)" src="${szamlalo}.jpg" alt="" style="width:100px; margin:5px; border: 2px solid white" ></img>`
       szamlalo++
    }
    sz+=`<br>`
}
document.getElementById("kepekhelye").innerHTML=sz


let megoldas=""
let aktualissorszam=-1
let elozo=-1
let helyes=0
let osszes=0

function nagyit(id){
    //alert(id)
    aktualissorszam=id
    if (elozo!=-1){
        
        document.getElementById(elozo).style.filter="invert(0%)"
        document.getElementById(elozo).style.border="0px solid balck"
    }

   document.getElementById(id).style.filter="invert(100%)"
   document.getElementById(id).style.border="2px solid green"
   

   elozo=id

    document.getElementById("nagykep").innerHTML= `<img src="${id}.jpg" alt="" style="width:640px"></img>`


    megoldas=nevektomb[id].megoldas
    let keveres=[]
    keveres.push(nevektomb[id].megoldas)
    keveres.push(nevektomb[id].tipp1)
    keveres.push(nevektomb[id].tipp2)
    keveres.push(nevektomb[id].tipp3)
    console.log(keveres)
    for (let i = 0; i < 1000; i++) {
       let rszam1=Math.floor(Math.random()*4)
        let rszam2=Math.floor(Math.random()*4)
        //console.log(rszam1)
      
       let csere=keveres[rszam1]
       keveres[rszam1]=keveres[rszam2]
       keveres[rszam2]=csere
       //console.log(keveres)
    
        
    }


    document.getElementById("ki").innerHTML=`Ki ez a személy?<br>
    <button onclick="gombkatt('${keveres[0]}')">${keveres[0]}</button>
    <button onclick="gombkatt('${keveres[1]}')">${keveres[1]}</button>
    <button onclick="gombkatt('${keveres[2]}')">${keveres[2]}</button>
    <button onclick="gombkatt('${keveres[3]}')">${keveres[3]}</button>`
}
function szegelyrajzol(id){
    document.getElementById(id).style.border="2px solid blue"
}

function szegelylevesz(id){
    if (id==aktualissorszam)
        document.getElementById(id).style.border="2px solid green"
    else
        document.getElementById(id).style.border="2px solid white"
}


function gombkatt(aktualisfelirat){
    //alert(aktualisfelirat)
    //alert(megoldas)
    osszes++
    if (megoldas==aktualisfelirat)
        {
            helyes++;
            alert("Helyes válasz")
            if (aktualissorszam==nevektomb.length-1)
                aktualissorszam=0
            else
                aktualissorszam++

       nagyit(aktualissorszam)
        }

    else
        alert("Rossz válasz")
    document.getElementById("ponthelye").innerHTML=`Pontok: <br> ${helyes}/${osszes} ${Math.round(100*helyes/osszes,0)}% </br>`

    //alert(aktualissorszam)
    

}