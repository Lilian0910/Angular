import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
 
  @Input() public video; //strore [video] from parent
  @Output() public updateVideoEvent = new EventEmitter();
  
  public editTitle: boolean= false;
  
  constructor() { }

  ngOnInit(): void {}

  //life-cycle function
  ngOnChanges(){this.editTitle=false;}
  //life-cycle function

  onTitleClick(){this.editTitle=true; }
  
  updateVideo(){this.updateVideoEvent.emit(this.video)}
}
