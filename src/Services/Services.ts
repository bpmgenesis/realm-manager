import { instance as container } from '@tuval/core';

export interface IStateService {
    GetSessionId(): string;
}
export class Services {
    public static get StateService(): IStateService {
        try {
            return container.resolve<IStateService>('IStateService') as any;
        } catch {
            throw 'State Service Not Found.';
        }
    }
}