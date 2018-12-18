import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { MatSort, MatSortable, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  userlist:any=[];

  @ViewChild(MatSort) sort: MatSort;
  dataSource:any;
  displayedColumns=['name', 'email', 'address', 'phone','company'];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    // this._userService.getData().subscribe((data: any) => {
    //   this.userlist=data;
    // });
    this._userService.getData().subscribe(results => {
      this.dataSource=new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
    })
  }

  // sort(){
    

  // }

}
