import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SocialSharing } from 'ionic-native';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  posts: any;
 
    constructor(private http: Http) {
    this.http.get('http://prediksiligainggris.info/api/json_fixtures_API_mobile.php').map(res => res.json()).subscribe(data => {
        this.posts = data.results;
    });
  }

     whatsappShare(){
    SocialSharing.shareViaWhatsApp("Message via WhatsApp", null /*Image*/,  "http://prediksi-ligainggris.info/" /* url */)
      .then(()=>{
        alert("Success");
      },
      ()=>{
         alert("failed")
      })
  }
 
  twitterShare(){
    SocialSharing.shareViaTwitter("Message via Twitter",null /*Image*/,"http://prediksi-ligainggris.info/")
    .then(()=>{
        //alert("Success");
      },
      ()=>{
         alert("failed")
      })
  }
 
  facebookShare(){
    SocialSharing.shareViaFacebook("Message via Facebook",null /*Image*/,"http://prediksi-ligainggris.info/")
    .then(()=>{
        alert("Success");
      },
      ()=>{
         alert("failed")
      })
  }
 
  otherShare(){
    SocialSharing.share("Genral Share Sheet",null/*Subject*/,null/*File*/,"http://prediksiligainggris.info/")
    .then(()=>{
       // alert("Success");
      },
      ()=>{
         alert("failed")
      })
 
  }
  
  
  
}
