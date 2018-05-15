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
  private _simulationOptions: SimulationOptions;

  @Output() edit = new EventEmitter<boolean>();
  @Output() defaults = new EventEmitter<boolean>();
  @Output() reset = new EventEmitter<boolean>();
  @Output() launch = new EventEmitter<boolean>();
  @Output() save = new EventEmitter<SimulationOptions>();

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set simulationOptions(options: SimulationOptions) {
    this._simulationOptions = Object.assign({}, options);
  }

  get simulationOptions() {
    return this._simulationOptions;
  }

  onLaunch(value: boolean) {
    this.launch.emit(value);
  }

  onEdit(value: boolean) {
    this.edit.emit(value);
  }

  onDefaults(value: boolean) {
    this.defaults.emit(value);
  }

  onReset(value: boolean) {
    this.reset.emit(value);
  }

  onSave() {
    this.save.emit({ maximumTimeMs: this.simulationOptions.maximumTimeMs,
      stepTimeMs: this.simulationOptions.stepTimeMs });
  }

  _isValidTime(value: number) {
    return !Number.isNaN(value) && value > 0;
  }

  onUpdateMaxTime(value: string) {
    const time = Number.parseInt(value);
    if (this._isValidTime(time)) {
      this.simulationOptions.maximumTimeMs = time;
    }
  }

  onUpdateStepTime(value: string) {
    const time = Number.parseInt(value);
    if (this._isValidTime(time)) {
      this.simulationOptions.stepTimeMs = time;
    }
  }

}
