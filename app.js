 function validateform(){
     let name = document.myform.name.value;
     let password = document.myform.password.value;


     if(name==null || name==""){
         document.
         return false
     }else if (password.length<6){
         alert("password must at least 6 characters long.");
         return false
     }

 }