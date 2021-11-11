import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BalanceCardComponent } from './components/balance-card/balance-card.component';
import { EloCardComponent } from './components/elo-card/elo-card.component';
import { EloDiffCardComponent } from './components/elo-diff-card/elo-diff-card.component';
import { LastResultsCardComponent } from './components/last-results-card/last-results-card.component';
import { BalanceComponent } from './containers/balance/balance.component';
import { EloDiffComponent } from './containers/elo-diff/elo-diff.component';
import { EloComponent } from './containers/elo/elo.component';
import { LastResultsComponent } from './containers/last-results/last-results.component';
import { API_KEY, API_URL, BASIC_API_URL, FACEIT_STATS_HUB, LOCAL_API_URL } from './injection-tokens';
import { AuthHeaderInterceptor } from './interceptors/auth-header.interceptor';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WidgetComponent } from './pages/widget/widget.component';
import { ResultPipe } from './pipes/result.pipe';
import { StatsEffects } from './store/effects/stats.effects';
import { metaReducers, reducers } from './store/reducers/combine-reducers';
import { statsFeatureKey, statsReducer } from './store/reducers/stats.reducer';
import { EloCarouselCardComponent } from './components/elo-carousel-card/elo-carousel-card.component';
import { EloCarouselComponent } from './containers/elo-carousel/elo-carousel.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExtentedLastResultsComponent } from './components/extented-last-results/extented-last-results.component';


@NgModule({
  declarations: [
    AppComponent,
    EloComponent,
    EloCardComponent,
    LastResultsComponent,
    BalanceComponent,
    EloDiffComponent,
    DashboardComponent,
    WidgetComponent,
    LastResultsCardComponent,
    ResultPipe,
    BalanceCardComponent,
    EloDiffCardComponent,
    EloCarouselCardComponent,
    EloCarouselComponent,
    ExtentedLastResultsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    NgbCarouselModule,
    AngularSvgIconModule.forRoot(),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreModule.forFeature(statsFeatureKey, statsReducer),
    EffectsModule.forRoot([StatsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal }),
    NgbModule,
  ],
  providers: [
    {provide: API_URL, useValue: environment.apiUrl},
    {provide: LOCAL_API_URL, useValue: environment.localApiUrl},
    {provide: API_KEY, useValue: environment.apiKey},
    {provide: BASIC_API_URL, useValue: environment.basicApiUrl},
    {provide: FACEIT_STATS_HUB, useValue: environment.faceitStatsHub},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
