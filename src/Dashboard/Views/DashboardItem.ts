import { VStack, cTopLeading, HStack, Icon, Text, cLeading, cTrailing, Gauge } from '@tuval/forms';


export const DashboardItem = (titleIcon, title, subValue, subCalcMethod) => (
    VStack({ alignment: cTopLeading })(
        HStack(
            VStack(
                HStack(
                    Gauge().value(30).radius(40)
                        .maskColor('transparent').color('white').stroke(7)
                        .filter('drop-shadow(2px 4px 6px white)')
                ),
                Text(title).fontSize(17).whiteSpace('nowrap')
                    .foregroundColor('white')
                    .fontWeight('bold')
                    .filter('drop-shadow(2px 4px 6px white)')
            ).width().padding(20),
            VStack(
                VStack(
                    HStack({ alignment: cTrailing })(
                        Icon(titleIcon).size(20)
                    ).height(),
                    HStack({ alignment: cTrailing })(
                        Text(subValue).fontSize(22).fontWeight('bold')
                    )
                ),
                HStack({ alignment: cTrailing })(
                    Text('Last 24 Hours')
                ).height(),
            ).padding(20).foregroundColor('white')
        )
    ).width(300).height(150)
        .background('#8992E9')
        .shadow('rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;')
        .cornerRadius(10)
)
