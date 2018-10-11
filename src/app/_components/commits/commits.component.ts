import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Links, ErrorMessage } from '../../_misc/interfaces';
import { CommitsService } from '../../_services/commits.service';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: [ './commits.component.css' ]
})
export class CommitsComponent implements OnInit {
  @ViewChild('input1') inputEl1:ElementRef;
  @ViewChild('input2') inputEl2:ElementRef; // Это нужно для выбора эл-тов по local variable в темплейте по имени inputEl2 (тут это нужно для наброса фокуса на эти эл-ты)

  public commits: object[];
  public links: Links[];
  public errorMessage: ErrorMessage;

  constructor( 
    private commitsService: CommitsService, 
  ) {}

  ngOnInit() {
    this.commitsService.getUserLS();
    this.commits = JSON.parse(sessionStorage.getItem('commits'));
    this.links = this.commitsService.links;
  }

  getCommits(url?: string): void {
    this.commits = null;
    this.inputEl1.nativeElement.focus();
    this.commitsService.getCommits(url).subscribe( answer => {
      let links: string = answer.headers.get('Link');
      this.links = this.commitsService.links = this.commitsService.linkTransformer(links);
      this.commits = answer.body;
      sessionStorage.setItem('commits', JSON.stringify(answer.body));
      this.commitsService.page = answer.url.split('&page=')[1];
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
