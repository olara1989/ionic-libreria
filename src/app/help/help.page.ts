import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {
  items: Observable<any[]>;
  private libroSelect: AngularFirestoreDocument;
  librsList: AngularFirestoreCollection;
  private arraysCollection: AngularFirestoreCollection<any>;
  constructor(public db : AngularFirestore,public alertController: AlertController) {
    this.librsList = db.collection('libros');
    this.items = this.librsList.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
   }

  ngOnInit() {
  }
  createLibro(){
    this.librsList.add({ 'nombre': 'Nuevo libro', 'precio': '300','cantidad':'200' });   
  }
  async mostrarForm() {
    const alert = await this.alertController.create({
      header: 'Nuevo Libro',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Nombre:'
        },
        {
          name: 'precio',
          type: 'number',
          id: 'name2-id',          
          placeholder: 'Precio:'
        },
        {
          name: 'cantidad',          
          type: 'number',
          placeholder: 'Cantidad:'
        },        
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            this.librsList.add({ 'nombre': data.nombre, 'precio': data.precio,'cantidad':data.cantidad });
          }
        }
      ]
    });

    await alert.present();
  }
  elimiarLibro(libro){
     return this.librsList.doc(libro.id).delete();
     
  }
  actualizarLibro(libro: any, id: string) {
    return this.librsList.doc(id).update(libro);
  }
}

