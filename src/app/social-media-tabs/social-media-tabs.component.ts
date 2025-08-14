import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-social-media-tabs',
  imports: [CommonModule,NgbCarouselModule],
  templateUrl: './social-media-tabs.component.html',
  styleUrl: './social-media-tabs.component.scss'
})
export class SocialMediaTabsComponent {
selectedTab = 'facebook';
// selectedTab: string = '';

//   socialTabs = [
//     {
//       id: 'facebook',
//       icon: 'fa-brands fa-facebook-f',
//       background: '#4867aa'
//     },
//     {
//       id: 'instagram',
//       icon: 'fa-brands fa-instagram',
//       background: 'linear-gradient(115deg, #f9ce34, #ee2a7b, #6228d7)'
//     },
//     {
//       id: 'tiktok',
//       icon: 'fa-brands fa-tiktok',
//       background: '#000'
//     },
//     {
//       id: 'youtube',
//       icon: 'fa-brands fa-youtube',
//       background: '#ff0000'
//     },
//     {
//       id: 'linkedIn',
//       icon: 'fa-brands fa-linkedin-in',
//       background: '#0077b5'
//     }
//   ];

//   selectTab(tabId: string) {
//     this.selectedTab = tabId;
//   }

 facebookSlides = [
  {
    video: true,
    url: 'https://www.facebook.com/Destina1int/videos/1033698247756287',
    image: 'assets/fb-event001.jpg'
  },
  {
    video: false,
    url: 'https://www.facebook.com/photo/?fbid=823679919801413&set=pb.100064782363963.-2207520000',
    image: 'assets/fb-event04.jpg'
  },
  {
    video: true,
    url: 'https://www.facebook.com/Destina1int/videos/7662481057114753',
    image: 'assets/fb-event03.jpg'
  },
  {
    video: true,
    url: 'https://www.facebook.com/watch/?v=1254033921930559',
    image: 'assets/fb-event002.jpg'
  },
  {
    video: true,
    url: 'https://www.facebook.com/watch/live/?ref=watch_permalink&v=994925858962169',
    image: 'assets/fb-01.jpg'
  },
  {
    video: true,
    url: 'https://www.facebook.com/watch/live/?ref=watch_permalink&v=426234713355625',
    image: 'assets/fb-2.jpg'
  },
  {
    video: true,
    url: 'https://www.facebook.com/watch/?v=1892133117910519',
    image: 'assets/fb-03.jpg'
  },
  {
    video: true,
    url: 'https://www.facebook.com/watch/?v=1389735518342634',
    image: 'assets/fb-04.jpg'
  },
   {
    video: true,
    url: 'https://www.facebook.com/Destina1int/videos/1033698247756287',
    image: 'assets/fb-event001.jpg'
  },
   {
    video: true,
    url: 'https://www.facebook.com/photo/?fbid=823679919801413&set=pb.100064782363963.-2207520000',
    image: 'assets/fb-event04.jpg'
  },
   {
    video: true,
    url: 'https://www.facebook.com/Destina1int/videos/7662481057114753',
    image: 'assets/fb-event03.jpg'
  },
   {
    video: true,
    url: 'https://www.facebook.com/watch/?v=1254033921930559',
    image: 'assets/fb-event002.jpg'
  },
];
chunkedFacebookSlides: any[][] = [];
chunkedInstagramSlides: any[][] = [];
chunkedtiktokSlides: any[][] = [];
chunkedyoutubeSlides: any[][] = [];
chunkedlinkedinSlides: any[][] = [];

ngOnInit() {
  this.chunkedFacebookSlides = this.chunkArray(this.facebookSlides, 4);
  this.chunkedInstagramSlides = this.chunkArray(this.instagramSlides, 4);
  this.chunkedtiktokSlides = this.chunkArray(this.tiktokSlides, 4);
  this.chunkedyoutubeSlides = this.chunkArray(this.youtubeSlides, 4);
  this.chunkedlinkedinSlides = this.chunkArray(this.linkedinSlides, 4);
}

chunkArray(arr: any[], size: number): any[][] {
  const chunked = [];
  for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, i + size));
  }
  return chunked;
}

  instagramSlides = [
    {
      video: true,
      url: 'https://www.instagram.com/p/Cw4MyDUszYh/',
      image: 'assets/insta-img1.jpg'
    },
    {
      video: false,
      url: 'https://www.instagram.com/p/CwwVJaHOD8s/',
      image: 'assets/insta-img2.jpg'
    },
      {
      video: false,
      url: 'https://www.instagram.com/p/Cw11sCOByPa/',
      image: 'assets/insta-img4.jpg'
    },
      {
      video: false,
      url: 'https://www.instagram.com/p/C4ZzBUyLS2-/',
      image: 'assets/insta-img5.jpg'
    },
    {
      video: false,
      url: 'https://www.instagram.com/reel/C5ADTjGtmJo/',
      image: 'assets/insta-img6.jpg'
    },
    {
      video: false,
      url: 'https://www.instagram.com/reel/C49qE-eyU2z/',
      image: 'assets/insta-img7.jpg'
    },
    {
      video: false,
      url: 'https://www.instagram.com/reel/C4ceNurp1xE/',
      image: 'assets/insta-img8.jpg'
    },
    {
      video: false,
      url: 'https://www.instagram.com/reel/C34CiPxhxRy/',
      image: 'assets/insta-img9.jpg'
    },
    {
      video: false,
      url: 'https://www.instagram.com/p/C4zF1D4BPc-/',
      image: 'assets/insta-img10.jpg'
    },
    {
      video: false,
      url: 'https://www.instagram.com/p/C4uCOT5hZR5/?img_index=1',
      image: 'assets/insta-img11.jpg'
    },
    {
      video: false,
      url: 'https://www.instagram.com/p/C4rmPOMPZrx/?img_index=1',
      image: 'assets/insta-img12.jpg'
    },
    {
      video: false,
      url: 'https://www.instagram.com/p/C4Mkrg_uv3V/',
      image: 'assets/insta-img13.jpg'
    },
  ];

  tiktokSlides = [
    {
      video: true,
      url: 'https://www.tiktok.com/@d1global/video/7363093557592198407?is_from_webapp=1&sender_device=pc&web_id=7345658278476596754',
      image: 'assets/tiktok-img1.jpg'
    },
    {
      video: false,
      url: 'https://www.tiktok.com/@d1global/video/7361620651188243720?is_from_webapp=1&sender_device=pc&web_id=7345658278476596754',
      image: 'assets/tiktok-img2.jpg'
    },
      {
      video: false,
      url: 'https://www.tiktok.com/@d1global/video/7361606876481522962?is_from_webapp=1&sender_device=pc&web_id=7345658278476596754',
      image: 'assets/tiktok-img3.jpg'
    },
      {
      video: false,
      url: 'https://www.tiktok.com/@d1global/video/7360950372178955538?is_from_webapp=1&sender_device=pc&web_id=7345658278476596754',
      image: 'assets/tiktok-img4.jpg'
    },
      {
      video: false,
      url: 'https://www.tiktok.com/@d1global/video/7359106152593919240?is_from_webapp=1&sender_device=pc&web_id=7345658278476596754',
      image: 'assets/tiktok-img5.jpg'
    },
      {
      video: false,
      url: 'https://www.tiktok.com/@d1global/video/7357918432530009352?is_from_webapp=1&sender_device=pc&web_id=7345658278476596754',
      image: 'assets/tiktok-img6.jpg'
    },
      {
      video: false,
      url: 'https://www.tiktok.com/@d1global/video/7357915324575927559?is_from_webapp=1&sender_device=pc&web_id=7345658278476596754',
      image: 'assets/tiktok-img7.jpg'
    },
      {
      video: false,
      url: 'https://www.tiktok.com/@d1global/video/7353874056954776849?is_from_webapp=1&sender_device=pc&web_id=7345658278476596754',
      image: 'assets/tiktok-img8.jpg'
    },
    {
      video: false,
      url: 'https://www.tiktok.com/@d1global/video/7353830625960332560?is_from_webapp=1&sender_device=pc&web_id=7345658278476596754',
      image: 'assets/tiktok-img9.jpg'
    },
    {
      video: false,
      url: 'https://www.tiktok.com/@d1global/video/7353559700425788688?is_from_webapp=1&sender_device=pc&web_id=7345658278476596754',
      image: 'assets/tiktok-img10.jpg'
    },
    {
      video: false,
      url: 'https://www.tiktok.com/@d1global/video/7360536494878035208?is_from_webapp=1&sender_device=pc&web_id=7345658278476596754',
      image: 'assets/tiktok-img11.jpg'
    },
    {
      video: false,
      url: 'https://www.tiktok.com/@d1global/video/7359126009771298049?is_from_webapp=1&sender_device=pc&web_id=7345658278476596754',
      image: 'assets/tiktok-img12.jpg'
    },
  ];

  youtubeSlides = [
    {
      video: true,
      url: 'https://www.youtube.com/embed/yzE0QPeom-U?si=VydU4E9J-6kwvz47',
      image: 'assets/yt-01.jpg'
    },
    {
      video: false,
      url: 'https://www.youtube.com/embed/dsFZxus43o8?si=kLsZGuJkSf09gd2Z',
      image: 'assets/yt-02.jpg'
    },
      {
      video: false,
      url: 'https://www.youtube.com/embed/5-OPw274MR8?si=NrjcOnjO7ewmK6mO',
      image: 'assets/yt-03.jpg'
    },
      {
      video: false,
      url: 'https://www.youtube.com/embed/4UdbYYw-v50?si=HKt4VCb2NrNG8n86',
      image: 'assets/yt-04.jpg'
    },
    {
      video: false,
      url: 'https://www.youtube.com/embed/oLiPlpz-JRA?si=HsHvgfD6DPN0e2hf',
      image: 'assets/yt-05.jpg'
    },
    {
      video: false,
      url: 'https://www.youtube.com/embed/PTVGfkjCUfc?si=KgYYojJLbqYXiqx7',
      image: 'assets/yt-06.jpg'
    },
    {
       video: false,
      url: 'https://www.youtube.com/embed/5YDNMdKxn10?si=EfsSm1DMdTmpUwE2',
      image: 'assets/yt-07.jpg'
      
    },
    {
     video: false,
      url: 'https://www.youtube.com/embed/qzouxYXBJU4?si=R0-7gjX4r-pQ-z2',
      image: 'assets/yt-08.jpg'
    },
    {
     video: false,
      url: 'https://www.youtube.com/embed/0WBl2c4Gc8I?si=yu1C1oi4G5k2aphz',
      image: 'assets/yt-09.jpg'
    },
      {
     video: false,
      url: 'https://www.youtube.com/embed/Z7bspY-9M0o?si=ny6TNv8V33eD1ME3',
      image: 'assets/yt-010.jpg'
    },
      {
     video: false,
      url: 'https://www.youtube.com/embed/26hYbOPO7QY?si=rCBr4VwX3Q1QzO3I',
      image: 'assets/yt-011.jpg'
    },
      
      {
     video: false,
      url: 'https://www.youtube.com/embed/1-d6no-HkXY?si=KUPUYnSh1HvG0ORw',
      image: 'assets/yt-012.jpg'
    },
  ];

  linkedinSlides = [
    {
      video: true,
      url: 'https://www.linkedin.com/feed/update/urn:li:activity:7191609398908063744',
      image: 'assets/linkedin-img1.jpg'
    },
    {
      video: false,
      url: 'https://www.linkedin.com/posts/destina1-international_healthleaders-destina1lifestyle-activity-7190530428443717632-RGbA?utm_source=share&utm_medium=member_desktop',
      image: 'assets/linkedin-img2.jpg'
    },
      {
      video: false,
      url: 'https://www.linkedin.com/posts/destina1-international_destina1bersamamisbun-keajaiban15tahun-activity-7190532859760156672-SEpY?utm_source=share&utm_medium=member_desktop',
      image: 'assets/linkedin-img3.jpg'
    },
      {
      video: false,
      url: 'https://www.linkedin.com/posts/destina1-international_radiationdefense-biomatrixshield-stayprotected-activity-7189444284851335168-nqFH?utm_source=share&utm_medium=member_desktop',
      image: 'assets/linkedin-4.jpg'
    },
    {
      video: false,
      url: 'https://www.linkedin.com/posts/destina1-international_resilienceinnetworking-overcomerejection-activity-7191610406845440000-i3f0?utm_source=share&utm_medium=member_desktop',
      image: 'assets/insta-img09.jpg'
    },
    {
      video: false,
      url: 'https://www.facebook.com/watch/live/?ref=watch_permalink&amp;v=426234713355625',
      image: 'assets/fb-2.jpg'
    },
    {
      video: false,
      url: 'https://www.linkedin.com/posts/destina1-international_charting-your-course-to-financial-freedom-activity-7190540268595490819-Fz0A?utm_source=share&utm_medium=member_desktop',
      image: 'assets/linkedin-img5.jpg'
    },
    {
      video: false,
      url: 'https://www.linkedin.com/posts/destina1-international_hydrationmythsdebunked-uniwaveenergized-activity-7189066185861140480-kFqn?utm_source=share&utm_medium=member_desktop',
      image: 'assets/linkedin-img6.jpg'
    },
     {
      video: false,
      url: 'https://www.linkedin.com/posts/destina1-international_quickshielddemo-uniwavedifference-activity-7180349838474063873-9xqF?utm_source=share&utm_medium=member_desktop',
      image: 'assets/linkedin-img8.jpg'
    },
    {
      video: false,
      url: 'https://www.linkedin.com/posts/destina1-international_uniwavemiracle-clearstepsclearspeech-activity-7189441701776625664-iXmw?utm_source=share&utm_medium=member_desktop',
      image: 'assets/linkedin-img7.jpg'
    },
    {
      video: false,
      url: 'https://www.linkedin.com/posts/destina1-international_tenagascalaria-steviahebat-activity-7188423469435424769-7prE?utm_source=share&utm_medium=member_desktop',
      image: 'assets/linkedin-img9.jpg'
    },
    {
      video: false,
      url: 'https://www.linkedin.com/posts/destina1-international_steviascalarvia-sihatpuasa-gulatanpakalori-activity-7181476167353335809-Enpm?utm_source=share&utm_medium=member_desktop',
      image: 'assets/linkedin-10.jpg'
    },
  ];
}
