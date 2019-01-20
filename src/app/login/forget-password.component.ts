import { Component, OnInit } from "@angular/core";
import { IUser } from "../user/user";
import { UserLogin } from "./login";
import { LoginService } from "./login.service";

@Component({
  selector: "app-forget-password",
  templateUrl: "./forget-password.component.html",
  styleUrls: ["./forget-password.component.less"]
})
export class ForgetPasswordComponent implements OnInit {
  isMailSent: boolean;
  public logo: string;
  submitted = false;
  user: UserLogin = new UserLogin();
  constructor(private _loginService: LoginService) {}

  ngOnInit() {
    this.logo = "assets/logo.png";
  }

  onSubmit(): void {

    this._loginService.forgetPassword(this.user).subscribe(
      data => {
        if (data.Status) {
          this.isMailSent = true;
          this.user.UserName = "";
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
