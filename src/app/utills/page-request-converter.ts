import { HttpParameterCodec, HttpParams } from '@angular/common/http';

import { PageRequest } from '../models/pagination';

export class PageRequestConverter {
  static convertToHttpParams(pageRequest: PageRequest, encoder?: HttpParameterCodec): HttpParams {
    const { limit, offset, ...queryParams } = pageRequest;
    const httpParams = encoder ? new HttpParams({ encoder }) : new HttpParams();

    return PageRequestConverter.compileHttpParams(httpParams, queryParams)
      .set('limit', `${limit}`)
      .set('offset', `${offset}`);
  }

  private static compileHttpParams(httpParams: HttpParams, queryParams: any): HttpParams {
    for (const key of Object.keys(queryParams)) {
      if (queryParams[key]) {
        httpParams = httpParams.append(key, queryParams[key]);
      }
    }

    return httpParams;
  }
}
