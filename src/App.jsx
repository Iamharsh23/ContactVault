import React,{useEffect,useState} from 'react'
import Nav from "./components/Nav";
import {FiSearch} from "react-icons/fi";
import {AiFillPlusCircle} from "react-icons/ai";
import { collection,getDocs } from 'firebase/firestore';
import { db } from './config/firebase';
import {HiOutlineUserCircle} from "react-icons/hi";
import {IoMdTrash} from "react-icons/io";
import {RiEditCircleLine} from "react-icons/ri";
import ContactCard from './components/ContactCard';
import Model from './config/model';
import AddAndUpdateContact from './components/AddAndUpdateContact';


const App = () => {

  const[contacts, setContacts] = useState([]);

  const[isOpen,setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  }
  useEffect(()=>{
    const getContacts = async () => {
      try{
        const contactsRef = collection(db,"contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
        
    } catch (error) {
      console.log(error);
    }
  };

  getContacts();
  console.log(contacts);
  }, []);

  return (
    <div>
    <div className="mx-auto max-w-[370px] px-4" >
      <Nav/>
      <div className="flex gap-2">
        <div className="relative flex items-center">
          <FiSearch className="absolute ml-1 text-3xl text-white "/>
          <input
          type="text" 
          className=" h-10 flex-grow rounded-md border
           border-white bg-transparent pl-9 text-white "/>
        </div>
          <div>
            <AiFillPlusCircle onClick={onOpen} className="cursor-pointer text-5xl
             text-white"/>
          </div>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        {contacts.map((contact)=>(
          <ContactCard key={contact.id} contact={contact}/>
        )
        )}
      </div>
    </div>
    <AddAndUpdateContact
    onClose={onClose} isOpen={isOpen}/>
    </div> 
  );
}

export default App;
