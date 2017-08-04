import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersPage} from '../users/users';
import { StudentsPage} from '../students/students';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToUsers() {
    this.navCtrl.push(UsersPage);
  }

  goToStudents() {
    this.navCtrl.push(StudentsPage);
  }
}
