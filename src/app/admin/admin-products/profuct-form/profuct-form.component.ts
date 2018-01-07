import { CategoryService } from './../../../service/category/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profuct-form',
  templateUrl: './profuct-form.component.html',
  styleUrls: ['./profuct-form.component.css']
})
export class ProfuctFormComponent implements OnInit {

  categories$;
  
  constructor(categoryService:CategoryService) {
    this.categories$=categoryService.getCategories();
  }

  ngOnInit() {
  }

}
