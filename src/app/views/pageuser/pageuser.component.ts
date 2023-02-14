import { Component, OnInit } from '@angular/core';
import { PageserviceService } from 'src/app/core/pageservice.service';
import { Users } from 'src/app/model/users';

@Component({
  selector: 'app-pageuser',
  templateUrl: './pageuser.component.html',
  styleUrls: ['./pageuser.component.css']
})
export class PageuserComponent implements OnInit {
  users!: Users[];
  currentPage!: number;
  pageSize!: number;
  totalItems!: number;
page: any;
  constructor(private pageserviceService:PageserviceService) { }

  ngOnInit(): void {
    this.currentPage = 1;
    this.pageSize = 5;
    this.getEmployees();
  }


  getEmployees() {
    this.pageserviceService.getAllEmployees(this.currentPage - 1, this.pageSize)
      .subscribe(response => {
        this.users = response.content;
        this.totalItems = response.totalElements;
      });
  }

  pageChanged(event: any): void {
    this.currentPage = event;
    console.log(event)
    this.getEmployees();
  }
}
