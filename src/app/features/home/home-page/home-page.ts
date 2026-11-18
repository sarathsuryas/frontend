import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  protected readonly home = inject(HomeService);
}
