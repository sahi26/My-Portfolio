import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects = [
    {
      title: 'RSSI-Based Proximity Alert & Emergency Vehicle Prioritization',
      techStack: 'ESP8266, Arduino Uno, ZigBee, Bluetooth, IP Detection, L298N',
      details: [
        'Developed an autonomous car that identifies emergency vehicles using RSSI signals and IP detection.',
        'Integrated adaptive cruise control, V2V communication, and automated traffic signal control.'
      ],
      link: 'assets/rssi.mp4'
    },
    {
      title: 'Smart Hotel Booking System',
      techStack: 'SpringBoot-JAVA, Angular-TypeScript, MySQL',
      details: [
        'Web application for browsing, filtering, and booking hotels with real-time availability.',
        'Included customer reviews and dynamic pricing based on filters.'
      ],
      link: 'https://github.com/sahi26/SmartHotelBookingSystem'
    },
    {
      title: 'BookHub Website',
      techStack: 'Java, Spring Boot, HTML, CSS, JavaScript, MySQL',
      details: [
        'An online bookstore for book listings management.',
        'Developed REST APIs, secure admin features, and responsive UI.'
      ],
      link: 'assets/bookstore.mp4'
    },
    {
      title: 'Audio Classification in MATLAB',
      techStack: 'MATLAB, KNN Algorithm',
      details: [
        'Implemented KNN to classify audio signals based on extracted feature vectors.'
      ],
      link: 'https://github.com/sahi26/knn'
    },
    {
      title: 'Elso Car - Solar cum Electric Car',
      techStack: 'Embedded C, Arduino, Sensors',
      details: [
        'Dual-mode energy system using solar and battery.',
        'Automatic daylight detection and mode switching.',
        'Obstacle detection for improved safety.'
      ],
      link: 'assets/elso.mp4'
    },
    {
      title: 'Shopline - E-commerce Website',
      techStack: 'HTML, CSS, JavaScript',
      details: [
        'Developed a responsive and user-friendly e-commerce platform.',
        'Implemented shopping cart, product listing, and checkout flow.',
        'Enhanced UI with clean design and animations.'
      ],
      link: 'assets/shopline.mp4'
    }
  ];

  currentIndex = 0;
  private slideInterval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.slideInterval);
  }

  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.nextProject();
    }, 5000);
  }

  prevProject() {
    this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
  }

  nextProject() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
  }
}
