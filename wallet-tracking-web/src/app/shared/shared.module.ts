import {NgModule} from '@angular/core';
import {AccordionAnchorDirective, AccordionDirective, AccordionLinkDirective} from './accordion';

// export const options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,

  ],
  providers: []
})
export class SharedModule { }
