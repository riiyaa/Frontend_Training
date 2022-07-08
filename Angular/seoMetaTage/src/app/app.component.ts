import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'seoMetaTage';
  constructor(public _title : Title,public _meta: Meta) {
  }
  ngOnInit() {
    this._title.setTitle('Example of SEO meta tags');

    this._meta.addTags([
      { name: 'keywords', content: 'Angular SEO Title, Meta Description, Meta Keyword Example' },
      { name: 'robots', content: 'index, follow' },
      { name: 'writer', content: 'John Smith' },
      { charset: 'UTF-8' }
    ]);
    this._meta.updateTag({ name: 'writer', content: 'Harry Potter' })
    const name = this._meta.getTags('name=writer');
    console.log(name[0].content);
  }
}
