
var files = ["photo", "postcard", "photo", "photo", "video"];
var repetidos = [];
var temporal = [];

files.forEach((value,index)=>{
  temporal = Object.assign([],files)
  temporal.splice(index,1)

  if(temporal.indexOf(value)!=-1 && repetidos.indexOf(value)==-1)  
  repetidos.push(value);
});

console.log(repetidos);