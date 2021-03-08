import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // 從Router中抓值用
import { Hero } from '../hero';
import { Location } from '@angular/common'; // 與瀏覽器互動用
import { HeroService } from '../hero.service'; // 抓Hero資料用

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  // @Input() hero: Hero | undefined;
  hero: Hero| undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void{
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.heroService.getHero(parseInt(id, 10))
        .subscribe(hero => this.hero = hero);
    }
  }

  goBack(): void {
    this.location.back();
  }
}
