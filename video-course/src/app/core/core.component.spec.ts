import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CoreComponent } from './core.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
describe('CoreComponent', () => {
  let component: CoreComponent;
  let fixture: ComponentFixture<CoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CoreComponent,
        HeaderComponent,
        FooterComponent,
      ],
      imports: [
        RouterModule.forRoot([]),
        MatIconModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
