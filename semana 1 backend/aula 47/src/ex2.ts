import axios from 'axios';

const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'

//a. O que muda pra mim é aonde o async entra e na escrita dela! Na função
//nomeada assincrona, o async vai no começo da função para indicar assincronicidade
//já na arrow function não é necessário indicar no começo. 

type Subscriber = {
    id: string,
    name: string,
    email: string 
}

const getSubscribers = async(): Promise<Subscriber[]> => {
    const subscriber = await axios.get(`${baseUrl}/subscribers/all`);
    return subscriber.data.map((subscriber: Subscriber) => {
        return {
            id: subscriber.id,
            name: subscriber.name,
            email: subscriber.email
        }
    })
}

const main = async () => {
try {
    const subscribers =  await getSubscribers();
    console.log(subscribers);
} catch (e) {
    console.log(e.response.data)
}
}

main();