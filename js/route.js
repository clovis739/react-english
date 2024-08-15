const user = `{
    "users":[
        {
            "firstName": "John",
            "lastName": "clov",
            "email": "cloviddtis@.gmail.com",
        }
    ]
}`

const userText = JSON.parse(user,(key, value) =>{
    let newVal = 
    typeof value === "string" && key !== "email" ? value.toUpperCase() : value
    return newVal
})
console.log(user);