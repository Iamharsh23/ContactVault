import { Field, Form, Formik } from "formik";
import Model from '../config/model'; 
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../config/firebase";

const AddAndUpdateContact = ({ isOpen, onClose }) => {
    const addContact = async (contact) => {
        try {
            const contactRef = collection(db, "contacts");
            await addDoc(contactRef, contact);
            onClose(); 
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Model isOpen={isOpen} onClose={onClose}> 
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                    }}
                    onSubmit={(values, { resetForm }) => {
                        console.log(values);
                        addContact(values);
                        resetForm(); 
                    }}
                >
                    <Form className="flex flex-col">
                        <div className="flex flex-col gap-1">
                            <label htmlFor='name'>Name</label>
                            <Field name="name" className="h-10 border" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor='email'>Email</label>
                            <Field type="email" name="email" className="h-10 border" />
                        </div>
                        <input 
                            type='submit' 
                            className="border bg-yellow-500 px-3 py-1 self-end" // Fixed bg-yellow to bg-yellow-500
                            value='Add Contact' 
                        />
                    </Form>
                </Formik>
            </Model>
        </div>
    );
};

export default AddAndUpdateContact;
