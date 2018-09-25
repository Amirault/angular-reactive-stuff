import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomGreenComponent } from './chat-room-green.component';

describe('ChatRoomGreenComponent', () => {
  let component: ChatRoomGreenComponent;
  let fixture: ComponentFixture<ChatRoomGreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatRoomGreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRoomGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
