import { DurationPipe } from './duration.pipe';
import { TestBed } from '@angular/core/testing';
describe('DurationPipe', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DurationPipe],
    });
  });

  it('create an instance', () => {
    const pipe = new DurationPipe();

    expect(pipe).toBeTruthy();
  });

  it('should convert minutes to hours and minutes format', () => {
    const pipe = new DurationPipe();

    expect(pipe.transform(65)).toEqual('1h 5min');
  });

  it('should display only minutes if less than 60', () => {
    const pipe = new DurationPipe();

    expect(pipe.transform(30)).toEqual('30min');
  });

  it('should display only hours if no minutes', () => {
    const pipe = new DurationPipe();

    expect(pipe.transform(120)).toEqual('2h');
  });
});
