import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private activatedRouter: ActivatedRoute) {  }
  post: any;

  ngOnInit() {
    // tslint:disable-next-line:no-unused-expression
    const id = this.activatedRouter.snapshot.paramMap.get('id');
console.log(id);
fetch ('https://jsonplaceholder.typicode.com/posts/' + id)
    .then ((res) => res.json())
    .then ((data) => this.post = data);
  }

}
