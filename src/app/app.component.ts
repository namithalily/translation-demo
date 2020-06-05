import { Component, LOCALE_ID, Inject } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Translation Demo';
  userName = '';
  error: string;
  success: string;

  languageList = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Espanol' }
  ];

  constructor(@Inject(LOCALE_ID) protected localeId: string,
              private translate: TranslateService) { 

    const browserLang = localeId;
    this.translate.use(browserLang);
    //translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');
  }

  onUpdateName(event: Event) {
      this.error = null;
      this.success = null;
      this.userName = (<HTMLInputElement>event.target).value;
  }

  onAddName() {
    console.log(this.userName);
    if(this.userName === 'nami') {
        this.error = '0x01';
    } else if(this.userName === 'Namitha') {
        this.error = '0x02';
    } else if(this.userName === '') {
        this.error = '0x03';
    } else {
      this.success = '0x01'
    }
  }
}
