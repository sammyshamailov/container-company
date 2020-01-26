import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  searchForm: FormGroup;

  get containerNumber(): AbstractControl { return this.searchForm.get('containerNumber'); }

  constructor(
    fb: FormBuilder,
    private apiService: ApiService
  ) {
    this.searchForm = fb.group({
      containerNumber: ['', [Validators.required, Validators.maxLength(7), Validators.minLength(7)]],
      transactionID: '',
      permissionNumber: ''
    });
  }

  onSubmit() {
    this.apiService.getContainerStatus(this.containerNumber.value);
  }

  ngOnInit() {
  }

}
