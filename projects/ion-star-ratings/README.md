# Ionic Star Ratings Component

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

# How to use

## Step 1

### Install it

`npm i ion-star-ratings`

## Step 2

### Import component in any standalone component

`import { IonStarRatingsComponent } from 'ion-star-ratings';`

```
@Component({
    standalone: true,
    imports: [IonStarRatingsComponent]
})
```

### You can use it as follows

```
    <ion-star-ratings
        activeIcon = "star"
        defaultIcon = "star-outline"
        activeColor = "#488aff"
        defaultColor = "#f4f4f4"
        [readonly]="false"
        [halfStar]="false"
        rating="3"
        fontSize = "32px"
        (ratingChanged)="onRatingChange($event)">
    </ion-star-ratings>
```

### You can also use it inside the `<form>` component.

```
    <form [formGroup]="customForm">
        <ion-star-ratings
            activeIcon = "star"
            defaultIcon = "star-outline"
            activeColor = "#d1301a"
            defaultColor = "#aaaaaa"
            [readonly]="false"
            [halfStar]="false"
            fontSize = "32px"
            (ratingChanged)="onRatingChange($event)"
            formControlName="starRating">
        </ion-star-ratings>
    </form>
```

## Options (all are optional, default values are set in the component itself)

- **activeIcon (string)** : can specify the icon name for active rating (icon name should be from the https://ionicframework.com/docs/ionicons/, default is set to 'star');
- **defaultIcon (string)** : can specify the default icon name (icon name should be from the https://ionicframework.com/docs/ionicons/, default is set to 'star-outline');
- **halfIcon (string)** : can specify the icon name for active half rating (icon name should be from the https://ionicframework.com/docs/ionicons/ , default is set to 'star-half');
- **halfStar (boolean)** : to support half star rating set this to `true`, default is set to `false`. The rating value then steps by 0.5 instead of 1. Single tap on defaultIcon changes it to halfIcon , tap on halfIcon changes it to activeIcon and tap on activeIcon changes it to halfIcon again.
- **maxRating (number)** : can specify the total number of icons to be displayed, default is set to 5. You may change this to 10 star rating component or 7 star rating component depending on your requirement.
- **activeColor (string)** : can specify the active color for the active rating icon (should be a valid color code, default is set to '#488aff')
- **defaultColor (string)** : can specify the default color for the rating icon (should be a valid color code, default is set to '#f4f4f4')
- **readonly (boolean)** : default is set to `false`, change to `true` and make it read only. End user won't be able to change the rating then.
- **rating (string or number)** : default is set to 3. input can be of type **number** or **string** (_assign any number from 1 to 5, floating numbers are also accepted, Math.round(parseFloat(rating) is done for all inputs_).
- **fontSize (string)** : can specify the font-size for the icon ( should be a valid string as used in css, a number followed by letters 'px', default is set to '28px').
- **ratingChanged (function)** : used to handle the rating change in the parent component and do your stuff
- **formControlName** : only if you are using the ion-star-ratings component inside the `<form>` component


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Credits
- [All Contributors](https://github.com/squareetlabs/ionic-rating-component)

## License
The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
