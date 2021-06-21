import { Component, OnInit } from '@angular/core';

import { PersonService } from '../person.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    public personService: PersonService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      name:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      email: new FormControl('', [ Validators.required, Validators.email ]),
      phone: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ])
    });

  }

  get f(){
    return this.form.controls;
  }


  submit(){
    console.log(this.form.value);
    this.personService.create(this.form.value).subscribe(res => {
         console.log('Person created successfully!');
         this.router.navigateByUrl('person/index');
    })
  }

}
