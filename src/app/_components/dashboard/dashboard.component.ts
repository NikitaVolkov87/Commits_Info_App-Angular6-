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

  constructor(private heroService: HeroService, private TestTextService: TestTextService) {}

  public someInfo:string = "coll yeah!";
  public commits: object[];
  public links: {name: string, link: string}[];

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

  getCommits(url?: string): void {
    this.heroService.getCommits(url).subscribe( answer => {
      console.log(answer);
      let links: string = answer.headers.get('Link');
      this.links = this.heroService.linkTransformer(links);
      this.log(this.links);
      this.commits = answer.body;
    }, error => {
      console.log("error ->", error);
    });
  }

  log(item: any): void {
    console.log(item);
  }
}
