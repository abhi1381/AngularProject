import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

import { switchMap } from 'rxjs/operators';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../shared/comment';

import { flyInOut, expand } from '../animations/app.animation';
import { visibility } from '../animations/app.animation';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
  animations: [
   visibility(),
   flyInOut(),
   expand()
  ]
})

export class DishdetailComponent implements OnInit {
  
  @ViewChild('cform') commentsFormDirective;
  
  visibility = 'shown';
  
  commentsForm: FormGroup;
  comment: Comment;
  dish: Dish;
  dishIds: number[];
  prev: number;
  next: number;
  dishcopy;
  
   formErrors = {
    'author': '',
    'comment': '',
    'rating': ''
    };
    
    validationMessages = {
    'author': {
      'required': 'author is required.',
      'minlength': 'First Name must be at least 2 characters long.',
      'maxlength': 'FirstName cannot be more than 25 characters long.'
    },
    'comment': {
      'required': 'comment is required.',
      'minlength': 'Last Name must be at least 2 characters long.'
    },
    'rating': {
      'required': 'Rating is required.'
    }
  };


  constructor(private dishservice: DishService, private route: ActivatedRoute,
      private location: Location, private fb: FormBuilder) {
          this.createForm();
       }

  ngOnInit() {
    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params.pipe(switchMap((params: Params) => {this.visibility = 'hidden';
      return this.dishservice.getDish(+params['id'])}))
    .subscribe(dish => { this.dish = dish; this.dishcopy = dish; this.visibility = 'shown'; this.setPrevNext(dish.id); });
  }

  setPrevNext(dishId: number) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }
  
  createForm() {
    this.commentsForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      comment: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      rating: ['', [Validators.required]]
    });

    this.commentsForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

    onValueChanged(data?: any) {
    if (!this.commentsForm) { return; }
    const form = this.commentsForm;
    for (const field of Object.keys(this.formErrors)) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key of Object.keys(control.errors)) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  goBack(): void {
    this.location.back();
  }
  
  

  onSubmit() {
    this.comment = this.commentsForm.value;
    this.comment.date = new Date().toISOString();
    console.log(this.comment);
    // this.dishcopy.comments.push(this.comment);
    // this.dishcopy.save()
    this.dish.comments.push(this.comment);
    this.commentsForm.reset({
      author: '',
      rating: 5,
      comment: ''
    });
    this.commentsFormDirective.resetForm();
  }
}