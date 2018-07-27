import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as ons from 'onsenui';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  colors: string[] = ['Red', 'Green', 'Blue'];
  checkedColors: string[] = ['Green', 'Blue'];
  exampleControl: FormControl = new FormControl('');

  targetText = '';
  targetRadio = true;
  target = '';
  value = '10';

  selectedModifier = 'basic';
  modifiers = [
    {value: 'basic', label: 'Basic'},
    {value: 'material', label: 'Material'},
    {value: 'underbar', label: 'Underbar'}
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    ons.notification.alert('Clicked!');
  }
}
