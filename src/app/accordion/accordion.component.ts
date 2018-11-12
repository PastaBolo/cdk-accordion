import { Component, forwardRef } from '@angular/core'
import { CdkAccordion } from '@angular/cdk/accordion'

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  providers: [{ provide: CdkAccordion, useExisting: forwardRef(() => AccordionComponent) }]
})
export class AccordionComponent extends CdkAccordion {
  ngOnInit(): void {
    this.openAll()
  }
}
