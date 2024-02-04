import prisma from "../Prisma/Prisma"
import axios from 'axios';

export class User {
  name: string
  email: string
  constructor(name: string, email: string) {
    this.name = name
    this.email = email
  }
  async create() {
    const res = await axios.get("http://localhost:3000/api/users");
    console.log(res);

    // const newUser = await prisma.user.create({
    //   data: {
    //     name: this.name,
    //     email: this.email,
    //   },
    // })
    // .catch(e => {
    //   throw e;
    // }).finally(async () => {
    //   await prisma.$disconnect();
    // });
    // console.log(newUser);
  }
}
