export interface Client {
    name: string
    //nome do clientão
    
    registrationNumber: number; 
    //Numero de cadastro do cliente, como se fosse id
    
    consumedEnergy: number;
    //consumo de energia no mes
    
    calculateBill(): number; 
}

const client: Client = {
    name: "bombonatti",
    registrationNumber: 2,
    consumedEnergy: 100,

    calculateBill: () => {
        return 2;
    }
}

console.log(client)