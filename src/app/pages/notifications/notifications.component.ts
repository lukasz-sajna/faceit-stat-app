import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { filter, tap } from 'rxjs/operators';
import { selectNotificationData } from 'src/app/store/selectors/stats.selector';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements AfterViewInit {

  constructor(
    private store: Store<any>,
    private toastr: ToastrService,
    private elementRef: ElementRef,
    private renderer: Renderer2
    ) {
    this.store.select(selectNotificationData).pipe(
      filter(notification => !!notification.message && notification.message.length > 0),
      tap(notification => this.toastr.success(        
        `${notification.message} at ${new Date(notification.date).toLocaleDateString()} ${new Date(notification.date).toLocaleTimeString()} `
        ))
    ).subscribe()
  }

  public ngAfterViewInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement.ownerDocument.body,'backgroundColor', '#3A393A');
  }

}
