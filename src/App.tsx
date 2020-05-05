import React from 'react';
import { L10n, loadCldr } from '@syncfusion/ej2-base';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import './App.css';

export default class App extends React.Component<{}, {}> {
  public scheduleObj: ScheduleComponent = new ScheduleComponent({});
  public render() {
    loadCldr(
      require('cldr-data/supplemental/numberingSystems.json'),
      require('cldr-data/main/ru/ca-gregorian.json'),
      require('cldr-data/main/ru/numbers.json'),
      require('cldr-data/main/ru/timeZoneNames.json')
    );
    L10n.load(require('@syncfusion/ej2-locale/src/ru.json'));
    return (
      <div className="control-section">
        <div className="schedule-control">
          <ScheduleComponent id="schedule" locale="ru" ref={(schedule: ScheduleComponent) => this.scheduleObj = schedule} height="550px" selectedDate={new Date(2017, 5, 5)} currentView="Month"
          >
            <ViewsDirective>
              <ViewDirective option="Day" />
              <ViewDirective option="Week" />
              <ViewDirective option="WorkWeek" />
              <ViewDirective option="Month" />
              <ViewDirective option="Agenda" />
            </ViewsDirective>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
          </ScheduleComponent>
        </div>
      </div>
    );
  }
}
