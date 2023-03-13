import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageModule } from './main-page/main-page.module';
import { AuthPageModule } from './auth-page/auth-page.module';
import { CoreComponent } from './core.component';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [CoreComponent],
  imports: [
    CommonModule,
    MainPageModule,
    AuthPageModule,
    SharedModule,
  ],
  exports: [CoreComponent],
})
export class CoreModule {}
