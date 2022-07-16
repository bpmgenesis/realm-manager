import { ToolbarEx } from '@tuval/components/navigations';
import { ModuleLoader } from '@tuval/core';
import { TApplication, TForm } from '@tuval/forms';
import { MainForm } from './MainForm';
import { RealmBrokerClient } from './Services/RealmBrokerClient';
import { SplashForm } from './SplashForm';
import { Services } from './Services/Services';

const manifest = require('./manifest');
declare var tuval$core;

function App(manifest: any) {
    return <T extends { new(...args: any[]): {} }>(constructor: T) => {
        if (tuval$core['__APPS__'] == null) {
            tuval$core['__APPS__'] = {};
        }
        tuval$core['__APPS__'][manifest.application.name] = constructor;
    }
}

@App(manifest)
export class IconLibrary extends TApplication {
    private m_Toolbar: ToolbarEx;
    private m_tbiLabel: any;
    public InitComponents() {

        debugger;

        //fileExprorer.Controls.Add(button);

        this.Icon = manifest.application.icon;
        const fileExprorer = new SplashForm();

        this.SetMainForm(fileExprorer);
        setTimeout(() => this.Start(), 100);

        const session_id = Services.StateService.GetSessionId();
        RealmBrokerClient.GetSessionInfo(session_id).then(sessionInfo => {

            if (sessionInfo.is_real_admin) {
                const fileExprorer = new MainForm();
                this.SetMainForm(fileExprorer);
                setTimeout(() => this.Start(), 100);
            } else {
                alert('Bu uygulamayı kullanmaya yetkiniz yoktur.');
                fileExprorer.Hide();
            }

        });
        //
    }
}