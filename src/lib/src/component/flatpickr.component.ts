import {
  Component, ChangeDetectionStrategy, Input, ViewChild,
  ElementRef, Output, EventEmitter
} from '@angular/core';
import * as Flatpickr from 'flatpickr';

interface IFlatPickrDateObject {
  currentMonth?: number;
  currentYear?: number;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ngx-flatpickr',
  templateUrl: './flatpickr.component.html',
  styleUrls: ['./flatpickr.component.css']
})
export class FlatPickrComponent {

  @ViewChild('calendar') calendar: ElementRef;
  @Input() placeholder = 'Select Date..';
  @Input() className = 'calendarInput';

  @Input() set options(data: object) {
    this.localOptions = Object.assign(this.localOptions, data || {});
  }

  private flatpickrInstance: Flatpickr;
  private localOptions = {
    onChange: (changeData: Date[]) => {
      const [ date ] = changeData;

      this.onChange.next(date);
    },
    onOpen: () => {
      this.onOpen.next(true);
    },
    onClose: (selectedData: Date[]) => {
      const [ date ] = selectedData;

      this.onClose.next(date);
    },
    onMonthChange: (a: IFlatPickrDateObject, b: IFlatPickrDateObject, c: IFlatPickrDateObject) => {
      this.onMonthChange.next(c.currentMonth + 1);
    },
    onYearChange: (a: IFlatPickrDateObject, b: IFlatPickrDateObject, c: IFlatPickrDateObject) => {
      this.onYearChange.next(c.currentYear);
    },
    onReady: () => {
      this.onReady.next(true);
    },
    onValueUpdate: (a: Date[]) => {
      const [ date ] = a;

      this.onValueUpdate.next(date);
    }
  };
  @Output() onChange: EventEmitter<Date> = new EventEmitter<Date>();
  @Output() onOpen: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onClose: EventEmitter<Date> = new EventEmitter<Date>();
  @Output() onMonthChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() onYearChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() onReady: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onValueUpdate: EventEmitter<Date> = new EventEmitter<Date>();

  ngOnInit() {
    this.flatpickrInstance = new Flatpickr(this.calendar.nativeElement, this.localOptions);
  }

  getInstance() {
    return this.flatpickrInstance;
  }
}
