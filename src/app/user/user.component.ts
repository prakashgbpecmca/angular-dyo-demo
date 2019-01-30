import {
  Component,
  OnInit,
  TemplateRef,
  EventEmitter,
  AfterViewInit
} from "@angular/core";
import { Router } from "@angular/router";
import { BsModalService } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service";
import { IProductDataList } from "src/app/service/service";
import { ServiceService } from "src/app/service/service.service";
import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";
import { UserAddEditComponent } from "./user-add-edit.component";
import { UserService } from "./user.service";
import { ITrackUser } from "./user";
import { CommonModalComponent } from "../shared/common-modal.component";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker/public_api";
import { FileUploader } from "ng2-file-upload";
import { HttpClient, HttpHeaders } from "@angular/common/http";

function readBase64(file): Promise<any> {
  let reader = new FileReader();
  let future = new Promise((resolve, reject) => {
    reader.addEventListener(
      "load",
      function() {
        resolve(reader.result);
      },
      false
    );

    reader.addEventListener(
      "error",
      function(event) {
        reject(event);
      },
      false
    );

    reader.readAsDataURL(file);
  });
  return future;
}

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.less"]
})
export class UserComponent implements OnInit, AfterViewInit {
  public modalRef: BsModalRef;
  public user: string;
  public products: string;
  public logo: string;
  public customer: boolean;
  public bellActive: boolean;
  public shopActive: boolean;
  public users: boolean;
  public order: boolean;
  public placeOrder: boolean;
  public warehouse: boolean;
  public rack: boolean;
  public product: boolean;
  public accessControl: boolean;
  public on = true;
  model: any = {
    FromDate: null,
    ToDate: null
  };
  datePickerConfig: Partial<BsDatepickerConfig>;
  role = 0;
  userInfo: any;
  systemRoles: any[];
  public productDataDetail: IProductDataList[];
  public searchText = "";
  public trackUser: ITrackUser = {
    UserId: 0,
    RoleId: 0,
    TakeRows: 0,
    CurrentPage: 0,
    FromDate: null,
    ToDate: null
  };
  activeUsers: any[];
  constructor(
    private _router: Router,
    private http: HttpClient,
    private modalService: BsModalService,
    private _service: ServiceService,
    private _userService: UserService,
    private _modalService: NgbModal
  ) {
    this.user = "assets/user.png";
    this.products = "assets/product.png";
    this.logo = "assets/logo.png";
  }

  // !
  public uploader: FileUploader = new FileUploader({
    url: "http://localhost:24047/api/ExpressManifest/UploadMAWBForms",
    disableMultipart: true
  });

  public onFileSelected(event: EventEmitter<File[]>) {
    // let formData: FormData = new FormData();
    // formData.append("uploadFile", this.uploader.queue[0].file , this.uploader.queue[0].file.name);
    // this.uploader.queue[0].formData = formData;
    // this.uploader.queue[0].upload();
  }
  ngAfterViewInit() {
    this.uploader.onAfterAddingFile = item => {
      item.withCredentials = false;
    };
  }
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: "gray modal-lg" })
    );
  }

  addUser(): void {
    let options: NgbModalOptions = { size: "lg" };
    let modalRef = this._modalService.open(UserAddEditComponent, options);
    modalRef.componentInstance.type = "Add";
    modalRef.result.then(function() {}, function() {});
  }

  performAction(id: number): void {
    this._userService.deleteUser(id).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  deleteUser(id: number): void {
    if (id) {
      let options: NgbModalOptions = { size: "sm" };
      let modalRef = this._modalService.open(CommonModalComponent, options);
      modalRef.componentInstance.type = "Confirmation";
      modalRef.componentInstance.context = this;
      modalRef.componentInstance.message =
        "Are you sure, you want to delete this user?";
      modalRef.result.then(
        result => {
          this._userService.deleteUser(id).subscribe(
            data => {
              console.log(data);
              this.getActiveUsers();
            },
            error => {
              console.log(error);
            }
          );
        },
        reason => {
          console.log(reason);
        }
      );
    }
  }
  viewDetail(id: number): void {
    if (id) {
      let options: NgbModalOptions = { size: "lg" };
      let modalRef = this._modalService.open(UserAddEditComponent);
      modalRef.componentInstance.type = "Edit";
      modalRef.componentInstance.UserId = id;
      modalRef.result.then(
        function() {
          this.activeUsers();
        },
        function() {}
      );
    }
  }

  getActiveUsers(): void {
    this.trackUser.RoleId = this.role;
    this._userService.getUserList(this.trackUser).subscribe(
      data => {
        this.activeUsers = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem("user"));

    this.datePickerConfig = Object.assign(
      {},
      {
        containerClass: "theme-dark-blue",
        maxDate: new Date(),
        dateInputFormat: "DD/MM/YYYY"
      }
    );

    this._userService.getSystemRoles().subscribe(
      data => {
        this.systemRoles = data;
        this.getActiveUsers();
      },
      error => {
        console.log(error);
      }
    );

    // !do not remove it
    this.on = false;
  }
}
