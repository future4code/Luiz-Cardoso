import axios from 'axios';

const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'

//a. Não, pois a promisse receberá a tipagem do usuário
//b. A promisse é o resultado de uma função assincrona, caso não tenha indicado nela o que ela tem que retornar
//mapeamos esse processo para que possamos decidir o que receberemos.


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