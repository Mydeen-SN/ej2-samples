import { Grid, Page, Selection, Toolbar } from '@syncfusion/ej2-grids';
import { orderData } from './datasource';

Grid.Inject(Page, Selection, Toolbar);

/**
 * Column Chooser Grid sample
 */
this.default = (): void => {
    let grid: Grid = new Grid(
        {
            dataSource: orderData.slice(0, 60),
            showColumnChooser: true,
            allowPaging: true,
            toolbar: ['columnchooser'],
            columns: [
                { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'right' },
                { field: 'CustomerName', headerText: 'Customer Name', width: 150, showInColumnChooser: false },
                { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'right' },
                { field: 'Freight', width: 120, format: 'C2', textAlign: 'right' },
                { field: 'ShipCountry', visible: false, headerText: 'Ship Country', width: 150 }
            ]
        });
    grid.appendTo('#Grid');
};