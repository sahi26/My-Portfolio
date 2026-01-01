import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences = [
    {
      role: 'Angular Developer',
      company: 'Cognizant',
      duration: 'July 2025 – Present',
      location: 'Chennai, India',
      responsibilities: [
        'Develop responsive and dynamic web applications using Angular',
        'Implement reusable UI components and optimize front-end performance',
        'Integrate REST APIs in collaboration with backend team',
        'Work in an Agile team environment using Git for version control and collaboration'
      ]
    },
    {
      role: 'Java Full Stack Developer Intern',
      company: 'Cognizant',
      duration: 'April 2025 – July 2025',
      location: 'Hyderabad, India',
      responsibilities: [
        'Worked in an Agile team-based environment',
        'Developed REST APIs using Spring Boot',
        'Built responsive UI using Angular',
        'Used Git for version control and collaboration'
      ]
    },
    {
      role: 'Embedded Systems Intern',
      company: 'PANTECH SOLUTIONS',
      duration: 'May 2024 – June 2024',
      location: 'Chennai, India',
      responsibilities: [
        'Worked with ESP32 microcontroller',
        'Interfaced sensors and communication modules',
        'Developed basic IoT prototypes',
        'Hands-on experience with Embedded C'
      ]
    }
  ];

  ngOnInit(): void {
    AOS.init({
      duration: 800,
      once: true
    });
  }
}
