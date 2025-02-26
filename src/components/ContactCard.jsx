import { HiOutlineUserCircle } from 'react-icons/hi'
import { RiEditCircleLine } from 'react-icons/ri'
import { IoMdTrash } from 'react-icons/io'
import { deleteDoc,doc} from 'firebase/firestore'
import { db } from '../config/firebase'

const ContactCard = ({contact}) => {

  const deleteContact = async (id) => {
    try{
      await deleteDoc(doc(db,"contacts",id));
    }catch(error){
      console.log(error);
    }

  }
  return (
    <div key = {contact.id} 
    className="flex item-center justify-between bg-yellow p-2">
     <div className="flex gap-2">
       <HiOutlineUserCircle className="text-4xl text-orange"/>
       <div className="">
         <h2 className=" text-medium">{contact.name}</h2>
         <p className="text-sm">{contact.email}</p>
       </div>
      </div> 
      <div className="flex text-3xl">
       <RiEditCircleLine/>
       <IoMdTrash onClick={() => deleteContact(contact.id)}
       className="text-orange"/>
      </div>
   </div>
  )
}

export default ContactCard;
