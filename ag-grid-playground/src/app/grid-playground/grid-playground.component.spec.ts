import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http'; // Just HttpClient
import {
  ColDef,
  ClientSideRowModelModule,
  ModuleRegistry,
  AllCommunityModule,
  GridApi,
  GridReadyEvent,
} from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  standalone: true,
  selector: 'app-grid-playground',
  templateUrl: './grid-playground.component.html',
  styleUrls: ['./grid-playground-component.scss'],
  imports: [CommonModule, FormsModule, AgGridModule],
})
export class GridPlaygroundComponent implements OnInit {
onQuickFilter(arg0: any) {
throw new Error('Method not implemented.');
}
copySelected() {
throw new Error('Method not implemented.');
}
downloadCsv() {
throw new Error('Method not implemented.');
}
showCsvContent() {
throw new Error('Method not implemented.');
}
hideCsvContent() {
throw new Error('Method not implemented.');
}
  modules = [ClientSideRowModelModule];
  isBrowser = typeof window !== 'undefined';
  enablePagination = true;
  private gridApi!: GridApi;

  rowData: any[] = [];

  columnDefs: ColDef[] = [
    { field: 'team', editable: true },
    { field: 'driver', editable: true },
    {
      field: 'position',
      editable: true,
      cellRenderer: (params: any) => {
        return `<span class="badge">${params.value}</span>`;
      },
    },
  ];

  defaultColDef = {
    filter: true,
    floatingFilter: true,
  };

  gridOptions = {
    rowSelection: 'multiple',
    paginationSize: 10,
  };

  private http = inject(HttpClient); // ✅ inject HttpClient
showcsvContent: any;
csvContent: any;

  ngOnInit(): void {
    this.loadGridData();
  }

  onCellValueChanged(event: any) {
    console.log('Cell value changed: ', event);
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  onExport() {
    if (this.gridApi) {
      this.gridApi.exportDataAsCsv();
    } else {
      console.error('Grid API is not ready yet');
    }
  }

  loadGridData() {
    this.http.get<any[]>('assets/grid-data.json').subscribe({
      next: (data) => (this.rowData = data),
      error: (err) => console.error('Failed to load grid data:', err),
    });
  }
}
