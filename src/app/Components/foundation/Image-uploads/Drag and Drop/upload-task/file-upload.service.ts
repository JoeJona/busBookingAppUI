import { EventEmitter, Injectable, Output } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
   @Output()urlEmitter: EventEmitter<string> = new EventEmitter()

  constructor() { }
  // Uploader
  private uploadedUrls: string[] = [];
  public addUploadedUrl(url: string) {
    this.uploadedUrls.push(url);
    // console.log(this.uploadedUrls);
  }
  public getUrls(): string[] {
    return this.uploadedUrls;
  }
  public clearUrls() {
    this.uploadedUrls = [];
  }
}