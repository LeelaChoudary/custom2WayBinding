import { Component, EventEmitter, Input ,model,Output} from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding
//   @Input({required:true}) size!:{width:string,height:string}
//  @Output() sizeChange=new EventEmitter<{width:string,height:string}>(); 

 //we can also use model function for 2 way bindable property .It helps to not write input and output
 size=model.required<{width:string,height:string}>()
  onReset() {
    // ...
    // this.sizeChange.emit({
      this.size.set({
      width: '200',
      height: '100'
    });
  }
}
