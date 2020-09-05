import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';
import { SafePipe } from '../safe.pipe';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
   
  product: any;
  download= "{{ product.download }}"
  myReview = {
    title: '',
    description: '',
    rating: 0
  };

  btnDisabled = false;
  reviews: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private data: DataService,
    private rest: RestApiService,
    private router: Router,
    
    
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => {
      this.rest
        .get(`http://localhost:5000/api/product/${res['id']}`)
        .then(data => {
          data['success']
            ? (this.product = data['product'])
            : this.router.navigate(['/']);
        })
        .catch(error => this.data.error(error['message']));
    });
  }
  OnClick() {
    console.log(window.location.href)
    this.router.navigateByUrl(this.download)
  }

  async postReview() {
    this.btnDisabled = true;
    try {
      const data = await this.rest.post(
        'http://localhost:5000/api/review',
        {
          productId: this.product._id,
          title: this.myReview.title,
          description: this.myReview.description,
          rating: this.myReview.rating
        }
      );
      data['success']
      ? this.data.success(data['message'])
      : this.data.error(data['message']);
    } catch (error) {
      this.data.error(error['message']);
    }
    this.btnDisabled = false;
  }

  

  async reportReview(id) {
    const data = await this.rest.get(`http://localhost:5000/api/report/${id}`);
    data['success'] ? (this.reviews.push(data['review']), alert('Report sent to Administrator')) : this.data.error('error happened');
  }
  hideReport(id) {
    for (let i = 0; i < this.reviews.length; i++) {
      if (id === this.reviews[i]._id) {
        return true;
      }
    }
    return false;

  }
  compareDates(finished) {
    if (Date.parse(finished) > Date.now()) {
      return true;
    } else { return false; }
  }
  stockAvailability(stock) {
    if (stock === 0) {
      return true;
    } else {
      return false;
    }
  }
}

