import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'message/:id',
    loadChildren: () => import('./view-message/view-message.module').then( m => m.ViewMessagePageModule)
  },
  {
    path: '',
    redirectTo: 'registration',
    pathMatch: 'full'
  },
  {
    path: 'text-editor',
    loadChildren: () => import('./text-editor/text-editor.module').then( m => m.TextEditorPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'groups',
    loadChildren: () => import('./menu-pages/groups/groups.module').then( m => m.GroupsPageModule)
  },
  {
    path: 'stories',
    loadChildren: () => import('./menu-pages/stories/stories.module').then( m => m.StoriesPageModule)
  },
  {
    path: 'challenge',
    loadChildren: () => import('./menu-pages/challenge/challenge.module').then( m => m.ChallengePageModule)
  },
  {
    path: 'create-group',
    loadChildren: () => import('./menu-pages/groups/create-group/create-group.module').then( m => m.CreateGroupPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
