import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { Snippets } from './sections/snippets/snippets';
import { Access } from './sections/access/access';
import { Workflow } from './sections/workflow/workflow';
import { Download } from './sections/download/download';
import { Footer } from './sections/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Hero, Snippets, Access, Workflow, Download, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
