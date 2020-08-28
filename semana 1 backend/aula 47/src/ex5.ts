import axios from 'axios';

const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews';

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

const sendNotification = async(subscriber: Subscriber[], message: string): Promise<void> => {
    for (const users of subscriber) {
        await axios.post(`${baseUrl}/notifications/send`, {
            subscriberId: users.id,
            message: message
        })
        console.log('Notificação enviada para: ', users.name)
    }
}

const main = async () =>{
    try{
        const subscribers =  await getSubscribers();
        await sendNotification(subscribers, "EU VENCIIIIIIII HAHAAHAHAHAHAHA")
    } catch (e) {
        console.log(e.response.data);
    }

}

main();