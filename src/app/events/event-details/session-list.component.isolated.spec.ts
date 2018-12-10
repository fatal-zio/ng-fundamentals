import { SessionListComponent } from './session-list.component';
import { ISession } from '../shared';

describe('SessionListComponentIsolated', () => {
  let component: SessionListComponent;
  // tslint:disable-next-line:prefer-const
  let mockAuthService, mockVoterService;

  beforeEach(() => {
    component = new SessionListComponent(mockAuthService, mockVoterService);
  });

  describe('ngOnChanges', () => {
    it('should filter sessions correctly', () => {
      component.sessions =
      <ISession[]>[ {name: 'Session 1', level: 'intermediate'},
                    {name: 'Session 2', level: 'beginner'},
                    {name: 'Session 3', level: 'advanced'}];
      component.filterBy = 'intermediate';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();

      expect(component.filteredSessions.length).toBe(1);
    });

    it('should sort sessions correctly', () => {
      component.sessions =
      <ISession[]>[ {name: 'Session 3', level: 'intermediate'},
                    {name: 'Session 1', level: 'beginner'},
                    {name: 'Session 2', level: 'advanced'}];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();

      expect(component.filteredSessions[2].name).toBe('Session 3');
    });
  });
});
