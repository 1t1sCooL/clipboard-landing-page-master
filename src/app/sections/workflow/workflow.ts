import { Component } from '@angular/core';

interface Tool {
  icon: string;
  title: string;
  text: string;
}

interface Brand {
  logo: string;
  name: string;
  width: number;
  height: number;
}

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.html',
  styleUrl: './workflow.css',
})
export class Workflow {
  readonly tools: Tool[] = [
    {
      icon: 'images/icon-blacklist.svg',
      title: 'Create blacklists',
      text: 'Ensure sensitive information never makes its way to your clipboard by excluding certain sources.',
    },
    {
      icon: 'images/icon-text.svg',
      title: 'Plain text snippets',
      text: 'Remove unwanted formatting from copied text for a consistent look.',
    },
    {
      icon: 'images/icon-preview.svg',
      title: 'Sneak preview',
      text: 'Quick preview of all snippets on your Clipboard for easy access.',
    },
  ];

  readonly brands: Brand[] = [
    { logo: 'images/logo-google.png', name: 'Google', width: 165, height: 49 },
    { logo: 'images/logo-ibm.png', name: 'IBM', width: 139, height: 51 },
    { logo: 'images/logo-microsoft.png', name: 'Microsoft', width: 161, height: 35 },
    { logo: 'images/logo-hp.png', name: 'Hewlett Packard Enterprise', width: 135, height: 56 },
    { logo: 'images/logo-vector-graphics.png', name: 'Vector Graphics', width: 125, height: 30 },
  ];
}
