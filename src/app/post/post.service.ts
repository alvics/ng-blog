import { Injectable } from '@angular/core';
import { Post } from './post';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  postCollection: AngularFirestoreCollection<Post>;
  postDoc: AngularFirestoreDocument<Post>;
   
   

  constructor(private afs: AngularFirestore) {
    this.postCollection = this.afs.collection('posts', ref =>
      ref.orderBy('published', 'desc')
    );
  }

  getPosts() {
    return this.postCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  getPostData(id: string) {
    this.postDoc = this.afs.doc<Post>(`posts/${id}`);
    return this.postDoc.valueChanges();
  }


}
