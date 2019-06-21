import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Item } from 'src/app/dto/item';
import { NgForm } from '@angular/forms';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-manage-itemes',
  templateUrl: './manage-itemes.component.html',
  styleUrls: ['./manage-itemes.component.css']
})
export class ManageItemesComponent implements OnInit {

  items: Item[] = [];
  SItems: Item[] = [];
  selectedItem: Item = new Item('', '', 0, 0);

  @ViewChild('txtCdoe', { static: true }) txtCode: ElementRef;
  @ViewChild('frmItems', { static: true }) frmItems: NgForm;

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    this.itemService.getAllItems().subscribe(items => {
      this.items = items;
    });
  }

  saveItem(): void {
    console.log('Save Click');
   // if (!this.frmItems.invalid) {
    this.itemService.saveItem(this.selectedItem)
        .subscribe(resp => {
          if (resp) {
            alert('Item has been saved successfully');
            this.items.push(this.selectedItem);
            this.itemService.getAllItems();
          } else {
            alert('Failed to save the Item');
          }
        });

    // } else {
    //   alert('Invalid Data, Please Correct...!');
    // }
  }
  deleteItem(code: any): void {
    console.log('Delete Click..');
    const itemCodeValDel = code;
    this.itemService.deleteItem(itemCodeValDel).subscribe(
      (result) => {
        alert('Item Deleted Successfully...');
        this.itemService.getAllItems();
      }
    );
  }

}
