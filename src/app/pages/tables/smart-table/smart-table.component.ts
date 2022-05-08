import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent implements OnInit {
  users : any ;
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      firstName: {
        title: 'Name',
        type: 'string',
      },
      lastName: {
        title: 'Mail',
        type: 'string',
      },
     
      email: {
        title: 'site',
        type: 'string',
      },
      age: {
        title: 'score',
        type: 'number',
      },
      username: {
        title: 'Decision',
        type: 'string',
      }
    },
  };



  constructor(private http:HttpClient) {
    let response= this.http.get("http://localhost:8080/api/v1/users");
    response.subscribe((data)=>this.users=response)
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
