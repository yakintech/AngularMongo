import { Component, OnInit } from '@angular/core';
import { PainterService } from '../service/painter.service';

@Component({
  selector: 'app-addpainter',
  templateUrl: './addpainter.component.html',
  styleUrls: ['./addpainter.component.css']
})
export class AddpainterComponent implements OnInit {

  fullname = "";
  country = "";
  constructor(private _painterservice:PainterService) { }

  ngOnInit(): void {
  }

  Add(){
    this._painterservice.AddPainter(this.fullname,this.country);
    //html den aldığım veriyi servise yollamam gerekli
  }

}
