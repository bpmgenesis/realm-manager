import { VStack, cTopLeading, cLeading, HStack, Text, Spacer, TextField, UITable, TableColumn, Icon, IconLibrary, UIContextMenu, UIAppearance, UIRouteLink } from '@tuval/forms';
import { moment } from '@tuval/core';

export const AccountsGrid = (data: any[]) => (
    UITable(
        TableColumn(Text('Account Name'))(account =>
            HStack({ alignment: cLeading, spacing: 5 })(
                Icon(IconLibrary.AccountCircle).size(30).foregroundColor('#61A2FF').padding(),
                VStack({ alignment: cLeading })(
                    Text(account.account_name),
                    Text(account.tenant_name)
                )
            ).padding(8)
        ).padding('5px 0').paddingLeft('15px'),
        TableColumn(Text('Email'))(account =>
            Text(account.account_email)

        ).padding('5px 0'),
        TableColumn(Text('Created At'))(account =>
            Text(moment(account.created_at).format('DD-MM-YYYY HH:mm:ss'))
        ).padding('5px 0'),
        TableColumn(Text('Role'))(tenant =>
            HStack(
                Text(tenant.is_realm_admin ? 'Admin' : 'User')
            )
                .width(70).height(30)
                .background(tenant.is_realm_admin ? '#15CD72' : '#2196f3').lineHeight('10px').fontSize(13).fontWeight('500')
                .foregroundColor('white').padding('8px 10px').cornerRadius(7)
                .transition('box-shadow .28s cubic-bezier(.4,0,.2,1)')
        ).padding('5px 0'),
        TableColumn(Text('Last Login'))(account =>
            Text(moment(account.last_login).format('DD-MM-YYYY HH:mm:ss'))
        ).padding('5px 0'),

        TableColumn(Text(''))(account =>
            UIContextMenu(
                UIRouteLink(`/realm_manager/account/edit/${account.account_id}`)(
                    Text('Edit')
                ),
                UIRouteLink(`/realm_manager/account/delete/${account.account_id}`)(
                    Text('Delete')
                )
            )(
                HStack(
                    HStack({ spacing: 5 })(
                        Text('Actions'),
                        Icon(IconLibrary.ArrowDropDown).size(20)
                    ).background({ hover: 'gray' }).width().cornerRadius(5).padding(5)
                )
            ).cursor('pointer')
        ).padding('5px 0').paddingLeft('15px')
    ).value(data)
        .height()
        .shadow('0 0 0 2px #f1f1f1')
        .headerAppearance(UIAppearance()
            .background('#fafafa')
            .cornerRadius(3))
        .rowAppearance(UIAppearance()
            .cornerRadius(3)
            .borderTop('2px solid #f1f1f1')
            .padding('1rem'))
)