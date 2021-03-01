// here we'll learn about how to hash password
// hashing password means that we dont want to store password in a plain text in the database. for securing password we'll use the password hash method. password hashing means the original password intentionally converted to different types of symbols.
// we'll use the library called bcrypt.
const bcrypt = require('bcrypt');

// to hash a password we need a salt. what is salt?
// 1234 -> abcd
// imagine our password is 1234 and when we hash it and we get abcd. if we have abcd and we cannot decrypt it and get 1234 for security purposes. if a hacker looks at our database he/she cannot decrypt this hash password. however he can compile a list of populated password and hash them. if he look at the database of our application he will see that 1234 is hashed as abcd and decrypted abcd should return 1234.
// to solve this we need a salt. a salt is basically a random string that is added before or at end of  the password so the resulted hashed password will be different eachtime based on the salt that we have used 
// bcrypt.genSalt() // genSalt is also sync and async. we have to use only async
async function run() {
    const salt = await bcrypt.genSalt(10)
    console.log(salt)
    const hashed = await bcrypt.hash('1234', salt) // 1234 is password
    console.log(hashed)
}
run()
// as an argument we pass the number of rounds when we run this algorithm to generate the salt. the higher the number the longer it takes to generate the salt and also the salt will be more complex and harder to breakthe default value is 10

// $2b$10$XnfgWr0m8Ot6GIblevFG5e
// $2b$10$XnfgWr0m8Ot6GIblevFG5eSbnCE1/M00HPeCNENPhryDeNAGE0XbW
// now the salt is same written in front of our hashed password.
// the reason this is included because latter we have to authenticate the user to validate the username and pasword 