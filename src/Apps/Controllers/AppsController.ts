import { VStack, cTopLeading, cLeading, HStack, Text, Spacer, TextField, UITable, TableColumn, Icon, IconLibrary, UIContextMenu, UIAppearance, UIScene, UIController, cTop, State, Spinner } from '@tuval/forms';
import { RealmBrokerClient } from '../../Services/RealmBrokerClient';
import { Services } from '../../Services/Services';
import { AppsGrid } from '../Views/AppsGrid';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'

export class AppsController extends UIController {
    @State()
    private apps: any[];

    private isLoading(): boolean {
        return this.apps == null;
    }

    public BindModel() {
        if (this.apps == null) {
            RealmBrokerClient.GetApps().then((apps: any[]) => {
                this.apps = apps;
            })
        }
    }


    public LoadView() {
        /*   const data = [
              {
                  name: 'apidera'
              },
              {
                  name: 'apidera'
              }
          ] */
        return (
            UIScene(
                this.isLoading() ?
                    Spinner() :
                    VStack({ alignment: cTopLeading })(
                        HStack({ alignment: cLeading })(
                            Text('Apps')
                                .foregroundColor('#444')
                                .fontFamily(fontFamily).fontSize('2.4rem').fontWeight('300'),
                            Spacer(),
                            // MARK: Search Box
                            HStack(
                                TextField().placeholder('Search by Tenant Name')
                            ).border('solid 1px #dfdfdf').padding(10).width(300).marginRight('30px').cornerRadius(5)
                        ).height().marginBottom('24px'),
                        AppsGrid(this.apps),
                    )
            ).padding(20)
        )
    }
}