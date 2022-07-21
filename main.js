let namee='ushasri';
let template =`<h1>hiiii, ${namee}`;
document.getElementById("heading").innerHTML=template;
function map(ip,method){
    var mapres=[];
    for (let index = 0; index < ip.length; index++) {
        let mapelement = method(ip[index]); 
        mapres[index]=mapelement;
    }
    return mapres;
}
function filter(ip,method){
    var filterres=[];
    for (let index = 0; index < ip.length; index++) {
        let filterelement = method(ip[index]); 
         if(method(ip[index]))
        filterres.push(ip[index])
    }
    return filterres;
}
function forEach(ip,method){
    forEachres=[];
    for (let index = 0; index < ip.length; index++) {
        forEachelement=method(ip[index]);
        forEachres.push(forEachelement);
    }
    return forEachres;
}
console.log("Map Function"+map([4,9,16,25],Math.sqrt));
console.log("For Each "+forEach([1,3,5,6],(x)=>{return x+5}));
console.log(" Filter "+filter([1,2,4,6],(x)=>{return x>5}))
