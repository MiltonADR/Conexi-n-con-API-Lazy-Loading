import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BreadModule } from './shared/bread/bread.module';
import { LayoutComponent } from './shared/layout/layout.component';
import { FooterModule } from './shared/footer/footer.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BreadModule,
    FooterModule,
  ],
  declarations: [AppComponent, LayoutComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
