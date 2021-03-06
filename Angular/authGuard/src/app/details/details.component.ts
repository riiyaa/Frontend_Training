import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  movieDetails: any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.movieDetails = this.route.snapshot.data['movie'];
  }

}
