import {
  Component,
  ElementRef,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';

interface SocialLink {
  icon: string;
  label: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  private readonly host = inject(ElementRef<HTMLElement>);

  readonly inView = signal(false);

  readonly linkColumns: string[][] = [
    ['FAQs', 'Contact Us'],
    ['Privacy Policy', 'Press Kit'],
    ['Install Guide'],
  ];

  readonly socials: SocialLink[] = [
    { icon: 'images/icon-facebook.svg', label: 'Facebook' },
    { icon: 'images/icon-twitter.svg', label: 'Twitter' },
    { icon: 'images/icon-instagram.svg', label: 'Instagram' },
  ];

  constructor() {
    afterNextRender(() => {
      const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;
      if (reduceMotion || !('IntersectionObserver' in window)) {
        this.inView.set(true);
        return;
      }
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            this.inView.set(true);
            observer.disconnect();
          }
        },
        { threshold: 0.3 },
      );
      observer.observe(this.host.nativeElement);
    });
  }
}
