import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-header-nav',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './header-nav.html',
    styleUrl: './header-nav.scss',
})
export class HeaderNav implements AfterViewInit {

    @ViewChild('nav') nav!: ElementRef<HTMLElement>;

    public underlineLeftPosition = 0;
    public underlineWidth = 0;

    public constructor(private changeDetectorRef: ChangeDetectorRef) { }

    public ngAfterViewInit() {
        // Set underline under the active link initially
        const activeLink = this.nav.nativeElement.querySelector('a.active') as HTMLElement;
        if (activeLink) {
            this.setUnderline(activeLink);
            this.changeDetectorRef.detectChanges();
        }
    }

    public onMouseEnterLink(event: MouseEvent) {
        const target = event.target as HTMLElement;
        this.setUnderline(target);
    }

    public onMouseLeaveLink() {
        const activeLink = this.nav.nativeElement.querySelector('a.active') as HTMLElement;
        if (activeLink) {
            this.setUnderline(activeLink);
        }
    }

    private setUnderline(link: HTMLElement) {
        this.underlineLeftPosition = link.offsetLeft;
        this.underlineWidth = link.offsetWidth;
    }
}
