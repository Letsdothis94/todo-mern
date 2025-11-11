import { PenSquareIcon, Trash2Icon } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../lib/utils';
import api from '../lib/axios';
import toast from 'react-hot-toast';

export const NoteCard = ({ note, setNotes }) => {
    const { _id, title, content, createdAt } = note;

    const handleDelete = async (e, id) => {
        e.preventDefault();
        console.log(e);
        if(!window.confirm("Would you like to delete this note?")) return;

        try {
            await api.delete(`/notes/${id}`);
            setNotes((prev) => prev.filter(note => note._id !== id));
            toast.success("Note deleted succesfully");
        } catch (error) {
            console.log("Error deleting note!", error);
            toast.error("Failed to delete note, try again!");
        }
    }

  return (
    <Link to={`/note/${_id}`} className='card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#419400]'>
        <div className='card-body'>
            <h3>{title}</h3>
            <p>{content}</p>
            <div className='card-actions justify-between items-center mt-4'>
                <span className='text-sm text-base-content/60'>
                    {formatDate(new Date(createdAt))}
                </span>
                <div className='flex items-center gap-1'>
                    <PenSquareIcon className='size-4'/>
                    <button className='btn btn-ghost btn-xs text-error' onClick={(e) => handleDelete(e, note._id)}>
                        <Trash2Icon className='size-4' />
                    </button>
                </div>
            </div>
        </div>
    </Link>
  )
}
