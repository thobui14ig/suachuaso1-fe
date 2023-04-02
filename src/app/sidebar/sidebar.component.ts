import { Component, ElementRef, Renderer2 } from "@angular/core";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  // ngAfterViewInit() {
  //   const button = this.elementRef.nativeElement.querySelector('#dropdown-example');
  //   const menu = this.elementRef.nativeElement.querySelector('#menu-dropdown-example');
  
  //   this.renderer.listen(button, 'click', () => {
  //     menu.classList.toggle('hidden');
  //   });
  // }
}
