import { VStack, cTopLeading, cLeading, HStack, Text, Spacer, TextField, UITable, TableColumn, Icon, IconLibrary, UIContextMenu, UIAppearance, UIImage, cTrailing } from '@tuval/forms';


export const AppsGrid = (data: any[]) => (
    UITable(
        TableColumn(Text('App Name'))(app =>
            HStack({ alignment: cLeading, spacing: 10 })(
                UIImage(app.app_icon).width(40).height(40).filter('drop-shadow(3px 5px 4px rgb(0, 0, 0, 30%))'),
                VStack({ alignment: cLeading })(
                    Text(app.app_name),
                    Text(app.app_version),
                )
            ).padding(8)
        ).padding('5px 0').paddingLeft('15px'),
        TableColumn(Text('Vendor'))(app =>
            Text(app.app_vendor)

        ).padding('5px 0'),
        TableColumn(Text('Created'))(row =>
            Text('1 day ago')
        ).padding('5px 0'),
        TableColumn(Text('Downloaded'))(row =>
            Text('25')
        ).padding('5px 0'),
        TableColumn(Text('Size'))(app =>
            HStack({ alignment: cLeading })(
                Text(app.app_size)
            )

        ).padding('5px 0'),
        TableColumn(Text(''))(row =>
            UIContextMenu(
                Text('Edit'),
                Text('Delete')
            )(
                Text('More')
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