import axios from 'axios';

const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews';

async function createNews (title: string, content: string, date: number = Date.now()): Promise<void>{
    await axios.put(`${baseUrl}/news`, {
        title, 
        content, 
        date
    });
}

const main = async () => {
    try{
        await createNews ('LUBEEEE', 'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE');
    }catch (e) {
        console.log(e.response.data)
    }
}



main();