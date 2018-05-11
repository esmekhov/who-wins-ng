import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-launch-panel',
  templateUrl: './launch-panel.component.html',
  styleUrls: ['./launch-panel.component.sass']
})
export class LaunchPanelComponent implements OnInit {

  @Input() inProgress = false;
  @Input() edit = false;

  @Output() reset = new EventEmitter<boolean>();
  @Output() launch = new EventEmitter<boolean>();

  maxTimeMs = 10000;

  constructor() { }

  ngOnInit() {
  }

  onLaunch(value: boolean) {
    this.launch.emit(value);
  }

  onEdit(value: boolean) {
    this.edit = value;
  }

  onReset(value: boolean) {
    this.reset.emit(value);
  }
}
