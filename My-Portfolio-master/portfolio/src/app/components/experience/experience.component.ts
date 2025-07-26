import { Component, OnInit, OnDestroy } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit, OnDestroy {
  experiences = [
    {
      role: 'Java Full Stack Developer Intern',
      company: 'Cognizant',
      duration: 'April 2025 – July 2025 (3 months)',
      location: 'Hyderabad, India',
      responsibilities: [
        'Worked on a project as a team',
        'Worked on Spring Boot & REST API integrations',
        'Built responsive UI with Angular',
        'Collaborated in Agile environment and Git'
      ]
    },
    {
      role: 'Embedded System Intern',
      company: 'PANTECH SOLUTIONS',
      duration: 'May 2024 – June 2024 (2 months)',
      location: 'Chennai, India',
      responsibilities: [
        'Worked with ESP32 microcontroller',
        'Interfaced various sensors and modules',
        'Developed basic IoT prototypes',
        'Gained experience in embedded C programming'
      ]
    }
  ];

  currentIndex: number = 0;
  autoSlideInterval: any;

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });

    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this.autoSlideInterval);
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.experiences.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.experiences.length) % this.experiences.length;
  }
}
