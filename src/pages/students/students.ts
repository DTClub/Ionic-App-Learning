import { StarApp } from './star/star';
import { Component } from '@angular/core';
import {  NavController} from 'ionic-angular';



@Component({
  selector: 'page-students',
  templateUrl: 'students.html',
})
export class StudentsPage {
  name: string = 'tushark';
  constructor(public navCtrl: NavController) {
  }

  gotostudent() {
    this.navCtrl.push(StarApp,{UserName: name});
  }
}
