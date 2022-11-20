export interface SSOInterface{

    obtainAccessToken():void;

    getAccessToken():string;

    isLogin():boolean;

    userInfo():any;

    logout():void;
}