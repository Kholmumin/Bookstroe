import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @ViewChild('searchAuthorForm') searchForm!: NgForm;
  searchedAuthor!: string;

  onSubmit() {
    console.log(this.searchForm.value);
    this.searchForm.reset();
  }
}
