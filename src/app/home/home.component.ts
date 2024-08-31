import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit{
 //declare var FB: any;
 // FB: any;
 constructor() { }
 

 ngOnInit(): void {
   //this.loadFacebookSDK();
 }
 
// FB.getLoginStatus(function(response: any) {
//     statusChangeCallback(response);
// });

  loginWithFacebook() {
    FB.login((response: any) => {
        if (response.authResponse) {
            console.log('Welcome! Fetching your information....');
            FB.api('/me', { fields: 'id,name,email' }, (response: any) => {
                console.log('Good to see you, ' + response.name + '.');
                this.getPageAccessToken(response.id);
            });
        } else {
            console.log('User cancelled login or did not fully authorize.');
        }
    }, { scope: 'pages_show_list,pages_read_engagement,pages_manage_posts' });
}
getPageAccessToken(userId: string) {
  FB.api(`/${userId}/accounts`, (response: any) => {
      const page = response.data.find((page: any) => page.name === 'Your Page Name');
      if (page) {
          console.log('Page Access Token: ', page.access_token);
          // Store this token and use it for future requests
      } else {
          console.error('Page not found.');
      }
  });
}
postToPage(pageAccessToken: string) {
  const message = {
      message: 'Hello from Angular!'
  };

/*  FB.api(
      '/PAGE_ID/feed',   // Replace PAGE_ID with your actual page ID
      'POST',
      {
          message: message.message,
          access_token: pageAccessToken
      },
      (response: any) => {
          if (response && !response.error) {
              console.log('Post was successful: ', response);
          } else {
              console.error('Error while posting: ', response.error);
          }
      }
  );*/
}
logoutFromFacebook() {
  FB.logout((response: any) => {
      console.log('User logged out.');
  });
}
}
