import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountdownModule } from 'ngx-countdown';

import { GameComponent } from './game.component';
import { ActivePlayersComponent } from './active-players/active-players.component';


import { GameRoutingModule } from './game-routing.module';
import { MaterialImportsModule } from './../material-imports.module';
import { SocketService, GameService } from '@services';


@NgModule({
  declarations: [
    ActivePlayersComponent,
    GameComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    MaterialImportsModule,
    FormsModule,
    ReactiveFormsModule,
    CountdownModule,
  ],
  providers: [
    GameService,
    SocketService
  ],
})
export class GameModule { }
