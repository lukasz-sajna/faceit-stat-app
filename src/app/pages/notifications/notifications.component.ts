import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { filter, tap } from 'rxjs/operators';
import { NotificationType } from 'src/app/enums/notification-type.enum';
import { NotificationData } from 'src/app/models/notification-data';
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
      tap((notification: NotificationData) => {
        const msg = `${notification.message} at ${new Date(notification.date).toLocaleDateString('pl-PL', { year: 'numeric', month: 'numeric', day: 'numeric' })} ${new Date(notification.date).toLocaleTimeString('pl-PL', { hour: 'numeric', minute: 'numeric', second: 'numeric' })}`;
        if (notification.type === NotificationType.Success) {
          this.toastr.success(msg);
        }

        if (notification.type === NotificationType.Error) {
          this.toastr.error(msg);
        }

      })
    ).subscribe()
  }

  public ngAfterViewInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement.ownerDocument.body, 'backgroundColor', '#1f212a');
  }

}
