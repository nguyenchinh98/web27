const users = [
    {
        name: "Chinh",
        age: 24,
        job: "student"
    },
    {
        name: "Quỳnh",
        age: 22,
        job: "student"
    }
]

const love = users.map((user) => {
    return {
        name: "Têm " + user.name,
        age: user.age,
        
    }
})
console.log(love)