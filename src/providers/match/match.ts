import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the MatchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MatchProvider {

  apiRoot: string;
  apiRoutes: ApiRoutes;

  constructor(public http: Http) {
    this.apiRoot = 'http://localhost:3080/api/';
    // this.apiRoot = 'https://oddsfinder-api.herokuapp.com/api/';
    
    this.apiRoutes = {
      getMatches: this.apiRoot + 'matches'
    }
  }

  getMatches() {
    let url = this.apiRoutes.getMatches;
    let promise = this.http.get(url)
      .map((res: any) => res.json())
      .toPromise();

    return promise;
  }

}

class ApiRoutes {
  getMatches: string;
}
