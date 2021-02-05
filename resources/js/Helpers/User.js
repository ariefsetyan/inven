import Token from "./Token";

class User{
    responseAfterLogin(res){
        const access_token = res.data.access_token
        const username = res.data.name
        if (Token){
            AppStorage.store(access_token,username)
        }
    }

    hasToken(){
        const  storeToken = localStorage.getItem(token);
        if (storeToken){
            return Token.isValid(storeToken)?true : false
        }
        false
    }

    loggedId(){
        return this.hasToken()
    }

    name(){
        if (this.loggedId()){
            return localStorage.getItem('user');
        }
    }

    id(){
        if (this.loggedId()){
            const payload = Token.payload(localStorage.getItem('token'))
            return payload.sub
        }
        return false
    }
}
export default User = new User()
