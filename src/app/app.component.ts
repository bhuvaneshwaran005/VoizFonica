import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { RegisterComponent } from './register/register.component';
import { RegistrationService } from './registration.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoApp';


  constructor(public authenticationservice:RegistrationService, public dialog:MatDialog){}
  openDialog(){
    let dialogref = this.dialog.open(ConfirmationDialogComponent);
    dialogref.afterClosed().subscribe(result =>{
      console.log("Dialog result: ${result}");
    })
  }
 
}
