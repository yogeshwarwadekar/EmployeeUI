import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
    handleError(error: any) {
      if (error instanceof HttpErrorResponse) {
          console.error('Backend returned status code: ', error.status);
          console.error('Response body:', error.message);      	  
      } else {
          console.error('An error occurred:', error.message);
      }     
    }
} 