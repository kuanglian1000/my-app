import { Injectable } from '@angular/core';
import { Hero } from './hero'; // 資料型態
import { HEROES } from './heroes-mock'; // 資料源
import { Observable, of } from 'rxjs'; // 匯入非同步功能
import { MessageService } from './message.service'; // 匯入訊息服務

@Injectable({ // 表示這個服務可被注入
  providedIn: 'root' // 表示這個服務可被(所有類別)注入
})
export class HeroService {

  // "service-in-service" 將 MessageService 放入 HeroService
  constructor(private messageService: MessageService) { }

  // 同步版(正式環境不適用)
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // 非同步版(抓取Hero清單)
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: 抓取 Hero 清單');
    return heroes;
  }

  // 非同步版(抓取1名Hero)
  getHero(id: number): Observable<Hero|undefined>{
    this.messageService.add(`HeroService: 抓取 1名 Hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

}
