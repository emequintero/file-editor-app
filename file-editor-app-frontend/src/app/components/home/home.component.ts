import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  availableFiles:any[] = [];
  newFileTitle:string = "";

  constructor(public fileService:FileService, public router:Router) {

  }

  ngOnInit(): void {
    this.fileService.getAvailableFiles().subscribe(response=>{
      this.availableFiles = response as any[];
    });
  }

  createFile = () => {
    //a payload is just a JavaScript object that is sent with requests
    let filePayload = {
      title: this.newFileTitle,
      content: "",
      fileID: null
    };
    this.fileService.createFile(filePayload).subscribe(response => {
      let newFileWithFileID = response;
      this.availableFiles.push(newFileWithFileID);
    });
  }

  editFile = (file:any) => {
    this.router.navigateByUrl("/file-editor/" + file.fileID);
  }

  deleteFile = (file:any) => {
    this.fileService.deleteFile(file.fileID).subscribe(response=>{
      //remove file from available files array after deletion in the backend
      this.availableFiles.splice(this.availableFiles.indexOf(file), 1);
    });
  }

}
