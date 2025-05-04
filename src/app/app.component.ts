import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { Toast } from 'primeng/toast';
import { SessionService } from './services/session.service';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { MenubarModule } from 'primeng/menubar';
import { Avatar } from 'primeng/avatar';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-root',
  imports: [RouterModule, Toast, ConfirmDialog, EventDetailsComponent, MenubarModule, Avatar, Button, Card],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MusicLabClient';
  httpClient = inject(HttpClient);
  sessionService = inject(SessionService);
  router = inject(Router);

  items: any[] | undefined;

  ngOnInit() {
    this.items = [
        {
            label: 'Accueil',
            icon: 'pi pi-home'
        },
        {
            label: 'Ressources',
            icon: 'pi pi-star'
        },
        {
            label: 'Projets',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Components',
                    icon: 'pi pi-bolt'
                },
                {
                    label: 'Blocks',
                    icon: 'pi pi-server'
                },
                {
                    label: 'UI Kit',
                    icon: 'pi pi-pencil'
                },
                {
                    label: 'Templates',
                    icon: 'pi pi-palette',
                    items: [
                        {
                            label: 'Apollo',
                            icon: 'pi pi-palette'
                        },
                        {
                            label: 'Ultima',
                            icon: 'pi pi-palette'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Messages',
            icon: 'pi pi-envelope'
        }
    ]
}
  
  logout() {
    this.sessionService.clear();
    this.router.navigate(['login']);
  }
}
