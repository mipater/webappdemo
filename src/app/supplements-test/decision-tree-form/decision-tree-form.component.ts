import {Component, OnInit} from '@angular/core';
import {Substances, TreeNode} from './treenode.model';
import {DecisionTreeFormService} from './decision-tree-form.service';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {DataStorageService} from '../data-storage.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-decision-tree-form',
  templateUrl: './decision-tree-form.component.html',
  styleUrls: ['./decision-tree-form.component.css']
})
export class DecisionTreeFormComponent implements OnInit {
  currentTreeNode: TreeNode;
  prevTreeNodes: TreeNode[] = [];
  substancesAll: Substances[];
  substances: Substances[] = [];
  hidePersonalInfo = false;
  spinnerIsActive = false;
  control: FormControl = new FormControl(null, Validators.required);

  text: any;
  results: any[];

  constructor(private decisionTreeFormService: DecisionTreeFormService, private dataStorageService: DataStorageService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.fetchSubstances();
    this.currentTreeNode = this.decisionTreeFormService.getNodeById('hasPain');
    this.prevTreeNodes.push(this.decisionTreeFormService.getNodeById('hasPain'));
  }

  onSubmitPersonalInfo(form: NgForm) {
    this.hidePersonalInfo = true;
  }

  onAnswerSubmit() {
    console.log(this.control);
    // force formcontrol value
    if (this.control.value.hasOwnProperty('id')) {
      this.control.setValue(this.control.value.id);
    }
    // Clean id
    const nextNodeId = this.control.value.split('#')[0];
    const nextNode = this.decisionTreeFormService.getNodeById(nextNodeId);
    // get next node
    if (nextNode) {
      this.prevTreeNodes.push(this.currentTreeNode);
      this.currentTreeNode = nextNode;
      // Add dynamic id to avoid multiple radio button value issue
      for (let i = 0; i < this.currentTreeNode.answers.length; i++) {
        this.currentTreeNode.answers[i].id += '#id-' + i;
      }
      // find substances for the next node
      this.substances = [];
      this.currentTreeNode.subAdv?.forEach(searchedId => {
        this.substancesAll.forEach(substance => {
          if (substance.id === searchedId){
            this.substances.push(substance);
          }
        });
      });
    }
    this.results = [];
    this.text = '';
    // reset formcontrol value
    this.control = new FormControl(null, Validators.required);
  }

  onPrevQuestion() {
    this.control.reset();
    this.substances = [];
    if (this.currentTreeNode.id === 'hasPain') {
      this.hidePersonalInfo = false;
      return;
    }
    this.currentTreeNode = this.decisionTreeFormService.getNodeById(this.prevTreeNodes.pop().id);
  }

  fetchSubstances() {
    if (this.dataStorageService.handleRefreshData() === true) {
      this.dataStorageService.fetchData().subscribe(subAdv => {
        this.substancesAll = subAdv;
        console.log(this.substancesAll);
        return;
      }, error => {
        console.error(error);
      });
    }
    this.substancesAll = this.dataStorageService.getSubAdv();
  }

  search(event: any) {
    const query = event.query.toLowerCase().replace(/\s/g, '');
    let filtered : any[] = [];
    this.currentTreeNode.answers.filter((answer) => {
      if (answer.msg.toLowerCase().replace(/\s/g, '').indexOf(query) > -1) {
        filtered.push(answer);
      } else if (answer.synonyms){
        answer.synonyms.forEach(synonym => {
          // remove last letter from synonym for catching both singular/plural words
          const _synonym = synonym.toLowerCase().replace(/\s/g, '');
          if (_synonym.indexOf(query.slice(0, -1)) > -1 || _synonym.indexOf(query) > -1 ) {
            filtered.push(answer);
          }
        });
      }
    });
    this.results = filtered;
  }

  onFindMore(url: string) {
    window.open(url, '_blank');
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed ${this.getDismissReason(reason)}`);
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
