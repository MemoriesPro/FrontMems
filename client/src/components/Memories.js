import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {loadMemories, addMemories,logout, deleteMemories,updateMemories} from './actions/index';

const Memories = ({id, loadMemories, memories, addMemories, logout, history, deleteMemories, updateMemories}) => {

    const handleLogout = () => {
        logout()
        history.push('/login');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    const [memoryForm, setMemoryForm] = useState({img: '', description: ''});
    const [editMemory, setEditMemory] = useState(null);

    const handleChange = (event) => {
        setMemoryForm(
            {
                ...memoryForm,
                [event.target.name]: event.target.value
            }
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(editMemory){
            updateMemories(id, editMemory.id, memoryForm)
        }else{
            addMemories(id, memoryForm)
        }
    }

    const handleEdit = (memory) => {
        setEditMemory(memory)
    }

    useEffect(() => {
        loadMemories(id)
    }, [loadMemories, id])


    useEffect(() => {
        if(editMemory){
            setMemoryForm({img: editMemory.img, description: editMemory.description})
        }
    }, [editMemory])
    return (
        <div>
            <h1>Create New Memory</h1>
            <div className = 'form-wrapper'>
                <form onSubmit = {handleSubmit}>
                    <input type="image" name='img' value = {memoryForm.img} onChange = {handleChange} placeholder = 'image'>
                    </input>
                    <input type="text" name='description' value = {memoryForm.description} onChange = {handleChange} placeholder = 'description'>
                    </input>
                    <div className = 'button-wrapper'>
                        <button type = 'submit'>Submit</button>
                        <button onClick= {() => {handleLogout()}}>Logout</button>
                    </div>
                </form>
            </div>

            {memories.map(mem => {
                return (
                    <div className= 'card-wrap'>
                        <div className= 'card'>
                            <img src={mem.img} alt=""/>
                            <h2>{mem.description}</h2>
                            <div className= 'button-wrap'>
                                <button onClick={() => deleteMemories(id, mem.id)}>
                                Delete Memory
                                </button>
                                <button onClick={() => {handleEdit(mem)} }>
                                Edit Memory
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {...state}
}

export default connect(mapStateToProps, {loadMemories, addMemories, logout, deleteMemories, updateMemories})(Memories);
