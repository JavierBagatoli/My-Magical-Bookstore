import { Component, Input, input, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
    selector: 'carousel',
    templateUrl: './carousel.html',
    standalone: true,
    imports: [CarouselModule, ButtonModule, TagModule],
    providers: []
})
export class CarouselComponent implements OnInit{
    products: any[] = [];
    @Input({ required: true }) data!: any[];

    responsiveOptions: any[] | undefined;

    constructor() {}

    ngOnInit() {
        this.data.map((products: any) => {
            this.products = products;
        });

        this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warn';
            case 'OUTOFSTOCK':
                return 'danger';
            default: 
              return undefined
        }
    }
}