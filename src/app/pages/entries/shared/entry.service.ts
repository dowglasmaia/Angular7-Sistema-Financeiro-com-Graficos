import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

import { Entry } from './entry.model';
import { CategoryService } from '../../categories/shared/category.service';



@Injectable({
  providedIn: 'root'
})
export class EntryService extends BaseResourceService<Entry>{ 

  constructor(
    protected injector: Injector,
    private categoryServices: CategoryService
  ) {
    super("api/entries", injector);
  }



}
