import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { LoadingController } from 'ionic-angular';

import { Storage } from '@ionic/Storage';
import { Events } from 'ionic-angular';

@Injectable()
export class AuthProvider {

  apiRoot: string;
  apiRoutes: ApiRoutes;

  public currentUser: any = null;

  constructor(public http: Http, public events: Events, public storage: Storage, public loadingCtrl: LoadingController) {
    this.apiRoot = 'http://localhost:3080/api/';
    // this.apiRoot = 'https://oddsfinder-api.herokuapp.com/api/';
    
    this.apiRoutes = {
      getUser: this.apiRoot + 'users',
      createUser: this.apiRoot + 'users',
      loginUser: this.apiRoot + 'users/login'
    }
  }

  getUser(userId) {
    let url = this.apiRoutes.getUser + userId;
    let promise = this.http.get(url)
      .map((res: any) => res.json())
      .toPromise();

    return promise;
  }

  createUser(user) {
    let url = this.apiRoutes.createUser;
    let promise = this.http.post(url, user)
      .map((res: any) => res.json())
      .toPromise();

    promise.then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.storage.set('user', data);
        this.storage.set('userExp', new Date(Date.now() + (1000*60*60*24)));
        this.currentUser = data;
      }
    })

    return promise;
  }

  loginUser(user) {
    let url = this.apiRoutes.loginUser;
    let promise = this.http.post(url, user)
      .map((res: any) => res.json())
      .toPromise();

    promise.then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.storage.set('user', data);
        this.storage.set('userExp', new Date(Date.now() + (1000*60*60*24)));
        this.currentUser = data;
      }
    })

    return promise;
  }

  logoutUser(): any {
    return new Promise((resolve, reject) => {
      this.currentUser = null;
      this.storage.remove('user').then(() => {
        this.storage.remove('userExp').then(() => {
          resolve();
        }, error => {
          reject(error);
        });
      }, error => {
        reject(error);
      });
    });
  }

  isAuthed(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this.currentUser) {
        console.log(this.currentUser)
        this.events.publish('user:login');
        resolve(true);
      } else {
        this.checkStorageUser()
          .then(userData =>{
            if (!this.currentUser) {
              reject(false);
            } else {
              this.events.publish('user:login', this.currentUser);
              resolve(true);
            }
          })
          .catch(error => {
            reject(false);
          });
      }
    })
  }

  checkStorageUser(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storage.get('userExp')
        .then(userExp => {
          let userStorageValid = this.compareExpirationDate(userExp);
          if (userStorageValid) {
            this.storage.get('user').then(userdata => {
              this.currentUser = userdata;
              resolve(this.currentUser);
            })
          } else {
            reject('No local user found');
          }
        })
        .catch(err => {
          reject('No local user found');
        })
    });
  }

  compareExpirationDate(expDate: Date): boolean {
    let currentDate = new Date(Date.now());
    if (currentDate > expDate) {
      return false;
    } else {
      return true;
    }
  }

}

class ApiRoutes {
  getUser: string;
  createUser: string;
  loginUser: string;
}
