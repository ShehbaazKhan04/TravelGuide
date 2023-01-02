import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IPointOfInterest } from 'src/app/shared/Interface/pointofinterestdetails';
import { SharedService } from 'src/app/shared/Service/shared.service';

@Component({
  selector: 'app-edit-pointofinterest',
  templateUrl: './edit-pointofinterest.component.html',
  styleUrls: ['./edit-pointofinterest.component.css']
})
export class EditPointofinterestComponent implements OnInit {
  @Input() pointofinterest: any;
  @Input() cityId:any
  pointOfInterestName: any;
  description: any;
  updatedPointOfInterest: IPointOfInterest | any;
  @Output() isCityUpdated: EventEmitter<boolean> = new EventEmitter(false);

  constructor(private router: Router,
    private service: SharedService,
    private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.pointOfInterestName = this.pointofinterest.pointOfInterestName;
    this.description = this.pointofinterest.description;
    console.log('verfiy' + this.pointofinterest);
  }

  updateClick() {
    var val = {
      pointOfInterestName: this.pointOfInterestName,
      description: this.description      
    }
    this.service.updatePointOfInterest(val, this.cityId, this.pointofinterest.pointOfInterestId).subscribe(data=>{
      this.updatedPointOfInterest = data;
      this.isCityUpdated.emit(true);
    });
    this.modalService.dismissAll();
  }  
}