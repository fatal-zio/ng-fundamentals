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
}
