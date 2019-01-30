import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { IProfile } from "./profile";
import { ProfileService } from "./profile.service";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.less"]
})
export class ProfileComponent implements OnInit {
  UserId: number;
  userInfo: any;
  profileInfo: IProfile;
  profileForm: FormGroup;
  profileService: ProfileService;
  activeModal: NgbActiveModal;

  constructor(
   private fb: FormBuilder,
    _activeModal: NgbActiveModal,
    _profileService: ProfileService,
    private _fb: FormBuilder
  ) {
    this.activeModal = _activeModal;
    this.profileService = _profileService;
  }

  userProfileDetail(): void {
    this.profileService.userProfileDetail(this.UserId).subscribe(
      data => {
        this.profileInfo = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
this.fb.group({
});

    this.profileForm = new FormGroup({
      currentPassord: new FormControl(),
      comparePassword: new FormGroup({
        newPassword: new FormControl(),
        confirmPassword: new FormControl()
      })
    });
    this.userInfo = localStorage.getItem("user");
    if (this.userInfo) {
    }
  }
}
