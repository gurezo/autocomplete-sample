import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteSelectComponent } from './autocomplete-select/autocomplete-select.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AutocompleteSelectComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'autocomplete-sample';
}
