import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {InAppBrowser} from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-weekly-signs',
  templateUrl: 'weekly-signs.html'
})
export class WeeklySignsPage {
  week: any = '';
  keyWordSignsChunks: any = [];
  weeklyKeyWordSigns: any = [];
  color: any = '';
  constructor(private iab: InAppBrowser,public navCtrl: NavController, public navParams: NavParams) {
    
    this.week = this.navParams.get('w');
    this.color = this.week.number;
    this.weeklyKeyWordSigns = this.week.weeklyKeyWordSigns;
    //split array into chunks of 2 
    console.log(this.weeklyKeyWordSigns)
    // while (this.week.weeklyKeyWordSigns.length > 0){
    //   // this.keyWordSignsChunks.push(this.week.weeklyKeyWordSigns.splice(0, 2));
    //   this.weeklyKeyWordSigns.push(this.week.weeklyKeyWordSigns);
    // }
    // fs.getKeyWordSignObject(this.week.weeklyKeyWordSigns).subscribe(data => {
    //   while (data.length > 0){
    //     this.keyWordSignsChunks.push(data.splice(0, 2));
    //   }
    // })

    // fs.getKeyWordSigns().subscribe((data) => {
    //   for (var index = 0; index < data.length; index++) {
    //     if(data[index].word === keyWord){
    //       return data[index];
    //     }
    //   }
    // })
  }
  androidPlayVideo(path){
    var word = path.toString();
    word = path.toLowerCase();
    console.log("path:",path);
    console.log("word:",word);
    var keyPath = "assets/vid/"+word+".mp4";
    var target = "_blank";
    var vidStyle = "video{webkitDisplayingFullscreen:false;background:#54899b;}";
    var options = "location=no,hidden=yes,clearcache=yes,clearsessioncache=yes,hardwareback=no,shouldPauseOnSuspend=yes";
    console.log("Playing video located at: ",keyPath);
  var vidPlayer = this.iab.create(keyPath, target, options);
  vidPlayer.insertCSS({ code: vidStyle});
  vidPlayer.show();
  }
/*******************************/
//DEFAULT CODE 
/*******************************/
//   playVideo(id){
//     let video:any;
//     video = document.getElementById(id);
//     if (video.requestFullscreen) {
//       video.requestFullscreen();
//     } else if (video.mozRequestFullScreen) {
//       video.mozRequestFullScreen();
//     } else if (video.webkitRequestFullscreen) {
//       video.webkitRequestFullscreen();
//     }
//     video.play();
//   }
//  watched(video, event){
//     event.target.webkitExitFullScreen();
//   }
/*******************************/
//END DEFAULT CODE 
/*******************************/
}
