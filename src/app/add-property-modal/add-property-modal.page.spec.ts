import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPropertyModalPage } from './add-property-modal.page';

describe('AddPropertyModalPage', () => {
  let component: AddPropertyModalPage;
  let fixture: ComponentFixture<AddPropertyModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPropertyModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPropertyModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
