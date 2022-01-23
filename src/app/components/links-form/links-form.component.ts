import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-links-form',
  templateUrl: './links-form.component.html',
  styleUrls: ['./links-form.component.scss']
})
export class LinksFormComponent implements OnInit {

  public linksForm: FormGroup;
  @Input() loading: boolean;
  @Output() valueResponse: EventEmitter<any> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildLinksForm();
  }

  addLink(event) {
    this.valueResponse.emit(this.linksForm.value);
    this.linksForm.reset();
  }

  private buildLinksForm(){
    this.linksForm = this.formBuilder.group({
      url: ['', [Validators.required]],
      name: ['', [Validators.required]]
    })
  }

}
