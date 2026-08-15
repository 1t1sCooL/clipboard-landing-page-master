import { Component } from '@angular/core';

interface Feature {
  title: string;
  text: string;
}

@Component({
  selector: 'app-snippets',
  templateUrl: './snippets.html',
  styleUrl: './snippets.css',
})
export class Snippets {
  readonly features: Feature[] = [
    {
      title: 'Quick Search',
      text: 'Easily search your snippets by content, category, web address, application, and more.',
    },
    {
      title: 'iCloud Sync',
      text: 'Instantly saves and syncs snippets across all your devices.',
    },
    {
      title: 'Complete History',
      text: 'Retrieve any snippets from the first moment you started using the app.',
    },
  ];
}
