import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController, LoadingController, Content } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  @ViewChild(Content) content: Content;

  public authType: string = 'login';

  public allowUserLocation: any = true;

  public user: any = {
    mobile_number : '',
    email : '',
    password : '',
    football_team : '',
    location : null,
    country : null
  }

  public formFields: any = {
    mobile_number : true,
    email : true,
    password : true,
    football_team : true,
    location : true,
    country : true
  }

  public passwordRules: any = {
    minChars: false,
    maxChars: false,
    minNumbers: false,
    minLetters: false
  }

  public validationFailureMessage: string = '';

  public countryList = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];


  constructor(public navCtrl: NavController, public authProvider: AuthProvider, public toastCtrl: ToastController, public geolocation: Geolocation, public http: Http, public loadingCtrl: LoadingController) {

  }

  ionViewDidLoad() {
    this.authProvider.isAuthed().then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  createUser() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...',
      spinner: 'crescent',
      enableBackdropDismiss: false
    });

    loading.present();
    let formValid = this.validateForm();
    if (formValid) {
      if (this.allowUserLocation) {
        this.geolocation.getCurrentPosition()
          .then((resp) => {
            this.user.location = {
              latitude : resp.coords.latitude,
              longitude: resp.coords.longitude
            };
            let countryCodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + this.user.location.latitude + ',' + this.user.location.longitude + '&key=&key=AIzaSyC0lkUzUVFH4_UbcbF5IurOtPuusq3J2-Y';
            return this.http.get(countryCodeUrl)
              .map((res: any) => res.json())
              .toPromise();
          })
          .then(data => {
            let addressComponents = data.results[0].address_components;
            let countryComponent = addressComponents.find(el => {
              return el.types.includes('country');
            })
            this.user.country = countryComponent.long_name;
            this.authProvider.createUser(this.user)
              .then(data => {
                if (data.error) { 
                  loading.dismiss();
                  this.presentToast('Error creating account.');
                } else {
                  loading.dismiss();
                  this.loginUser();
                }
              })
              .catch(err => {
                loading.dismiss();
                this.presentToast('Error creating account.');
              })
          })
          .catch((error) => {
            loading.dismiss();
            this.presentToast('Error getting location.');
          });
      } else {
        this.authProvider.createUser(this.user)
          .then(data => {
            if (data.error) { 
              loading.dismiss();
              this.presentToast('Error creating account.');
            } else {
              loading.dismiss();
              this.loginUser();
            }
          })
          .catch(err => {
            loading.dismiss();
            this.presentToast('Error creating account.');
          })
      }
    } else {
      loading.dismiss();
    }
    
  }

  loginUser() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...',
      spinner: 'crescent',
      enableBackdropDismiss: false
    });

    loading.present();
    let formValid = this.validateForm();
    if (formValid) {
      this.authProvider.loginUser(this.user)
      .then(data => {
        loading.dismiss();
        console.log(data);
        if (data.error) { 
          this.presentToast(data.error)
        } else {
          this.presentToast('Hello ' + this.authProvider.currentUser.email + '!');
        }
      })
      .catch(err => {
        loading.dismiss();
        console.log(err);
      })
    }
  }

  logoutUser() {
    this.authProvider.logoutUser();
    setTimeout(() => {
      this.content.resize();
    }, 50);
  }

  validateForm() {
    if (this.authType === 'login') {
      let passwordValidation = this.checkPwd();
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(this.user.email)) {
        this.formFields.email = false;
        this.validationFailureMessage = 'Email address is not valid.';
        this.presentToast(this.validationFailureMessage);
        return false;
      } else {
        this.formFields.email = true;
      }
      if (!passwordValidation) {
        this.formFields.password = false;
        return false;
      } else {
        this.formFields.password = true;
      }
      return true;
    } else if (this.authType = 'register') {
      let passwordValidation = this.checkPwd();
      let re = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
      if (!re.test(this.user.mobile_number)) {
        this.formFields.mobile_number = false;
        this.validationFailureMessage = 'Mobile number is not valid.';
        this.presentToast(this.validationFailureMessage);
        return false;
      } else {
        this.formFields.mobile_number = true;
      }
      re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(this.user.email)) {
        this.formFields.email = false;
        this.validationFailureMessage = 'Email address is not valid.';
        this.presentToast(this.validationFailureMessage);
        return false;
      } else {
        this.formFields.email = true;
      }
      if (!passwordValidation) {
        this.formFields.password = false;
        return false;
      } else {
        this.formFields.password = true;
      }
      if (!this.allowUserLocation) {
        if (this.user.country === null) {
          this.formFields.country = false;
          this.validationFailureMessage = 'Country must be selected if location is not used.';
          this.presentToast(this.validationFailureMessage);
          return false;
        } else {
          this.formFields.country = true;
        }
      }
      return true;
    }
  }

  validatePassword() {
    let minChars = this.checkMinChars(this.user.password);
    let maxChars = this.checkMaxChars(this.user.password);
    let minLetters = this.checkMinLetters(this.user.password);
    let minNumbers = this.checkMinNumbers(this.user.password);
  }

  checkPwd() {
    for(var rule in this.passwordRules)
        if(!this.passwordRules[rule]) return false;
    return true;
  }

  checkMinChars(str) {
    if (str.length < 6) {
      this.passwordRules.minChars = false;
      return({passed: false, message: 'Password must contain at least 6 characters.'});
    } else {
      this.passwordRules.minChars = true;
      return({passed: true, message: 'OK'});
    }
  }

  checkMaxChars(str) {
    if (str.length > 50) {
      this.passwordRules.maxChars = false;
      return({passed: false, message: 'Password must be shorter than 50 characters.'});
    } else {
      this.passwordRules.maxChars = true;
      return({passed: true, message: 'OK'});
    }
  }

  checkMinNumbers(str) {
    if (str.search(/\d/) == -1) {
      this.passwordRules.minNumbers = false;
      return({passed: false, message: 'Password must contain at least 1 number.'});
    } else {
      this.passwordRules.minNumbers = true;
      return({passed: true, message: 'OK'});
    }
  }

  checkMinLetters(str) {
    if (str.search(/[a-zA-Z]/) == -1) {
      this.passwordRules.minLetters = false;
      return({passed: false, message: 'Password must contain at least 1 letter.'});
    } else {
      this.passwordRules.minLetters = true;
      return({passed: true, message: 'OK'});
    }
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

}
