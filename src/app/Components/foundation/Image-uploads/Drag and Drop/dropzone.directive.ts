// import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

// @Directive({
//   selector: '[appDropzone]'
// })
// export class DropzoneDirective {

//   constructor() { }
//   @Output() dropped =  new EventEmitter<FileList>();
//   @Output() hovered =  new EventEmitter<boolean>();

//   @HostListener('drop', ['$event'])
//   onDrop($event :any) {
//     $event.preventDefault();
//     this.dropped.emit($event.dataTransfer.files);
//     this.hovered.emit(false);
//   }

//   @HostListener('dragover', ['$event'])
//   onDragOver($event:any) {
//     $event.preventDefault();
//     this.hovered.emit(true);
//   }

//   @HostListener('dragleave', ['$event'])
//   onDragLeave($event :any) {
//     $event.preventDefault();
//     this.hovered.emit(false);
//   }
// }

import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
 
@Directive({
  selector: '[dropzone]'
})
export class DropzoneDirective {
 
  @Output() dropped =  new EventEmitter<FileList>();
  @Output() hovered =  new EventEmitter<boolean>();
 
  @HostListener('drop', ['$event'])
  onDrop($event: { preventDefault: () => void; dataTransfer: { files: FileList | undefined; }; }) {
    $event.preventDefault();
    this.dropped.emit($event.dataTransfer.files);
    this.hovered.emit(false);
  }
 
  @HostListener('dragover', ['$event'])
  onDragOver($event: { preventDefault: () => void; }) {
    $event.preventDefault();
    this.hovered.emit(true);
  }
 
  @HostListener('dragleave', ['$event'])
  onDragLeave($event: { preventDefault: () => void; }) {
    $event.preventDefault();
    this.hovered.emit(false);
  }
}