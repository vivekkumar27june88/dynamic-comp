import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from "@angular/core";

@Component({
  selector: "app-view-container-ref-comp",
  templateUrl: "./view-container-ref-comp.component.html",
  styleUrls: ["./view-container-ref-comp.component.css"]
})
export class ViewContainerRefCompComponent implements OnInit {
  @ViewChild("vcr1", { read: ViewContainerRef, static: false })
  vcr1: ViewContainerRef;

  @ViewChild("vcr2", { read: ViewContainerRef, static: false })
  vcr2: ViewContainerRef;

  @ViewChild("templateA", { static: false })
  templateA: TemplateRef<any>;

  @ViewChild("templateB", { static: false })
  templateB: TemplateRef<any>;

  constructor() {}

  ngOnInit() {}

  addTemplateA() {
    this.vcr1.createEmbeddedView(this.templateA);
  }

  addTemplateB() {
    this.vcr2.createEmbeddedView(this.templateB);
  }

  clearVCR1() {
    this.vcr1.clear();
  }

  clearVCR2() {
    this.vcr2.clear();
  }
}
