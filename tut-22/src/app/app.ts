import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected title = 'tut-22';

  dataArray: number[] = [];
  page: number = 1;
  loading: boolean = false;

  @ViewChild("targetElement") targetElement!: ElementRef;

  createObserver() {
    const observer = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting && !this.loading) {
        this.loadData();
      }
    })

    observer.observe(this.targetElement.nativeElement);
  }

  ngAfterViewInit(): void {
    this.createObserver();
    this.loadData();
  }

  loadData() {

    this.loading = true;   // ab lock lag gaya hai dobara api call nahi hogi.

    setTimeout(() => {
      const newData = Array.from({ length: 100 }, (_, i) => i);
      this.dataArray = [...this.dataArray, ...newData];
      this.loading = false; // data aa gaya ab ap lock open kar do.
      // ab api call jo jayegi.
    }, 1000);
  }
}
