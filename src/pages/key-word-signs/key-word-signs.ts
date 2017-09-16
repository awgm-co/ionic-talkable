import { Component } from '@angular/core';
import { NavController  } from 'ionic-angular';
import { FileServiceProvider } from "../../providers/file-service/file-service";
// import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import {InAppBrowser} from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-key-word-signs',
  templateUrl: 'key-word-signs.html'
})
export class KeyWordSignsPage {
  signs: any;
  signsO: any = [];
  filteredSigns: any = [];
  filteredSignsChunks: any = [];
  video: any;
  constructor(private iab: InAppBrowser,public navCtrl: NavController, public fs: FileServiceProvider) {
     // Show the loading message
    // let loadingPopup = this.loadingCtrl.create({
    //   content: 'Loading posts...'
    // });
    // loadingPopup.present();
    fs.getKeyWordSigns().subscribe((data) => {
      this.signs = data;
      this.signsO = data;
      // this.createFilteredKeyWordArray();
      //this.filteredSigns = this.signs;
      
      // while (this.signs.length > 0){
      //   this.signsChunks.push(this.signs.splice(0, 2));
      // }
      // this.filteredSignsChunks = this.signsChunks;
      // loadingPopup.dismiss();
    });
    
    
    
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
  playVideo(id){
    let video:any;
    video = document.getElementById(id);
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
    video.play();
  }
 watched(video, event){
    event.target.webkitExitFullScreen();
  }
  createFilteredKeyWordArray(){
    this.filteredSigns = []; 
    Object.keys(this.signs).forEach(key => {
      this.filteredSigns.push(key);
    });
  }
   filterItems(ev: any) {
    this.signs = this.signsO;
    // this.createFilteredKeyWordArray();
    let val = ev.target.value;
    if (val && val.trim() !== '') {
      this.signs = this.signs.filter((item) => {
          return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        });
    }
    // if(!this.filteredSigns){
    //   return filte
    // }
  }
  ionViewDidLoad(){
    this.video = document.getElementById('vid');
  }
  
}
