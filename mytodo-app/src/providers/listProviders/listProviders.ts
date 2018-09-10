import {Injectable} from '@angular/core';
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";
import {LoadingController, Platform, ToastController} from "ionic-angular";
import moment from "moment";
import {LocalNotifications} from "@ionic-native/local-notifications";
import {NativeStorage} from "@ionic-native/native-storage";

@Injectable()
export class ListProvider {
  loading;
  id: any;
  name: string;
  databaseObj;

  constructor(public sqlite: SQLite, public platform: Platform, public loadingCtrl: LoadingController, public localNotification: LocalNotifications, public nativeStorage: NativeStorage,public toastCtrl: ToastController) {

    console.log('provider constructor');
    this.dbObject().then((db) => {
      this.databaseObj = db;
      this.createTable().then((tableCreated) => {
        console.log('tableCreated', tableCreated);
      }).catch((errorOnTableCreation) => {
        console.log('errorOnTableCreation : ', errorOnTableCreation);
      });
    }).catch((error) => {
      console.log('dbObject error', error);
    });
    this.loading = this.loadingCtrl.create({
      content: 'Please Wait...'
    });
  }

  dbObject() {
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        // this.databaseObj = db;
        console.log("first run");
        resolve(db);
      }).catch((databaseError) => {
        console.log('databaseError: ',databaseError)
        reject(databaseError);
      });
    });
  }

  createTable() {
    return new Promise((resolve, reject) => {
      this.databaseObj.executeSql('create table  IF NOT EXISTS toDoList(id INTEGER PRIMARY KEY AUTOINCREMENT, taskName text, description text, insertDateTime Date, status varchar(20), notifyTime Date)', {}).then((tableCreated) => {
        console.log("2 run");
        resolve(tableCreated);
      }).catch((errorTable) => {
        reject(errorTable);
      })
    });
  }

  viewAllItem(db) {
    return new Promise((resolve, reject) => {
      let list = [];
      console.log("3 run");
      //this.databaseObj.executeSql("select * from toDoList", {}).then((result) => {
      db.executeSql("select * from toDoList", {}).then((result) => {
        if (result.rows.length > 0) {
          for (let i = 0; i < result.rows.length; i++) {
            list.push({
              id: result.rows.item(i).id, description: result.rows.item(i).description,taskName: result.rows.item(i).taskName,
              date: result.rows.item(i).insertDateTime, status: result.rows.item(i).status,
              notifyTime: result.rows.item(i).notifyTime
            });
          }
        }
        resolve(list);
      }).catch((e) => {
        console.log('e', e);
        reject(e);
      });
    });
  }

  notificationSchedule(name,notifyTime) {
    let notificationDate = new Date(moment.utc(notifyTime).format('LLLL'))
    console.log('notificationDate: ',notificationDate);
    let now = new Date();
    let notificationObject = {
      id: now.getTime(),
      trigger: {
        at: notificationDate.getTime()
      },
      text: name
    };

    this.nativeStorage.getItem('notificationArray').then((data) => {

      data.push(notificationObject);
      console.log('data after pushing: ',data);
      data = data.filter((notification) => {
        return notification.trigger.at > new Date().getTime();
      });
      console.log('data after filter',data);
      this.localNotification.schedule(data);
      this.nativeStorage.setItem("notificationArray", data);
    }).catch((error) => {
      let data = [];
      data.push(notificationObject);
      this.localNotification.schedule(data);
      this.nativeStorage.setItem("notificationArray", data);
    })
  }


  addItem(taskName,name, notifyTime) {

    this.databaseObj.executeSql("insert into toDoList(taskName, description, insertDateTime, status, notifyTime)values(?,?,?,?,?)", [taskName, name, new Date(), 'new', notifyTime]).then((data) => {
    }).catch((err) => {
      console.log('insertion error: ', err)
    });
    this.notificationSchedule(name,notifyTime);
  }

  updateItem(id, taskName, name, notifyDate) {
    this.name = name;
    this.id = id;
    this.databaseObj.executeSql("update toDOList set taskName=?, description=?, notifyTime=? WHERE id =? ", [taskName, this.name, notifyDate, this.id]).then((updated) => {
      // console.log('updated : ', updated);
      this.notificationSchedule(name,notifyDate);
    }).catch((updatedReject) => {
      console.log('updatedReject', updatedReject);
    });
  }

  deleteItem(id) {
    return new Promise((resolve, reject) => {
      this.databaseObj.executeSql("delete from toDoList where id =?", [id])
        .then((deleted) => {
          // console.log('deleted : ', deleted);
          resolve(deleted);
        }).catch((rejectDeleted) => {
        console.log('rejectDeleted : ', rejectDeleted);
        reject(rejectDeleted);
      });
    });
  }

  deleteAllItem(){
    this.databaseObj.executeSql('delete from  toDoList',{}).then(data => {
      console.log('message after daleteAllItem: ',data)
    }).catch(err => {
      console.log('error inside deleteAllItem',err)
    });
  }

  taskCompleted(event, itemId) {
    // console.log('item id : ', itemId);
    return new Promise((resolve, reject) => {
      let id = itemId;
      if (event.checked == true) {
        this.databaseObj.executeSql("update toDoList set status='completed' where id=?", [id]).then((updated) => {
          // console.log('updated task: ', updated);
          resolve(this.viewAllItem(this.databaseObj));
        }).catch((err) => {
          reject(err);
        });
      }
      else {
        this.databaseObj.executeSql("update toDoList set status='new' where id=?", [id]).then((updated) => {
          // console.log('updated task: ', updated);
          resolve(this.viewAllItem(this.databaseObj));
        }).catch((err) => {
          reject(err);
        });
      }
    });
  }

  setDatabaseFromDriveData(taskListArray){
    return new Promise((resolve,reject) => {
    console.log('listArray from drive: ',taskListArray);
    this.deleteAllItem();

      for(let value of taskListArray){
        this.databaseObj.executeSql("insert into toDoList(taskName, description, insertDateTime, status, notifyTime)values(?,?,?,?,?)", [value.taskName, value.description, value.date, value.status, value.notifyTime]).then((data) => {
          console.log('data inserted in setDatabaseFromDrive: ', data);
        }).catch((err) => {
          console.log('error inside setDatabaseFromDriveData: ', err);
          reject();
        });
      }
      resolve();
    });
  }

  showLoader() {
    console.log('show Loader');
    this.loading = this.loadingCtrl.create({
      content: 'Please Wait...'
    });
    this.loading.present();
  }

  hideLoader() {
    console.log('hideLoader');
    this.loading.dismissAll();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 1500,
      position: 'bottom'
    });
    toast.present();
  }

}
