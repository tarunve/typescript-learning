import { GitHubApiService } from './GitHubApiService';
import { Repo } from './Repo';
import { User } from './User';
import * as _ from 'lodash';

let svc = new GitHubApiService();
// Separate Calls
/*
svc.getUserInfo('tarunve', (user : User) => {
    console.log(user);
});

svc.getRepos('tarunve', (repos : Repo[]) => {
    console.log(repos);
});
*/

if (process.argv.length < 3) {
    console.log('Please pass the username as as argument');
} else {
    let username = process.argv[2];
    svc.getUserInfo(username, (user: User) => {
        svc.getRepos(username, (repos: Repo[]) => {
            let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.forkNumber * -1]);
            let filteredRepos = _.take(sortedRepos, 5);
            user.repos = filteredRepos;
            console.log(user);
        });
    });
}