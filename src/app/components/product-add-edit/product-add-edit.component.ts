import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from 'src/app/core/services/core.service';
import { ProductService } from 'src/app/core/services/product.service';


@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.scss']
})
export class ProductAddEditComponent implements OnInit{
  prodForm: FormGroup;

  category: string[] = [
    'Computer Parts',
    'Computer Accessories',
    'Gaming Accessories',
    'Monitors and Chairs',
    'Computer Builds',
  ];

  constructor(
    private _fb: FormBuilder,
    private _prodService: ProductService,
    private _dialogRef: MatDialogRef<ProductAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.prodForm = this._fb.group({
      productName: '',
      productPrice: '',
      productionDate: '',
      breakable: '',
      category: '',
      company: '',
      warranty: '',
      storage: '',
    });
  }

  ngOnInit(): void {
    this.prodForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.prodForm.valid) {
      if (this.data) {
        this._prodService
          .updateProduct(this.data.id, this.prodForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Product detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._prodService.addProduct(this.prodForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Product added successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }

}

