import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game, pc_games, mobile_games } from '../games';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  game?: Game

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const platformFromRoute = routeParams.get("platform");
    const idGameFromRoute = Number(routeParams.get("idGame"))

    switch (platformFromRoute) {
      case "pc":
        this.game = pc_games.find(game => game.id === idGameFromRoute)
        break;
    
      case "mobile":
        this.game = mobile_games.find(game => game.id === idGameFromRoute)
        break;
    
      default:
        break;
    }
  }

}
