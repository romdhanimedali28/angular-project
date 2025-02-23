import { Component, OnInit } from '@angular/core';
declare var $: any;  // Declare jQuery
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    // Initialize Owl Carousel
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      autoplay: true,
      autoplayTimeout: 3000,
      items: 1,
      navText: [
        '<i class="fa fa-chevron-left"></i>',  // Prev button (icon)
        '<i class="fa fa-chevron-right"></i>'  // Next button (icon)
      ]
    });
  }
}
