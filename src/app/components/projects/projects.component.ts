import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      title: 'RSSI-Based Proximity Alert & Emergency Vehicle Prioritization',
      tech: 'ESP8266, Arduino, ZigBee, Bluetooth',
      points: [
        'Designed an autonomous vehicle that detects emergency vehicles using RSSI signals',
        'Implemented V2V communication and adaptive cruise control',
        'Automated traffic signal prioritization for emergency response'
      ],
      link: 'assets/rssi.mp4'
    },
    {
      title: 'Smart Hotel Booking System',
      tech: 'Spring Boot, Angular, MySQL',
      points: [
        'Developed a full-stack hotel booking platform',
        'Implemented real-time availability, filters, and pricing',
        'Designed REST APIs and responsive UI'
      ],
      link: 'https://github.com/sahi26/SmartHotelBookingSystem'
    },
    {
      title: 'BookHub – Online Bookstore',
      tech: 'Java, Spring Boot, REST API, MySQL',
      points: [
        'Built RESTful APIs for book and order management',
        'Implemented secure admin and user roles',
        'Focused on scalable backend design'
      ],
      link: 'assets/bookstore.mp4'
    },
    {
      title: 'Elso Car – Solar cum Electric Vehicle',
      tech: 'Embedded C, Arduino, Sensors',
      points: [
        'Designed a dual-mode solar and battery-powered vehicle',
        'Implemented daylight-based mode switching',
        'Added obstacle detection for safety'
      ],
      link: 'assets/elso.mp4'
    },
    {
      title: 'Audio Classification using KNN',
      tech: 'MATLAB, Machine Learning',
      points: [
        'Implemented KNN algorithm for audio classification',
        'Extracted and analyzed feature vectors'
      ],
      link: 'https://github.com/sahi26/knn'
    }
  ];

  ngOnInit(): void {
    AOS.init({
      duration: 700,
      easing: 'ease-in-out',
      once: true
    });
  }
}
