import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-launch-panel',
  templateUrl: './launch-panel.component.html',
  styleUrls: ['./launch-panel.component.sass']
})
export class LaunchPanelComponent implements OnInit {

  @Input() inProgress = false;
  @Output() launch = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onLaunch(value: boolean) {
    this.launch.emit(value);
  }

}
