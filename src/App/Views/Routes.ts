import { UIRoutes, UIRoute } from '@tuval/forms'
import { AddEditTenantController } from '../../Tenants/Controllers/AddEditTenantController'
import { TenantsController } from '../../Tenants/Controllers/TenantsController'
import { DeleteTenantController } from '../../Tenants/Controllers/DeleteTenantController';
import { AccountsController } from '../../Accounts/Controllers/AccountsController';
import { NewAccountController } from '../../Accounts/Controllers/NewAccountController';
import { EditAccountController } from '../../Accounts/Controllers/EditAccountController';

export const Routes = () => (
    UIRoutes(
        UIRoute('/realm_manager/tenant/list', new TenantsController()),
        UIRoute('/realm_manager/tenant/add', new AddEditTenantController()),
        UIRoute('/realm_manager/tenant/edit/:tenant_id', new AddEditTenantController()),
        UIRoute('/realm_manager/tenant/delete/:tenant_id', new DeleteTenantController()),

        UIRoute('/realm_manager/account/list', new AccountsController()),
        UIRoute('/realm_manager/account/add', new NewAccountController()),
        UIRoute('/realm_manager/account/edit/:account_id', new EditAccountController()),
        UIRoute('/realm_manager/account/delete/:account_id', new DeleteTenantController()),
        /*   UIRoute(
              UIRoute('add', new NewTenantsController()),
              UIRoute('edit/:tenant_id', new NewTenantsController()),
          )('/realm_manager/tenants', new TenantsController()), */
        /*  UIRoute('/realms/dashboard', new DashboardController()),
         UIRoute(
             UIRoute('general', new RealmSettingGeneralController()),
             UIRoute('email', new EmailSettingsController()),
             UIRoute('login', new LoginSettingsController()),
         )('/realms/:realm_name', new RealmsDetailController()),

         UIRoute('/realms/add', new NewRealmController()), */
    )
)