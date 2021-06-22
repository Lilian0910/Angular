import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  @Input() public videos: any;
  @Output() public SelectVideo=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(video:any){}
}
