import axios from 'axios';

const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews';

type Subscriber = {
    id: string,
    name: string,
    email: string
}

const sendNotification = async(subscriber: Subscriber[], message: string): Promise<void> => {
    const promisseArray = []
    for (const users of subscriber) {
        promisseArray.push(
            await axios.post(`${baseUrl}/notifications/send`, {
                subscriberId: users.id,
                message: message
            })    
        )
            console.log('Notificação enviada para: ', users.name)
    }
    await Promise.all(promisseArray)
    console.log('finish him')
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
    try{
        const subscribers =  await getSubscribers();
        await sendNotification(subscribers, "EU VENCIIIIIIII HAHAAHAHAHAHAHA")
    } catch (e) {
        console.log(e.response.data)
    }
}

main();