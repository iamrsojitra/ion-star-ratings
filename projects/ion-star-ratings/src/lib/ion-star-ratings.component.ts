import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'ion-star-ratings',
  standalone: true,
  imports: [CommonModule, IonicModule],
  template: `
    <div class="ion-star-rating">
      <button [ngStyle]="{
        'width' : fontSize, 
        'height' : fontSize
      }" 
        *ngFor="let index of iconsArray" [id]="index" type="button" ion-button icon-only 
        (click)="changeRating($event)">
        <ion-icon [ngStyle]="{
          'color': getIconColor(index), 
          'font-size' : fontSize }" 
          [name]="getIconName(index)">
        </ion-icon>
      </button>
    </div>
  `,
  styles: [`
    .ion-star-rating button {
        background: none;
        box-shadow: none;
        -webkit-box-shadow: none;
        padding : 0px;
    }
  `],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: IonStarRatingsComponent,
      multi: true
    }
  ]
})
export class IonStarRatingsComponent implements ControlValueAccessor, OnInit {
  private _rating!: number;
  private onChange: any;
  private onTouched: any;
  disabled!: boolean;

  ngOnInit(): void {
    this.rating = this.rating || 0; //default after input`s initialization
    for (var i = 0; i < this.maxRating; i++) {
      this.iconsArray.push(i);
    }
  }

  getIconColor(index: number) {
    return index < Math.round(this.rating) ? this.activeColor : this.defaultColor
  }

  getIconName(index: number) {
    return (this.halfStar && (this.rating - index > 0) && (this.rating - index <= 0.5)) ?
      this.halfIcon : (index < Math.round(this.rating)) ? this.activeIcon : this.defaultIcon
  }

  writeValue(obj: number): void {
    this.rating = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.readonly = isDisabled;
  }

  @Input()
  set rating(val: number) {
    this._rating = val;

    if (this.onChange) {
      this.onChange(val);
    }
  }

  get rating(): number {
    return this._rating;
  }

  @Output()
  ratingChanged: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  readonly: boolean = false;
  @Input()
  activeColor: string = '#488aff';
  @Input()
  defaultColor: string = '#aaaaaa';
  @Input()
  activeIcon: string = 'star';
  @Input()
  defaultIcon: string = 'star-outline';
  @Input()
  halfIcon: string = 'star-half';
  @Input()
  halfStar: boolean = false;
  @Input()
  maxRating: number = 5;
  @Input()
  fontSize: string = '28px';
  iconsArray: number[] = [];

  changeRating(event: any) {
    if (this.readonly && this.readonly) return;

    let id = event.target.id ? parseInt(event.target.id) : parseInt(event.target.parentElement.id);
    if (this.halfStar && this.halfStar) {
      this.rating = ((this.rating - id > 0) && (this.rating - id <= 0.5)) ? id + 1 : id + 0.5;
    } else {
      this.rating = id + 1;
    }

    this.ratingChanged.emit(this.rating);
  }
}
