import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  search = '';

  constructor(activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.search) this.search = params.search;
    })
   }

  ngOnInit(): void {

  }

  searcher(term: string): void {
    if(term)
    this.router.navigateByUrl('/search/' + term);
  }

}
