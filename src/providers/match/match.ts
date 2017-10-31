import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MatchProvider {

  apiRoot: string;
  apiRoutes: ApiRoutes;

  constructor(public http: Http) {
    // this.apiRoot = 'http://localhost:3080/api/';
    this.apiRoot = 'https://oddsfinder-api.herokuapp.com/api/';
    
    this.apiRoutes = {
      getMatches: this.apiRoot + 'matches',
      getMatchesByLeague: this.apiRoot + 'matches/league/',
      getTopLeagues: this.apiRoot + 'matches/top-leagues'
    }
  }

  getMatches() {
    let url = this.apiRoutes.getMatches;
    let promise = this.http.get(url)
      .map((res: any) => res.json())
      .toPromise();

    return promise;
  }

  getMatchesByLeague(league) {
    let url = this.apiRoutes.getMatchesByLeague + league;
    let promise = this.http.get(url)
      .map((res: any) => res.json())
      .toPromise();

    return promise;
  }

  getTopLeagues() {
    let url = this.apiRoutes.getTopLeagues;
    let promise = this.http.get(url)
      .map((res: any) => res.json())
      .toPromise();

    return promise;
  }

}

class ApiRoutes {
  getMatches: string;
  getMatchesByLeague: string;
  getTopLeagues: string;
}
