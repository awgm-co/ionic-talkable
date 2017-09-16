import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import{ ViewController}from 'ionic-angular';
@Component({
  selector: 'page-ack',
  templateUrl: 'ack.html',
})
export class AckPage {

  constructor(public navCtrl: NavController, 
    public viewCtrl: ViewController,
              public navParams: NavParams){}
              
              dismiss() {
                this.viewCtrl.dismiss();
              }
  }