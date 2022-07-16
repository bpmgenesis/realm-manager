import {
    CornerRadiusTypes,
    cTopLeading,
    ForEach,
    HStack,
    Icon,
    IconLibrary,
    IconType,
    ScrollView,
    Text,
    UIController,
    UIScene,
    VStack,
    cVertical,
    PositionTypes,
    Color,
    Cache,
    UIButton,
    State,
    Spacer,
    UIImage,
    cTop,
    ZStack,
    bindState,
    UIRoutes,
    UIRoute
} from '@tuval/forms';
import { TForm, cLeading, UIContextMenu, Context } from '@tuval/forms';
import { is } from '@tuval/core';
import { CodeEditorView } from '@tuval/components/codeeditor';
import { model } from '../Models/menuModel';
import { menuItem } from '../Views/mainMenu';
import { TenantsController } from '../../Tenants/Controllers/TenantsController';
import { LeftSideMenuView } from '../Views/LeftSideMenu';
import { AccountsController } from '../../Accounts/Controllers/AccountsController';
import { AppsController } from '../../Apps/Controllers/AppsController';
import { DashboardController } from '../../Dashboard/Controllers/DashboardController';
import { AddEditTenantController } from '../../Tenants/Controllers/AddEditTenantController';
import { RealmBrokerClient } from '../../Services/RealmBrokerClient';
import { Services } from '../../Services/Services';
import { Routes } from '../Views/Routes';

const manifest = require('../../manifest');

const menuModel = [
    {
        title: 'Insights',
        subItems: [
            {
                name: 'Dashboard',
                controller: new DashboardController()
            }
        ]
    },
    {
        title: 'Realm Management',
        subItems: [

            {
                name: 'Tenants',
                controller: new TenantsController(),
                link: '/realm_manager/tenant/list'
            },
            {
                name: 'Accounts',
                controller: new AccountsController(),
                link: '/realm_manager/account/list'
            },
            {
                name: 'Account Pools',
                controller: new AccountsController()
            },
            {
                name: 'Licenses',
                controller: new AppsController()
            },
            {
                name: 'Services',
                controller: new AccountsController()
            }
        ]
    },
    {
        title: 'Other',
        subItems: [
            {
                name: 'Notifications'
            },
            {
                name: 'Settings'
            },
            {
                name: 'Billing'
            },
            {
                name: 'Ensemble'
            }
        ]
    },

]

export class AppController extends UIController {

    private form: TForm;

    @State()
    private realmName: string;

    @State()
    private SideBarExpanded: boolean;

    @State()
    private Code: string;

    @State()
    private currentController: UIController;

    protected InitController() {
        this.OnMenuSelected(menuModel[0].subItems[0]);
    }

    public BindRouterParams() {

    }


    @Context()
    private AppController_ContextAction_SetController(controller: UIController) {
        this.currentController = controller;
        (this as any).currentController.BindModel();
    }

    private OnMenuSelected(item: any) {
        /*    if (is.function(item.controller)) { */
        this.currentController = item.controller;
        (this as any).currentController.BindModel();
        /*  } else {
             this.currentController = null;
         } */
    }
    public OnBindModel(form: TForm) {
        this.form = form;
        RealmBrokerClient.GetRealmInfo('REALM_NAME').then(realm_info => {
            this.realmName = realm_info.value;
        })
    }
    public LoadView() {

        const [selectedItem, setSelectedItem] = bindState(menuModel[0].subItems[0])
        return (
            UIScene(
                HStack(
                    LeftSideMenuView(this.realmName, selectedItem, menuModel, (item) => { setSelectedItem(item); this.OnMenuSelected(item); }),
                    VStack(
                        Routes()
                    ).background(Color.white)
                    /*  VStack({ alignment: cTopLeading })(
                         HStack(
                             Text('Realm manager').fontSize(20)
                         ).height(50).background('#FDFDFD').borderBottom('1px solid #F2F2F2'),
                         this.currentController as any
                     ) */

                )
            )
        ).background(Color.white)

    }
}