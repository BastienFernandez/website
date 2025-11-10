import { Component, HostListener } from '@angular/core';
import { HeaderNav } from "../header-nav/header-nav";

@Component({
    selector: 'app-header',
    imports: [HeaderNav],
    templateUrl: './header.html',
    styleUrl: './header.scss',
})
export class Header {

    SCROLL_TRESHOLD = 80;

    isHidden = false;
    lastScrollTop = 0;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const currentScroll = window.scrollY || document.documentElement.scrollTop;

        if (currentScroll > this.lastScrollTop && currentScroll > this.SCROLL_TRESHOLD) {
            // scrolling down
            this.isHidden = true;
        } else {
            // scrolling up
            this.isHidden = false;
        }

        this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }
}
