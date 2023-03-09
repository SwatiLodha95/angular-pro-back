import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
title = "";
postArray : any;

  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.fetchPost();
  }
  fetchPost(){
    this.service.fetchPost().subscribe(data =>{
      this.postArray = data.docs;
    }, error =>{
      console.log(error);
    })
   }
savePost(){
  let obj = {
   title: this.title
  }
  this.service.insertPost(obj).subscribe(data =>{
      alert(data.message)
      this.fetchPost();
  }, error =>{
    alert(error.message);
  })
}
editPost(post:any){
  let obj = {
newValue: this.title
  }
  this.service.updatePost(obj, post._id).subscribe(data =>{
    alert(data.message);
    this.fetchPost();
  }, error =>{
 alert(error.message)
  })
}
deletePost(id: string){
  this.service.deletePost(id).subscribe(data=>{
    alert(data.message)
    this.fetchPost();
  }, error =>{
    alert(error.message)
  })
}
}
  