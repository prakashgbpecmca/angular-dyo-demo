import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, NgForm } from "@angular/forms";
import { NgForOf, ViewportScroller } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { IRackDetails, IBlocks,IRacks,IWareHouse } from './rack';
import { RackService } from './rack-service';

@Component({
  selector: 'app-rack-add-edit',
  templateUrl: './rack-add-edit.component.html',
  styleUrls: ['./rack-add-edit.component.less']
})
export class RackAddEditComponent implements OnInit {
  racksDetail:IRackDetails;
  blocks:IBlocks[];
  racks:IRacks[];
  warehouses:IWareHouse[];
  newRacks(): void {
    this.racksDetail = {
      WareHouseId: 0,
      BlockId: 0,
      RackId: 0,
      Rows:0,
      Sections:0
      
      }
    };
    
  
    constructor(
      private _activeModal: NgbActiveModal,
      private _rackService: RackService,
      http: HttpClient
    ) {}

  ngOnInit() {
    this.newRacks();
    this._rackService.getRacksInitials().subscribe(
      data => {
        this.warehouses = data.WareHouses;
        this.blocks = data.Blocks;
        this.racks = data.Racks;   
        console.log(data)
      },
      err => {
        console.log(err);
      }
    );
  }
  saveRack(rackFrom: NgForm): void {    

    if (rackFrom.valid) {
      console.log(this.racksDetail);
      this._rackService.saveRackDetail(this.racksDetail).subscribe(
        data => {
          status = data;
          this._activeModal.close();
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
