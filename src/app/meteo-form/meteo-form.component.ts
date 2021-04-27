import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MeteoService} from '../meteo.service';

@Component({
  selector: 'app-meteo-form',
  templateUrl: './meteo-form.component.html',
  styleUrls: ['./meteo-form.component.css']
})
export class MeteoFormComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder, private meteoService: MeteoService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      citta: [''],
    });
  }

  getWeather() {
    const citta = this.angForm.controls.citta.value;
    this.meteoService.getWeather(citta);
  }

  ngOnInit(): void {
  }

}
