import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  @ViewChild('mobileNav') mobileNav: ElementRef | undefined;
  @ViewChild('btnToggleMobileNav') btnToggleMobileNav: ElementRef | undefined;

  toggleMobileNav() {
    if (this.mobileNav && this.btnToggleMobileNav) {
      if (this.mobileNav.nativeElement.classList.contains('open')) {
        this.mobileNav.nativeElement.classList.remove('open');
        this.btnToggleMobileNav.nativeElement.classList.remove('open');
      } else {
        this.mobileNav.nativeElement.classList.add('open');
        this.btnToggleMobileNav.nativeElement.classList.add('open');
      }
    }
  }
  closeMobileNav() {
    if (this.mobileNav && this.btnToggleMobileNav) {
      this.mobileNav.nativeElement.classList.remove('open');
      this.btnToggleMobileNav.nativeElement.classList.remove('open');
    }
  }
}
