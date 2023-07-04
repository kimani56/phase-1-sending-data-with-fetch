// const nameDetails = {
//     personName : "gift",
//     personEmail: "gift2004@gmail.com",
// };

// const submitdata = {
//     method : "POST",
//     headers :{
//         "content-type":"application/json",
//         "accept":"application/json"
//     },
//     body : JSON.stringify(nameDetails)
// };



//  return fetch("http://localhost:3000/users",submitdata)
// .then((res) => res.json())
// .then((data) => {console.log(data)})
// .catch((error)=>{
//     alert("bad tings");
//     console.log(error.message);
// })

function submitData(name, email) {
    const userData = {
      name: name,
      email: email
    };
  
    const configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userData)
    };
  
    return fetch("http://localhost:3000/users", configObject)
      .then(response => response.json())
      .then(data => {
        document.body.innerHTML = data.id;
      })
      .catch(error => {
        document.body.innerHTML = error.message;
      });
  }
  
 
