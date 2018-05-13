import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Layout } from '../../reducers/layout';

@Component({
  selector: 'app-launch-panel',
  templateUrl: './launch-panel.component.html',
  styleUrls: ['./launch-panel.component.sass']
})
export class LaunchPanelComponent implements OnInit {

  @Input() layout: Layout;

  @Output() edit = new EventEmitter<boolean>();
  @Output() reset = new EventEmitter<boolean>();
  @Output() launch = new EventEmitter<boolean>();
  @Output() save = new EventEmitter<boolean>();

  maxTimeMs = 10000;

  constructor() { }

  ngOnInit() {
  }

  onLaunch(value: boolean) {
    this.launch.emit(value);
  }

  onEdit(value: boolean) {
    this.edit.emit(value);
  }

  onReset(value: boolean) {
    this.reset.emit(value);
  }

  onSave(value: boolean) {
    this.save.emit(value);
  }

}
