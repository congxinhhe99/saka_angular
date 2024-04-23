import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-verify-new-password',
  templateUrl: './verify-new-password.component.html',
  styleUrl: './verify-new-password.component.scss'
})
export class VerifyNewPasswordComponent implements OnInit {

  constructor(public layoutService: LayoutService) { }

  ngOnInit(): void {
    
  }

}
