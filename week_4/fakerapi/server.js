const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;


const createUser = () =>{
  const newUser = {
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
  return newUser;
  
}

const createCompany = () =>{
  const newCompany = {
    id: faker.datatype.uuid(),
    companyName: faker.company.companyName(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.cityName(),
      state: faker.address.state(),
      zipcode: faker.address.zipCode(),
      country: faker.address.country(),
    }
  }
  return newCompany;
}

const userCompany = () =>{
  const companyUser ={
  company: createCompany(),
  user: createUser(),
  }
  return companyUser;
}
app.get("/api/users/new", (req, res) => {
  res.json(createUser());
});

app.get("/api/companies/new", (req, res) => {
  res.json(createCompany());
});

app.get("/api/user/company", (req, res) => {
  
  res.json(userCompany()); 
});

app.listen(port, () => {
  console.log(`express server is listening on port: ${port}`);
});
