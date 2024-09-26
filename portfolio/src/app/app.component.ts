import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { CommonModule } from '@angular/common';
import { AboutComponent } from "./about/about.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    NavigationComponent,
    HomeComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent, CommonModule,
    AboutComponent
],
})
export class AppComponent {
  // Define ViewChild for each section
  @ViewChild('home') homeSection!: ElementRef;
  @ViewChild('about') aboutSection!: ElementRef;
  @ViewChild('skills') skillsSection!: ElementRef;
  @ViewChild('projects') projectsSection!: ElementRef;
  @ViewChild('education') educationSection!: ElementRef;
  @ViewChild('experience') experienceSection!: ElementRef;
  @ViewChild('resume') resumeSection!: ElementRef;
  @ViewChild('contact') contactSection!: ElementRef;

  // Scroll to the desired section
  currentSection: string = 'home'; // Initially, the home section is visible

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
