import { Component } from '@angular/core';
import { CdkStarConfigItem } from 'src/app/core/models/cdk-star-config-item.model';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
})
export class RatingComponent {
  overalRates: CdkStarConfigItem = {
    rate: {
      grey: [],
      yellow: ['', '', '', '', ''],
    },
  };

  cdkStarConfig: CdkStarConfigItem[] = [
    {
      rate: {
        grey: [],
        yellow: ['', '', '', '', ''],
      },
    },
    {
      rate: {
        grey: [''],
        yellow: ['', '', '', ''],
      },
    },
    {
      rate: {
        grey: ['', ''],
        yellow: ['', '', ''],
      },
    },
    {
      rate: {
        grey: ['', '', ''],
        yellow: ['', ''],
      },
    },
    {
      rate: {
        grey: ['', '', '', ''],
        yellow: [''],
      },
    },
  ];
}
