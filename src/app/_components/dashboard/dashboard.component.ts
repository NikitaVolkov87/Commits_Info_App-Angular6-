import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Hero, Links, ErrorMessage } from '../../_etc/hero';
import { HeroService } from '../../_services/hero.service';
import { TestTextService } from '../../_services/test-text.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  @ViewChild('input1') inputEl1:ElementRef;
  @ViewChild('input2') inputEl2:ElementRef; // Это нужно для выбора эл-тов по local variable в темплейте по имени inputEl2 (тут это нужно для наброса фокуса на эти эл-ты)

  heroes: Hero[] = [];
  public someInfo:string = "coll yeah!";
  public commits: object[];
  public links: Links[];
  public errorMessage: ErrorMessage;

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
    this.commits = null;
    this.inputEl1.nativeElement.focus();
    this.heroService.getCommits(url).subscribe( answer => {
      let links: string = answer.headers.get('Link');
      this.links = this.heroService.links = this.heroService.linkTransformer(links);
      this.commits = answer.body;
      sessionStorage.setItem('commits', JSON.stringify(answer.body));
      this.heroService.page = answer.url.split('&page=')[1];
    }, error => {
      console.log("error ->", error);
      this.errorMessage = {
        title: error.status,
        body: error.message
      }
    });
  }

  log(item: any): void {
    console.log(item);
  }

  setFocusOnInputUserRepo() {
    this.inputEl2.nativeElement.focus();
    // document.getElementById('user-repo').focus();
  }

  ngAfterViewInit(){
    this.inputEl1.nativeElement.focus();
    this.inputEl1.nativeElement.select();
  }
}
