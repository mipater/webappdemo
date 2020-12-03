import {Component, OnInit} from '@angular/core';
import {TreeNode} from './treenode.model';
import {DecisionTreeFormService} from './decision-tree-form.service';
import {FormControl, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-decision-tree-form',
  templateUrl: './decision-tree-form.component.html',
  styleUrls: ['./decision-tree-form.component.css']
})
export class DecisionTreeFormComponent implements OnInit {
  currentTreeNode: TreeNode;
  hidePersonalInfo = false;
  control: FormControl = new FormControl('value', Validators.required);

  constructor(private decisionTreeFormService: DecisionTreeFormService) {}

  ngOnInit(): void {
    this.currentTreeNode = this.decisionTreeFormService.getNodeById('hasPain');
  }

  onSubmitPersonalInfo(form: NgForm) {
    this.hidePersonalInfo = true;
  }

  onAnswerSubmit() {
    console.log(this.control);
    const nextNodeId = this.control.value;
    const nextNode = this.decisionTreeFormService.getNodeById(nextNodeId);
    if (nextNode) {
      this.currentTreeNode = nextNode;
    }
  }

  onPrevQuestion() {
    if (this.currentTreeNode.id === 'hasPain') {
      this.hidePersonalInfo = false;
      return;
    }
    this.currentTreeNode = this.decisionTreeFormService.getNodeById(this.currentTreeNode.prevQuestion);
  }

}
