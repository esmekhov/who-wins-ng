import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Layout } from '../../reducers/layout';
import { SimulationOptions } from '../../reducers/simulation-options';

@Component({
  selector: 'app-launch-panel',
  templateUrl: './launch-panel.component.html',
  styleUrls: ['./launch-panel.component.sass']
})
export class LaunchPanelComponent implements OnInit {

  @Input() layout: Layout;
  @Input() simulationOptions: SimulationOptions; // we treat this object as dirty state

  @Output() edit = new EventEmitter<boolean>();
  @Output() reset = new EventEmitter<boolean>();
  @Output() launch = new EventEmitter<boolean>();
  @Output() save = new EventEmitter<SimulationOptions>();

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

  onSave() {
    this.save.emit({ maximumTimeMs: this.simulationOptions.maximumTimeMs,
      stepTimeMs: this.simulationOptions.stepTimeMs });
  }

  onUpdateMaxTime(value: string) {
    this.simulationOptions.maximumTimeMs = Number.parseInt(value);
  }

  onUpdateStepTime(value: string) {
    this.simulationOptions.stepTimeMs = Number.parseInt(value);
  }

}
