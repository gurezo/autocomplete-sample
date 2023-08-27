import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteSelectComponent } from './autocomplete-select/autocomplete-select.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteSelectComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'autocomplete-sample';

  selectFormContorol = new FormControl();
  options: string[] = [
    'Rajkot',
    'Surat',
    'Vapi',
    'Bhavnagar',
    'Delhi',
    'Mumbai',
    'Banglore',
  ];
  filteredOptions: Observable<string[]> = new Observable<string[]>();

  ngOnInit() {
    this.filteredOptions = this.selectFormContorol.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
