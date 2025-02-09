import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

/**
 * @title Stepper that displays errors in the steps
 */
@Component({
  selector: 'stepper-errors-example',
  templateUrl: 'stepper-errors-example.html',
  styleUrls: ['stepper-errors-example.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class StepperErrorsExample implements OnInit {
  firstFormGroup: UntypedFormGroup;
  secondFormGroup: UntypedFormGroup;

  constructor(private _formBuilder: UntypedFormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
}
