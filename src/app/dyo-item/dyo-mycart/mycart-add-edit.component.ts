import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";
import { DyoViewSavedComponent } from './dyo-view-saved.component';

@Component({
  selector: 'app-mycart-add-edit',
  templateUrl: './mycart-add-edit.component.html',
  styleUrls: ['./mycart-add-edit.component.less']
})
export class MycartAddEditComponent implements OnInit {

  viewSaved(): void {
    let options: NgbModalOptions = { size: 'lg', centered: true };
    let modalRef = this._modalService.open(DyoViewSavedComponent, options);
    modalRef.result.then(function() {}, function() {});
  }

  constructor(private _activeModal: NgbActiveModal, private _modalService: NgbModal) { }

  ngOnInit() {
    // this._activeModal.close();
  }

}
