import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/models/User.model';
// Services
import { UserService } from '../../../services/user/user.service';
import { LinksService } from '../../../services/links/links.service';
import { Link, LinkInput } from 'src/app/models/Link.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public userInfo: UserInfo;
  public linksList: Link[] = [];
  public linkCreationFailed: boolean = false;
  public linkCreationLoading: boolean = false;

  constructor(
    private userService: UserService,
    private linkService: LinksService
  ) { }

  ngOnInit(): void {
    if (!this.userService.userAuthData) {
      this.getCurrentUserAuthInfo();
    }
    this.getUserInfo();
    this.getLinksList();
  }

  async addLink(event: LinkInput) {
    this.linkCreationLoading = true;
    try {
      if (!event.url || !event.name) throw new Error('Incomplete data to create link')
      const infoLink: any = await this.linkService.createLink(this.userService.userAuthData, event);
      if (infoLink) {
        this.linksList.push({
          ...infoLink,
          id: parseInt(infoLink.id)
        })
      }
    } catch(error) {
      this.linkCreationFailed = true;
      setTimeout(() => {
        this.linkCreationFailed = false;
      }, 4000);
    } finally {
      this.linkCreationLoading = false;
    }
  }

  async deleteLink(event: {link: Link, index: number}) {
    try {
      if (!event?.link?.id) throw new Error('Incomplete data to create link')
      const deletedLink: any = await this.linkService.deleteLink(this.userService.userAuthData, event.link.id);
      if (deletedLink) {
        this.linksList = this.linksList.filter ((item: Link, index: number) => index !== event.index)
      }
    } catch(error) {
      this.linkCreationFailed = true;
      setTimeout(() => {
        this.linkCreationFailed = false;
      }, 4000);
    }
  }

  private async getLinksList() {
    try {
      const linksList: any = await this.linkService.listLinks(this.userService.userAuthData);
      if (linksList) {
        // It's required to do this since API is returning invalid string to be converted into Javascript OBJECT
        let parsedStringFromApi: Link[] = JSON.parse(linksList.slice(0, linksList.length - 4) + linksList.slice(linksList.length - 3, linksList.length));
        parsedStringFromApi = parsedStringFromApi.map((item: any) => {
          return {
            ...item,
            id: parseInt(item.id)
          }
        });
        this.linksList = [...parsedStringFromApi];
      }
    } catch(error) {
      console.log(error)
    }
  }

  private async getUserInfo () {
    try {
      const userData: any = await this.userService.getUserInfo(this.userService.userAuthData);
      if (userData) {
        this.userService.userInfo = {
          ...userData,
          id: parseInt(userData.id)
        }
        this.userInfo = this.userService.userInfo;
      }
    } catch(error) {
      console.log(error)
    }
  }

  private getCurrentUserAuthInfo() {
    const userId: number = parseInt(localStorage.getItem('userId'));
    const userToken: string = localStorage.getItem('userToken');
    this.userService.userAuthData = {
      userId,
      token: userToken
    }
  }

}
