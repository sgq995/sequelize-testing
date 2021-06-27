const path = require('path');
const fs = require('fs');

const faker = require('faker/locale/es_MX');
faker.seed(123);

const MAX_PROVIDERS = 10;
const MAX_PARTS = 50;

const providers = {
  data: new Array(MAX_PROVIDERS).fill().map(_ => ({
    name: faker.company.companyName(),
    address: faker.address.streetAddress(true),
    city: faker.address.city(),
    province: faker.address.state(),
    code: faker.datatype.uuid(),
    createdAt: faker.date.past(),
    updatedAt: new Date()
  }))
};

fs.writeFileSync(
  path.join(__dirname, '..', 'providers.json'),
  JSON.stringify(providers, null, 4)
);

const parts = {
  data: new Array(MAX_PARTS).fill().map(_ => ({
    number: faker.datatype.number(1_000_000) + 1_000_000,
    label: faker.commerce.productName(),
    amount: faker.datatype.number(100),
    createdAt: faker.date.past(),
    updatedAt: new Date()
  }))
};

fs.writeFileSync(
  path.join(__dirname, '..', 'parts.json'),
  JSON.stringify(parts, null, 4)
);
