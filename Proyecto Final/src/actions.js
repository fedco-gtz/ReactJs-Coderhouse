import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, serverTimestamp, where } from "firebase/firestore"
import { app } from "./services/firebase/firebaseConfig"
import { toast } from 'react-toastify';

export const getProducts = () => {
    const db = getFirestore(app)
    const productsCollection = collection(db, 'products')
    const query = getDocs(productsCollection)

    return query
        .then((resultado) => {
            const products = resultado.docs.map(doc => {
                const productId = doc.data()
                productId.id = doc.id
                return productId
            })
            return products
        })
        .catch((error) => {
            toast.error('Error', {
                theme: 'colored',autoClose: 1500
            });
        })
}

export const getProductsFromCategory = (categoryId) => {
    const db = getFirestore(app)
    const productsCollection = collection(db, 'products')
    const filter = query(productsCollection, where('category', '==', categoryId))
    const consult = getDocs(filter)

    return consult
        .then((resultado) => {
            const products = resultado.docs.map(doc => {
                const productCategory = doc.data()
                productCategory.id = doc.id
                return productCategory
            })
            return products
        })
        .catch((error) => {
            toast.error('Error', {
                theme: 'colored', autoClose: 1500
            });
        })
}

export const getProductDetail = (itemId) => {
    const db = getFirestore(app)
    const productsCollection = collection(db, 'products')
    const filter = doc(productsCollection, itemId)
    const consult = getDoc(filter)

    return consult
        .then((resultado) => {
            const detail = resultado.data()
            detail.id = resultado.id
            return detail
        })
        .catch((error) => {
            toast.error('Error', {
                theme: 'colored'
            });
        })

}

export const createSale = (usuario, cart) => {
    const db = getFirestore(app);
    const salesCollection = collection(db, 'sales');

    const venta = {
        items: cart,
        usuario: { nombre: usuario.nombre, apellido: usuario.apellido, telefono: usuario.telefono, email: usuario.email },
        fechaDeCompra: serverTimestamp()
    }

    return addDoc(salesCollection, venta) 
        .then((resultado) => {
            const detail = resultado.id;
            return detail; 
        })
        .catch((error) => {
            toast.error('Error', {
                theme: 'colored', autoClose: 1500
            });
            throw error; 
        });
}

export const searchOrder = (orderId) => {
    const db = getFirestore(app)
    const productsSales = collection(db, 'sales')
    const filter = doc(productsSales, orderId)
    const consulta = getDoc(filter)

    return consulta
        .then((resultado) => {
            const detail = resultado.data()
            detail.id = resultado.id
            return detail
        })
        .catch((error) => {
            toast.error('No existe orden de compra con el ID ingresado', {
                theme: 'colored', autoClose: 1500 
            });
        })
}
    

