import { Component, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  constructor(private renderer: Renderer2) { }

  openProjectInfo(id: string) {
    this.clearProjectInfo();
    let element = document.getElementById('project' + id);
    element.style.display = "flex";
  }


  clearProjectInfo() {
    for (let i = 0; i < 4; i++) {
      const index = [i];
      let element = document.getElementById('project' + index);
      element.style.display = "none";
    }

  }


}
