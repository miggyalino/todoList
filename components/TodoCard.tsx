import DeleteButton from './DeleteButton'
import Checkbox from './Checkbox';

type TodoCardProps = {
  id: string;
  title: string;
  complete: boolean;
}


const TodoCard = ({id, title, complete}: TodoCardProps) => {
  return (
    <div className='flexBetween px-9 py-3 w-2/5 bg-white rounded-xl '>

      <div className='flex items-center gap-8'>
        <Checkbox id={id}/>
        <h2 className='text-black font-bold'>{title}</h2>
      </div>

      <div className='flex gap-2'>
        <DeleteButton
          todoId={id}
        />
      </div>
    </div>
  )
}

export default TodoCard