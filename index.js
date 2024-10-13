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

// //Will use the find 
// User.findById("670ab84ea3948b4c20a06138")
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

// User.findOneAndUpdate({name: "Bruce"},{age: 100}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

User.findByIdAndDelete('670ab807c2481ac52a00f5b6').then(res =>{
    console.log(res);
});

/*
PS C:\Users\HP\OneDrive\Desktop\DELTA4\MONGO> node index.js
connection successful !!!
{
  _id: new ObjectId('670ab807c2481ac52a00f5b6'),
  name: 'Eve',
  email: 'eve@yahoo.com',
  age: 555,
  __v: 0
}
*/