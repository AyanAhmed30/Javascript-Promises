// PROMISE IS A OBJECT
// FETCH IS AN OBJECT
// HOW TOM MAKE A PROMISE??
// error 404 response m milega
// fetch function k liye aik special alag say queue bnti h=> priority queue
// jb response create hota h tu wo backend pr khali array bnta h phir resolve aur reject k according us m val fullfill hoti h wo result response khehlata h 

// // +++++++++++++++++++   PROMISE ONE   ++++++++++++++++++++++++++++++++++++
// const promiseOne= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("set time out run ho raha h");
//         resolve()


//     },1000)
// })
// //.then ka mtlb k jo kam run hoga is m aaiga
// promiseOne.then(function(){
//     console.log("promise is done")
// })


// // +++++++++++++++++++   PROMISE TWO   ++++++++++++++++++++++++++++++++++++
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("task 2")
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("task 2 completed")
// })


// //++++++++++++++++++++++++++++  PROMISE THREE ++++++++++++++++++++++
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("task 3 completed")
//         resolve({name:"ayan",age:19})
//     },1000)
// }).then(function(user){
//     console.log(user.age)
// })
// //++++++++++++++++++++++++++++  PROMISE FOUR ++++++++++++++++++++++
// new Promise(function(resolve,reject){
//     let err=true
//     if(!err){
//         console.log("tsk 4 chl gaya h")
//         resolve({name:"ahmed",password:"1234"})
//     }else{
//         reject("error occur")
//     }
  
// }).then(
//     function(user){
//         console.log(name)
//         return user.age  // pehlay then ka return dosre .then mai jaiga

//     }

// ).then(  
//     function(age){
//         console.log(age)
//     }
// ).catch(
//     function(error){
//         console.log(error)

//     }
// ).finally(()=>{
//     console.log("finally done")
// })

// //++++++++++++++++   PROMISE FIVE +++++++++++++++++++++++++++
// const promiseFive= new Promise(function(resolve,reject){
//     setInterval(function(){
//         let err=false
//         if(!err){
//             console.log("task 5 is going on")
//             resolve()
//         }else{
//             reject("error in prmoise 5")
//         }

//     },1000)
// })
// async function promiseFiveResponse(){
//     try {
//         const res=await promiseFive
//         console.log(res)
        
//     } catch (err) {
//         console.log(err)
        
//     }
// }
// promiseFiveResponse()


// ++++++++++++++++   FETCH FUNCTION +++++++++++++++++++++++++
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(function(res){
//     return res.json()

// })
// .then(function(response){
//     console.log(response)
// })
// .catch(function(err){
//     console.log(err)

// })