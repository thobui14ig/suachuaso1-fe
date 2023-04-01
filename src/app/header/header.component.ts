import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    const button = this.elementRef.nativeElement.querySelector('#menu-button');
    const menu = this.elementRef.nativeElement.querySelector('#menu');
  
    this.renderer.listen(button, 'click', () => {
      menu.classList.toggle('hidden');
    });
  }
  
}
