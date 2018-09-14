import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrMessageService {

  constructor(private toastrService: ToastrService) { }

  success(message: string, title?: string) {
    this.toastrService.success(message, title);
  }

  info(message: string, title?: string) {
    this.toastrService.info(message, title);
  }

  warning(message: string, title?: string) {
    this.toastrService.warning(message, title);
  }

  error(message: string, title?: string) {
    this.toastrService.error(message, title);
  }

}
