import {HttpHeaders} from '@angular/common/http';

export class HttpOptionsClass {
  /**
   * @param options : Object
   * @return HttpHeaders
   * @Description : added token , loader when required to the header of request.
   */
  getHttpOptions(options: any = {token: true}) {
    let header: HttpHeaders = new HttpHeaders();
    // if token option is true then it will add token to request
    if (options.token) {
      header = header.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    }
    // if loader is true then it will allow loader till request is completed.
    // if (options.loader) {
    //   header = header.append('interceptorloader', '');
    // }
    // if (options.arrayBuffer) {
    //   header = header.append('responseType', 'blob');
    //   // header = header.append('Access-Control-Allow-Origin' , '*');
    // }
    return {
      headers: header
    };
  }
}