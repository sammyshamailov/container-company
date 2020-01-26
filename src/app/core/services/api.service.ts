import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ContainerResponse, PhoneResponse } from 'src/app/shared/models/response';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable()
export class ApiService {

  // tslint:disable-next-line: variable-name
  private _containerStatusResponse = new BehaviorSubject(null);
  public readonly containerStatusResponse$: Observable<ContainerResponse> = this._containerStatusResponse.asObservable();

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  private openSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
    });
  }

  getContainerStatus(containerID: string): void {
    this.http.get<ContainerResponse>(`http://test-api.marvilix.com/container/${containerID}`)
    .subscribe((response) => {
      if (response.code === 0) {
        this._containerStatusResponse.next(response);
      } else {
        this.openSnackBar(response.errorMessage);
      }
    },
    (error) => {
      this.openSnackBar('Something went wrong');
    });
  }

  requestPhoneAlert(containerID: string, phoneNumber: string): void {
    const formData = new FormData();
    formData.append('PhoneNumber', phoneNumber);
    this.http.post<PhoneResponse>(`http://test-api.marvilix.com/container/${containerID}/sms`, formData)
    .subscribe((response) => {
      if (response.code === 0) {
        this.openSnackBar('Phone number was added successfully to alerts');
      } else {
        this.openSnackBar(response.errorMessage);
      }
    },
    (error) => {
      this.openSnackBar('Something went wrong');
    });
  }
}
