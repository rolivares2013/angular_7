import { Component, OnInit, ViewChild, Input, Output,OnChanges, SimpleChanges, SimpleChange} from '@angular/core';
import { Ng2TreeSettings, NodeEvent, RenamableNode, TreeModel } from './dep/index';

declare const alertify: any;

@Component({
  selector: 'tree-app',
  template: `
  <div class="tree-demo-app">

      <div class="tree-container tree-container--with-controls">
          <div class="tree-content">
              <tree #treeFFS
                    [tree]="tree"
                    (nodeRemoved)="onNodeRemoved($event)"
                    (nodeRenamed)="onNodeRenamed($event)"
                    (nodeSelected)="onNodeSelected($event)"
                    (nodeUnselected)="onNodeUnselected($event)"
                    (nodeMoved)="onNodeMoved($event)"
                    (nodeCreated)="onNodeFFSCreated($event)"
                    (nodeExpanded)="onNodeExpanded($event)"
                    (nodeCollapsed)="onNodeCollapsed($event)"
                    [settings]="settings">
              </tree>
          </div>
      </div>
  </div>
`,
styles: [
  `
  .tree-info {
      flex: 1 0 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .tree-controlls {
      display: flex;
      flex-direction: column;
    }

    .tree-content {
      display: flex;
      flex-direction: column;
    }

    .tree-container {
      margin-bottom: 20px;

    }

    .tree-container--with-controls {
      display: flex;
      flex-wrap: wrap;
    }

    .tree-demo-app {
      display: flex;
      flex-direction: column;
      margin-bottom:50px;
    }

    .tree-title {
      margin: 0;
      color: #40a070;
      font-size: 2em;
    }

    .notice {
      color: #e91e63;
      font-size: 1.2em;
      font-style: italic;
    }

    :host /deep/ .fa {
      cursor: pointer;
    }

    :host /deep/ .fa.disabled {
      cursor: inherit;
      color: #757575;
    }

    .button {
      border-radius: 4px;
      box-shadow: 0 2px 4px 0 #888;
      background-color: #fff;
      -webkit-appearance: none;
      border: 1px solid #000;
      height: 35px;
      outline: none;
    }

    .button-pressed {
      box-shadow: 0 0 1px 0 #888;
    }

    .tree-controlls button {
      margin: 5px;
    }
    
`
]
})

export class TreeComponent implements OnInit {
  
  public settings: Ng2TreeSettings = {
    rootIsVisible: false,
    showCheckboxes: true
  };

   //@Output() public recharge = new EventEmitter<number>();

   @ViewChild('treeFonts') public treeFonts;

 

  @Input() dataTree :TreeModel; 
  private _dataTree: TreeModel;
  public pls: TreeModel;
  public tree: TreeModel;

 public  ngOnChanges(changes: SimpleChanges) : void {

    //console.log('changes ', changes);
    const dataTree: SimpleChange = changes.dataTree;
    //console.log('previousValue ', dataTree.previousValue);
    console.log('currentValue: ', dataTree.currentValue);
    console.log('tree antes: ');
    console.log(this.tree);

    //console.log('got : ', dataTree);
    this._dataTree = dataTree.currentValue;
    this.tree 
    this.tree = this._dataTree;
    //this.pls = this._dataTree;


  //  this.ffs= new TreeModel(this._dataTree);
    
    console.log('tree despues: ');
    console.log(this.tree);
  }

 

  // Call SP
  //ffs = this.dataTree;
  



/*   public ffs: TreeModel = {
    value: '/',
    id: 0,
    settings: {
      cssClasses: {
        expanded: 'fa fa-caret-down',
        collapsed: 'fa fa-caret-right',
        empty: 'fa fa-caret-right disabled',
        leaf: 'fa'
      },
      templates: {
        node: '<i class="mdi mdi-folder" style="margin-right: 4px;"></i>',
        leaf: '<i class="mdi mdi-folder" style="margin-right: 4px;"></i>'
      },
      isCollapsedOnInit: true,
      keepNodesInDOM: true
    },
    children: [
       {

        value: '2025.01.01.01',
        id: 1,
        children: [
          {
            value: '2025.01.01.01-CN001',
            id: 2,
            children: [
              { value: '2025.01.01.01-CN001-CRCT', id: 3 },
              { value: '2025.01.01.01-CN001-EICO', id: 4 },
              { value: '2025.01.01.01-CN001-HOIS', id: 5 }
            ]
          },
          {
            value: '2025.01.01.01-CN002',
            id: 6,
            children: [
              { value: '2025.01.01.01-CN002-BRLT', id: 7 },
              { value: '2025.01.01.01-CN002-CRCT', id: 8 },
              { value: '2025.01.01.01-CN002-EICO', id: 9 },
              { value: '2025.01.01.01-CN002-HOIS', id: 10 }
            ]    
          }
        ]
      }
    ]
  }; */
  private lastFFSNodeId = 86;

  @ViewChild('treeFFS') public treeFFS;

  public icons: TreeModel = {
    value: 'Icons',
    children: [
      {
        value: 'Web Application Icons',
        children: [
          { value: 'calendar', icon: 'fa-calendar' },
          { value: 'download', icon: 'fa-download' },
          { value: 'group', icon: 'fa-group' },
          { value: 'print', icon: 'fa-print' }
        ]
      },
      {
        value: 'Hand Icons',
        children: [
          { value: 'pointer', icon: 'fa-hand-pointer-o' },
          { value: 'grab', icon: 'fa-hand-rock-o' },
          { value: 'thumbs up', icon: 'fa-thumbs-o-up ' },
          { value: 'thumbs down', icon: 'fa-thumbs-o-down' }
        ]
      },
      {
        value: 'File Type Icons',
        children: [
          { value: 'file', icon: 'fa-file-o' },
          { value: 'audio', icon: 'fa-file-audio-o' },
          { value: 'movie', icon: 'fa-file-movie-o ' },
          { value: 'archive', icon: 'fa-file-zip-o' }
        ]
      }
    ]
  };



  private static logEvent(e: NodeEvent, message: string): void {
    console.log(e);
    //alertify.message(`${message}: ${e.node.value}`);
  }

  public ngOnInit(): void {
    console.log('this.dataTree-TREE' )
    console.log( this.dataTree);

  //  this.ffs = this.dataTree;

/*     setTimeout(() => {
      this.pls = {
        value: 'Programming languages by programming paradigm',
        children: [
          {
            value: 'Aspect-oriented programming',
            children: [{ value: 'AspectJ' }, { value: 'AspectC++' }]
          },
          {
            value: 'Object-oriented programming',
            children: [
              {
                value: {
                  name: 'Java',
                  setName(name: string): void {
                    this.name = name;
                  },
                  toString(): string {
                    return this.name;
                  }
                } as RenamableNode
              },
              { value: 'C++' },
              { value: 'C#' }
            ]
          },
          {
            value: 'Prototype-based programming',
            children: [{ value: 'JavaScript' }, { value: 'CoffeeScript' }, { value: 'TypeScript' }]
          }
        ]
      };
    }, 2000); */
  }

  public onNodeRemoved(e: NodeEvent): void {
    TreeComponent.logEvent(e, 'Removed');
  }

  public onNodeMoved(e: NodeEvent): void {
    TreeComponent.logEvent(e, 'Moved');
  }

  public onNodeRenamed(e: NodeEvent): void {
    TreeComponent.logEvent(e, 'Renamed');
  }

  public onNodeCreated(e: NodeEvent): void {
    TreeComponent.logEvent(e, 'Created');
  }

  public onNodeFFSCreated(e: NodeEvent, controller): void {
    TreeComponent.logEvent(e, 'Created');
    if (controller) {
      controller.changeNodeId(++this.lastFFSNodeId);
    }
  }

  public onNodeSelected(e: NodeEvent): void {
    TreeComponent.logEvent(e, 'Selected');
  }

  public onNodeUnselected(e: NodeEvent): void {
    TreeComponent.logEvent(e, 'Unselected');
  }

 // public onMenuItemSelected(e: MenuItemSelectedEvent) {
 //   AppComponent.logEvent(e, `You selected ${e.selectedItem} menu item`);
 // }

  public onNodeExpanded(e: NodeEvent): void {
    TreeComponent.logEvent(e, 'Expanded');
  }

  public onNodeCollapsed(e: NodeEvent): void {
    TreeComponent.logEvent(e, 'Collapsed');
  }

  public handleActionOnFFS(id: number | string, action: string) {
    const treeController = this.treeFFS.getControllerByNodeId(id);
    if (treeController && typeof treeController[action] === 'function') {
      treeController[action]();
    } else {
      console.log('There isn`t a controller for a node with id - ' + id);
    }
  }

  public renameFFS(id: number | string) {
    const treeController = this.treeFFS.getControllerByNodeId(id);
    if (treeController) {
      treeController.rename('unicode.pf');
    } else {
      console.log('There isn`t a controller for a node with id - ' + id);
    }
  }

  public setChildrenFFS(id: number | string) {
    const treeController = this.treeFFS.getControllerByNodeId(id);
    if (treeController && typeof treeController.setChildren === 'function') {
      treeController.setChildren([
        { value: 'apache2', id: 82, children: [] },
        { value: 'nginx', id: 83, children: [] },
        { value: 'dhcp', id: 84, children: [] },
        { value: 'dpkg', id: 85, children: [] },
        { value: 'gdb', id: 86, children: [] }
      ]);
    } else {
      console.log('There isn`t a controller for a node with id - ' + id);
    }
  }

  public addChildFFS(id: number | string, newNode: TreeModel) {
    newNode.id = ++this.lastFFSNodeId;
    const treeController = this.treeFFS.getControllerByNodeId(id);
    if (treeController) {
      treeController.addChild(newNode);
    } else {
      console.log(`Controller is absent for a node with id: ${id}`);
    }
  }

  public checkFolder(id: number): void {
    const treeController = this.treeFFS.getControllerByNodeId(id);
    if (treeController) {
      treeController.check();
    } else {
      console.log(`Controller is absent for a node with id: ${id}`);
    }
  }

  public uncheckFolder(id: number): void {
    const treeController = this.treeFFS.getControllerByNodeId(id);
    if (treeController) {
      treeController.uncheck();
    } else {
      console.log(`Controller is absent for a node with id: ${id}`);
    }
  }
}
