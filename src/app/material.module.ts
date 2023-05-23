import { MatButtonModule } from '@angular/material/button';

import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';



const myListMaterialModule = [

MatButtonModule,
MatCardModule,
MatMenuModule,
MatToolbarModule,
MatIconModule,
MatGridListModule,
MatTableModule,
MatPaginatorModule,
MatDialogModule,
MatFormFieldModule,
MatSelectModule,
MatDatepickerModule,
MatNativeDateModule,
MatInputModule
];




@NgModule({

  imports: [...myListMaterialModule],

  exports: [...myListMaterialModule],

})

export class MaterialModule {}