import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomRedComponent } from './chat-room-red.component';

describe('ChatRoomRedComponent', () => {
  let component: ChatRoomRedComponent;
  let fixture: ComponentFixture<ChatRoomRedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatRoomRedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRoomRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
