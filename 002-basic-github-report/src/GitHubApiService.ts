import * as request from 'request';
import { Repo } from './Repo';
import { User } from './User';

const OPTIONS : any = {
    headers: {
        'User-Agent' : 'request'
    },
    // instead of parsing , we can provide header to provide JSON directly
    json : true
};

export class GitHubApiService{

    getUserInfo(userName : string, callback : (user : User) => any){
        request.get('https://api.github.com/users/' + userName, 
                        OPTIONS, 
                        (error : any , response : any, body : any) => {
                            //let user = new User(JSON.parse(body))   ;
                            let user = new User(body)   ;
                            //console.log(user);
                            //console.log(body);

                            callback(user);
                        });
    }

    getRepos(userName : string, callback : (repos : Repo[]) => any){
        request.get('https://api.github.com/users/' + userName + '/repos', 
                        OPTIONS, 
                        (error : any , response : any, body : any) => {
                            let repos = body.map((repo : any) => new Repo(repo));
                            callback(repos);
                        });
    }
}