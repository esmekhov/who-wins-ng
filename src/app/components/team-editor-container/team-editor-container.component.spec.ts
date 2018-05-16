import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamEditorContainerComponent } from './team-editor-container.component';

describe('TeamEditorContainerComponent', () => {
  let component: TeamEditorContainerComponent;
  let fixture: ComponentFixture<TeamEditorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamEditorContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamEditorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
