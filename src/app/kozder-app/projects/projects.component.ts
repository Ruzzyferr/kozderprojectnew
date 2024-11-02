import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import {NgForOf, NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [
    NgForOf,
    RouterLink,
    NgOptimizedImage
  ],
  standalone: true
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe((data) => {
      this.projects = data;
    });
  }
}
