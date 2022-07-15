
// FIXFILES
function fixFiles(files) {
  var file = []
  var repetidos = []
  var cont = 0
  for (i = 0; i < files.length; i++) {
  repetidos[i] = 0
  }
  for (i = 0; i < files.length; i++) {
      cont = 0
      for (x = 0; x < file.length; x++) {
          if(files[i] == file[x]){
              cont = cont +1
          }       
      }
      if(cont > 0){
         file.push(files[i])
          repetidos[file.length-1] = cont
      }
      else{
          file.push(files[i])
      }     
  }
  for (i = 0; i < file.length; i++) {
      if(repetidos[i]>0){
          file[i] =file[i]+'('+repetidos[i]+')' 
      }
  }
  console.log(file)
  return file
}


files = ['photo', 'postcard', 'photo', 'photo', 'video']
fixfile = fixFiles(files) 

files2 = ['file', 'file', 'file', 'game', 'game']
fixFiles(files2)
