import { Component, OnInit,  ViewChild, ComponentFactoryResolver} from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { AdDirective } from './ad.directive';
import { PageComponent } from './page.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;

  links = [
    {
      name : 'About',
      component : 'About',
      index : 1
    },
    {
      name : 'Services',
      component : 'Services',
      index : 2
    },
    {
      name : 'CyberGames',
      component : 'CyberGames',
      index : 3
    }
  ];

  activeLink = 1;
  components = [AboutComponent,AboutComponent,AboutComponent]

  constructor(private componentFactoryResolver: ComponentFactoryResolver){
   }

  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent() {

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.components[this.activeLink-1]);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<PageComponent>(componentFactory);
  }

}
