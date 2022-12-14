import { Component } from '@angular/core';

@Component({
  selector: 'uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent {
  
  isHovering: boolean;
 
  files: File[] = [];
 
  toggleHover(event: boolean) {
    this.isHovering = event;
  }
 
  onDrop(files: FileList ) {
    for (let i = 0; i < files.length; i++) {
      let item = files.item(i); if(item) this.files.push(item); 
      // console.log(files.item(i));
    }
    
  }

}