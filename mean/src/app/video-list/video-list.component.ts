import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Video } from '../video';
@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  @Input() public videos: any;
  @Output() public SelectVideo=new EventEmitter();
  constructor() { }

  ngOnInit(): void {}
  //vid:what class
  //$emit 用于向上分发(子作用域向父作用域)
  //相应的,$broadcast是用于向下传播(父作用域向子作用)
  onSelect(vid:Video){this.SelectVideo.emit(vid)}
}
