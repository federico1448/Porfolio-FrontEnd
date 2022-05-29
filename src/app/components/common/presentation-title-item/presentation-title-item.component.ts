import { Component, OnInit ,Input} from '@angular/core';
import { FormBuilder, FormGroup,FormControl,FormArray,Validators} from '@angular/forms';
import { PresentationService } from 'src/app/services/common/presentation.service';

@Component({
  selector: 'app-presentation-title-item',
  templateUrl: './presentation-title-item.component.html',
  styleUrls: ['./presentation-title-item.component.css']
})
export class PresentationTitleItemComponent implements OnInit {
  @Input() presentacion:any;
  titulosRes:string="";

  registerForm = this.formBuilder.group({
    username: ['', {
    }],
    inforesumida: ['', {
      }],
    titulos: this.formBuilder.array([])
  });


  constructor(
    private formBuilder:FormBuilder,
    private presentationService:PresentationService
  ) { }

  ngOnInit(): void {
    for (let item of this.presentacion.titulos) {
        this.iniciarTitulo(item)
    }
    this.registerForm.controls['username'].setValue(this.presentacion.name);
    this.registerForm.controls['inforesumida'].setValue(this.presentacion.description);
  }

  get username() {
    return this.registerForm.get('username');
  }

  get titulos(){
    return this.registerForm.get('titulos') as FormArray;
  }

  iniciarTitulo(valor:string){
    const tituloFormGroup  = this.formBuilder.group({
      descripcion: valor
    });
    this.titulos.push(tituloFormGroup);
  }
  agregarTitulo(){
    const tituloFormGroup  = this.formBuilder.group({
      descripcion: ''
    });
    this.titulos.push(tituloFormGroup);
  }

  removerTitulo(indice: number) {
    this.titulos.removeAt(indice);
  }

  submit(){
    for (let titulosv of this.registerForm.value.titulos){
      this.titulosRes=this.titulosRes+'"'+titulosv.descripcion+'",';
    }
    this.titulosRes=this.titulosRes.substring(0,this.titulosRes.length-1);
    this.presentationService.editPresentation(this.registerForm.value.username,
                                            this.registerForm.value.inforesumida,
                                            this.titulosRes,      
                                            this.presentacion.id);                                                                                     
      this.titulosRes="";
  }
  
}
