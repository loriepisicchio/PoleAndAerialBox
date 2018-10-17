import { Component, OnInit } from '@angular/core';
import {Constants} from '../models/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  address = Constants.address;
  email = Constants.email;
  phone = Constants.phone;

  constructor() { }

  ngOnInit() {
  }

}
