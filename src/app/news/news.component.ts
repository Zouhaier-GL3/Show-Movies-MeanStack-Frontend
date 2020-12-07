import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  product: any;
  download= "{{ product.download }}"
  myNews = {
    title: '',
    description: '',
    rating: 0
  };
  btnDisabled = false;
  newss: any;

  

  constructor(
    private activatedRoute: ActivatedRoute,
    private data: DataService,
    private rest: RestApiService,
    private router: Router,
    
    
  ) {}

  ngOnInit() {
  }
  // async postNews() {
  //   this.btnDisabled = true;
  //   try {
  //     const data = await this.rest.post(
  //       'http://localhost:5000/api/addnews',
  //       {
  //         productId: this.product._id,
  //         title: this.myNews.title,
  //         description: this.myNews.description,
  //         rating: this.myNews.rating
  //       }
  //     );
  //     data['success']
  //     ? this.data.success(data['message'])
  //     : this.data.error(data['message']);
  //   } catch (error) {
  //     this.data.error(error['message']);
  //   }
  //   this.btnDisabled = false;
  // }

  

  // async reportNews(id) {
  //   const data = await this.rest.get(`http://localhost:5000/api/newss/${id}`);
  //   data['success'] ? (this.newss.push(data['news']), alert('Report sent to Administrator')) : this.data.error('error happened');
  // }
  // hideReport(id) {
  //   for (let i = 0; i < this.newss.length; i++) {
  //     if (id === this.newss[i]._id) {
  //       return true;
  //     }
  //   }
  //   return false;

  // }
  
}
