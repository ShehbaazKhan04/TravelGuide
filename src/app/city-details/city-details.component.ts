import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { firstValueFrom } from 'rxjs';
import { ICityDetail } from '../shared/Interface/citydetail';
import { IPointOfInterest } from '../shared/Interface/pointofinterestdetails';
import { SharedService } from '../shared/Service/shared.service';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})

export class CityDetailsComponent implements OnInit {
  pageTitle = 'City details';
  city: ICityDetail | any;
  pointofinterest: IPointOfInterest | any;
  ModalTitle!: string;
  id = Number(this.route.snapshot.paramMap.get('id'));

  constructor(private route: ActivatedRoute,
    private service: SharedService,
    private modalService: NgbModal) {
  }

  ngOnInit(): void {
    if (this.id) {
      this.getCityById(this.id);
    }
  }

  cityUpdated(event: boolean) {
    if (event) {
      this.getCityById(this.id);
    }
  }

  getCityById(id: number) {
    this.service.getCitiesById(id).subscribe(data => {
      this.city = data;
    })
  }

  editClick(cityId: number, pointOfInterestId: number, content: any): void {
    this.service.getPointOfInterstById(cityId, pointOfInterestId).subscribe(data => {
      this.pointofinterest = data;
      this.pointofinterest.cityId = this.city.cityId;
      this.modalService.open(content);
      this.ModalTitle = 'Edit Point of Interest';
    })

  }

  async deleteClick(cityId: number, pointOfInterestId: number) {
    if (confirm("Are you sure you wan to delete this Point Of Interest ?")) {
      await firstValueFrom(this.service.removePointOfInterest(cityId, pointOfInterestId));
    }
    this.cityUpdated(true);
  }

  closeClick(): void {
    this.modalService.dismissAll();
  }
}