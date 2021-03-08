import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Hero } from '../hero';
import { HEROES } from '../heroes-mock';
import { HeroService } from '../hero.service'; // 注入服務(1:匯入)
import { MessageService } from '../message.service'; // 注入訊息服務

@Component({
  selector: 'app-heroes', // 決定主頁HTML內的嵌入標籤(它會放入Component網頁)
  templateUrl: './heroes.component.html', // 指向Component網頁檔
  styleUrls: ['./heroes.component.css'] // 指向Component樣式檔
})
export class HeroesComponent implements OnInit {

  // heroes = HEROES;
  // selectedHero?: Hero;
  heroes: Hero[] = [];
  // hero: Hero | undefined;

  constructor(private heroService: HeroService
             // tslint:disable-next-line: align
             // , private messageService: MessageService
             ) { } // 注入服務(2:實體化)

  ngOnInit(): void {
    this.getHeroes(); // 在ngOnInit()內, 將屬性初始化是最佳時間點.
  }

  // 同步版(指定,因為即時無等待)
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  // 非同步版(向服務訂閱,因為不確定什麼時候來)
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent:
  //     選擇的病患ID = ${hero.id}`);
  // }

  // hero = '風暴';
  // hero: Hero = {
  //   id: 1,
  //   name: '風暴'
  // };
}
