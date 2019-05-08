import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
 
  {
    path: '',
    title: 'Dashboards',
    icon: 'icon-Car-Wheel',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/dashboard/dashboard1',
        title: 'Dashboard Equipment',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/dashboard/dashboard2',
        title: 'Dashboard 2',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/dashboard/dashboard3',
        title: 'Dashboard 3',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Apps',
    icon: 'icon-Gear',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/component/tabs',
        title: 'Start Workshop',
        icon: 'icon-Mailbox-Empty',
        class: '',
        extralink: false,
        submenu: []
      },

      {
        path: '/component/tabs',
        title: 'Status Workshop',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Participants',
    icon: 'icon-Affiliate',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/forms/formparticipant',
        title: 'Maintainer',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/forms/formlistparticipant',
        title: 'List Participants',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'WorkShop',
    icon: 'icon-Worker',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/forms/formworkshop',
        title: 'Maintainer',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/forms/formlistworkshop',
        title: 'List Workshops',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Equipments',
    icon: 'icon-Folder-Archive',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/forms/formequipment',
        title: 'Maintainer',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/forms/formlistequipment',
        title: 'List Equipments',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Help',
    icon: 'icon-First-Aid',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/widgets/apps',
        title: 'Widget Apps',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/widgets/data',
        title: 'Widget Data',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  }
];
