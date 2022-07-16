import { VStack, cTopLeading, cLeading, HStack, Text, Spacer, TextField, UITable, TableColumn, Icon, IconLibrary, UIContextMenu, UIAppearance, UIScene, UIController, cTop, State, Spinner, UIRouteLink } from '@tuval/forms';
import { RealmBrokerClient } from '../../Services/RealmBrokerClient';
import { ActionButton } from '../../Views/ActionButton';
import { AccountsGrid } from '../Views/AccountsGrid';
import { NewAccountController } from './NewAccountController';
import { Services } from '../../Services/Services';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'

export class AccountsController extends UIController {




    @State()
    private accounts: any[];

    private isLoading(): boolean {
        return this.accounts == null;
    }

    private clear() {
        this.accounts = null;
    }

    public BindRouterParams() {
        this.clear();

        if (this.accounts == null) {
            const sessionId = Services.StateService.GetSessionId();
            RealmBrokerClient.GetAccounts(sessionId,).then((accounts: any[]) => {
                this.accounts = accounts;
            })
        }
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
                                Text('Accounts')
                                    .foregroundColor('#444')
                                    .fontFamily(fontFamily).fontSize('2.4rem').fontWeight('300'),
                                Spacer(),
                                // MARK: Search Box
                                HStack(
                                    TextField().placeholder('Search by Account Name')
                                ).border('solid 1px #dfdfdf').padding(10).width(300).marginRight('30px').cornerRadius(5),
                                UIRouteLink('/realm_manager/account/add')(
                                    ActionButton('New Account')
                                ),
                            ).height().marginBottom('24px'),
                            AccountsGrid(this.accounts),
                        )
                ).padding(20)
            )
        }
    }
}