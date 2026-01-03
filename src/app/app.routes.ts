import { Routes } from '@angular/router';
import { AddempComponent } from './components/addemp/addemp.component';
import { GetempComponent } from './components/getemp/getemp.component';

import { PipecompComponent } from './components/pipes/pipecomp/pipecomp.component';
import { TemplateformComponent } from './components/forms/templateform/templateform.component';
import { ReactiveformComponent } from './components/forms/reactiveform/reactiveform.component';
import { InoutcompComponent } from './components/decorators/inoutcomp/inoutcomp.component';
import { ChangedetectorComponent } from './components/changedetector/changedetector.component';

export const routes: Routes = [
    {
        path: '',
        component:AddempComponent
    },
    {
        path: 'getemp',
        component:GetempComponent
    },
     {
        path: 'pipe',
        component:PipecompComponent
    }
    ,
    {
        path:'templateform',
        component:TemplateformComponent
    },
    {
        path:'reactiveform',
        component:ReactiveformComponent
    },
     {
        path:'inoutcomp',
        component:InoutcompComponent
    }
    ,{
        path:"changedetector",
        component:ChangedetectorComponent
    }
];
