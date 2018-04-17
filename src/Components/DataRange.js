import React from 'react';
import { DateRange } from '@appbaseio/reactivesearch';

export default () => (
<DateRange
    dataField="date_from"
    componentId="DateRangeSensor"
    title="When"
    numberOfMonths={1}
    queryFormat="basic_date" // yyyyMMdd
    initialMonth={new Date('04-01-2017')}
/>
)