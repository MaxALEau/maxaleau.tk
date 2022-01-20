document.getElementById("validate").onclick=function() {
    firebase.database().ref('users').get().then((snapshot) => {
        snapshot.forEach((child) => {
            if (document.getElementById("firstName").value == child.val().firstName && document.getElementById("lastName").value == child.val().lastName){
                document.getElementById("result").innerText=child.val().result;
            }
        })
    })
}