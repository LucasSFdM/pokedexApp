import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  offset = 0;
  pokemon = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadPokemon();
  }

  loadPokemon() {
    this.userService.getPokemon(this.offset).subscribe(res => {
      console.log('result: ', res);
      this.pokemon = res;
    })
  }
}

