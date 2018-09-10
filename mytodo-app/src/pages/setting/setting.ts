import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {GooglePlus} from "@ionic-native/google-plus";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {File} from "@ionic-native/file";
import {ListProvider} from "../../providers/listProviders/listProviders";
import {NativeStorage} from "@ionic-native/native-storage";

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  accessToken = null;
  driveFileId = null;
  toDOList: any = [];
  displayName = null;
  email = null;
  serverAuthCode = null;
  expireTime = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public googlePlus: GooglePlus, public http: HttpClient, public file: File, public listProviders: ListProvider, public nativeStroage: NativeStorage) {
    console.log('accessToken', this.accessToken);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
    this.toDOList = this.navParams.data.appData;
    console.log('app data inside setting: ', this.toDOList);
    this.nativeStroage.getItem('accessToken').then((data) => {
      console.log('token: ', data);
      this.accessToken = data.token;
      this.displayName = data.userName;
      this.email = data.emailId;
      this.expireTime = data.expires_in;
      if (this.expireTime > new Date().getTime()) {
        console.log('accessToken not expired');
        this.getFileIdFromDrive(data.token);
        console.log('getFileIdFromDrive : ', this.driveFileId);
      } else {
        console.log('accessToken expired');
        this.accessToken = null;
        this.driveFileId = null;
        this.expireTime = null;
        this.googleLogout();
      }
    }).catch(err => {
      console.log('token error', err)
      this.accessToken = null;
      this.displayName = null;
      this.email = null;
    });
  }

  getFileIdFromDrive(accessToken) {
    // console.log('access token inside: this.getFileIdFromDrive', accessToken)
    return new Promise((resolve, reject) => {
      this.http.get('https://www.googleapis.com/drive/v3/files', {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + accessToken)
      }).subscribe((data) => {
        // console.log('data inside getFileIdFromDrive: ', data);
        for (let i = 0; i < data['files'].length; i++) {
          console.log('files name : ',data['files'][i].name);
          if (data['files'][i].name == 'TaskList') {
            this.driveFileId = data['files'][i].id;
            resolve(data['files'][i].id);
            break;
          } else {
            if (data['files'].length == i + 1) {
              this.driveFileId = null;
              // console.log('sdfsafsdffdsfdgdfdfgnbdfbgmsdfbmbmdbbdfbdmbfdjbjdfjjhfhhgyyugerg')
              resolve();
            }
          }
        }
      }), (err) => {
        console.log(err);
        //this.listProviders.hideLoader();
        this.driveFileId = null;
        reject();
      }
    });
  }

  googleLogin() {
    // console.log('3333333333333333333333333');
    return new Promise((resolve, reject) => {
      if (this.accessToken) {

        //this.listProviders.presentToast('Already logged in')
        //this.uploadDataIntoDrive();
        resolve();
      }
      else {
        // this.listProviders.showLoader();
        /*'webClientId': '177554691066-i7866fdnbia2jr3th0dd7k92fbm82siu.apps.googleusercontent.com',
          'offline': true*/
        console.log('login else part ');
        this.googlePlus.login({
          'scopes': 'https://www.googleapis.com/auth/drive.file'
        }).then((res) => {
          console.log('res: inside googlelOGIN: ', res);
          console.log('res: expires value: ', res.expires);
          console.log('res: expires_in value: ', res.expires_in);
          console.log('res: set: ', new Date().setSeconds(res.expires_in));
          console.log('res: now: ', new Date().getTime());
          let expireTime = new Date().setSeconds(res.expires_in);
          this.accessToken = res.accessToken;
          this.displayName = res.displayName;
          this.email = res.email;
          this.serverAuthCode = res.serverAuthCode;
          this.nativeStroage.setItem('accessToken', {
            token: res.accessToken,
            userName: res.displayName,
            emailId: res.email,
            expires_in: expireTime
          });
          //this.listProviders.presentToast('Successfully logged in');
          // this.uploadDataIntoDrive();
          resolve();
        }).catch((error) => {
          console.log('error in login : ',error);
          reject();
        })
      }
    });
  }

  retrieveDataFileFromDrive(){
    this.getFileIdFromDrive(this.accessToken).then((fileId) => {
      console.log('fileId inside getDataFromDrive', fileId);
      console.log('drive id inside getDataFromDrive: ', this.driveFileId);
      if (this.driveFileId == null) {
        this.listProviders.hideLoader();
        this.listProviders.presentToast('First you have to upload data');
        return;
      } else {
        // this.listProviders.showLoader();
        this.http.get('https://www.googleapis.com/drive/v3/files/' + this.driveFileId + '?alt=media', {
          headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.accessToken)
        }).subscribe((data) => {
          console.log('data inside: getDataFromDrive: ', data);
          /*this.deleteFile(this.driveFileId).then((data) => {
            this.driveFileId = null;
          }).catch(err => {
            this.listProviders.hideLoader();
            console.log('error inside getDataFromDrive: ', err);
          });*/
          this.listProviders.setDatabaseFromDriveData(data).then(() => {
            this.listProviders.hideLoader();
            this.listProviders.presentToast('Data successfully retrieved')
          }).catch(err => {
            console.log('error inside setDatabaseFromDriver: ', err);
            this.listProviders.hideLoader();
          });
        }, (err) => {
          console.log('error ', err);
          this.listProviders.hideLoader();
        })
      }
    }).catch((err) => {
      console.log('error on getFileIdFromDrive : ', err)
    });
  }

  getDataFromDrive() {

    console.log('asdddddddddddddddddddddddd: ', this.accessToken);

    if(this.accessToken == null && this.expireTime == null){

      this.googleLogin().then(() => {
        this.listProviders.showLoader();
        this.retrieveDataFileFromDrive();
      }).catch((err) => {
        console.log('eersdsdf login error : ', err)
      });

    }else{
        console.log('retrieve data when logged in');
        this.listProviders.showLoader();
        this.retrieveDataFileFromDrive();
    }

  }


  getFileData() {
    return new Promise((resolve, reject) => {
      // if(this.toDOList) {
      this.file = new File();
      this.file.writeFile(this.file.dataDirectory, 'demo.txt', this.toDOList, {replace: true}).then((data) => {
        this.file.readAsText(this.file.dataDirectory, 'demo.txt').then((content) => {

          resolve(content);
        }).catch((err) => {
          console.log('err0', err);
          this.listProviders.hideLoader();
          reject(err);
        })
      }).catch((err) => {
        console.log('err', err);
        this.listProviders.hideLoader();
        reject(err);
      })
      // }else{
      //   this.listProviders.hideLoader();
      //   this.listProviders.presentToast('App data empty');
      //   console.log('empty');
      // // }
    });
  }

  uploadFile() {
    this.getFileData().then((content) => {
      console.log('file content inside uploadFile: ', content);
      console.log('accessToken inside uploadFile: ', this.accessToken);
      this.http.post('https://www.googleapis.com/upload/drive/v3/files?uploadType=media', content, {headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.accessToken)}).subscribe((data) => {
        // console.log('file uploaded: inside uploadFile: ',data);
        //this.driveFileId = data['id'];
        // this.driveFileName = data['name'];
        // console.log('inside uploadDataIntoDrive: driveFieldId: ', this.driveFileId);
        // console.log('inside uploadDataIntoDrive: driveFieldName: ', this.driveFileName);

        let dt = {'name': 'TaskList'};
        this.http.patch('https://www.googleapis.com/drive/v3/files/' + data['id'], dt, {headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.accessToken)}).subscribe((data) => {
          // console.log('data after patch request: ', data);
          //this.setDatabaseFromDriveData(data);
          this.driveFileId = data['id'];
          // console.log('file id inside uploadfile: ',data['id']);
          this.listProviders.hideLoader();
          this.listProviders.presentToast('Your data successfully uploded to Google Drive');
        }, (err) => {
          console.log(err);
          this.listProviders.hideLoader();
        })
      }, (err) => {
        console.log(err);
        this.listProviders.hideLoader();
      })
    }).catch((err) => {
      console.log('error inside uploadfile', err);
      this.listProviders.hideLoader();
    });
  }

  uploadDataIntoDrive() {
    // this.googleLogin();
    if (this.toDOList.length == 0) {
      console.log('app data: inside uploadDataIntoDrive: ', this.toDOList);
      this.listProviders.presentToast('App data empty');
    } else {
      console.log('not empty', this.toDOList);
      if (this.accessToken == null && this.expireTime == null) {
        //this.listProviders.presentToast('First you have to logged in');
        this.googleLogin().then((data) => {
          console.log('data : ', data);
          this.listProviders.showLoader();
          this.getFileIdFromDrive(this.accessToken).then((id) => {
            console.log('id inside: getFileIdFromDrive: ', id);
            if (this.driveFileId == null) {
              console.log('driveFileId null');
              console.log('driveFileId value: ', this.driveFileId);
              this.uploadFile();
            } else {
              this.deleteFile(this.driveFileId).then((data) => {
                // console.log('deleteFile data: ',data);
                this.uploadFile();
              }).catch((err) => {
                console.log('deleteFile err', err)
                this.listProviders.hideLoader();
              });
            }
          }).catch((err) => {
            console.log('err inside getFileIdFromDrive : ', err);
          });

        }).catch((err) => {
          console.log('err inside login: ', err)
        });
      }
      else {
        this.listProviders.showLoader();
        /*this.getFileIdFromDrive(this.accessToken);
        console.log('drivea Id inside uploadDataIntoDrive: ',this.driveFileId);*/
        if (this.driveFileId == null) {
          console.log('driveFileId null');
          console.log('driveFileId value: ', this.driveFileId);
          this.uploadFile();

        } else {

          this.deleteFile(this.driveFileId).then((data) => {
            // console.log('deleteFile data: ',data);
            this.uploadFile();
          }).catch((err) => {
            console.log('deleteFile err', err)
            this.listProviders.hideLoader();
          });
        }
      }
    }
  }

  deleteFile(fileId) {
    return new Promise((resolve, reject) => {
      // console.log('fileid inside deleteFile: ',fileId);
      this.http.delete('https://www.googleapis.com/drive/v3/files/' + fileId, {headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.accessToken)}).subscribe((data) => {
        // console.log('data after delete from drive: ',data);
        //upload
        //this.uploadFile();
        resolve(data);
      }, (err) => {
        console.log('error on deleting file from drive: ', err);
        this.listProviders.hideLoader();
        reject(err);
      })
    });
  }

  googleLogout() {
    this.googlePlus.disconnect().then((data)=>{
      console.log('logout: ',data);
      this.accessToken = null;
      this.driveFileId = null;
    }).catch((err)=>{console.log('error: ',err)});
    // this.googlePlus.logout().then((res) => {
    //   console.log('logout: ', res);
    //   this.accessToken = null;
    //   this.driveFileId = null;
    //   //this.content =null;
    // }).catch(err => console.log('err: ', err))
  }


}
