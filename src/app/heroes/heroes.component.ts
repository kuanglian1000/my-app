import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from "../heroes-mock";

@Component({
  selector: 'app-heroes', //決定主頁HTML內的嵌入標籤(它會放入Component網頁)
  templateUrl: './heroes.component.html', //指向Component網頁檔
  styleUrls: ['./heroes.component.css'] //指向Component樣式檔
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero:Hero): void {
    this.selectedHero = hero;
  }

  // hero = '風暴';
  // hero: Hero = { 
  //   id: 1,
  //   name: '風暴'
  // };
}
