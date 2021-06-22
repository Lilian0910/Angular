import { Component, OnInit } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {
  selectedVideo=Video;


  videos: Video[] = [
    {"_id": "1", "title": "Title 1", "url": "Url 1", "description": "Description 1"},
    {"_id": "2", "title": "Title 2", "url": "Url 2", "description": "Description 2"},
    {"_id": "3", "title": "Title 3", "url": "Url 3", "description": "Description 3"}
  ]
  constructor() { }

  ngOnInit(): void {
    
  }
  onSelectVideo(video:any){
    this.selectedVideo = video;
    console.log(this.selectedVideo)
  }
}
