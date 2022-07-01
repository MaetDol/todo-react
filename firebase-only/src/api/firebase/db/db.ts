import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  FirestoreDataConverter,
  getDoc,
  getDocs,
  getFirestore,
  updateDoc,
} from 'firebase/firestore/lite';
import { app } from '../init';

const db = getFirestore(app);

function getDocument(document: string) {
  return doc(db, document);
}

function getCollection(document: string) {
  return collection(db, 'account', document, 'todos');
}

export function addDocument<T>(document: string, data: T) {
  return addDoc(getCollection(document), data);
}

export function loadDocuments(document: string) {
  return getDocs(getCollection(document));
}

export async function getDatas(document: string): Promise<any[]> {
  const datas: any[] = [];
  (await loadDocuments(document)).forEach((d) => datas.push(d.data()));
  return datas;
}

export async function loadDocumentWithConverter<T>(
  document: string,
  converter: FirestoreDataConverter<T>
) {
  const documents = await loadDocuments(document);
  const convertedDocuments: Promise<T | null>[] = [];

  documents.forEach((d) => {
    const ref = d.ref.withConverter(converter);
    convertedDocuments.push(
      getDoc(ref).then((snapshot) =>
        snapshot.exists() ? snapshot.data() : null
      )
    );
  });

  return Promise.all(convertedDocuments);
}

export function updateDocument<T>(document: string, data: T) {
  return updateDoc(getDocument(document), data);
}

export function deleteDocument(document: string) {
  return deleteDoc(getDocument(document));
}
