import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {
  tableValues: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.prepareTableData();
  }

  prepareTableData() {
    this.tableValues = JSON.parse('[\n' +
      '     {\n' +
      '        "id":1000,\n' +
      '        "name":"James Butt",\n' +
      '        "country":{\n' +
      '           "name":"Algeria",\n' +
      '           "code":"dz"\n' +
      '        },\n' +
      '        "company":"Benton, John B Jr",\n' +
      '        "date":"2015-09-13",\n' +
      '        "status":"unqualified",\n' +
      '        "verified":true,\n' +
      '        "activity":17,\n' +
      '        "representative":{\n' +
      '           "name":"Ioni Bowcher",\n' +
      '           "image":"ionibowcher.png"\n' +
      '        },\n' +
      '        "balance":70663\n' +
      '     },\n' +
      '     {\n' +
      '        "id":1001,\n' +
      '        "name":"Josephine Darakjy",\n' +
      '        "country":{\n' +
      '           "name":"Egypt",\n' +
      '           "code":"eg"\n' +
      '        },\n' +
      '        "company":"Chanay, Jeffrey A Esq",\n' +
      '        "date":"2019-02-09",\n' +
      '        "status":"proposal",\n' +
      '        "verified":true,\n' +
      '        "activity":0,\n' +
      '        "representative":{\n' +
      '           "name":"Amy Elsner",\n' +
      '           "image":"amyelsner.png"\n' +
      '        },\n' +
      '        "balance":82429\n' +
      '     },\n' +
      '     {\n' +
      '        "id":1002,\n' +
      '        "name":"Art Venere",\n' +
      '        "country":{\n' +
      '           "name":"Panama",\n' +
      '           "code":"pa"\n' +
      '        },\n' +
      '        "company":"Chemel, James L Cpa",\n' +
      '        "date":"2017-05-13",\n' +
      '        "status":"qualified",\n' +
      '        "verified":false,\n' +
      '        "activity":63,\n' +
      '        "representative":{\n' +
      '           "name":"Asiya Javayant",\n' +
      '           "image":"asiyajavayant.png"\n' +
      '        },\n' +
      '        "balance":28334\n' +
      '     },\n' +
      '     {\n' +
      '        "id":1003,\n' +
      '        "name":"Lenna Paprocki",\n' +
      '        "country":{\n' +
      '           "name":"Slovenia",\n' +
      '           "code":"si"\n' +
      '        },\n' +
      '        "company":"Feltz Printing Service",\n' +
      '        "date":"2020-09-15",\n' +
      '        "status":"new",\n' +
      '        "verified":false,\n' +
      '        "activity":37,\n' +
      '        "representative":{\n' +
      '           "name":"Xuxue Feng",\n' +
      '           "image":"xuxuefeng.png"\n' +
      '        },\n' +
      '        "balance":88521\n' +
      '     },\n' +
      '     {\n' +
      '        "id":1004,\n' +
      '        "name":"Donette Foller",\n' +
      '        "country":{\n' +
      '           "name":"South Africa",\n' +
      '           "code":"za"\n' +
      '        },\n' +
      '        "company":"Printing Dimensions",\n' +
      '        "date":"2016-05-20",\n' +
      '        "status":"proposal",\n' +
      '        "verified":true,\n' +
      '        "activity":33,\n' +
      '        "representative":{\n' +
      '           "name":"Asiya Javayant",\n' +
      '           "image":"asiyajavayant.png"\n' +
      '        },\n' +
      '        "balance":93905\n' +
      '     },\n' +
      '     {\n' +
      '        "id":1005,\n' +
      '        "name":"Simona Morasca",\n' +
      '        "country":{\n' +
      '           "name":"Egypt",\n' +
      '           "code":"eg"\n' +
      '        },\n' +
      '        "company":"Chapman, Ross E Esq",\n' +
      '        "date":"2018-02-16",\n' +
      '        "status":"qualified",\n' +
      '        "verified":false,\n' +
      '        "activity":68,\n' +
      '        "representative":{\n' +
      '           "name":"Ivan Magalhaes",\n' +
      '           "image":"ivanmagalhaes.png"\n' +
      '        },\n' +
      '        "balance":50041\n' +
      '     },\n' +
      '     {\n' +
      '        "id":1006,\n' +
      '        "name":"Mitsue Tollner",\n' +
      '        "country":{\n' +
      '           "name":"Paraguay",\n' +
      '           "code":"py"\n' +
      '        },\n' +
      '        "company":"Morlong Associates",\n' +
      '        "date":"2018-02-19",\n' +
      '        "status":"renewal",\n' +
      '        "verified":true,\n' +
      '        "activity":54,\n' +
      '        "representative":{\n' +
      '           "name":"Ivan Magalhaes",\n' +
      '           "image":"ivanmagalhaes.png"\n' +
      '        },\n' +
      '        "balance":58706\n' +
      '     },\n' +
      '     {\n' +
      '        "id":1007,\n' +
      '        "name":"Leota Dilliard",\n' +
      '        "country":{\n' +
      '           "name":"Serbia",\n' +
      '           "code":"rs"\n' +
      '        },\n' +
      '        "company":"Commercial Press",\n' +
      '        "date":"2019-08-13",\n' +
      '        "status":"renewal",\n' +
      '        "verified":true,\n' +
      '        "activity":69,\n' +
      '        "representative":{\n' +
      '           "name":"Onyama Limba",\n' +
      '           "image":"onyamalimba.png"\n' +
      '        },\n' +
      '        "balance":26640\n' +
      '     },\n' +
      '     {\n' +
      '        "id":1008,\n' +
      '        "name":"Sage Wieser",\n' +
      '        "country":{\n' +
      '           "name":"Egypt",\n' +
      '           "code":"eg"\n' +
      '        },\n' +
      '        "company":"Truhlar And Truhlar Attys",\n' +
      '        "date":"2018-11-21",\n' +
      '        "status":"unqualified",\n' +
      '        "verified":true,\n' +
      '        "activity":76,\n' +
      '        "representative":{\n' +
      '           "name":"Ivan Magalhaes",\n' +
      '           "image":"ivanmagalhaes.png"\n' +
      '        },\n' +
      '        "balance":65369\n' +
      '     },\n' +
      '     {\n' +
      '        "id":1009,\n' +
      '        "name":"Kris Marrier",\n' +
      '        "country":{\n' +
      '           "name":"Mexico",\n' +
      '           "code":"mx"\n' +
      '        },\n' +
      '        "company":"King, Christopher A Esq",\n' +
      '        "date":"2015-07-07",\n' +
      '        "status":"proposal",\n' +
      '        "verified":false,\n' +
      '        "activity":3,\n' +
      '        "representative":{\n' +
      '           "name":"Onyama Limba",\n' +
      '           "image":"onyamalimba.png"\n' +
      '        },\n' +
      '        "balance":63451\n' +
      '     }\n' +
      '\t ]')

  }
}
