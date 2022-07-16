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
    cHorizontal,
    Toggle
} from '@tuval/forms';

import { RealmBrokerClient, IGetTenantByIdResponse } from '../../Services/RealmBrokerClient';
import { TenantsGrid } from '../Views/TenantsGrid';
import { Color, UIImage, UIRouteLink, NavigateFunction, bindNavigate } from '@tuval/forms';
import { ActionButton } from '../../Views/ActionButton';
import { TenantsController } from './TenantsController';
import { Services } from '../../Services/Services';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'
const img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAYAAAAc0MJxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAABCUlEQVR4Xu3aMUoDQQCG0VzCY3gOm1zEThAsrT2GR/ImQtpAVjaCRVjxWxxxCa94A9P9fN3A7O4e9gSfx/008T2hIqEioSKhIqEioSKhIqEioSKhIqGiYaFuX07T6+F9k+ZtS5vXECoSKhIqEioSKhIqEioSKhoW6ub5ND29HTZp3ra0eY1hoa6dUJFQkVCRUJFQkVCRUJFQ0bBQnjCRUJFQkVCRUJFQkVCRUJFQkVCcCRUJFQkVCRUJFQkVCRUJFQ0L5ZNG5AkTCRUJFQkVCRUJFQkVCRUJVT0ez4O2aN62uHmFcaEuXY777/sv/V2oKyNUJFQkVCRUJFQkVCRUJFQkVPQVip/sdx+ddLpvQckwsAAAAABJRU5ErkJggg=='
export class DeleteTenantController extends UIController {

    private navigotor: NavigateFunction;

    private tenantName: string;

    @State()
    private tenant_info: IGetTenantByIdResponse;

    public Invalidate() {
    }

    private isLoading() {
    }

    public BindRouterParams({ tenant_id }) {
        if (tenant_id != null) {
            RealmBrokerClient.GetTenantById(tenant_id).then(result => {
                this.tenant_info = result;
            })
        }
    }
    public BindModel() {

    }

    private DeleteTenant_Action() {


    }

    private Cancel_Action(AppController_ContextAction_SetController: Function) {
        AppController_ContextAction_SetController(new TenantsController());
    }

    public LoadView(): any {
        this.navigotor = bindNavigate();
        return ({ AppController_ContextAction_SetController }) => {
            return (
                UIScene(
                    VStack(
                        VStack({ alignment: cTopLeading })(
                            VStack(
                                Text(this.tenant_info == null ? 'Create New Tenant' : 'Update Tenant').fontSize('1.7rem')
                                    .marginTop('10px'),

                                UIImage(img)
                                    .cornerRadius(10)
                                    .minHeight('74px').marginTop('20px')
                                    .overflow('hidden'),
                            ).height(),
                            VStack({ alignment: cTopLeading, spacing: 10 })(
                                Text('Name of Tenant').lineHeight('1.45rem').fontSize('1rem'),
                                TextField()
                                    .cornerRadius(5)
                                    .height(40).fontSize('1rem')
                                    .padding(cHorizontal, 10).tabIndex(0)
                                    .value(this.tenant_info?.tenant_name)
                                    .onTextChange(text => this.tenantName = text),
                            ).padding(10).foregroundColor('#676767').height()
                                .marginTop('10px'),
                            HStack(
                                UIButton(
                                    Text('Delete Tenant')
                                ).background({ default: '#15CD72', hover: '#0CB863' })
                                    .foregroundColor(Color.white)
                                    .width('100%').height('3rem').fontSize('.9rem').lineHeight('3rem')
                                    .fontWeight('600')
                                    .border({ default: '1px solid #15CD72', hover: '1px solid #0CB863' })
                                    .transition('all .2s ease-in-out')
                                    .cornerRadius(3)
                                    .marginTop('1.5rem')
                                    .shadow({ focus: '0 0 0 1px #fff, 0 0 2px 2px #0069ff' })
                                    .tabIndex(2)
                                    .onClick(() => this.DeleteTenant_Action())
                            ).height()
                        ).border('2px solid #f1f1f1').padding('1rem').margin('2rem')
                            .width(600).height(),
                        HStack(
                            UIRouteLink(`/realm_manager/tenant/list`)(
                                Text('Cancel').onClick(() => alert(''))
                            )
                        ).height()
                    ).padding(20)
                )
            )
        }
    }
}