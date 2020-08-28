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

async function createNews (title: string, content: string, date: number = Date.now()): Promise<void>{
    await axios.put(`${baseUrl}/news`, {
        title, 
        content, 
        date
    });
}

const createSubscriber = async (name: string, email: string) => {
    await axios.put(`${baseUrl}/subscribers`, {
        name,
        email
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

const createAndSendNotifications = async () => {
    try {
        await createNews(
            "Tamo junto e misturado",
            "chacabum"
        )
        const users = await getSubscribers();
        
        await sendNotification (users, "testando msginha")
    } catch (e) {
        console.log(e.response.data)
    }
}

const getAllNofitications = async (): Promise<any> => {
    const users = await getSubscribers();

    const notificationsPromisses = [];

    for (const user of users) {
        notificationsPromisses.push(
            axios.get(`${baseUrl}/subscribers/${user.id}/notifications/all`)
        )
    }
    const result = await Promise.all(notificationsPromisses)
    const dataResultForm = result.map((res) => res.data)
    
    return dataResultForm
    console.log(dataResultForm)
}


const main = async () => {
    try{
        await createAndSendNotifications();
        await createSubscriber("Jorge da babilonia", "jorjãolegalzão@gmail.com");
        await getAllNofitications();
    } catch (e) {
        console.log(e.response.data)
    }
}

main();