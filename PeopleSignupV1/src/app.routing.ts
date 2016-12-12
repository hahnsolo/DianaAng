import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PersonComponent} from './app/person/person.component';
import {AccountsComponent} from'./app/accounts/accounts.component';
import {AppComponent} from './app/app.component';


//Routing component that defines routes via angular 2 router v3 and forward
const appRoutes :Routes =
[
    
    {
    path:'people',
    component:PersonComponent
    },
    {
    path:'consultants',
    component:AccountsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);