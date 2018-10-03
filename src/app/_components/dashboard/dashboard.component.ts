import { Component, OnInit } from '@angular/core';
import { Hero } from '../../_etc/hero';
import { HeroService } from '../../_services/hero.service';
import { TestTextService } from '../../_services/test-text.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  commits: any;

  constructor(private heroService: HeroService, private TestTextService: TestTextService) {
  }

  someInfo:string = "coll yeah!";

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  servText: string = this.TestTextService.textContainer;

  nText(text: string): void {
    this.TestTextService.newText(text);
  }

  getCommits (userName: string, userRepo: string): void {
    this.heroService.getCommits(userName, userRepo).subscribe( response => {
      this.commits = response;
    },
    error => {
      console.log("error ->", error);
    })
  }
}
