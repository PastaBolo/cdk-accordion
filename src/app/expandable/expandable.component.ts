import { Component, ViewChild } from '@angular/core'
import { expansionAnimation } from './expansion-animation'
import { CdkAccordionItem } from '@angular/cdk/accordion'

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.css'],
  animations: [expansionAnimation]
})
export class ExpandableComponent {
  @ViewChild(CdkAccordionItem) item

  ngAfterViewInit(): void {
    console.log(this.item.accordion)
  }
}
