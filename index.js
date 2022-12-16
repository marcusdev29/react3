function sendMail(){
    var params = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,  
        message:document.getElementById("message").value,
    };

 const serviceID = "service_chrnjwa";
 const templetID = "template_7h9vmri"

 emailjs.send(serviceID,templetID,params)
 .then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent sucessfully")
    })
    .catch(err=>console.log(err));
}