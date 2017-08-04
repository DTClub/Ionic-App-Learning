import { NavParams } from 'ionic-angular';
import { Component , OnInit } from '@angular/core';


@Component({
    selector: 'star-app',
    templateUrl: 'star.html'
})


export class StarApp {
    constructor(private navParam: NavParams) {}
    
    ngOnInit() {
        console.log(this.navParam.data);
    }

}