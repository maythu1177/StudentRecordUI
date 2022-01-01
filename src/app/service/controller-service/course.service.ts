import { HttpResponseData } from './../../model/config-model/response.data';
import { APIUrls } from './../../model/config-model/api-url';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilityService } from '../utility/utility.service';
import { Course } from 'src/app/model/student/course.model';
import { Student } from 'src/app/model/student/student.model';
import { SearchModel } from 'src/app/model/common/common.model';
import { Trainer } from 'src/app/model/student/trainer.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpClient: HttpClient,
    private utilService: UtilityService) { }

  getCourseById(courseId: string): Observable<Course> {
    let params = new HttpParams();
    params = params.append('courseId', courseId);
    return this.httpClient.get<Course>(
      APIUrls.CourseUrls.GetCourseById, { params }
    );
  }

  saveCourse(input: Course): Observable<HttpResponseData> {
    return this.httpClient.post<HttpResponseData>(
      APIUrls.CourseUrls.SaveCourse,input
    );
  }

  getTrainerList(input: SearchModel):Observable<Trainer[]>{
    return this.httpClient.post<Trainer[]>(
      APIUrls.CourseUrls.GetTrainerList,input
    );
  }

  getCourseList(input: SearchModel):Observable<Course[]>{
    return this.httpClient.post<Course[]>(
      APIUrls.CourseUrls.GetCourseList,input
    );
  }

  getTrainerById(trainerId: string): Observable<Trainer> {
    let params = new HttpParams();
    params = params.append('trainerId', trainerId);
    return this.httpClient.get<Trainer>(
      APIUrls.CourseUrls.GetTrainerById, { params }
    );
  }

  
  saveTrainer(input: Trainer): Observable<HttpResponseData> {
    return this.httpClient.post<HttpResponseData>(
      APIUrls.CourseUrls.SaveTrainer,input
    );
  }
}