import {AfterViewInit, ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {HelperService} from "../../core/services/helper/helper.service";
import {slideLeft, slideRight} from "../../core/animations/slideLeft.animation";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations:[slideLeft, slideRight]
})
export class SidebarComponent implements OnInit, AfterViewInit {
  isSelect = 1
  @Output() closeSideNav = new EventEmitter();

  mobileQuery: MediaQueryList;
  menu: any[] = [
    {
      displayName: 'Escritorio',
      iconName: 'desktop_windows',
      route: 'escritorio',
    },
    {
      displayName: 'Entradas GADE',
      iconName: 'ballot',
      route: 'entradasGADE',
    },
    {
      displayName: 'Expedientes',
      iconName: 'description',
      children: [
        {
          displayName: 'Mis Expedientes',
          iconName: 'how_to_reg',
          route: '/misexpedientes'
        },
        {
          displayName: 'Todos',
          iconName: 'waves',
          route: '/todos'
        }
      ]
    },
    {
      displayName: 'Perfiles',
      iconName: 'group',
      children: [
        {
          displayName: 'Búsqueda Perfil',
          iconName: 'search',
          route: '/busquedaperfiles'
        }
      ]
    }
  ];

  _mobileQueryListener: () => void;
  constructor(public helper:HelperService,public  media: MediaMatcher,public changeDetectorRef: ChangeDetectorRef) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
  }
  onToggleClose() {
    this.closeSideNav.emit();
  }
  closeSide() {
    this.helper.common.isOpenSidebar= false
    document.body.classList.remove('overlay')
  }

  ngAfterViewInit() {
    let x = document.getElementById('kt_quick_panel');
    if(x){
      x.classList.add('right-0');
    }
  }

}
