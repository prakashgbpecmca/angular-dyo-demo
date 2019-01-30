import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-dyo-view-saved',
  templateUrl: './dyo-view-saved.component.html',
  styleUrls: ['./dyo-view-saved.component.less']
})
export class DyoViewSavedComponent implements OnInit {

  constructor(private _activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
