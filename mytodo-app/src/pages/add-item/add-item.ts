import {Component} from '@angular/core';
import {ListProvider} from "../../providers/listProviders/listProviders";
import {NavController, NavParams} from "ionic-angular";

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
  providers: [ListProvider]
})
export class AddItemPage {

  taskName: string;
  name: string;
  id;
  isSaveBtnDisabled: boolean = false;
  isSaveBtnHidden: boolean = false;
  isUpdateBtnDisabled: boolean = false;
  isUpdateBtnHidden: boolean = false;
  notifyDate;

  constructor(public listProviders: ListProvider, public navCtrl: NavController, public navParams: NavParams) {

  }

    inputChanges() {
    console.log('input changes');
    if (this.navParams.data.saveBtnHidden) {
      if (this.taskName) {
        this.isSaveBtnDisabled = true;
      }
      else {
        this.isSaveBtnDisabled = false;
      }
    }
    else if (this.navParams.data.updateBtnHidden) {
      if (this.name == this.navParams.data.des && this.notifyDate == this.navParams.data.notifyTime && this.taskName == this.navParams.data.taskname) {
        this.isUpdateBtnDisabled = false;
      }
      else if (this.taskName == '') {
        // console.log('blank');
        this.isUpdateBtnDisabled = false;
      }
      else {
        // console.log('Un equal');
        this.isUpdateBtnDisabled = true;
      }
    }
    else {
      console.log('else of inputChanges');
    }
  }

  saveItem() {
    this.listProviders.addItem(this.taskName,this.name, this.notifyDate);
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    if (this.navParams.data.saveBtnHidden) {
      this.isSaveBtnHidden = true;
    }
    else if (this.navParams.data.updateBtnHidden) {
      this.isUpdateBtnHidden = true;
      this.taskName= this.navParams.data.taskName;
      this.name = this.navParams.data.des;
      this.id = this.navParams.data.id;
      this.notifyDate = this.navParams.data.notifyTime;
    }
    else {
      console.log('navParams blank');
    }
  }

  updateItem() {
    this.listProviders.updateItem(this.id, this.taskName,this.name, this.notifyDate);
    this.navCtrl.pop();
  }

}
