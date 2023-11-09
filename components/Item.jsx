import { deleteItem } from '@/Slice/ItemSlice';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';

function Item({item }) {

  const dispatch = useDispatch();

  return (
    <div className="bg-slate-50 drop-shadow-lg  shadow-violet-500/20 h-auto w-full py-3 px-4 rounded-xl">
      <h2 className="text-lg">{item.itemName}</h2>
      <p className="text-md text-stone-500 mb-6">{item.itemDesc}</p>
     <div className="flex justify-between items-center">
     <p className="text-sm text-stone-400">{item.dueDate}</p>
      <button onClick={()=>dispatch(deleteItem(item.id))}><MdDelete /></button>
     </div>
    </div>
  )
}

export default Item
