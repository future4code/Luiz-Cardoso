import { readDatabase, writeToDatabase } from './index';



const date: Date = new Date();


type UserAccount = {
  name: string,
  cpf: string,
  date: string,
  extract: any
}


type Extract = {
  valor: number,
  date: Date,
  description: string
}

const createAccount = async(UserAccount: UserAccount): Promise<void> => {
    const infoAccount = readDatabase();

    infoAccount.push(UserAccount)

    writeToDatabase(infoAccount);
}

createAccount({
    "name": "luizzzzzzzzzzzz",
    "cpf": "455.565.658-52",
    "date": "25/11/1989",
    "extract": []
});