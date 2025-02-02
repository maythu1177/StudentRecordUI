import { CurrentUser } from 'src/app/model/user/user.model';
import { RoutesModel } from 'src/app/model/config-model/route-model';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/utility/authentication.service';
import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ConfigDataLoadedEvent } from '../event/config-data-loaded.event';
import { ConfigData } from 'src/app/model/system/system.model';
import { AppConfigData } from 'src/app/model/config-model/config-data';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];
  rightMenuItem: MenuItem[] = [];
  constructor( 
    public app: AppComponent,
    private configDataLoadedEvent: ConfigDataLoadedEvent,
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    const that = this;
    const userListMenu =    {
      label: 'User List',
      icon: 'pi pi-fw pi-list',
      command: () => {
        this.goToUserList();
    }
  }
    this.configDataLoadedEvent.on().subscribe((data: ConfigData) => {
      that.items = data.menus;
      if(data.role === AppConfigData.AdminRole || data.role === AppConfigData.SuperAdminRole) {
        this.rightMenuItem = [
          {
            items: [{
                label: 'Profile',
                icon: 'pi pi-user',
                command: () => {
                  this.goToUserProfile();
              }
            },
            {
              label: 'User List',
              icon: 'pi pi-fw pi-list',
              command: () => {
                this.goToUserList();
            }
            },
            {
                label: 'Logout',
                icon: 'pi pi-times',
                command: () => {
                  this.logout();
              }
            }
        ]}
        ]
      } else {
        this.rightMenuItem = [
          {
            items: [{
                label: 'Profile',
                icon: 'pi pi-user',
                command: () => {
                  this.goToUserProfile();
              }
            },
            {
                label: 'Logout',
                icon: 'pi pi-times',
                command: () => {
                  this.logout();
              }
            }
        ]}
        ]
      }
    });

  }

  logout() {
    this.authenticationService.logout();
  }

  goToUserProfile() {
    this.authenticationService.getCurrentLoginUser().subscribe(
      (response: CurrentUser) => {
        void this.router.navigate([`${RoutesModel.UserDetail}/${response.id}`]);
      },(error: any) => {

      },() =>{

      }
    );
  
  }

  goToUserList() {
    void this.router.navigate([`${RoutesModel.UserList}`]);
  }

}
