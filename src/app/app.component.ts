import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'app-root',
  imports: [RouterModule, Toast, ConfirmDialog, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MusicLabClient';
}
