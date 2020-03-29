import {Injectable, TemplateRef} from '@angular/core';
import {Subject} from 'rxjs';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Injectable({providedIn: 'root'})
export class ModalService {
  modalRef: BsModalRef;
  modalTplRef: TemplateRef<any>;
  navigateAwaySelection: Subject<boolean> = new Subject<boolean>();

  constructor(private bsModalService: BsModalService) {}

  registerModalRef(modalTplRef: TemplateRef<any>) {
    this.modalTplRef = modalTplRef;
  }

  open () {
    this.modalRef = this.bsModalService.show(this.modalTplRef, {ignoreBackdropClick: true, keyboard: false});
  }

  close () {
    this.modalRef.hide();
  }

}
