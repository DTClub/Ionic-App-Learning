import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { StudentsPage} from '../students/students';


@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  constructor(public navCtrl: NavController) {
  }

  gotoStudentDetails() {
    this.navCtrl.push(StudentsPage);
  }




}
