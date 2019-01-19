import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "../user/user";
import { SecurityService } from "../security/security.service";
import { UserLogin } from "./login";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"]
})
export class LoginComponent implements OnInit {
  Ptk: string;
  errorMessage: string;

  constructor(
    private _router: Router,
    private _fb: FormBuilder,
    private _outh: SecurityService
  ) {
    this.logo = "assets/logo.png";
  }

  loginForm: FormGroup;
  public activeRoute: string;
  public logo: string;

  user: UserLogin = new UserLogin();

  userScreen(): void {
    //
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this._outh.oauthToken(this.user).subscribe(
        data => {
          localStorage.setItem("token", JSON.stringify(data));
          this.userScreen();
          this.Ptk = data;
          this._router.navigate(["/dyo"]);
        },
        error => {
          this.errorMessage = error;
        }
      );
    }
  }

  ngOnInit() {
    this.loginForm = this._fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });
  }
}
