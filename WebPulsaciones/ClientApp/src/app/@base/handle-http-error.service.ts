import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleHttpErrorService {

  constructor() { }


  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      if (error.status == "500") {
        this.mostrarError500(error);
      }

      if (error.status == "400") {
        this.mostrarError400(error);
      }

      return of(result as T);
    };
  }

  public log(message: string) {
    console.log(message);
  }

  private mostrarError500(error: any): void {
    console.error(error);
  }
  private mostrarError400(error: any): void {
    console.error(error);
  }

}



