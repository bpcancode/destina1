import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { AwardsComponent } from './awards/awards.component';
import { ProductcatdetailsComponent } from './productcatdetails/productcatdetails.component';
import { AwardstestComponent } from './awardstest/awardstest.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { TestmonialsComponent } from './testmonials/testmonials.component';
import { FaqsComponent } from './faqs/faqs.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ViewallComponent } from './viewall/viewall.component';
import { DiscoverComponent } from './discover/discover.component';
import { BrandComponent } from './brand/brand.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeadercartComponent } from './headercart/headercart.component';
import { OurcompanyComponent } from './ourcompany/ourcompany.component';
import { VisionmissionComponent } from './visionmission/visionmission.component';
import { HistoryComponent } from './history/history.component';
import { CheifstrategyComponent } from './cheifstrategy/cheifstrategy.component';
import { CheifbusinessComponent } from './cheifbusiness/cheifbusiness.component';
import { CofounderComponent } from './cofounder/cofounder.component';
import { GroupbusinessComponent } from './groupbusiness/groupbusiness.component';
import { GroupchiefofficerComponent } from './groupchiefofficer/groupchiefofficer.component';
import { SocialMediaTabsComponent } from './social-media-tabs/social-media-tabs.component';
import { ProductadvisoryComponent } from './productadvisory/productadvisory.component';
import { FounderComponent } from './founder/founder.component';
import { MarketingcheifComponent } from './marketingcheif/marketingcheif.component';
import { ShippingComponent } from './shipping/shipping.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderscancellationComponent } from './orderscancellation/orderscancellation.component';
import { IngredientsComponent } from './ingrediants/ingrediants.component';
import { StartBusinessComponent } from './start-business/start-business.component';
import { KritiliaComponent } from './kritilia/kritilia.component';
import { NewsdetailsComponent } from './newsdetails/newsdetails.component';
import { DvtvComponent } from './dvtv/dvtv.component';




export const routes: Routes = [
    
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'start', component: StartBusinessComponent},

    // { path: 'kritilia', component: KritiliaComponent},

    { path: 'about', component: AboutComponent},
    { path: 'events', component: EventsComponent},
    { path: 'awards', component: AwardsComponent},
    //{ path: 'productcatdetails', component:ProductcatdetailsComponent},
    //  {
    //   path: 'productcatdetails',
    //   component: ProductcatdetailsComponent
    // },
    
    {
      path: 'productcatdetails/:pkcode',
      component: ProductcatdetailsComponent
    },
    { path: 'awardstest', component:AwardstestComponent},
    { path: 'contact', component:ContactComponent},
    { path: 'news', component:NewsComponent},
    { path: 'news/:slugId', component:NewsdetailsComponent},
    { path: 'Brand', component:BrandComponent},
    { path: 'Discover', component:DiscoverComponent},
    { path: 'testmonials', component:TestmonialsComponent},
    { path: 'ingredients', component:IngredientsComponent},
    
    { path: 'dvtv', component:DvtvComponent},

    { path: 'faqs', component:FaqsComponent},
    { path: 'login', component:LoginComponent},
     { path: 'Register', component: RegistrationComponent },
    //{ path: 'cart', component:CartComponent},
     {
      path: 'cart/:pkcode',
      component: CartComponent
    },
    { path: 'checkout', component:CheckoutComponent},
    { path: 'viewall', component:ViewallComponent},
    {path: 'headercart', component:HeadercartComponent},

    { path: 'our-company', component: OurcompanyComponent },
    { path:'vision-mission', component: VisionmissionComponent },

    { path:'history', component: HistoryComponent },
    { path:'strategy-officer', component: CheifstrategyComponent },
    { path:'vp-usa', component: CheifbusinessComponent },
    { path:'vp', component: CofounderComponent },
   { path:'bdo', component: GroupbusinessComponent },
   { path:'cmo', component: GroupchiefofficerComponent },
   { path: 'social', component: SocialMediaTabsComponent },
   { path: 'advisory-board', component: ProductadvisoryComponent },
   { path: 'ceo', component: FounderComponent },
   { path: 'coo', component: MarketingcheifComponent },
    { path: 'shipping-delivery', component: ShippingComponent },
    { path: 'orders-returns', component: OrdersComponent },
  { path: 'orders-cancellation', component: OrderscancellationComponent },
   


    //{ path: '**', redirectTo: 'home' }, 
      // Home route
];
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}