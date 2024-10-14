Here's the README for your GitHub repository:

---

# Book Management with Mongoose

A Node.js project that uses Mongoose to manage a collection of books in a MongoDB database. This project demonstrates how to define a schema, set up validation rules, and interact with the database using Mongoose methods like `findByIdAndUpdate`.

## Features
- Connects to a MongoDB database using Mongoose.
- Defines a `Book` schema with fields like `title`, `author`, `price`, `discount`, and `category`.
- Includes validation rules to ensure data integrity.
- Implements functionality to update book details with validation checks.
- Provides error handling for validation issues.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js and npm installed on your system.
- MongoDB installed and running locally.

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   ```

2. **Navigate into the project directory:**
   ```bash
   cd mongoose-book-app
   ```

3. **Install the dependencies:**
   ```bash
   npm install mongoose
   ```

## Usage

1. **Start MongoDB server:**
   Ensure that your MongoDB server is running locally:
   ```bash
   mongod
   ```

2. **Run the script:**
   ```bash
   node getting-books.js
   ```

3. The script will:
   - Connect to the MongoDB database named `amazon`.
   - Define a `Book` schema with validation rules.
   - Attempt to update a book's price using the `findByIdAndUpdate` method.
   - Handle validation errors and print messages to the console.

## Book Schema Details

The schema includes the following fields:

| Field     | Type     | Validation                           | Description                              |
|-----------|----------|-------------------------------------|------------------------------------------|
| `title`   | String   | Required, maxLength of 20 characters | Title of the book                        |
| `author`  | String   | None                                 | Author of the book                       |
| `price`   | Number   | Minimum value of 1                   | Price of the book                        |
| `discount`| Number   | Default value is 0                   | Discount on the book                     |
| `category`| String   | Enum: `fiction`, `non-fiction`       | Category of the book                    |

## Example Code Snippet

Below is an example of how to use the `findByIdAndUpdate` method with validation:

```javascript
Book.findByIdAndUpdate("670b614585a36643ec17ba54", {price: -500}, {runValidators: true})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.errors.price.properties.message);
  });
```

## Error Handling

Validation errors (e.g., setting a negative price) are properly handled and output an error message to the console, explaining the issue.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. For more information, please refer to the `LICENSE` file.

## Contact

If you have any questions or feedback, please contact [your_email@example.com](mailto:your_email@example.com).

---
 
