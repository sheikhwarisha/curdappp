
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAy35JxZl-JhhNt2W5AmZSAQk-0vJpLvBU",
  authDomain: "curd-7ed4d.firebaseapp.com",
  projectId: "curd-7ed4d",
  storageBucket: "curd-7ed4d.appspot.com",
  messagingSenderId: "462830789500",
  appId: "1:462830789500:web:2a38d59674ebe89df2baf9",
  measurementId: "G-4WCW1BNSF0"
};
const app = initializeApp(firebaseConfig);
//-------------------------
import {
    getDatabase,
    ref,
    child,
    get,
    set,
    // push,
    update,
    remove,
  } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";
    const database = getDatabase();

    let rollno = document.getElementById("rollno")
    let named = document.getElementById("named")
    let gender = document.getElementById("gender")
    let  address = document.getElementById("address")
    let insert = document.getElementById("insert")
    let read = document.getElementById("read")
    let updated  = document.getElementById("update")
    let deleted = document.getElementById("deleted")
function insertform(){
  set(ref(database , 'students/' + rollno.value),{
      rollno : rollno.value ,
      named : named.value,
      gender :  gender.value ,
       address : address.value 
  })
    //   let ins={
    //  rollno : rollno.value ,
    //  named : named.value,
    //  gender :  gender.value ,
    //   address : address.value 
    // }
  //  let refer = push(ref(database, 'students'))
  //  set (refer, ins) 
   .then(() =>{
    alert("insert sucessfully") 
        document.getElementById("rollno").value = "";
        document.getElementById("named").value = "";
         document.getElementById("gender").value = "";
        document.getElementById("address").value  = "";
   })
   .catch(()=>{
    alert("insert Not suceessful")
   }) 
 
}
if(insert){
      insert.addEventListener("click",insertform)

     }
     //----------------Read Data --------------
     function readform(){
      const db = ref(database)
      get(child(db , 'students/' + rollno.value))
      .then((snap)=>{
     if (snap.exists()) {
      
      document.getElementById("rollno").value = snap.val().rollno;
      document.getElementById("named").value = snap.val().named;
      document.getElementById("gender").value = snap.val().gender;
      document.getElementById("address").value = snap.val().address;
      alert("Read  suceessful")

     }
      })
      .catch(()=>{
        alert("Read Not suceessful")
        console.log(rollno);
       })
    }
    if(read){
      read.addEventListener("click",readform)

     }
          //----------------Update Data --------------

          function updateform(){
            update(ref(database , 'students/' + rollno.value),{
                rollno : rollno.value ,
                named : named.value,
                gender :  gender.value ,
                 address : address.value 
            })
           
             .then(() =>{
              alert("Data Update Successfully")
              document.getElementById("rollno").value = "";
              document.getElementById("named").value = "";
               document.getElementById("gender").value = "";
              document.getElementById("address").value  = "";
             })
             .catch(()=>{
              alert("Not Updated Successfully")
             }) 
           
          }
          if(updated){
            updated.addEventListener("click",updateform)
          
               }
               //----------------Delete Data --------------

          function deleteform(){
            remove(ref(database , 'students/' + rollno.value)    
            )
           
             .then(() =>{
              alert("Data Delete Successfully")
              document.getElementById("rollno").value = "";
              document.getElementById("named").value = "";
               document.getElementById("gender").value = "";
              document.getElementById("address").value  = ""; 
             })
             .catch(()=>{
              alert("Not Delete Successfully")
             }) 
           
          }
          if(deleted){
            deleted.addEventListener("click",deleteform)
          
               }
//  function insertform() {
//     let ins={
//      rollno : rollno.value ,
//      named : named.value,
//      gender :  gender.value ,
//       address : address.value 
//     }  
  // let refer = ref(database , "Student")
  // ins.id = push(refer).key
  // var x = localStorage.getItem("named")
  // let userref = ref(database ,`Student/${x}`  )
//   let refer = push(ref(database, 'students'))
//    set (refer, ins)
//    alert("Data Inserted");
//      document.getElementById("roll").value = "";
//     document.getElementById("named").value = "";
//      document.getElementById("gender").value = "";
//     document.getElementById("address").value  = "";
// }

// let insert = document.getElementById("insert");
// if(insert){
//       insert.addEventListener("click",insertform)

//      }
    //  delete----------------------
    //  function deleteform() {
    //  let refer = ref(database ,'students')
  //   let refer = (ref(database, 'students'))
  //  remove()
  //    alert("Data Deleted");
  //      document.getElementById("roll").value = "";
  //     document.getElementById("name").value = "";
  //      document.getElementById("gender").value = "";
  //     document.getElementById("address").value  = "";
  // }
  
  // let deleted = document.getElementById("deleted");
  // if(deleted){
  //   deleted.addEventListener("click",deleteform)
  
  //      }
 