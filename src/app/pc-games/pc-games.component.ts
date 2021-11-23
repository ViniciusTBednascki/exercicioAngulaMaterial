import { Component, OnInit } from '@angular/core';
import { games } from '../games';

@Component({
  selector: 'app-pc-games',
  templateUrl: './pc-games.component.html',
  styleUrls: ['./pc-games.component.css']
})
export class PcGamesComponent implements OnInit {
  pc_games = games.filter(game => game.platform == "PC");
  
  constructor() { }

  ngOnInit(): void {
  }

  share() {

  }
}
