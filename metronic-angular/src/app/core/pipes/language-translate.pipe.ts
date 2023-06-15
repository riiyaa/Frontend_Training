import {Pipe, PipeTransform} from '@angular/core';
// @ts-ignore
import *  as enData from '../../../assets/i18n/en.json';
// @ts-ignore
import *  as nlData from '../../../assets/i18n/nl.json';
// @ts-ignore
import *  as zhData from '../../../assets/i18n/zh.json';

@Pipe({
  name: 'languageTranslate'
})
export class LanguageTranslatePipe implements PipeTransform {
  en: any = (enData as any).default;
  nl: any = (nlData as any).default;
  zh: any = (zhData as any).default;

  transform(value: string, language: string = 'en') {
    if (language == 'en') {
      return this.en[value] ? this.en[value] : value;
    }
    if (language == 'ge') {
      return this.nl[value] ? this.nl[value] : value;
    }
    if (language == 'jp') {
      return this.zh[value] ? this.zh[value] : value;
    }
  }
}
