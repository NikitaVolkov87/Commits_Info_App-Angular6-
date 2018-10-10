import { Component, OnInit } from '@angular/core';

import { Hero, Links } from '../../_etc/hero';
import { HeroService } from '../../_services/hero.service';
import { TestTextService } from '../../_services/test-text.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  public someInfo:string = "coll yeah!";
  public commits: object[];
  public links: Links[];
  public page: string;

  constructor( 
    private heroService: HeroService, 
    private TestTextService: TestTextService
  ) {}

  ngOnInit() {
    this.getHeroes();
    this.heroService.getUserLS();
    this.commits = JSON.parse(sessionStorage.getItem('commits'));
    this.links = this.heroService.links;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  servText: string = this.TestTextService.textContainer;

  nText(text: string): void {
    this.TestTextService.newText(text);
  }

  getCommits(url?: string): void {
    this.heroService.getCommits(url).subscribe( answer => {
      let links: string = answer.headers.get('Link');
      this.links = this.heroService.links = this.heroService.linkTransformer(links);
      this.commits = answer.body;
      sessionStorage.setItem('commits', JSON.stringify(answer.body));
      this.page = answer.url.split('&page=')[1];
    }, error => {
      console.log("error ->", error);
    });
  }

  log(item: any): void {
    console.log(item);
  }

  getCommitHash(hash: string): void {
    this.heroService.commitHash = hash;
  }
}
