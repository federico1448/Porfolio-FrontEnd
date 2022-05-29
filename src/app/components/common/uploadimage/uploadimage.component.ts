import { Component, Input, OnInit } from '@angular/core';
import { UploadimageService } from 'src/app/services/common/uploadimage.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { EducationService } from 'src/app/services/common/education.service';
import { PresentationService } from 'src/app/services/common/presentation.service';
import { ExperienceService } from 'src/app/services/common/experience.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-uploadimage',
  templateUrl: './uploadimage.component.html',
  styleUrls: ['./uploadimage.component.css']
})
export class UploadimageComponent implements OnInit {
  selectedFile!:File;
  selectedFiles?: FileList;
  currentFile?: File;
  fileName = '';
  progress = 0;
  @Input() idvalue:any;
  @Input() entidad:string="";

  //respuesta de imagen
  retrievedImage: any;

  constructor(
    private uploadService:UploadimageService,
    private sanitizer:DomSanitizer,
    private educationService:EducationService,
    private presentationService:PresentationService,
    private experienceService:ExperienceService
  ) { }

  ngOnInit(): void {
    if(this.entidad=="education"){
      this.educationService.getEducation(this.idvalue)
        .subscribe(resultado=>{
          this.retrievedImage= 'data:image/jpeg;base64,' + resultado.logo;
        })
    }
    if(this.entidad=="fotoperfil"){
      this.presentationService.getPresentation().subscribe(
        usuario=>{
          this.retrievedImage = 'data:image/jpeg;base64,' + usuario.imagenperfil;
        }
      );
    }
    if(this.entidad=="experience"){
      this.experienceService.getExperience(this.idvalue)
      .subscribe(resultado=>{
        this.retrievedImage= 'data:image/jpeg;base64,' + resultado.logo;
      })
    }
  }

  onFileSelected(event:any){
    this.selectedFile=<File>event.target.files[0];
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.progress = 0;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.uploadService.upload(this.currentFile, this.entidad,this.idvalue).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              console.log(event.body);
              Swal.fire({
                title:'',
                text:'La Imagen se actulizo correctamente... Por favor recargue la pagina para ver el cambio',
                timer: 3000,
                icon: 'success',
                showConfirmButton: false
              })
            }
          },
          (err: any) => {
            console.log(err);
            this.progress = 0;
            if (err.error && err.error.message) {
              console.log(err.error.message);
            } else {
              console.log('Could not upload the file!');
            }
            this.currentFile = undefined;
          });
      }
      this.selectedFiles = undefined;
    }
  }

  getImage() {
    const val=35;
    this.uploadService.getFileFirst(val)
      .subscribe(
        res => {
          console.log(res)
          this.retrievedImage = 'data:image/jpeg;base64,' + res.image;
        }
      );
  }
}
