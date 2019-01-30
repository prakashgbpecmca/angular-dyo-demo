import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { IProfile } from "./profile";
import { ProfileService } from "./profile.service";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from "@angular/forms";

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
  submitted = false;
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
  onSubmit(): void {
    //
  }
  ngOnInit() {
    this.profileForm = this.fb.group({
      currentPassord: ["", [Validators.required]],
      comparePassword: this.fb.group(
        {
          newPassword: ["", [Validators.required, Validators.minLength(8)]],
          confirmPassword: ["", [Validators.required]]
        },
        { validator: matchPassword }
      )
    });

    this.userInfo = localStorage.getItem("user");
    if (this.userInfo) {
    }
  }
}

function matchPassword(group: AbstractControl): { [key: string]: any | null } {
  const newPasswordControl = group.get("newPassword");
  const confirmPasswordControl = group.get("confirmPassword");
  console.log(newPasswordControl);
  console.log(confirmPasswordControl);
  if (confirmPasswordControl.value && newPasswordControl.value) {
    if (newPasswordControl.value === confirmPasswordControl.value) {
      return null;
    }
    return { passwordMismatch: true };
  }
  return null;
}
