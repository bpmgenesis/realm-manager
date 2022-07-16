import { ConfigService } from './ConfigService';
import { HttpClient, is } from '@tuval/core';
import { RealmHttpClient } from '@tuval/forms';

export interface GetSessionInfoResponse {
    is_real_admin: boolean;
    is_tenant_admin: boolean;
}
export interface GetRealmInfoResponse {
    key: string;
    value: string;
}

export interface IGetTenantByIdResponse {
    tenant_id: string,
    tenant_name: string,
    tenant_description: string,
    is_active: boolean,
    created_at: string,
    updated_at: string,
    tags: string,
    meta_data: string
}

export type IGetTenantsResponce = {
    tenant_id: string;
    tenant_name: string;
    tenant_description: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
    tags: string;
    meta_data: string;
    account_count: number;
}[]

export class RealmBrokerClient {

    public static async Login(user: string, password: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const form = new FormData();

            form.append('user', user);
            form.append('password', password);
            debugger;
            HttpClient.Post(ConfigService.GetRealmBrokerUrl() + 'LoginService', form)
                .then(response => {
                    resolve(response.data.sessionId);
                });
        });
    }

    public static async GetTenants(): Promise<IGetTenantsResponce> {
        return new Promise((resolve, reject) => {
            RealmHttpClient.Post(ConfigService.GetRealmBrokerUrl() + 'GetTenants')
                .then(response => {
                    resolve(response.data);
                });
        });
    }
    public static async GetTenantAccounts(session_id: string, tenant_id: string): Promise<any[]> {
        return new Promise((resolve, reject) => {
            const form = new FormData();
            form.append('tenant_id', tenant_id);

            RealmHttpClient.Post(ConfigService.GetRealmBrokerUrl() + 'GetTenantAccounts', form)
                .then(response => {
                    resolve(response.data);
                });
        });
    }
    public static async GetAccounts(session_id: string): Promise<any[]> {
        return new Promise((resolve, reject) => {

            RealmHttpClient.Post(ConfigService.GetRealmBrokerUrl() + 'GetAccounts')
                .then(response => {
                    resolve(response.data);
                });
        });
    }

    public static async GetApps(): Promise<any[]> {
        return new Promise((resolve, reject) => {

            RealmHttpClient.Post(ConfigService.GetRealmBrokerUrl() + 'GetApps')
                .then(response => {
                    resolve(response.data);
                });
        });
    }

    public static async CreateTenant(tenant_name: string, tenant_description: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const form = new FormData();
            form.append('tenant_name', tenant_name);
            form.append('tenant_description', tenant_description);

            RealmHttpClient.Post(ConfigService.GetRealmBrokerUrl() + 'CreateTenant', form)
                .then(response => {
                    resolve(response.data);
                });
        });
    }
    public static async UpdateTenant(tenant_id: string, tenant_name: string, tenant_description: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const form = new FormData();
            form.append('tenant_id', tenant_id);
            form.append('tenant_name', tenant_name);
            form.append('tenant_description', tenant_description);

            RealmHttpClient.Post(ConfigService.GetRealmBrokerUrl() + 'UpdateTenant', form)
                .then(response => {
                    resolve(response.data);
                });
        });
    }

    public static async GetTenantById(tenant_id: string): Promise<IGetTenantByIdResponse> {
        return new Promise((resolve, reject) => {
            const form = new FormData();
            form.append('tenant_id', tenant_id);

            RealmHttpClient.Post(ConfigService.GetRealmBrokerUrl() + 'GetTenantById', form)
                .then(response => {
                    resolve(response.data);
                });
        });
    }

    public static async CreateAccount(account_name: string, account_password: string, account_email: string, is_realm_admin: boolean): Promise<any> {
        return new Promise((resolve, reject) => {
            const form = new FormData();
            form.append('account_name', account_name);
            form.append('account_password', account_password);
            form.append('account_email', account_email);
            form.append('is_realm_admin', is_realm_admin ? 'True' : 'False');

            RealmHttpClient.Post(ConfigService.GetRealmBrokerUrl() + 'CreateAccount', form)
                .then(response => {
                    resolve(response.data);
                });
        });
    }
    public static async UpdateAccount(account_id: string, account_name: string, account_email: string, is_realm_admin: boolean): Promise<any> {
        return new Promise((resolve, reject) => {
            const form = new FormData();
            form.append('account_id', account_id);
            form.append('account_name', account_name);
            form.append('account_email', account_email);
            form.append('is_realm_admin', is_realm_admin ? 'True': 'False');

            RealmHttpClient.Post(ConfigService.GetRealmBrokerUrl() + 'UpdateAccount', form)
                .then(response => {
                    resolve(response.data);
                });
        });
    }

    public static async GetAccountById(account_id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const form = new FormData();
            form.append('account_id', account_id);

            RealmHttpClient.Post(ConfigService.GetRealmBrokerUrl() + 'GetAccountById', form)
                .then(response => {
                    resolve(response.data);
                });
        });
    }
    public static async GetSessionInfo(session_id: string): Promise<GetSessionInfoResponse> {
        return new Promise((resolve, reject) => {

            RealmHttpClient.Post(ConfigService.GetRealmBrokerUrl() + 'GetSessionInfo')
                .then(response => {
                    resolve(response.data);
                });
        });
    }

    public static async GetRealmInfo(key: string): Promise<GetRealmInfoResponse> {
        return new Promise((resolve, reject) => {
            const form = new FormData();
            form.append('key', key);

            RealmHttpClient.Post(ConfigService.GetRealmBrokerUrl() + 'GetRealmInfo', form)
                .then(response => {
                    resolve(response.data);
                });
        });
    }


}