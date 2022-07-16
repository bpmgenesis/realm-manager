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
    Toggle,
    SecureField
} from '@tuval/forms';

import { RealmBrokerClient } from '../../Services/RealmBrokerClient';
import { Color, UIImage, NavigateFunction, bindNavigate } from '@tuval/forms';
import { ActionButton } from '../../Views/ActionButton';
import { AccountsController } from './AccountsController';
import { Services } from '../../Services/Services';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'
const img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAYAAAAc0MJxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAABCUlEQVR4Xu3aMUoDQQCG0VzCY3gOm1zEThAsrT2GR/ImQtpAVjaCRVjxWxxxCa94A9P9fN3A7O4e9gSfx/008T2hIqEioSKhIqEioSKhIqEioSKhIqGiYaFuX07T6+F9k+ZtS5vXECoSKhIqEioSKhIqEioSKhoW6ub5ND29HTZp3ra0eY1hoa6dUJFQkVCRUJFQkVCRUJFQ0bBQnjCRUJFQkVCRUJFQkVCRUJFQkVCcCRUJFQkVCRUJFQkVCRUJFQ0L5ZNG5AkTCRUJFQkVCRUJFQkVCRUJVT0ez4O2aN62uHmFcaEuXY777/sv/V2oKyNUJFQkVCRUJFQkVCRUJFQkVPQVip/sdx+ddLpvQckwsAAAAABJRU5ErkJggg=='

export class NewAccountController extends UIController {

    private navigotor: NavigateFunction;

    @State()
    private checked: boolean;

    @State()
    private showErrors: boolean;

    private accountName: string;
    private accountPassword: string;
    private email: string;

    @State()
    private isRealmAdmin: boolean;

    public Invalidate() {
    }

    private isLoading() {
    }

    public BindModel() {

    }

    private clear() {
        this.accountName = '';
        this.accountPassword = '';
        this.email = '';
        this.isRealmAdmin = false;
    }
    public BindRouterParams() {
        this.clear();
    }
    private ActionCreateAccount() {
        if (this.accountName == null) {
            this.showErrors = true;
        } else {
            RealmBrokerClient.CreateAccount(this.accountName, this.accountPassword, this.email, this.isRealmAdmin).then(response => {
                this.navigotor('/realm_manager/account/list', { replace: true });
            });
        }

    }

    private ActionCancel() {
        this.navigotor('/realm_manager/account/list', { replace: true });
    }

    public LoadView(): any {
        this.navigotor = bindNavigate();
        return (
            UIScene(
                VStack(
                    VStack({ alignment: cTopLeading })(
                        VStack(
                            Text('Create New Account').fontSize('1.7rem')
                                .marginTop('10px'),

                            UIImage(img)
                                .cornerRadius(10)
                                .minHeight('74px').marginTop('20px')
                                .overflow('hidden'),
                        ).height(),
                        VStack({ alignment: cTopLeading, spacing: 10 })(
                            Text('Account Name').lineHeight('1.45rem').fontSize('1rem'),
                            TextField()
                                .border((this.showErrors && this.accountName == null) ? 'solid 1px red' : 'solid 1px gray')
                                .cornerRadius(5)
                                .height(40).fontSize('1rem')
                                .padding(cHorizontal, 10).tabIndex(0)
                                .onTextChange(text => this.accountName = text),
                            VStack({ alignment: cLeading })(
                                Text('Password').lineHeight('1.45rem').fontSize('1rem'),
                            ).height(),
                            SecureField().border('solid 1px gray').cornerRadius(5)
                                .height(40).fontSize('1rem').padding(cHorizontal, 10).tabIndex(1)
                                .onTextChange(text => this.accountPassword = text),
                            Text('Email').lineHeight('1.45rem').fontSize('1rem'),
                            TextField()
                                .border((this.showErrors && this.accountName == null) ? 'solid 1px red' : 'solid 1px gray')
                                .cornerRadius(5)
                                .height(40).fontSize('1rem')
                                .padding(cHorizontal, 10).tabIndex(0)
                                .onTextChange(text => this.email = text),
                            HStack(
                                Text('Realm Admin').lineHeight('1.45rem').fontSize('1rem'),
                                Toggle()
                                    .padding(10)
                                    .background('#0CB863')
                                    .checked(this.isRealmAdmin)
                                    .onToggleChange((value) => this.isRealmAdmin = value)
                            ).width().height(),

                        ).padding(10).foregroundColor('#676767').height()
                            .marginTop('10px'),
                        HStack(
                            UIButton(
                                Text('Create Account')
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
                                .onClick(() => this.ActionCreateAccount())
                        ).height()
                    ).border('2px solid #f1f1f1').padding('1rem').margin('2rem')
                        .width(600).height(),
                    HStack(
                        UIButton(
                            Text('Cancel')
                        ).onClick(() => this.ActionCancel())
                    ).height()
                ).padding(20)
            )
        )

    }
}