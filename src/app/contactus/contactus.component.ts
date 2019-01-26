import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

 
  contactusForm: FormGroup
  sending: boolean;
  constructor(private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit() {
    this.initForm();
    this.sending = false;
  }

  initForm() {
    this.contactusForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]

    })
  }

  sendMessage(value) {
    console.log("value ", value);
  }


  subscribe(formData: NgForm) {
    this.sending = true;
    console.log(formData);
    setTimeout(() => {
      this.sending = false;
      this.cancelForm();
    }, 1000);
  }

  cancel() {
    this.cancelForm();
  }

  cancelForm() {
    this.router.navigate([{outlets: { popup: null }}] );
  }


}
