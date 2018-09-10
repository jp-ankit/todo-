webpackJsonp([0],{

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_item_add_item__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_listProviders_listProviders__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__setting_setting__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, listProviders, localNotification, toastCtrl, googlePlus, http, file) {
        this.navCtrl = navCtrl;
        this.listProviders = listProviders;
        this.localNotification = localNotification;
        this.toastCtrl = toastCtrl;
        this.googlePlus = googlePlus;
        this.http = http;
        this.file = file;
        this.driveFileId = null;
        this.isCompletedTaskHidden = true;
        this.toDOList = [];
        this.completedTask = [];
        this.unCompletedTask = [];
    }
    // ionViewWillEnter(){
    HomePage.prototype.ionViewDidEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var db;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.listProviders.dbObject()];
                    case 1:
                        db = _a.sent();
                        this.listProviders.viewAllItem(db).then(function (list) {
                            _this.taskDivider(list).then(function (nothing) {
                                //this.listProviders.hideLoader();
                            });
                        }).catch(function (err) {
                            console.log(err);
                            _this.listProviders.hideLoader();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.setting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__setting_setting__["a" /* SettingPage */], { appData: this.toDOList });
    };
    //reverseClientId:-  644800672868-fmv8ci3l4acmh2g990luu6j522267luj.apps.googleusercontent.com
    HomePage.prototype.presentToast = function (msg) {
        var toast1 = this.toastCtrl.create({
            message: msg,
            position: 'bottom',
            cssClass: 'toastClass',
            duration: 2000
        });
        toast1.present();
    };
    HomePage.prototype.taskDivider = function (list) {
        var _this = this;
        console.log("lsit : ", list);
        return new Promise(function (resolve, reject) {
            _this.toDOList = [];
            _this.toDOList = list;
            _this.completedTask = [];
            _this.unCompletedTask = [];
            for (var i = 0; i < _this.toDOList.length; i++) {
                if (_this.toDOList[i].status == 'new') {
                    // moment.utc(this.toDOList[i].notifyTime).format('LLLL')
                    _this.unCompletedTask.push(_this.toDOList[i]);
                    if (i == _this.toDOList.length - 1) {
                        resolve('loader dissmiss');
                    }
                }
                else {
                    // moment.utc(this.toDOList[i].notifyTime).format('LLLL')
                    _this.completedTask.push(_this.toDOList[i]);
                    if (i == _this.toDOList.length - 1) {
                        resolve('loader dissmiss');
                    }
                }
            }
            _this.unCompletedTask.sort(function (a, b) { return b.id - a.id; });
            _this.completedTask.sort(function (a, b) { return new Date(b.date).getTime() - new Date(a.date).getTime(); });
            console.log('unCompletedTask: ', _this.unCompletedTask);
            console.log('completedTask: ', _this.completedTask);
            if (_this.completedTask.length !== 0) {
                _this.isCompletedTaskHidden = false;
            }
            else {
                _this.isCompletedTaskHidden = true;
            }
            reject();
        }).then(function () { }).catch(function (err) { });
    };
    HomePage.prototype.addItem = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_item_add_item__["a" /* AddItemPage */], { saveBtnHidden: 'true' });
    };
    HomePage.prototype.dateOrder = function (onDate) {
        // console.log('dateOrder: ',onDate);
        var tarik = __WEBPACK_IMPORTED_MODULE_4_moment___default()(onDate).format('dddd, Do MMMM');
        var todayDate = __WEBPACK_IMPORTED_MODULE_4_moment___default()(new Date()).format('dddd, Do MMMM');
        var yesterdayDate = __WEBPACK_IMPORTED_MODULE_4_moment___default()(new Date()).subtract(1, 'days').format('dddd, Do MMMM');
        if (tarik == todayDate) {
            return 'Today';
        }
        else if (tarik == yesterdayDate) {
            return 'Yesterday';
        }
        else {
            return tarik;
        }
    };
    HomePage.prototype.taskCompleted = function (event, id) {
        var _this = this;
        this.listProviders.showLoader();
        this.listProviders.taskCompleted(event, id).then(function (list) {
            _this.taskDivider(list).then(function () {
                _this.listProviders.hideLoader();
                if (event.checked) {
                    _this.presentToast('One Task Completed');
                }
                else {
                    _this.presentToast('One Task Uncompleted');
                }
            });
        });
    };
    HomePage.prototype.updateItem = function (id, taskName, des, notifyTime) {
        this.id = id;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_item_add_item__["a" /* AddItemPage */], { id: id, taskName: taskName, des: des, notifyTime: notifyTime, updateBtnHidden: true });
    };
    HomePage.prototype.deleteItem = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var db;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.listProviders.dbObject()];
                    case 1:
                        db = _a.sent();
                        this.listProviders.showLoader();
                        // item.close();
                        this.listProviders.deleteItem(id).then(function (deletedItem) {
                            _this.listProviders.viewAllItem(db).then(function (list) {
                                _this.taskDivider(list).then(function (data) {
                                    _this.listProviders.hideLoader();
                                });
                            }).catch(function (error) {
                                _this.listProviders.hideLoader();
                            });
                        }).catch(function (error) {
                            _this.listProviders.hideLoader();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/jft/workSpace/mytodo-app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      ToDo List\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="setting()">\n        <ion-icon ios="ios-settings" md="md-settings"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="wholeApp">\n\n  <ion-list no-lines>\n    <!--<ion-item-group *ngFor="let list of unCompletedTask;">-->\n    <ion-card *ngFor="let list of unCompletedTask;">\n\n      <!--<ion-item-sliding (ionSwipe)="deleteItem(item,list.id)" #item>-->\n      <ion-label style="margin-top: 0px;"></ion-label>\n      <ion-checkbox (ionChange)="taskCompleted($event,list.id)"></ion-checkbox>\n      <ion-card-header>\n        {{list.taskName}}\n        <p style="display: inline;float: right;margin-right: 12px;padding: 0 5px;border-radius:3px;background-color: #d9534f;">\n          <button style="background-color: #d9534f;color:white;font-size:10px;text-transform:capitalize;" (click)="deleteItem(list.id)">Delete</button>\n        </p>\n      </ion-card-header>\n      <ion-card-content>\n        <!--<ion-item-sliding (ionSwipe)="deleteItem(item,list.id)" #item>-->\n        <ion-item (click)="updateItem(list.id,list.taskName,list.description,list.notifyTime)">\n        <!--<ion-label>-->\n        <!--<b text-wrap>{{list.taskName}}</b><br><br>-->\n        <!--<ion-checkbox (ionChange)="taskCompleted($event,list.id)"></ion-checkbox>-->\n        <p text-wrap style="color: #999999;line-height: 1.8rem;">{{list.description}}</p>\n        <p style="margin-bottom: 0px;display:inline;font-size:1.2rem;color: #bbbbbb;">\n          <ion-icon ios="ios-notifications" md="md-notifications"></ion-icon>&nbsp;\n          {{list.notifyTime | dateOrder}}\n        </p>\n        <p style="float:right;margin-bottom: 0px;display:inline;font-size:1.2rem;color: #bbbbbb;">{{dateOrder(list.date)}}</p>\n        <!--</ion-label>-->\n        <!--<ion-checkbox (ionChange)="taskCompleted($event,list.id)"></ion-checkbox>-->\n        </ion-item>\n      <!--</ion-card-content>-->\n\n\n     <!-- <ion-item-options side="right">\n        <button ion-button expandable color="danger" (click)="deleteItem(item,list.id)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>-->\n        <!--</ion-item-sliding>-->\n      </ion-card-content>\n      </ion-card>\n    <!--</ion-item-group>-->\n  </ion-list>\n  <br>\n  <ion-label [hidden]=isCompletedTaskHidden style="font-size: larger;font-weight: bold;color: #999999;">Completed Task</ion-label>\n  <hr [hidden]=isCompletedTaskHidden style="color: #e4e4e4;">\n  <br>\n  <ion-list no-lines [hidden]=isCompletedTaskHidden>\n    <!--<ion-list-header style="font-size: larger;font-weight: bold;">Completed Task</ion-list-header>-->\n    <!--<ion-item-group *ngFor="let list of completedTask;">-->\n    <ion-card *ngFor="let list of completedTask;">\n    <ion-label style="margin-top: 0px;color: #999999;"></ion-label>\n    <ion-checkbox checked (ionChange)="taskCompleted($event,list.id)"></ion-checkbox>\n    <ion-card-header>\n      {{list.taskName}}\n      <p style="display: inline;float: right;margin-right: 12px;padding: 0 5px;border-radius:3px;background-color: #d9534f;">\n        <button style="background-color: #d9534f;color: white;font-size:10px;text-transform:capitalize;" (click)="deleteItem(list.id)">Delete</button>\n      </p>\n    </ion-card-header>\n\n      <ion-card-content>\n        <!--<ion-item-sliding (ionSwipe)="deleteItem(item,list.id)" #item>-->\n          <ion-item>\n            <!--<ion-label>-->\n            <p text-wrap style="color: #999999;line-height: 1.8rem;">{{list.description}}</p>\n            <p style="margin-bottom: 0px;display:inline;font-size:1.2rem;color: #bbbbbb;">\n              <ion-icon ios="ios-notifications" md="md-notifications"></ion-icon>&nbsp;\n              {{list.notifyTime | dateOrder}}\n            </p>\n            <p style="float:right;margin-bottom: 0px;display:inline;font-size:1.2rem;color: #bbbbbb;">{{dateOrder(list.date)}}</p>\n            <!--</ion-label>-->\n            <!--<ion-checkbox checked (ionChange)="taskCompleted($event,list.id)"></ion-checkbox>-->\n          </ion-item>\n          <!--<ion-item-options side="right">-->\n            <!--<button ion-button expandable color="danger" (click)="deleteItem(item,list.id)">-->\n              <!--<ion-icon name="trash"></ion-icon>-->\n              <!--Delete-->\n            <!--</button>-->\n          <!--</ion-item-options>-->\n        <!--</ion-item-sliding>-->\n        <!--</ion-item-group>-->\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab icon-only color="primary" (click)="addItem()">\n      <ion-icon name="md-add"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/home/jft/workSpace/mytodo-app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_listProviders_listProviders__["a" /* ListProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_listProviders_listProviders__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddItemPage = /** @class */ (function () {
    function AddItemPage(listProviders, navCtrl, navParams) {
        this.listProviders = listProviders;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isSaveBtnDisabled = false;
        this.isSaveBtnHidden = false;
        this.isUpdateBtnDisabled = false;
        this.isUpdateBtnHidden = false;
    }
    AddItemPage.prototype.inputChanges = function () {
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
    };
    AddItemPage.prototype.saveItem = function () {
        this.listProviders.addItem(this.taskName, this.name, this.notifyDate);
        this.navCtrl.pop();
    };
    AddItemPage.prototype.ionViewDidLoad = function () {
        if (this.navParams.data.saveBtnHidden) {
            this.isSaveBtnHidden = true;
        }
        else if (this.navParams.data.updateBtnHidden) {
            this.isUpdateBtnHidden = true;
            this.taskName = this.navParams.data.taskName;
            this.name = this.navParams.data.des;
            this.id = this.navParams.data.id;
            this.notifyDate = this.navParams.data.notifyTime;
        }
        else {
            console.log('navParams blank');
        }
    };
    AddItemPage.prototype.updateItem = function () {
        this.listProviders.updateItem(this.id, this.taskName, this.name, this.notifyDate);
        this.navCtrl.pop();
    };
    AddItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-item',template:/*ion-inline-start:"/home/jft/workSpace/mytodo-app/src/pages/add-item/add-item.html"*/'<!--\n  Generated template for the AddItemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>New Task</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="wholeApp">\n<ion-card>\n  <ion-card-content>\n    <ion-item no-padding>\n    <ion-label floating>Task Name</ion-label>\n    <ion-input name="taskName" [(ngModel)]="taskName" (keyup)="inputChanges()"></ion-input>\n    </ion-item>\n  <ion-item no-padding>\n    <ion-label floating>Enter a description</ion-label>\n    <ion-textarea name="description" [(ngModel)]="name" (keyup)="inputChanges()"></ion-textarea>\n  </ion-item>\n  <ion-item no-padding>\n    <ion-label floating>Notify me at: &nbsp; &nbsp;\n      <ion-icon end ios="ios-calendar" md="md-calendar"></ion-icon>\n    </ion-label>\n    <ion-datetime displayFormat="DD MMM, YYYY HH:mm" pickerFormat="DD MMM YYYY H mm" [(ngModel)]="notifyDate" (ionChange)="inputChanges()"></ion-datetime>\n  </ion-item>\n  <br>\n    <ion-row class="buttonRowStyle">\n    <button full ion-button round color="primary" class="buttonStyle" [hidden]="!isSaveBtnHidden" [disabled]="!isSaveBtnDisabled"\n          (click)="saveItem()">Save\n    </button>\n    </ion-row>\n\n    <ion-row class="buttonRowStyle">\n    <button full ion-button round color="primary" class="buttonStyle" [hidden]="!isUpdateBtnHidden" [disabled]="!isUpdateBtnDisabled"\n          (click)="updateItem()">Update\n    </button>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/jft/workSpace/mytodo-app/src/pages/add-item/add-item.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_listProviders_listProviders__["a" /* ListProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_listProviders_listProviders__["a" /* ListProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */]])
    ], AddItemPage);
    return AddItemPage;
}());

//# sourceMappingURL=add-item.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_listProviders_listProviders__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingPage = /** @class */ (function () {
    function SettingPage(navCtrl, navParams, googlePlus, http, file, listProviders, nativeStroage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.googlePlus = googlePlus;
        this.http = http;
        this.file = file;
        this.listProviders = listProviders;
        this.nativeStroage = nativeStroage;
        this.accessToken = null;
        this.driveFileId = null;
        this.toDOList = [];
        this.displayName = null;
        this.email = null;
        this.serverAuthCode = null;
        this.expireTime = null;
        console.log('accessToken', this.accessToken);
    }
    SettingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SettingPage');
        this.toDOList = this.navParams.data.appData;
        console.log('app data inside setting: ', this.toDOList);
        this.nativeStroage.getItem('accessToken').then(function (data) {
            console.log('token: ', data);
            _this.accessToken = data.token;
            _this.displayName = data.userName;
            _this.email = data.emailId;
            _this.expireTime = data.expires_in;
            if (_this.expireTime > new Date().getTime()) {
                console.log('accessToken not expired');
                _this.getFileIdFromDrive(data.token);
                console.log('getFileIdFromDrive : ', _this.driveFileId);
            }
            else {
                console.log('accessToken expired');
                _this.accessToken = null;
                _this.driveFileId = null;
                _this.expireTime = null;
                _this.googleLogout();
            }
        }).catch(function (err) {
            console.log('token error', err);
            _this.accessToken = null;
            _this.displayName = null;
            _this.email = null;
        });
    };
    SettingPage.prototype.getFileIdFromDrive = function (accessToken) {
        var _this = this;
        // console.log('access token inside: this.getFileIdFromDrive', accessToken)
        return new Promise(function (resolve, reject) {
            _this.http.get('https://www.googleapis.com/drive/v3/files', {
                headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + accessToken)
            }).subscribe(function (data) {
                // console.log('data inside getFileIdFromDrive: ', data);
                for (var i = 0; i < data['files'].length; i++) {
                    console.log('files name : ', data['files'][i].name);
                    if (data['files'][i].name == 'TaskList') {
                        _this.driveFileId = data['files'][i].id;
                        resolve(data['files'][i].id);
                        break;
                    }
                    else {
                        if (data['files'].length == i + 1) {
                            _this.driveFileId = null;
                            // console.log('sdfsafsdffdsfdgdfdfgnbdfbgmsdfbmbmdbbdfbdmbfdjbjdfjjhfhhgyyugerg')
                            resolve();
                        }
                    }
                }
            }), function (err) {
                console.log(err);
                //this.listProviders.hideLoader();
                _this.driveFileId = null;
                reject();
            };
        });
    };
    SettingPage.prototype.googleLogin = function () {
        var _this = this;
        // console.log('3333333333333333333333333');
        return new Promise(function (resolve, reject) {
            if (_this.accessToken) {
                //this.listProviders.presentToast('Already logged in')
                //this.uploadDataIntoDrive();
                resolve();
            }
            else {
                // this.listProviders.showLoader();
                /*'webClientId': '177554691066-i7866fdnbia2jr3th0dd7k92fbm82siu.apps.googleusercontent.com',
                  'offline': true*/
                console.log('login else part ');
                _this.googlePlus.login({
                    'scopes': 'https://www.googleapis.com/auth/drive.file'
                }).then(function (res) {
                    console.log('res: inside googlelOGIN: ', res);
                    console.log('res: expires value: ', res.expires);
                    console.log('res: expires_in value: ', res.expires_in);
                    console.log('res: set: ', new Date().setSeconds(res.expires_in));
                    console.log('res: now: ', new Date().getTime());
                    var expireTime = new Date().setSeconds(res.expires_in);
                    _this.accessToken = res.accessToken;
                    _this.displayName = res.displayName;
                    _this.email = res.email;
                    _this.serverAuthCode = res.serverAuthCode;
                    _this.nativeStroage.setItem('accessToken', {
                        token: res.accessToken,
                        userName: res.displayName,
                        emailId: res.email,
                        expires_in: expireTime
                    });
                    //this.listProviders.presentToast('Successfully logged in');
                    // this.uploadDataIntoDrive();
                    resolve();
                }).catch(function (error) {
                    console.log('error in login : ', error);
                    reject();
                });
            }
        });
    };
    SettingPage.prototype.retrieveDataFileFromDrive = function () {
        var _this = this;
        this.getFileIdFromDrive(this.accessToken).then(function (fileId) {
            console.log('fileId inside getDataFromDrive', fileId);
            console.log('drive id inside getDataFromDrive: ', _this.driveFileId);
            if (_this.driveFileId == null) {
                _this.listProviders.hideLoader();
                _this.listProviders.presentToast('First you have to upload data');
                return;
            }
            else {
                // this.listProviders.showLoader();
                _this.http.get('https://www.googleapis.com/drive/v3/files/' + _this.driveFileId + '?alt=media', {
                    headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + _this.accessToken)
                }).subscribe(function (data) {
                    console.log('data inside: getDataFromDrive: ', data);
                    /*this.deleteFile(this.driveFileId).then((data) => {
                      this.driveFileId = null;
                    }).catch(err => {
                      this.listProviders.hideLoader();
                      console.log('error inside getDataFromDrive: ', err);
                    });*/
                    _this.listProviders.setDatabaseFromDriveData(data).then(function () {
                        _this.listProviders.hideLoader();
                        _this.listProviders.presentToast('Data successfully retrieved');
                    }).catch(function (err) {
                        console.log('error inside setDatabaseFromDriver: ', err);
                        _this.listProviders.hideLoader();
                    });
                }, function (err) {
                    console.log('error ', err);
                    _this.listProviders.hideLoader();
                });
            }
        }).catch(function (err) {
            console.log('error on getFileIdFromDrive : ', err);
        });
    };
    SettingPage.prototype.getDataFromDrive = function () {
        var _this = this;
        console.log('asdddddddddddddddddddddddd: ', this.accessToken);
        if (this.accessToken == null && this.expireTime == null) {
            this.googleLogin().then(function () {
                _this.listProviders.showLoader();
                _this.retrieveDataFileFromDrive();
            }).catch(function (err) {
                console.log('eersdsdf login error : ', err);
            });
        }
        else {
            console.log('retrieve data when logged in');
            this.listProviders.showLoader();
            this.retrieveDataFileFromDrive();
        }
    };
    SettingPage.prototype.getFileData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // if(this.toDOList) {
            _this.file = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */]();
            _this.file.writeFile(_this.file.dataDirectory, 'demo.txt', _this.toDOList, { replace: true }).then(function (data) {
                _this.file.readAsText(_this.file.dataDirectory, 'demo.txt').then(function (content) {
                    resolve(content);
                }).catch(function (err) {
                    console.log('err0', err);
                    _this.listProviders.hideLoader();
                    reject(err);
                });
            }).catch(function (err) {
                console.log('err', err);
                _this.listProviders.hideLoader();
                reject(err);
            });
            // }else{
            //   this.listProviders.hideLoader();
            //   this.listProviders.presentToast('App data empty');
            //   console.log('empty');
            // // }
        });
    };
    SettingPage.prototype.uploadFile = function () {
        var _this = this;
        this.getFileData().then(function (content) {
            console.log('file content inside uploadFile: ', content);
            console.log('accessToken inside uploadFile: ', _this.accessToken);
            _this.http.post('https://www.googleapis.com/upload/drive/v3/files?uploadType=media', content, { headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + _this.accessToken) }).subscribe(function (data) {
                // console.log('file uploaded: inside uploadFile: ',data);
                //this.driveFileId = data['id'];
                // this.driveFileName = data['name'];
                // console.log('inside uploadDataIntoDrive: driveFieldId: ', this.driveFileId);
                // console.log('inside uploadDataIntoDrive: driveFieldName: ', this.driveFileName);
                var dt = { 'name': 'TaskList' };
                _this.http.patch('https://www.googleapis.com/drive/v3/files/' + data['id'], dt, { headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + _this.accessToken) }).subscribe(function (data) {
                    // console.log('data after patch request: ', data);
                    //this.setDatabaseFromDriveData(data);
                    _this.driveFileId = data['id'];
                    // console.log('file id inside uploadfile: ',data['id']);
                    _this.listProviders.hideLoader();
                    _this.listProviders.presentToast('Your data successfully uploded to Google Drive');
                }, function (err) {
                    console.log(err);
                    _this.listProviders.hideLoader();
                });
            }, function (err) {
                console.log(err);
                _this.listProviders.hideLoader();
            });
        }).catch(function (err) {
            console.log('error inside uploadfile', err);
            _this.listProviders.hideLoader();
        });
    };
    SettingPage.prototype.uploadDataIntoDrive = function () {
        var _this = this;
        // this.googleLogin();
        if (this.toDOList.length == 0) {
            console.log('app data: inside uploadDataIntoDrive: ', this.toDOList);
            this.listProviders.presentToast('App data empty');
        }
        else {
            console.log('not empty', this.toDOList);
            if (this.accessToken == null && this.expireTime == null) {
                //this.listProviders.presentToast('First you have to logged in');
                this.googleLogin().then(function (data) {
                    console.log('data : ', data);
                    _this.listProviders.showLoader();
                    _this.getFileIdFromDrive(_this.accessToken).then(function (id) {
                        console.log('id inside: getFileIdFromDrive: ', id);
                        if (_this.driveFileId == null) {
                            console.log('driveFileId null');
                            console.log('driveFileId value: ', _this.driveFileId);
                            _this.uploadFile();
                        }
                        else {
                            _this.deleteFile(_this.driveFileId).then(function (data) {
                                // console.log('deleteFile data: ',data);
                                _this.uploadFile();
                            }).catch(function (err) {
                                console.log('deleteFile err', err);
                                _this.listProviders.hideLoader();
                            });
                        }
                    }).catch(function (err) {
                        console.log('err inside getFileIdFromDrive : ', err);
                    });
                }).catch(function (err) {
                    console.log('err inside login: ', err);
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
                }
                else {
                    this.deleteFile(this.driveFileId).then(function (data) {
                        // console.log('deleteFile data: ',data);
                        _this.uploadFile();
                    }).catch(function (err) {
                        console.log('deleteFile err', err);
                        _this.listProviders.hideLoader();
                    });
                }
            }
        }
    };
    SettingPage.prototype.deleteFile = function (fileId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // console.log('fileid inside deleteFile: ',fileId);
            _this.http.delete('https://www.googleapis.com/drive/v3/files/' + fileId, { headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + _this.accessToken) }).subscribe(function (data) {
                // console.log('data after delete from drive: ',data);
                //upload
                //this.uploadFile();
                resolve(data);
            }, function (err) {
                console.log('error on deleting file from drive: ', err);
                _this.listProviders.hideLoader();
                reject(err);
            });
        });
    };
    SettingPage.prototype.googleLogout = function () {
        var _this = this;
        this.googlePlus.disconnect().then(function (data) {
            console.log('logout: ', data);
            _this.accessToken = null;
            _this.driveFileId = null;
        }).catch(function (err) { console.log('error: ', err); });
        // this.googlePlus.logout().then((res) => {
        //   console.log('logout: ', res);
        //   this.accessToken = null;
        //   this.driveFileId = null;
        //   //this.content =null;
        // }).catch(err => console.log('err: ', err))
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"/home/jft/workSpace/mytodo-app/src/pages/setting/setting.html"*/'<!--\n  Generated template for the SettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="wholeApp">\n\n <!-- Successfully Logged in : {{displayName}}<br>\n  Emial: {{email}}<br>-->\n  <!--style="text-align: left;font-size: 20px;text-align: justify;font-family: Times New Roman, Times, serif;"-->\n  <ion-row style="margin: 20px;margin-bottom: 0px;"><p style="margin:0px;font-size: large;">Back Up Data</p></ion-row>\n  <p style="color: #666;line-height: 2.5rem;margin:20px;">Back up your tasks to Google Drive. You can restore them when you reinstall ToDo app. Tasks you back up are not protected by ToDo app end-to-end encryption while in Google Drive.</p>\n\n  <ion-row class="buttonRowStyle">\n    <button ion-button round class="buttonStyle" (click)="uploadDataIntoDrive()" style="">\n      <ion-icon name="cloud-upload" style="padding-right: 10px;"></ion-icon>\n      Back Up Data</button>\n  </ion-row>\n  <ion-row style="margin: 20px;margin-bottom: 0px;"><p style="margin:0px;font-size: large;">Retrieve Data</p></ion-row>\n  <p style="color: #666;line-height: 2.5rem;margin:20px;">\n      Before retrieving your tasks from the Google Drive you have to upload your tasks to Google Drive. Once you uploaded the tasks after that you can retrieve tasks from the Google Drive. Tasks you retrieve are not protected by ToDo app end-to-end encryption while in Google Drive.\n    </p>\n\n  <ion-row class="buttonRowStyle">\n  <button ion-button round class="buttonStyle" (click)="getDataFromDrive()">\n    <ion-icon name="cloud-download" style="padding-right: 10px;"></ion-icon>\n    Retrieve Data </button>\n  </ion-row>\n  <!--<button ion-button full color="danger" icon-left (click)="googleLogout()">-->\n    <!--<ion-icon name="logo-googleplus"></ion-icon> Login with google-->\n  <!--</button>-->\n\n</ion-content>\n'/*ion-inline-end:"/home/jft/workSpace/mytodo-app/src/pages/setting/setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_5__providers_listProviders_listProviders__["a" /* ListProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(351);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_add_item_add_item__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_listProviders_listProviders__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_sqlite__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_sqlite_porter__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_local_notifications__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_date_order_date_order__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_google_plus__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_file__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_setting_setting__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_add_item_add_item__["a" /* AddItemPage */],
                __WEBPACK_IMPORTED_MODULE_14__pipes_date_order_date_order__["a" /* DateOrderPipe */],
                __WEBPACK_IMPORTED_MODULE_18__pages_setting_setting__["a" /* SettingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_add_item_add_item__["a" /* AddItemPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_setting_setting__["a" /* SettingPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__providers_listProviders_listProviders__["a" /* ListProvider */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_sqlite_porter__["a" /* SQLitePorter */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_local_notifications__["a" /* LocalNotifications */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_storage__["a" /* NativeStorage */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/jft/workSpace/mytodo-app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/jft/workSpace/mytodo-app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 206,
	"./af.js": 206,
	"./ar": 207,
	"./ar-dz": 208,
	"./ar-dz.js": 208,
	"./ar-kw": 209,
	"./ar-kw.js": 209,
	"./ar-ly": 210,
	"./ar-ly.js": 210,
	"./ar-ma": 211,
	"./ar-ma.js": 211,
	"./ar-sa": 212,
	"./ar-sa.js": 212,
	"./ar-tn": 213,
	"./ar-tn.js": 213,
	"./ar.js": 207,
	"./az": 214,
	"./az.js": 214,
	"./be": 215,
	"./be.js": 215,
	"./bg": 216,
	"./bg.js": 216,
	"./bm": 217,
	"./bm.js": 217,
	"./bn": 218,
	"./bn.js": 218,
	"./bo": 219,
	"./bo.js": 219,
	"./br": 220,
	"./br.js": 220,
	"./bs": 221,
	"./bs.js": 221,
	"./ca": 222,
	"./ca.js": 222,
	"./cs": 223,
	"./cs.js": 223,
	"./cv": 224,
	"./cv.js": 224,
	"./cy": 225,
	"./cy.js": 225,
	"./da": 226,
	"./da.js": 226,
	"./de": 227,
	"./de-at": 228,
	"./de-at.js": 228,
	"./de-ch": 229,
	"./de-ch.js": 229,
	"./de.js": 227,
	"./dv": 230,
	"./dv.js": 230,
	"./el": 231,
	"./el.js": 231,
	"./en-au": 232,
	"./en-au.js": 232,
	"./en-ca": 233,
	"./en-ca.js": 233,
	"./en-gb": 234,
	"./en-gb.js": 234,
	"./en-ie": 235,
	"./en-ie.js": 235,
	"./en-il": 236,
	"./en-il.js": 236,
	"./en-nz": 237,
	"./en-nz.js": 237,
	"./eo": 238,
	"./eo.js": 238,
	"./es": 239,
	"./es-do": 240,
	"./es-do.js": 240,
	"./es-us": 241,
	"./es-us.js": 241,
	"./es.js": 239,
	"./et": 242,
	"./et.js": 242,
	"./eu": 243,
	"./eu.js": 243,
	"./fa": 244,
	"./fa.js": 244,
	"./fi": 245,
	"./fi.js": 245,
	"./fo": 246,
	"./fo.js": 246,
	"./fr": 247,
	"./fr-ca": 248,
	"./fr-ca.js": 248,
	"./fr-ch": 249,
	"./fr-ch.js": 249,
	"./fr.js": 247,
	"./fy": 250,
	"./fy.js": 250,
	"./gd": 251,
	"./gd.js": 251,
	"./gl": 252,
	"./gl.js": 252,
	"./gom-latn": 253,
	"./gom-latn.js": 253,
	"./gu": 254,
	"./gu.js": 254,
	"./he": 255,
	"./he.js": 255,
	"./hi": 256,
	"./hi.js": 256,
	"./hr": 257,
	"./hr.js": 257,
	"./hu": 258,
	"./hu.js": 258,
	"./hy-am": 259,
	"./hy-am.js": 259,
	"./id": 260,
	"./id.js": 260,
	"./is": 261,
	"./is.js": 261,
	"./it": 262,
	"./it.js": 262,
	"./ja": 263,
	"./ja.js": 263,
	"./jv": 264,
	"./jv.js": 264,
	"./ka": 265,
	"./ka.js": 265,
	"./kk": 266,
	"./kk.js": 266,
	"./km": 267,
	"./km.js": 267,
	"./kn": 268,
	"./kn.js": 268,
	"./ko": 269,
	"./ko.js": 269,
	"./ky": 270,
	"./ky.js": 270,
	"./lb": 271,
	"./lb.js": 271,
	"./lo": 272,
	"./lo.js": 272,
	"./lt": 273,
	"./lt.js": 273,
	"./lv": 274,
	"./lv.js": 274,
	"./me": 275,
	"./me.js": 275,
	"./mi": 276,
	"./mi.js": 276,
	"./mk": 277,
	"./mk.js": 277,
	"./ml": 278,
	"./ml.js": 278,
	"./mn": 279,
	"./mn.js": 279,
	"./mr": 280,
	"./mr.js": 280,
	"./ms": 281,
	"./ms-my": 282,
	"./ms-my.js": 282,
	"./ms.js": 281,
	"./mt": 283,
	"./mt.js": 283,
	"./my": 284,
	"./my.js": 284,
	"./nb": 285,
	"./nb.js": 285,
	"./ne": 286,
	"./ne.js": 286,
	"./nl": 287,
	"./nl-be": 288,
	"./nl-be.js": 288,
	"./nl.js": 287,
	"./nn": 289,
	"./nn.js": 289,
	"./pa-in": 290,
	"./pa-in.js": 290,
	"./pl": 291,
	"./pl.js": 291,
	"./pt": 292,
	"./pt-br": 293,
	"./pt-br.js": 293,
	"./pt.js": 292,
	"./ro": 294,
	"./ro.js": 294,
	"./ru": 295,
	"./ru.js": 295,
	"./sd": 296,
	"./sd.js": 296,
	"./se": 297,
	"./se.js": 297,
	"./si": 298,
	"./si.js": 298,
	"./sk": 299,
	"./sk.js": 299,
	"./sl": 300,
	"./sl.js": 300,
	"./sq": 301,
	"./sq.js": 301,
	"./sr": 302,
	"./sr-cyrl": 303,
	"./sr-cyrl.js": 303,
	"./sr.js": 302,
	"./ss": 304,
	"./ss.js": 304,
	"./sv": 305,
	"./sv.js": 305,
	"./sw": 306,
	"./sw.js": 306,
	"./ta": 307,
	"./ta.js": 307,
	"./te": 308,
	"./te.js": 308,
	"./tet": 309,
	"./tet.js": 309,
	"./tg": 310,
	"./tg.js": 310,
	"./th": 311,
	"./th.js": 311,
	"./tl-ph": 312,
	"./tl-ph.js": 312,
	"./tlh": 313,
	"./tlh.js": 313,
	"./tr": 314,
	"./tr.js": 314,
	"./tzl": 315,
	"./tzl.js": 315,
	"./tzm": 316,
	"./tzm-latn": 317,
	"./tzm-latn.js": 317,
	"./tzm.js": 316,
	"./ug-cn": 318,
	"./ug-cn.js": 318,
	"./uk": 319,
	"./uk.js": 319,
	"./ur": 320,
	"./ur.js": 320,
	"./uz": 321,
	"./uz-latn": 322,
	"./uz-latn.js": 322,
	"./uz.js": 321,
	"./vi": 323,
	"./vi.js": 323,
	"./x-pseudo": 324,
	"./x-pseudo.js": 324,
	"./yo": 325,
	"./yo.js": 325,
	"./zh-cn": 326,
	"./zh-cn.js": 326,
	"./zh-hk": 327,
	"./zh-hk.js": 327,
	"./zh-tw": 328,
	"./zh-tw.js": 328
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 403;

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateOrderPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Generated class for the DateOrderPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var DateOrderPipe = /** @class */ (function () {
    function DateOrderPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    DateOrderPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var date = __WEBPACK_IMPORTED_MODULE_1_moment___default.a.utc(value).format('lll');
        // console.log(date);
        if (date == 'Invalid date') {
            return 'N/A';
        }
        else {
            return date;
        }
    };
    DateOrderPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'dateOrder',
        })
    ], DateOrderPipe);
    return DateOrderPipe;
}());

//# sourceMappingURL=date-order.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListProvider = /** @class */ (function () {
    function ListProvider(sqlite, platform, loadingCtrl, localNotification, nativeStorage, toastCtrl) {
        var _this = this;
        this.sqlite = sqlite;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.localNotification = localNotification;
        this.nativeStorage = nativeStorage;
        this.toastCtrl = toastCtrl;
        console.log('provider constructor');
        this.dbObject().then(function (db) {
            _this.databaseObj = db;
            _this.createTable().then(function (tableCreated) {
                console.log('tableCreated', tableCreated);
            }).catch(function (errorOnTableCreation) {
                console.log('errorOnTableCreation : ', errorOnTableCreation);
            });
        }).catch(function (error) {
            console.log('dbObject error', error);
        });
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
    }
    ListProvider.prototype.dbObject = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'data.db',
                location: 'default'
            }).then(function (db) {
                // this.databaseObj = db;
                console.log("first run");
                resolve(db);
            }).catch(function (databaseError) {
                console.log('databaseError: ', databaseError);
                reject(databaseError);
            });
        });
    };
    ListProvider.prototype.createTable = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.databaseObj.executeSql('create table  IF NOT EXISTS toDoList(id INTEGER PRIMARY KEY AUTOINCREMENT, taskName text, description text, insertDateTime Date, status varchar(20), notifyTime Date)', {}).then(function (tableCreated) {
                console.log("2 run");
                resolve(tableCreated);
            }).catch(function (errorTable) {
                reject(errorTable);
            });
        });
    };
    ListProvider.prototype.viewAllItem = function (db) {
        return new Promise(function (resolve, reject) {
            var list = [];
            console.log("3 run");
            //this.databaseObj.executeSql("select * from toDoList", {}).then((result) => {
            db.executeSql("select * from toDoList", {}).then(function (result) {
                if (result.rows.length > 0) {
                    for (var i = 0; i < result.rows.length; i++) {
                        list.push({
                            id: result.rows.item(i).id, description: result.rows.item(i).description, taskName: result.rows.item(i).taskName,
                            date: result.rows.item(i).insertDateTime, status: result.rows.item(i).status,
                            notifyTime: result.rows.item(i).notifyTime
                        });
                    }
                }
                resolve(list);
            }).catch(function (e) {
                console.log('e', e);
                reject(e);
            });
        });
    };
    ListProvider.prototype.notificationSchedule = function (name, notifyTime) {
        var _this = this;
        var notificationDate = new Date(__WEBPACK_IMPORTED_MODULE_3_moment___default.a.utc(notifyTime).format('LLLL'));
        console.log('notificationDate: ', notificationDate);
        var now = new Date();
        var notificationObject = {
            id: now.getTime(),
            trigger: {
                at: notificationDate.getTime()
            },
            text: name
        };
        this.nativeStorage.getItem('notificationArray').then(function (data) {
            data.push(notificationObject);
            console.log('data after pushing: ', data);
            data = data.filter(function (notification) {
                return notification.trigger.at > new Date().getTime();
            });
            console.log('data after filter', data);
            _this.localNotification.schedule(data);
            _this.nativeStorage.setItem("notificationArray", data);
        }).catch(function (error) {
            var data = [];
            data.push(notificationObject);
            _this.localNotification.schedule(data);
            _this.nativeStorage.setItem("notificationArray", data);
        });
    };
    ListProvider.prototype.addItem = function (taskName, name, notifyTime) {
        this.databaseObj.executeSql("insert into toDoList(taskName, description, insertDateTime, status, notifyTime)values(?,?,?,?,?)", [taskName, name, new Date(), 'new', notifyTime]).then(function (data) {
        }).catch(function (err) {
            console.log('insertion error: ', err);
        });
        this.notificationSchedule(name, notifyTime);
    };
    ListProvider.prototype.updateItem = function (id, taskName, name, notifyDate) {
        var _this = this;
        this.name = name;
        this.id = id;
        this.databaseObj.executeSql("update toDOList set taskName=?, description=?, notifyTime=? WHERE id =? ", [taskName, this.name, notifyDate, this.id]).then(function (updated) {
            // console.log('updated : ', updated);
            _this.notificationSchedule(name, notifyDate);
        }).catch(function (updatedReject) {
            console.log('updatedReject', updatedReject);
        });
    };
    ListProvider.prototype.deleteItem = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.databaseObj.executeSql("delete from toDoList where id =?", [id])
                .then(function (deleted) {
                // console.log('deleted : ', deleted);
                resolve(deleted);
            }).catch(function (rejectDeleted) {
                console.log('rejectDeleted : ', rejectDeleted);
                reject(rejectDeleted);
            });
        });
    };
    ListProvider.prototype.deleteAllItem = function () {
        this.databaseObj.executeSql('delete from  toDoList', {}).then(function (data) {
            console.log('message after daleteAllItem: ', data);
        }).catch(function (err) {
            console.log('error inside deleteAllItem', err);
        });
    };
    ListProvider.prototype.taskCompleted = function (event, itemId) {
        var _this = this;
        // console.log('item id : ', itemId);
        return new Promise(function (resolve, reject) {
            var id = itemId;
            if (event.checked == true) {
                _this.databaseObj.executeSql("update toDoList set status='completed' where id=?", [id]).then(function (updated) {
                    // console.log('updated task: ', updated);
                    resolve(_this.viewAllItem(_this.databaseObj));
                }).catch(function (err) {
                    reject(err);
                });
            }
            else {
                _this.databaseObj.executeSql("update toDoList set status='new' where id=?", [id]).then(function (updated) {
                    // console.log('updated task: ', updated);
                    resolve(_this.viewAllItem(_this.databaseObj));
                }).catch(function (err) {
                    reject(err);
                });
            }
        });
    };
    ListProvider.prototype.setDatabaseFromDriveData = function (taskListArray) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log('listArray from drive: ', taskListArray);
            _this.deleteAllItem();
            for (var _i = 0, taskListArray_1 = taskListArray; _i < taskListArray_1.length; _i++) {
                var value = taskListArray_1[_i];
                _this.databaseObj.executeSql("insert into toDoList(taskName, description, insertDateTime, status, notifyTime)values(?,?,?,?,?)", [value.taskName, value.description, value.date, value.status, value.notifyTime]).then(function (data) {
                    console.log('data inserted in setDatabaseFromDrive: ', data);
                }).catch(function (err) {
                    console.log('error inside setDatabaseFromDriveData: ', err);
                    reject();
                });
            }
            resolve();
        });
    };
    ListProvider.prototype.showLoader = function () {
        console.log('show Loader');
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    ListProvider.prototype.hideLoader = function () {
        console.log('hideLoader');
        this.loading.dismissAll();
    };
    ListProvider.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 1500,
            position: 'bottom'
        });
        toast.present();
    };
    ListProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */]])
    ], ListProvider);
    return ListProvider;
}());

//# sourceMappingURL=listProviders.js.map

/***/ })

},[330]);
//# sourceMappingURL=main.js.map