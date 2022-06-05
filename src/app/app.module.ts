import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderAnonComponent } from './components/header/header-anon/header-anon.component';
import { HeaderMemberComponent } from './components/header/header-member/header-member.component';
import { DiscoveryAnonComponent } from './components/header/header-anon/discovery-anon/discovery-anon.component';
import { FeedAnonComponent } from './components/header/header-anon/feed-anon/feed-anon.component';
import { NotificationsAnonComponent } from './components/header/header-anon/notifications-anon/notifications-anon.component';
import { PostAnonComponent } from './components/header/header-anon/post-anon/post-anon.component';
import { SignupAnonComponent } from './components/header/header-anon/signup-anon/signup-anon.component';
import { GlobalFeedComponent } from './components/header/header-member/global-feed/global-feed.component';
import { DiscoverComponent } from './components/header/header-member/discover/discover.component';
import { LocalComponent } from './components/header/header-member/local/local.component';
import { AccountComponent } from './components/account/account.component';
import { DashboardComponent } from './components/account/dashboard/dashboard.component';
import { ProfileComponent } from './components/account/profile/profile.component';
import { ProfileEditComponent } from './components/account/profile-edit/profile-edit.component';
import { SettingsEditComponent } from './components/account/settings-edit/settings-edit.component';
import { UserListingsComponent } from './components/account/user-listings/user-listings.component';
import { ClassifiedSearchComponent } from './components/classified-search/classified-search.component';
import { ClassifiedFiltersComponent } from './components/classified-filters/classified-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    CommentFormComponent,
    HeaderComponent,
    HeaderAnonComponent,
    HeaderMemberComponent,
    DiscoveryAnonComponent,
    FeedAnonComponent,
    NotificationsAnonComponent,
    PostAnonComponent,
    SignupAnonComponent,
    GlobalFeedComponent,
    DiscoverComponent,
    LocalComponent,
    AccountComponent,
    DashboardComponent,
    ProfileComponent,
    ProfileEditComponent,
    SettingsEditComponent,
    UserListingsComponent,
    ClassifiedSearchComponent,
    ClassifiedFiltersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: 'forcesale.us.auth0.com',
      clientId: 'ORihMlUHif5z7FiswGxGoBaTmMRKS7Ms'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
