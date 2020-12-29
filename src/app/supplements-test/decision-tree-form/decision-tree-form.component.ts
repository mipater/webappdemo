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
  prevTreeNodes: TreeNode[] = [];
  hidePersonalInfo = false;
  control: FormControl = new FormControl(null, Validators.required);

  constructor(private decisionTreeFormService: DecisionTreeFormService) {}

  ngOnInit(): void {
    this.currentTreeNode = this.decisionTreeFormService.getNodeById('hasPain');
    this.prevTreeNodes.push(this.decisionTreeFormService.getNodeById('hasPain'));
  }

  onSubmitPersonalInfo(form: NgForm) {
    this.hidePersonalInfo = true;
  }

  onAnswerSubmit() {
    console.log(this.control);
    const nextNodeId = this.control.value;
    const nextNode = this.decisionTreeFormService.getNodeById(nextNodeId);
    if (nextNode) {
      this.prevTreeNodes.push(this.currentTreeNode);
      this.currentTreeNode = nextNode;
    }
    this.control = new FormControl(null, Validators.required);
  }

  onPrevQuestion() {
    if (this.currentTreeNode.id === 'hasPain') {
      this.hidePersonalInfo = false;
      return;
    }
    this.currentTreeNode = this.decisionTreeFormService.getNodeById(this.prevTreeNodes.pop().id);
  }

}
