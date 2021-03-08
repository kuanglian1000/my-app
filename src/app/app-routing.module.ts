import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}, // 預設路徑
  {path: 'heroes', component: HeroesComponent}, // 基本規則, path => 與URL路徑名稱比對, component => 路徑對應的Component
  {path: 'dashboard', component: DashboardComponent}, // 第2條路徑: 指向前幾名
  {path: 'detail/:id', component: HeroDetailComponent}, // 明細路徑: 指向該員明細
];

@NgModule({
  // declarations: [],
  imports: [
    // CommonModule
    RouterModule.forRoot(routes) // forRoot, 將這些路徑定義為 root 層級, 並作初始化
  ],
  exports: [
    RouterModule // 再把自己公開, 供整個APP使用.
  ]
})
export class AppRoutingModule { }
