import { readDatabase } from "./index";

readDatabase().map((accounts: any) => {
    console.log(`
    ${accounts.name},
    ${accounts.cpf},
    ${accounts.date},
    ${accounts.extract}
    `)
})