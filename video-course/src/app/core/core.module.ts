import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesPageModule } from './courses-page/courses-page.module';
import { AuthPageModule } from './auth-page/auth-page.module';
import { CoreComponent } from './core.component';
import { SharedModule } from './shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
@NgModule({
  declarations: [
    CoreComponent,
    NotFoundPageComponent,
  ],
  imports: [
    CoreRoutingModule,
    CommonModule,
    CoursesPageModule,
    AuthPageModule,
    SharedModule,
  ],
  exports: [CoreComponent],
})
export class CoreModule {}
