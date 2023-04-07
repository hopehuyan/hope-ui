import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  'providedIn': 'root'
})
export class FreeApiService{
  constructor(private readonly _http: HttpClient) {
  }

  getCityData(): Observable<any> {
    return this._http.get('https://www.mxnzp.com/api/holiday/recent/list?app_id=[mask]&app_secret=[mask]');
  }
  getNews(): Observable<any> {
    return this._http.get('http://v.juhe.cn/toutiao/index?type=top&key=[mask]');
  }
}
