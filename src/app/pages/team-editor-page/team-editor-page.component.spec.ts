import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamEditorPageComponent } from './team-editor-page.component';

describe('TeamEditorPageComponent', () => {
  let component: TeamEditorPageComponent;
  let fixture: ComponentFixture<TeamEditorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamEditorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamEditorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
