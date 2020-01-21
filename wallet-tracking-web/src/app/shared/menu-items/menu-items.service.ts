import {Injectable} from '@angular/core';
import {NavItem} from './nav-item';
import {BehaviorSubject} from 'rxjs';
import {Event, NavigationEnd, Router} from '@angular/router';


const MENUITEMS = [
  {
    displayName: 'Dasboard',
    iconName: 'speaker_notes',
    route: 'dashboard',
  },
  {
    displayName: 'Ações',
    iconName: 'recent_actors',
    route: 'devfestfl',
    children: [
      {
        displayName: 'Cadastro',
        iconName: 'group',
        route: 'stock-market',
        // children: [
        //   {
        //     displayName: 'Michael Prentice',
        //     iconName: 'person',
        //     route: 'devfestfl/speakers/michael-prentice',
        //     children: [
        //       {
        //         displayName: 'Create Enterprise UIs',
        //         iconName: 'star_rate',
        //         route: 'devfestfl/speakers/michael-prentice/material-design'
        //       }
        //     ]
        //   },
        //   {
        //     displayName: 'Stephen Fluin',
        //     iconName: 'person',
        //     route: 'devfestfl/speakers/stephen-fluin',
        //     children: [
        //       {
        //         displayName: 'What\'s up with the Web?',
        //         iconName: 'star_rate',
        //         route: 'devfestfl/speakers/stephen-fluin/what-up-web'
        //       }
        //     ]
        //   },
        //   {
        //     displayName: 'Mike Brocchi',
        //     iconName: 'person',
        //     route: 'devfestfl/speakers/mike-brocchi',
        //     children: [
        //       {
        //         displayName: 'My ally, the CLI',
        //         iconName: 'star_rate',
        //         route: 'devfestfl/speakers/mike-brocchi/my-ally-cli'
        //       },
        //       {
        //         displayName: 'Become an Angular Tailor',
        //         iconName: 'star_rate',
        //         route: 'devfestfl/speakers/mike-brocchi/become-angular-tailer'
        //       }
        //     ]
        //   }
        // ]
      },
      {
        displayName: 'Dasboard',
        iconName: 'speaker_notes',
        route: 'devfestfl/sessions',
        // children: [
        //   {
        //     displayName: 'Create Enterprise UIs',
        //     iconName: 'star_rate',
        //     route: 'devfestfl/sessions/material-design'
        //   },
        //   {
        //     displayName: 'What\'s up with the Web?',
        //     iconName: 'star_rate',
        //     route: 'devfestfl/sessions/what-up-web'
        //   },
        //   {
        //     displayName: 'My ally, the CLI',
        //     iconName: 'star_rate',
        //     route: 'devfestfl/sessions/my-ally-cli'
        //   },
        //   {
        //     displayName: 'Become an Angular Tailor',
        //     iconName: 'star_rate',
        //     route: 'devfestfl/sessions/become-angular-tailer'
        //   }
        // ]
      },
      {
        displayName: 'Feedback',
        iconName: 'feedback',
        route: 'devfestfl/feedback'
      }
    ]
  },
  {
    displayName: 'Disney',
    iconName: 'videocam',
    // children: [
    //   {
    //     displayName: 'Speakers',
    //     iconName: 'group',
    //     children: [
    //       {
    //         displayName: 'Michael Prentice',
    //         iconName: 'person',
    //         route: 'michael-prentice',
    //         children: [
    //           {
    //             displayName: 'Create Enterprise UIs',
    //             iconName: 'star_rate',
    //             route: 'material-design'
    //           }
    //         ]
    //       },
    //       {
    //         displayName: 'Stephen Fluin',
    //         iconName: 'person',
    //         route: 'stephen-fluin',
    //         children: [
    //           {
    //             displayName: 'What\'s up with the Web?',
    //             iconName: 'star_rate',
    //             route: 'what-up-web'
    //           }
    //         ]
    //       },
    //       {
    //         displayName: 'Mike Brocchi',
    //         iconName: 'person',
    //         route: 'mike-brocchi',
    //         children: [
    //           {
    //             displayName: 'My ally, the CLI',
    //             iconName: 'star_rate',
    //             route: 'my-ally-cli'
    //           },
    //           {
    //             displayName: 'Become an Angular Tailor',
    //             iconName: 'star_rate',
    //             route: 'become-angular-tailer'
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     displayName: 'Sessions',
    //     iconName: 'speaker_notes',
    //     children: [
    //       {
    //         displayName: 'Create Enterprise UIs',
    //         iconName: 'star_rate',
    //         route: 'material-design'
    //       },
    //       {
    //         displayName: 'What\'s up with the Web?',
    //         iconName: 'star_rate',
    //         route: 'what-up-web'
    //       },
    //       {
    //         displayName: 'My ally, the CLI',
    //         iconName: 'star_rate',
    //         route: 'my-ally-cli'
    //       },
    //       {
    //         displayName: 'Become an Angular Tailor',
    //         iconName: 'star_rate',
    //         route: 'become-angular-tailer'
    //       }
    //     ]
    //   },
    //   {
    //     displayName: 'Feedback',
    //     iconName: 'feedback',
    //     route: 'feedback'
    //   }
    // ]
  },
  {
    displayName: 'Orlando',
    iconName: 'movie_filter',
    // children: [
    //   {
    //     displayName: 'Speakers',
    //     iconName: 'group',
    //     children: [
    //       {
    //         displayName: 'Michael Prentice',
    //         iconName: 'person',
    //         route: 'michael-prentice',
    //         children: [
    //           {
    //             displayName: 'Create Enterprise UIs',
    //             iconName: 'star_rate',
    //             route: 'material-design'
    //           }
    //         ]
    //       },
    //       {
    //         displayName: 'Stephen Fluin',
    //         iconName: 'person',
    //         route: 'stephen-fluin',
    //         children: [
    //           {
    //             displayName: 'What\'s up with the Web?',
    //             iconName: 'star_rate',
    //             route: 'what-up-web'
    //           }
    //         ]
    //       },
    //       {
    //         displayName: 'Mike Brocchi',
    //         iconName: 'person',
    //         route: 'mike-brocchi',
    //         children: [
    //           {
    //             displayName: 'My ally, the CLI',
    //             iconName: 'star_rate',
    //             route: 'my-ally-cli'
    //           },
    //           {
    //             displayName: 'Become an Angular Tailor',
    //             iconName: 'star_rate',
    //             route: 'become-angular-tailer'
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     displayName: 'Sessions',
    //     iconName: 'speaker_notes',
    //     children: [
    //       {
    //         displayName: 'Create Enterprise UIs',
    //         iconName: 'star_rate',
    //         route: 'material-design'
    //       },
    //       {
    //         displayName: 'What\'s up with the Web?',
    //         iconName: 'star_rate',
    //         route: 'what-up-web'
    //       },
    //       {
    //         displayName: 'My ally, the CLI',
    //         iconName: 'star_rate',
    //         route: 'my-ally-cli'
    //       },
    //       {
    //         displayName: 'Become an Angular Tailor',
    //         iconName: 'star_rate',
    //         route: 'become-angular-tailer'
    //       }
    //     ]
    //   },
    //   {
    //     displayName: 'Feedback',
    //     iconName: 'feedback',
    //     route: 'feedback'
    //   }
    // ]
  },
  {
    displayName: 'Maleficent',
    disabled: true,
    iconName: 'report_problem',
    // children: [
    //   {
    //     displayName: 'Speakers',
    //     iconName: 'group',
    //     children: [
    //       {
    //         displayName: 'Michael Prentice',
    //         iconName: 'person',
    //         route: 'michael-prentice',
    //         children: [
    //           {
    //             displayName: 'Create Enterprise UIs',
    //             iconName: 'star_rate',
    //             route: 'material-design'
    //           }
    //         ]
    //       },
    //       {
    //         displayName: 'Stephen Fluin',
    //         iconName: 'person',
    //         route: 'stephen-fluin',
    //         children: [
    //           {
    //             displayName: 'What\'s up with the Web?',
    //             iconName: 'star_rate',
    //             route: 'what-up-web'
    //           }
    //         ]
    //       },
    //       {
    //         displayName: 'Mike Brocchi',
    //         iconName: 'person',
    //         route: 'mike-brocchi',
    //         children: [
    //           {
    //             displayName: 'My ally, the CLI',
    //             iconName: 'star_rate',
    //             route: 'my-ally-cli'
    //           },
    //           {
    //             displayName: 'Become an Angular Tailor',
    //             iconName: 'star_rate',
    //             route: 'become-angular-tailer'
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     displayName: 'Sessions',
    //     iconName: 'speaker_notes',
    //     children: [
    //       {
    //         displayName: 'Create Enterprise UIs',
    //         iconName: 'star_rate',
    //         route: 'material-design'
    //       },
    //       {
    //         displayName: 'What\'s up with the Web?',
    //         iconName: 'star_rate',
    //         route: 'what-up-web'
    //       },
    //       {
    //         displayName: 'My ally, the CLI',
    //         iconName: 'star_rate',
    //         route: 'my-ally-cli'
    //       },
    //       {
    //         displayName: 'Become an Angular Tailor',
    //         iconName: 'star_rate',
    //         route: 'become-angular-tailer'
    //       }
    //     ]
    //   },
    //   {
    //     displayName: 'Feedback',
    //     iconName: 'feedback',
    //     route: 'feedback'
    //   }
    // ]
  }
];

@Injectable()
export class MenuItemsService {
  getMenuitem(): NavItem[] {
    return MENUITEMS;
  }

  public appDrawer: any;
  public currentUrl = new BehaviorSubject<string>(undefined);

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.next(event.urlAfterRedirects);
      }
    });
  }

  public closeNav() {
    this.appDrawer.close();
  }

  public openNav() {
    console.log('opeening', this.appDrawer);
    this.appDrawer.open();
  }
}
