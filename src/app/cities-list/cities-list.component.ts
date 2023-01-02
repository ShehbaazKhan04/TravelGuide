import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICityDetail } from '../shared/Interface/citydetail';
import { SharedService } from '../shared/Service/shared.service';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {
  pageTitle = "Indian Cities";
  cities: ICityDetail[] = [];
  pageSize = 3;
  pageNumber = 1;

  constructor(private router: Router,
    private service: SharedService) {
  }

  ngOnInit(): void {
    this.refreshCitiesList();
  }

  refreshCitiesList() {
    this.service.getCitiesList(this.pageSize,this.pageNumber).subscribe({
      next: data =>{
        this.cities = data;
      }
    });    
  }

  onHome(): void {
    this.router.navigate(['/welcome']);
  }
}
