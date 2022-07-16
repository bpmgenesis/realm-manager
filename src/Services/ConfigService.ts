import { is } from '@tuval/core';

export class ConfigService {
    public static GetEbaBrokerUrl(): string {
        return 'https://bpmgenesis.com/broker/eba';
    }
    public static GetEnsembleUrl(): string {
        return 'https://bpmgenesis.com/broker/ensemble';
    }
    public static GetSymbolBrokerUrl(): string {
        //return 'http://apidera.com/symbol';
        return 'https://bpmgenesis.com/broker/symbol';
    }
    public static GetRealmBrokerUrl(): string {
        /*  let url = '';
        debugger; */
       /*  if (is.localhost()) {
            url = 'http://localhost:5002/v1/';
        } else {
            url = 'https://bpmgenesis.com/api/v1/';
        }  */

         const url = window.location.origin + '/api/';
        console.log(url);

        return url;


        return url;
    }
}