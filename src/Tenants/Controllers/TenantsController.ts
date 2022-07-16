import {
    cLeading,
    cTopLeading,
    HStack,
    Spacer,
    Spinner,
    State,
    Text,
    TextField,
    UIButton,
    UIController,
    UIScene,
    VStack,
} from '@tuval/forms';

import { RealmBrokerClient, IGetTenantsResponce } from '../../Services/RealmBrokerClient';
import { TenantsGrid } from '../Views/TenantsGrid';
import { Color, UIRouteLink } from '@tuval/forms';
import { ActionButton } from '../../Views/ActionButton';
import { AddEditTenantController } from './AddEditTenantController';
import { Services } from '../../Services/Services';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'

export class TenantsController extends UIController {

    @State()
    private tenants: IGetTenantsResponce;

    public Invalidate() {
        this.tenants = null;
    }

    private isLoading() {
        return this.tenants == null;
    }

    public BindRouterParams() {
        this.tenants = null;
        //  if (this.tenants == null) {
        RealmBrokerClient.GetTenants().then(tenants => {
            this.tenants = tenants;
        })

        //  }
    }

    public BindModel() {

    }


    public LoadView(): any {
        return ({ AppController_ContextAction_SetController }) => {
            return (
                UIScene(
                    this.isLoading() ?
                        Spinner() :
                        VStack({ alignment: cTopLeading })(
                            HStack({ alignment: cLeading })(
                                Text('Tenants')
                                    .foregroundColor('#444')
                                    .fontFamily(fontFamily).fontSize('2.4rem').fontWeight('300'),
                                Spacer(),
                                // MARK: Search Box
                                HStack(
                                    TextField().placeholder('Search by Tenant Name')
                                ).border('solid 1px #dfdfdf').padding(10).width(300).cornerRadius(5),
                                UIRouteLink('/realm_manager/tenant/add')(
                                    ActionButton('New Tenant')
                                ),
                                UIButton(
                                    Text('Test Error')
                                ).onClick(()=>  {throw new Error('Test error')})
                            ).height().marginBottom('24px'),
                            TenantsGrid(this.tenants)
                        )
                ).padding(20)

            )
        }
    }
}