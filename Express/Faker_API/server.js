// The import line will look different than what is in Faker's documentation
// because we are working with an express application
const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000; 
// req is shorthand for request
// res is shorthand for response

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


// we can create a function to return a random / fake "Product"
const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};
    
const newFakeProduct = createProduct();
console.log(newFakeProduct);

const createUser =()=> {
    const newUser ={
        id: faker.datatype.uuid(),
        password: faker.internet.password(),
        email:faker.internet.email(),
        phoneNumber:faker.phone.phoneNumber(),
        firstname:faker.name.firstName(),
        lastname:faker.name.lastName(),
        

    };
    return newUser;
}

const createCompany  =()=> {
    const newCompany ={
        id:  faker.datatype.uuid(),
        name: faker.internet.userName(),
        address : {
            street:faker.address.street() ,
            city:faker.address.city() ,
            state: faker.address.state(),
            zipCode:faker.address.zipCode()  ,
            country:faker.address.county()
        }
    };
    return newCompany;
}

const newUser= createUser();
console.log(newUser);

const newCompany= createCompany();
console.log(newCompany);

app.get("/api", (req, res) => {
    res.json({ message: "Hello Worlds" });
});
app.get("/api/users/new", (req, res) => {
    res.json(createUser());
});

app.get("/api/companies/new", (req,res)=>{
    res.json(createCompany());
});

app.get("/api/user/company", (req,res)=>{
    result={ user:newUser,
        company: newCompany}
    res.json(result)

});

/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools' 
 * }
 */


// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
