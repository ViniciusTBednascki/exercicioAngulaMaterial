import { Component, OnInit } from '@angular/core';
import { mobile_games } from '../games';

@Component({
  selector: 'app-mobile-games',
  templateUrl: './mobile-games.component.html',
  styleUrls: ['./mobile-games.component.css']
})
export class MobileGamesComponent implements OnInit {
  mobile_games = mobile_games

  constructor() { }

  ngOnInit(): void {
  }

}
