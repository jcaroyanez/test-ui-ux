const BASE_URL = "https://api.instagram.com/v1/users/";
const ACCESS_TOKEN = "3559098631.1677ed0.f895cf62368341649e42f1a58fb03f5a";

class Api {
    /*petition http for get the pictures of instagram*/
    async getPituer(){
        const query = await fetch(`${BASE_URL}self/media/recent?count=15&access_token=${ACCESS_TOKEN}`);
        const { data } = await query.json();
        return data;
    }
}

export default new Api();