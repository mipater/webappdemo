import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TreeNode} from './treenode.model';
import {DecisionTreeFormService} from './decision-tree-form.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-decision-tree-form',
  templateUrl: './decision-tree-form.component.html',
  styleUrls: ['./decision-tree-form.component.css']
})
export class DecisionTreeFormComponent implements OnInit {
  currentTreeNode: TreeNode;
  hidePersonalInfo = false;

  constructor(private decisionTreeFormService: DecisionTreeFormService) {}

  ngOnInit(): void {
    this.currentTreeNode = this.decisionTreeFormService.getNodeById('hasPain');
  }

  onSubmitPersonalInfo(form: NgForm) {
    console.log(form);
    this.hidePersonalInfo = true;
  }

  onAnswerSubmit(form: NgForm) {
    console.log(form.value[this.currentTreeNode.id]);
  }

  onNextQuestion() {
  }
}