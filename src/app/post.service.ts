import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }



  fetchPost(){
  return this.http.get<{message: string, docs: []}>("http://localhost:3000/posts")
  }
  insertPost(obj: any){
return this.http.post<{message: string}>("http://localhost:3000/posts", obj);
  }
  updatePost(newObj: any, id: string){
return this.http.put<{message: string}>(`http://localhost:3000/posts/${id}`, newObj)
  }
  deletePost(id: string){
return this.http.delete<{message: string}>(`http://localhost:3000/posts/${id}`)
  }
}



