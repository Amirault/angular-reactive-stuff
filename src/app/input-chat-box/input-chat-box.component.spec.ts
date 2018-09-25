import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputChatBoxComponent } from './input-chat-box.component';

describe('InputChatBoxComponent', () => {
  let component: InputChatBoxComponent;
  let fixture: ComponentFixture<InputChatBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputChatBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputChatBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
