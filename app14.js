//Scopes

//2.block scope
function a(){
    for(let i=0;i<10;i++){
        console.log(i)
    }
}
a()

OR

function name(){
      for(let i=0;i<6;i++){
          console.log(i)
      }
 }
name()

OR

//3.functional scope
function a(){
    for(var i=0;i<100;i++){
        console.log(i)
    }
}
a()

OR
  function name(){
      for(var i=0;i<6;i++){
       
      }
       console.log(i)
  }
name()


function name(){
      for(var i=0;i<6;i++){
       
      if(true){
          const color="marron"
    
      }
      console.log(color)
  }
  }

//    name()


  var attr=35;  //it is append windows object
 let age1=22; // it is not append windows object  

