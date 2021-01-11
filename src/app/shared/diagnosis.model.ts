import {Symptom} from './symptom.model';

export class Diagnosis {
  constructor(private name: string, private symptoms: Symptom[]){}
}
