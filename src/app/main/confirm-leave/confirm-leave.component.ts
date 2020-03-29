import {AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ModalService} from '../ia-test/modal.service';

@Component({
  selector: 'app-confirm-leave',
  templateUrl: './confirm-leave.component.html',
  styleUrls: ['./confirm-leave.component.css']
})
export class ConfirmLeaveComponent implements AfterViewInit{
  @ViewChild('confirmExitModal') template: TemplateRef<any>;

  constructor(private modalService: ModalService) {}

  ngAfterViewInit(): void {
    this.modalService.registerModalRef(this.template);
  }

  choose(choice: boolean) {
    this.modalService.navigateAwaySelection.next(choice);
    this.modalService.close();
  }
}
