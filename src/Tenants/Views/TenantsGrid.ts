import { VStack, cTopLeading, cLeading, HStack, Text, Spacer, TextField, UITable, TableColumn, Icon, IconLibrary, UIContextMenu, UIAppearance, UIRouteLink, Color } from '@tuval/forms';
import { IGetTenantsResponce } from '../../Services/RealmBrokerClient';
import { moment } from '@tuval/core';

export const TenantsGrid = (data: IGetTenantsResponce) => (
    UITable(
        TableColumn(Text('Name'))(tenant =>
            HStack({ alignment: cLeading, spacing: 5 })(
                Icon(IconLibrary.Settings).size(20).foregroundColor('#61A2FF'),
                VStack({ alignment: cLeading })(
                    Text(tenant.tenant_name)
                )
            ).padding(8)
        ).padding('5px 0').paddingLeft('15px'),
        TableColumn(HStack(Text('Account Size')))(row =>
            HStack(
                Text(row.account_count)
            )
        ).padding('5px 0'),
        TableColumn(Text('Created At'))(tenant =>
            Text(moment(tenant.created_at).format('DD-MM-YYYY HH:mm:ss'))
        ).padding('5px 0'),
        TableColumn(Text('Status'))(tenant =>
            HStack(
                Text('Active')
            )
                .width(70).height(30)
                .background('#2196f3').lineHeight('10px').fontSize(13).fontWeight('500')
                .foregroundColor('white').padding('8px 10px').cornerRadius(7)
                .transition('box-shadow .28s cubic-bezier(.4,0,.2,1)')
        ).padding('5px 0'),
        TableColumn(Text('Tags'))(row =>
            Text(row.name)
        ).padding('5px 0'),
        TableColumn(Text(''))(tenant =>
            UIContextMenu(
                UIRouteLink(`/realm_manager/tenant/edit/${tenant.tenant_id}`)(
                    Text('Edit')
                ),
                UIRouteLink(`/realm_manager/tenant/delete/${tenant.tenant_id}`)(
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