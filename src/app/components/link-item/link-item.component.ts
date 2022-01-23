import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Link } from 'src/app/models/Link.model';

@Component({
  selector: 'app-link-item',
  templateUrl: './link-item.component.html',
  styleUrls: ['./link-item.component.scss']
})
export class LinkItemComponent implements OnInit {

  @Input() links: Link[];
  @Output() valueResponseList: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  deleteLink(link: Link, index: number) {
    const data: {link: Link, index: number} = {
      link,
      index
    }
    this.valueResponseList.emit(data);
  }

}
