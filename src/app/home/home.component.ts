import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { NotificationService } from '../_services/notification.service'
import { FooterComponent } from '../global/footer.component';
import { HeaderComponent } from '../global/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [CommonModule, HeaderComponent, FooterComponent, FormsModule],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  model: any = {};
  complexForm: any;
  constructor(fb: FormBuilder, private userService: UserService, private notifyService: NotificationService) {
    this.complexForm = fb.group({
    })
  }

  ngOnInit() {
    this.model.user_name = '';
    this.model.email = '';
    this.model.phone = '';
  }

  sendMail(f: any) {
    let userData = {
      'name': this.model.user_name,
      'email': this.model.email,
      'phone': this.model.phone,
      'message': 'Welcome to RASAYATI'
    }
    this.userService.sendUserMailData(userData).subscribe((success: { err?: any }) => {
      if (success && success.err) {
        if (this.model.user_name == '') this.notifyService.showError("name", "Field Required")
        if (this.model.email == '') this.notifyService.showError("email", "Field Required")
        if (this.model.phone == '') this.notifyService.showError("phone", "Field Required")
      } else {
        this.notifyService.showSuccess("Mail sent successfully !!", "Rasayati")
        f.resetForm();
      }
    }, err => {
      let errorMsg = err.error.error.message
      this.notifyService.showError(errorMsg, "Email")
    })
  }

}
