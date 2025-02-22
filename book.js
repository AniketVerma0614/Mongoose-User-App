// getting-books.js
const mongoose = require('mongoose');

main()
.then(()=>{
console.log("connection successful !!!");
})

.catch(err => console.log(err));

async function main() {
await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

//Defining the Book Schema !!!
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required : true,
        maxLength: 20,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: 1,
    },
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction","non-fiction"]
    }
});

const Book = mongoose.model("Book",bookSchema);

Book.findByIdAndUpdate("670b614585a36643ec17ba54",{price: -500},{runValidators: true}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err.errors.price.properties.message);
});