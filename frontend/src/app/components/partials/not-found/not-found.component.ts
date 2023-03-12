import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

 @Input()
 visible = false;

 @Input()
 notFoundMessage = 'Epa! No encontramos lo que buscas.';

@Input()
resetLinkText = 'Volver al inicio';

@Input()
resetLinkRoute = '/';

constructor() {}
}
