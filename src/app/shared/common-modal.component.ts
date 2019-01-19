import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-common-modal",
  templateUrl: "./common-modal.component.html"
})
export class CommonModalComponent implements OnInit {
  type: string;
  message: string;
  context: any;
  constructor(private _activeModal: NgbActiveModal) {}

  ngOnInit() {}

  close(): void {
    this._activeModal.close(this.context);
  }
}
