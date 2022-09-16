import { NgModel } from "@angular/forms";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialog} from '@angular/material/dialog';



@NgModule({
    imports: [
      CommonModule,
        MatFormFieldModule,
        MatSliderModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatCardModule,
        MatProgressBarModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatListModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatDialogModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatTabsModule,
        MatGridListModule,
        
],
    exports: [
      CommonModule,
        MatFormFieldModule,
        MatSliderModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatCardModule,
        MatProgressBarModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatListModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatDialogModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatTabsModule,
        MatGridListModule
       
        
]
  })
export class MaterialModule{

}