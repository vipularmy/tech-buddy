import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-master-view11',
  templateUrl: './master-view11.component.html',
  styleUrls: ['./master-view11.component.scss']
})
export class MasterView11Component implements OnInit {
  public northwindCategories: any = null;

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('Categories').subscribe(data => this.northwindCategories = data);
  }
}
