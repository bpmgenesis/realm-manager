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

import { RealmBrokerClient } from '../../Services/RealmBrokerClient';
import { Color, IconLibrary } from '@tuval/forms';
import { ActionButton } from '../../Views/ActionButton';
import { DashboardItem } from '../Views/DashboardItem';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'

export class DashboardController extends UIController {

    public Invalidate() {
    }

    private isLoading() {
        return false;
    }

    public BindModel() {

    }



    public LoadView() {
        return (
            UIScene(
                VStack({ alignment: cTopLeading })(
                    HStack({ alignment: cLeading })(
                        Text('Dashboard')
                            .foregroundColor('#444')
                            .fontFamily(fontFamily).fontSize('2.4rem').fontWeight('300'),
                    ).height().marginBottom('24px'),
                    HStack({ alignment: cTopLeading, spacing: 10 })(
                        DashboardItem(IconLibrary.Visibility, 'Logins', '1300', 'AVG'),
                        DashboardItem(IconLibrary.Visibility, 'App Downloads', '1300', 'AVG')
                    ).height()

                )
            ).padding(20)

        )
    }
}