import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upsert-lead',
  templateUrl: './upsert-lead.component.html',
  styleUrls: ['./upsert-lead.component.scss']
})
export class UpsertLeadComponent implements OnInit {
  showRemoveButton: boolean = false;
  loadDetailsForm !: FormGroup;
  sources = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeLoadDetailsForm();
  }

  initializeLoadDetailsForm(): void {
    this.loadDetailsForm = this._fb.group({
      user_details: this._fb.array([
        this.initForm()
      ])
    });
  }

  initForm(): FormGroup {
    return this._fb.group({
      mobile_number: [''],
      name: ['', Validators.required],
      relation: ['', Validators.required]
    });
  }

  get getFormData(): FormArray {
    return <FormArray>this.loadDetailsForm.get('user_details');
  }

  addMoreNumbers(): void {
    this.showRemoveButton = true;
    const slots = this.loadDetailsForm.get('user_details') as FormArray;
    slots.push(this.initForm());
  }

  removeOrClearNumbers(i: number): void {
    const slots = this.loadDetailsForm.get('user_details') as FormArray
    if (slots.controls.length > 1) {
      slots.removeAt(i);
      if (slots.controls.length === 1) {
        this.showRemoveButton = false;
      }
    } else {
      slots.reset()
    }
  }

  submitDetails(): void {
    console.log('');
  }

  resetDetails(): void {
    this.showRemoveButton = false;
    const slots = this.loadDetailsForm.get('user_details') as FormArray
    slots.reset();
    slots.clear();
    this.initializeLoadDetailsForm();
  }
}
