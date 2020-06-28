import { Component, OnInit } from '@angular/core';
import { PainterService } from '../service/painter.service';

@Component({
  selector: 'app-painterlist',
  templateUrl: './painterlist.component.html',
  styleUrls: ['./painterlist.component.css']
})
export class PainterlistComponent implements OnInit {

  painters = [];
  constructor(private _painterservice:PainterService) { }

  ngOnInit(): void {
    this.Load();
  }

  Delete(id){
      this._painterservice.DeletePainter(id).subscribe((q)=>{
        this.Load();
      })
  }

  Load(){
    this._painterservice.GetAllPainters().subscribe((data:[])=>{
      this.painters = data;
    });
  }

}
