import { Component, OnInit } from '@angular/core';
import { pc_games } from '../games';

@Component({
  selector: 'app-pc-games',
  templateUrl: './pc-games.component.html',
  styleUrls: ['./pc-games.component.css']
})
export class PcGamesComponent implements OnInit {
  pc_games = pc_games;
  
  constructor() { }

  ngOnInit(): void {
  }

}
