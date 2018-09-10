import { Component } from '@angular/core';
import {ItemSliding, NavController, ToastController} from 'ionic-angular';
import {AddItemPage} from "../add-item/add-item";
import {ListProvider} from "../../providers/listProviders/listProviders";
import moment from "moment";
import {LocalNotifications} from "@ionic-native/local-notifications";
import {GooglePlus} from "@ionic-native/google-plus";
import {HttpClient} from "@angular/common/http";
import { File} from "@ionic-native/file";
import {SettingPage} from "../setting/setting";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  driveFileId=null;
  isCompletedTaskHidden=true;
  id;
  toDOList: any = [];
  completedTask: any=[];
  unCompletedTask: any=[];
  displayName;
  email;
  accessToken;

  constructor(public navCtrl: NavController, public listProviders: ListProvider,public localNotification: LocalNotifications,public toastCtrl: ToastController,public googlePlus: GooglePlus, public http: HttpClient, public file: File) {

  }

  // ionViewWillEnter(){
    async  ionViewDidEnter(){
    // this.listProviders.showLoader();
      let db= await this.listProviders.dbObject();
    this.listProviders.viewAllItem(db).then((list)=>{
      this.taskDivider(list).then((nothing)=>{
        //this.listProviders.hideLoader();
      });
    }).catch((err)=>{
      console.log(err);
      this.listProviders.hideLoader();
    });

  }

  setting(){
    this.navCtrl.push(SettingPage,{appData: this.toDOList});
  }

  //reverseClientId:-  644800672868-fmv8ci3l4acmh2g990luu6j522267luj.apps.googleusercontent.com

  presentToast(msg){
    let toast1 = this.toastCtrl.create({
      message: msg,
      position: 'bottom',
      cssClass: 'toastClass',
      duration: 2000
    });
    toast1.present();
  }

  taskDivider(list){
    console.log("lsit : ",list);
    return new Promise((resolve, reject) => {
    this.toDOList=[];
    this.toDOList=list;
    this.completedTask=[];
    this.unCompletedTask=[];
    for(let i=0;i<this.toDOList.length;i++){
      if(this.toDOList[i].status == 'new'){
        // moment.utc(this.toDOList[i].notifyTime).format('LLLL')
        this.unCompletedTask.push(this.toDOList[i]);
        if(i == this.toDOList.length-1){
          resolve('loader dissmiss');
        }
      }
      else{
        // moment.utc(this.toDOList[i].notifyTime).format('LLLL')
        this.completedTask.push(this.toDOList[i]);
        if(i == this.toDOList.length-1){
          resolve('loader dissmiss');
        }
      }
    }
    this.unCompletedTask.sort((a, b) => b.id - a.id);
      this.completedTask.sort((a,b)=> new Date(b.date).getTime() - new Date(a.date).getTime());
      console.log('unCompletedTask: ', this.unCompletedTask);
      console.log('completedTask: ', this.completedTask);
    if(this.completedTask.length !== 0)
    {
      this.isCompletedTaskHidden=false;
    }else{
      this.isCompletedTaskHidden=true;
    }
    reject();
    }).then(()=>{}).catch((err)=>{});
  }


  addItem(){
    this.navCtrl.push(AddItemPage,{saveBtnHidden:'true'});
  }

  dateOrder(onDate){
    // console.log('dateOrder: ',onDate);
    let tarik=moment(onDate).format('dddd, Do MMMM');
    let todayDate=moment(new Date()).format('dddd, Do MMMM');
    let yesterdayDate=moment(new Date()).subtract(1,'days').format('dddd, Do MMMM');
    if(tarik == todayDate){
      return 'Today';
    }
    else if(tarik == yesterdayDate) {
      return 'Yesterday';
    }
      else{
      return tarik;
    }
  }

  taskCompleted(event,id){
    this.listProviders.showLoader();
    this.listProviders.taskCompleted (event,id).then((list)=>{
      this.taskDivider(list).then(()=>{
        this.listProviders.hideLoader();
        if(event.checked) {
          this.presentToast('One Task Completed');
        }
        else {
          this.presentToast('One Task Uncompleted');
        }
      })
    });
  }

  updateItem(id, taskName, des, notifyTime){
    this.id = id;
    this.navCtrl.push(AddItemPage, {id: id, taskName: taskName, des: des, notifyTime: notifyTime ,updateBtnHidden:true});
  }

  async deleteItem(id) {
    let db= await this.listProviders.dbObject();
    this.listProviders.showLoader();
    // item.close();
    this.listProviders.deleteItem(id).then((deletedItem) => {
      this.listProviders.viewAllItem(db).then((list)=>{
        this.taskDivider(list).then((data)=>{
          this.listProviders.hideLoader();
        });
      }).catch((error)=>{
        this.listProviders.hideLoader();
      });
    }).catch((error)=>{
      this.listProviders.hideLoader();
    });
  }


}
