function submitData(name, email){
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email
        }),
    };
      
    return fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            document.write(object.id);
        })
        .catch(function (error) {
            alert("Bad things! Ragnarők!");
            document.write(error.message);
        });
}