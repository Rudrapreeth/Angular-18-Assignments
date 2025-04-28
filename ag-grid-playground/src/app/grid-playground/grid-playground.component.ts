import { Component,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef, ClientSideRowModelModule, ModuleRegistry, AllCommunityModule, GridApi, GridReadyEvent, GridOptions } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  standalone: true,
  selector: 'app-grid-playground',
  templateUrl: './grid-playground.component.html',
  styleUrls: ['./grid-playground.component.css'],
  imports: [CommonModule, FormsModule, AgGridModule],
})
export class GridPlaygroundComponent {
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (this.gridApi) {
      this.gridApi.sizeColumnsToFit();  
    }
  }
  modules = [ClientSideRowModelModule];
  isBrowser = typeof window !== 'undefined';
  enablePagination = true;
  private gridApi!: GridApi;

  csvContent: string = '';
  showcsvContent: boolean = false;

  // Ensure that the rowSelection is typed correctly
  gridOptions: GridOptions = {
    rowSelection: 'multiple',         
    paginationPageSize: 10,
    enableRangeSelection: true,
    sideBar: 'columns',
    statusBar: {
      statusPanels: [
        { statusPanel: 'agTotalRowCountComponent' },
        { statusPanel: 'agFilteredRowCountComponent' },
        { statusPanel: 'agSelectedRowCountComponent' }
      ]
    }
  };

  rowData = [
    { team: 'Red Bull', driver: 'Verstappen', position: 1 },
    { team: 'Mercedes', driver: 'Hamilton', position: 2 },
    { team: 'Ferrari', driver: 'Leclerc', position: 3 },
    { team: 'McLaren', driver: 'Norris', position: 4 },
    { team: 'AlphaTauri', driver: 'Gasly', position: 5 },
    { team: 'Aston Martin', driver: 'Stroll', position: 6 },
    { team: 'Alpine', driver: 'Ocon', position: 7 },
    { team: 'Haas', driver: 'Magnussen', position: 8 },
    { team: 'Williams', driver: 'Russell', position: 9 },
    { team: 'Alfa Romeo', driver: 'Bottas', position: 10 }
  ];

  columnDefs: ColDef[] = [
    { field: 'team', editable: true },
    { field: 'driver', editable: true },
    {
      field: 'position', editable: true, floatingFilter: true,
      cellRenderer: (params: any) => {
        return `<span class="badge">${params.value}</span>`;
      }
    },
  ];

  defaultColDef = {
    filter: true,
    sortable: true,
    resizable: true,
    floatingFilter: true
  };

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  onCellValueChanged(event: any) {
    console.log('Cell value changed: ', event);
  }

  // Show CSV content only
  showCsvContent() {
    if (this.gridApi) {
      const csv = this.gridApi.getDataAsCsv();
      this.csvContent = csv || '';
      this.showcsvContent = true;
    } else {
      console.error('Grid API is not ready yet');
    }
  }

  hideCsvContent() {
    this.csvContent = '';
    this.showcsvContent = false;
  }

  downloadCsv() {
    if (this.gridApi) {
      const csv = this.gridApi.getDataAsCsv();
      this.csvContent = csv || '';
      const blob = new Blob([this.csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'f1-standings.csv';
      a.click();
      URL.revokeObjectURL(url);
    } else {
      console.error('Grid API is not ready yet');
    }
  }

  // Filtering
  onQuickFilter(value: string) {
    if (this.gridApi) {
      const filterModel = this.gridApi.getFilterModel();
      filterModel['team'] = {
        type: 'contains',
        filter: value
      };

      this.gridApi.setFilterModel(filterModel);
    }
  }

  // copy selected rows to clipboard
  copySelected() {
    if (this.gridApi) {
      this.gridApi.copySelectedRowsToClipboard();
    }
  }
}
