import { TForm } from '@tuval/forms';
import { AppController } from './App/Controllers/AppController';
import { CodeEditor } from '@tuval/components/codeeditor';


export class MainForm extends TForm {
    m_Toolbar: any;
    m_tbiLabel: any;
    public override InitComponents() {
        this.Width = 1120;
        this.Height = 700;
        this.Text = 'Tuval UI Playground';


        this.ShowHeader = false;

        const appController = new AppController();
        appController.Bind(this);
        this.Controls.Add(appController);
        //this.Controls.Add(new CodeEditor());
    }
}