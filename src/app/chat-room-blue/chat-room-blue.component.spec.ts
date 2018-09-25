import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomBlueComponent } from './chat-room-blue.component';

describe('ChatRoomBlueComponent', () => {
  let component: ChatRoomBlueComponent;
  let fixture: ComponentFixture<ChatRoomBlueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatRoomBlueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRoomBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
