import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { Toast } from 'primeng/toast';
import { SessionService } from './services/session.service';
import { EventDetailsComponent } from './components/event-details/event-details.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, Toast, ConfirmDialog, EventDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MusicLabClient';
  httpClient = inject(HttpClient);
  sessionService = inject(SessionService);
  router = inject(Router);

  logout() {
    this.sessionService.clear();
    this.router.navigate(['login']);
  }
}
