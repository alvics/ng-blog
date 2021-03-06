import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'blog', component: PostListComponent },
  { path: 'blog/:id', component: PostDetailComponent },
  { path: 'dashboard', component: PostDashboardComponent }
];

@NgModule({
  declarations: [
    PostDashboardComponent,
    PostDetailComponent,
    PostListComponent
  ],
  imports: [
    SharedModule,
    AngularFireStorageModule,
    RouterModule.forChild(routes)
  ]
})
export class PostModule {}
