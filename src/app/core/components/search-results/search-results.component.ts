import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { ContainerResponse } from '../../../shared/models/response';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  containerInfo$: Observable<ContainerResponse>;

  constructor(private apiService: ApiService) { }

  requestPhoneAlert(containerID: string, phoneNumber: string) {
    this.apiService.requestPhoneAlert(containerID, phoneNumber);
  }

  ngOnInit() {
    this.containerInfo$ = this.apiService.containerStatusResponse$;
  }

}
