import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
  // Define uma tag que poderar ser usada no index/app component html
  // selector: 'app-course-list',
  // Isola o template html do componente
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{


     filteredCourse: Course[] = [];

    _courses: Course[] = [];

    _filterBy: string;

    constructor (private courseService: CourseService) {}

    ngOnInit(): void {
        this._courses = this.courseService.retriveAll();
        this.filteredCourse = this._courses;
    }

    set filter(value: string) {
        this._filterBy = value;

        this.filteredCourse = this._courses.filter((course: Course) => course.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1);
    }
    get filter(){
      return this._filterBy;
    }
}
