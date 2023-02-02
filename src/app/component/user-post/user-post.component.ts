import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit{

  constructor(private router: ActivatedRoute){}
  id:number = -1;

  id$ = this.router.paramMap.pipe(
    map((params => params.get('id')))
  );

  ngOnInit(): void {
    // this.id = this.router.snapshot.params['id'];
    

    /*
    this.router.params.subscribe((params) => {
      console.log(params['id']);
    })
    */
  }



}
