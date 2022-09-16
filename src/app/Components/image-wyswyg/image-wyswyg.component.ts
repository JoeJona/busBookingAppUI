import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormControl } from '@angular/forms';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { FileUploadService } from '../foundation/Image-uploads/Drag and Drop/upload-task/file-upload.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-image-wyswyg',
  templateUrl: './image-wyswyg.component.html',
  styleUrls: ['./image-wyswyg.component.css']
})
export class ImageWyswygComponent implements OnInit {
  postForm !: FormGroup;
  singleImageUrl: string;
  multipleImageUrl: string[];
  postby:string;
  postdes:string;
  postTitle:string;
  postForms = new FormGroup({
    title: new FormControl('',Validators.required),
    content: new FormControl('',Validators.required),
    name: new FormControl ('',Validators.required),
    email: new FormControl ('',Validators.required),
    phone: new FormControl ('',Validators.required),
    imageSource: new FormControl(null,Validators.required),
  })
  Posts:any [] =[];

  constructor(private firestore:AngularFirestore, private fileservice: FileUploadService) { }

  ngOnInit(): void {
    this.getPosts();
  }
  singleUploadImage(event){
    this.singleImageUrl = event;
    console.log("This --- is the url ," + event);
    this.postForms.patchValue({
      imageSource:this.singleImageUrl
    })
  }
  SaveData(){
    console.log(this.postForms.value);
      this.addPost(this.postForms.value).then(() => {
        console.log("Post added succesfully");
      }).catch(error =>{
        console.log(error);
      })
  }
  addPost(post: any){
    //post['images'] = this.fileservice.getUrls();
    // post['date'] = new Date();
    return this.firestore.collection('Data').add(post);
  }
  getPosts(){
    this.getPost().subscribe(data => {
      this.Posts = [];
      data.forEach((element:any) => {
        // console.log(element.payload.doc.id);
        this.Posts.push({
          id: element.payload.doc.id,
          ... element.payload.doc.data()
        })
      });
    })
  }
  getPost():Observable<any> {
    return this.firestore.collection('Data').snapshotChanges();
  }
  
}
