import React, { useState, FormEvent } from 'react';

interface AddTodoProps {
  addTodo: (text: string, day: string, time: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('Monday');
  const [time, setTime] = useState('12:00');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text, day, time);
      setText('');
      setDay('Monday');
      setTime('12:00');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Yangi vazifa qo'shing..." 
        required
      />
      <select value={day} onChange={(e) => setDay(e.target.value)} required>
        <option value="Monday">Dushanba</option>
        <option value="Tuesday">Seshanba</option>
        <option value="Wednesday">Chorshanba</option>
        <option value="Thursday">Payshanba</option>
        <option value="Friday">Juma</option>
        <option value="Saturday">Shanba</option>
        <option value="Sunday">Yakshanba</option>
      </select>
      <input 
        type="time" 
        value={time} 
        onChange={(e) => setTime(e.target.value)} 
        required
      />
      <button type="submit">Qo'shish</button>
    </form>
  );
};

export default AddTodo;
