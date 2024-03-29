import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  setDoc,
  updateDoc,
} from 'firebase/firestore/lite';
import { app } from '../init';

const db = getFirestore(app);

function getDocument(document: string) {
  return doc(db, document);
}

function getCollection(document: string) {
  return collection(db, document);
}

export function addDocument<T>(document: string, data: T) {
  return setDoc(getDocument(document), data);
}

export function loadDocuments(document: string) {
  return getDocs(getCollection(document));
}

export async function getDatas(document: string): Promise<any[]> {
  const datas: any[] = [];
  (await loadDocuments(document)).forEach((d) => datas.push(d.data()));
  return datas;
}

export function updateDocument<T>(document: string, data: T) {
  return updateDoc(getDocument(document), data);
}

export function deleteDocument(document: string) {
  return deleteDoc(getDocument(document));
}
