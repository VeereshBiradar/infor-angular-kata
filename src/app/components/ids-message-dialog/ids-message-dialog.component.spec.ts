import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsMessageDialogComponent } from './ids-message-dialog.component';

describe('IdsMessageDialogComponent', () => {
  let component: IdsMessageDialogComponent;
  let fixture: ComponentFixture<IdsMessageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsMessageDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsMessageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set showModal to false when closeModal is called', () =>
  {
    expect(component.showModal).toBe(true);
    component.closeModal();
    expect(component.showModal).toBe(false); 
  });
});
