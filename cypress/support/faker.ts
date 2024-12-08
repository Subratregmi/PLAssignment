import { faker } from "@faker-js/faker"

const commonFaker = {
  username: faker.internet.userName(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email({ provider: "gmail.com", allowSpecialCharacters: false }).toLowerCase(),
  password: faker.internet.password({ length: 8 }),
}

export { commonFaker }
