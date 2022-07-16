import {HStack, cLeading, ForEach, UIContextMenu, Text, VStack, Icon, Color} from '@tuval/forms';

export const menuItem = (item: any) => (
    HStack({ spacing: 5 })(
        Icon(item.icon).size(20),
        Text(item.title)
    )
        .paddingLeft('10px')
        .paddingRight('10px')
        .width()
        .background({ hover: Color('gray').lighten().lighten().lighten() })
        .cursor('pointer')
)

export const mainMenu = (model: any[]) => (
    HStack({ alignment: cLeading })(
        ...ForEach(model)(item =>
            UIContextMenu(
                ...ForEach(item.items)((menuItem: any) =>
                    HStack(
                        Text(menuItem.title)
                    )
                )
            )(
                VStack(
                    menuItem(item)
                )
            ).height('100%').alignment(cLeading)
        )

    ).height(50)
        .background('white')
        .shadow('0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%)')
        .fontSize(16)
        .foregroundColor('gray')
)