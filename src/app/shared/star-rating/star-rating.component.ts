import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges{
  cropWidth = 75;
  @Input() rating: number = 0;

  ngOnChanges(): void {
    this.cropWidth = this.rating * 75 / 5;
  }
}
