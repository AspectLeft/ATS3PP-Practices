import { Component, OnInit } from '@angular/core';
import {IPictureModel} from '../../types';
import {AddImageService} from '../../services/add-image.service';
import {LoadImageService} from '../../services/load-image.service';
import {TransferDataService} from '../../services/transfer-data.service';

@Component({
  selector: 'app-page-body',
  templateUrl: './page-body.component.html',
  styleUrls: ['./page-body.component.css']
})
export class PageBodyComponent implements OnInit {

  Pictures: Array<IPictureModel>;
  constructor(private addImage: AddImageService, private loadImage: LoadImageService, private transfer: TransferDataService) {
    this.Pictures = new Array<IPictureModel>();
  }

  ngOnInit() {
    this.transfer.Initialize();
    this.addImage.context.subscribe(message => {
      if (!message) {
        return;
      }
      this.Pictures.push(message);
    });
    this.loadImage.context.subscribe(message => {
      if (!message) {
        return;
      }
      this.Pictures.push(message);
    });
  }

}
