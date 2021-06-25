import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {
   
  selectedVideo:any;
  public hidenewVideo: boolean = true;
  videos: Video[] = []
  constructor(private _videoService:VideoService) { }

  ngOnInit(): void {
    this._videoService.getVideos().subscribe(res=>{
      for(const d of (res as any)){
        this.videos.push(d)
      }
    })
    
  }
  onSelectVideo(video:any){
    this.selectedVideo = video;
    console.log(this.selectedVideo)
  }

  //by adding video we need to realize:
  //1) add video info to database
  //2) add video name to the list
  onSubmitAddVideo(video:Video){
    this._videoService.addVideo(video).subscribe(resNewVideo =>{
      this.videos.push(resNewVideo);
      this.hidenewVideo = true;
      this.selectedVideo = resNewVideo;
    })
  }

  onUpdateVideoEvent(video:any){
    this._videoService.updateVideo(video).subscribe(resUpdatedVideo=>{
      video = resUpdatedVideo
    })
    this.selectedVideo=null ;
  }

  newVideo(){this.hidenewVideo=false;}
}
