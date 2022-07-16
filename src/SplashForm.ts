import { TForm, UIController, UIScene, Color, Text, VStack } from '@tuval/forms';


class SplashFormController extends UIController {
    public LoadView() {
        return (
            UIScene(
                VStack({spacing:10})(
                    Text('Realm Manager').fontSize(25),
                    Text('Connection to realm broker...').fontSize(18)
                )
            ).background(Color.white)
        )
    }
}


export class SplashForm extends TForm {
    public override InitComponents() {
        this.Width = 400;
        this.Height = 200;
        this.ShowHeader = false;

        this.Controls.Add(new SplashFormController());
    }
}