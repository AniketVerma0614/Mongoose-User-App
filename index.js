// getting-started.js
const mongoose = require('mongoose');

main()
.then(()=>{
console.log("connection successful !!!");
})

.catch(err => console.log(err));

async function main() {
await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

//Mongoose MODEL ...
const User = mongoose.model("User",userSchema);

// const Employee = mongoose.model("Employee",userSchema);

//Now lets create the OBJECTS !!!
const user1 = new User({
    name : "Adam",
    email: "adam@yahoo.com",
    age: 48,
});

user1.save();

/*
test> db.users.find()
[
  {
    _id: ObjectId('670a7f1ac4bd2602f1d63609'),
    name: 'Adam',
    email: 'adam@yahoo.com',
    age: 48,
    __v: 0
  }
]
test>
*/