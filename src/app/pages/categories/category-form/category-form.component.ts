import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from "@angular/forms";

import { BaseResourceFormComponent } from "../../../shared/base-resource-form/base-resource-form.component";

import { Category } from "../shared/category.model";
import { CategoryService } from '../shared/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})

export class CategoryFormComponent extends BaseResourceFormComponent<Category> implements OnInit{

  
  constructor(
    protected categoryService: CategoryService,
    protected injector: Injector,
    
  ) {
    //imp-> o injetor, a Class , o Service e a Converção da Class para Json - Funcão
    super(injector, new Category(), categoryService, Category.fromJson);
  }


  /* Criando o Formulario da Categoria - que erda o formulario da Class BaseResourceFormComponent*/
  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null,[Validators.required, Validators.minLength(2)]],
      description: [null, [Validators.required]],
     


    })
  }

  /* Sobrescrevendo os metodos dos Titulos*/
  protected creationPageTitle(): string {
    return "Cadastro de Nova Categoria";
  }

  protected editionPateTile(): string {
    const categoryName = this.resource.name || "";
    return "Editando Categoria: " + categoryName;
  }
 
    /* Create 
    protected createResource() {
      const resource: Category = this.jsonDataToResourceFn(this.resourceForm.value);
   
      resource.usuario = this.user; 

      this.resourceService.create(resource).subscribe(
          resource => this.actionsForSuccess(resource),  //sucesso
          error => this.actionsForError(error)  // Error
      )

  }
*/
}
