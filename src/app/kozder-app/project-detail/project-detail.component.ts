import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../../services/project.service';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  standalone: true,
  imports: [
    NgOptimizedImage
  ]
})
export class ProjectDetailComponent implements OnInit {
  project: any;

  constructor(private route: ActivatedRoute, private projectService: ProjectService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.projectService.getProjectDetails(id!).subscribe((data) => {
      this.project = data;
    });
  }

  apply() {
    // Başvuru mantığını burada yönetin
  }
}
