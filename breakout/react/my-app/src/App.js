import { useState } from 'react';
import './App.css';

function ListItem({ item }) {
  return <li>{item.content}</li>;
}

function List({ listData }) {
  return (
    <ul>
      {listData.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

function Form({ createNote }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    // prevent default form behavior to refresh the page on submit
    event.preventDefault();

    // access content and submit button elements
    const { content, submitBtn } = event.target.elements;

    // disable submit button to avoid clicks during request
    submitBtn.disabled = true;

    // call createNote promise with content value (this is usually an API request)
    createNote(content.value)
      .then(() => {
        // after successful response, set successful message
        setMessage('Note added!');

        // reset form
        event.target.reset();

        // enable submit button again
        submitBtn.disabled = false;

        // remove message after 3 secs
        setTimeout(() => {
          setMessage('');
        }, 3000);
      })
      .catch((err) => {
        console.error(err);
        // if error set error message
        setMessage(err.message);

        // enable submit button again
        submitBtn.disabled = false;

        // remove message after 3 secs
        setTimeout(() => {
          setMessage('');
        }, 3000);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='content' required />
      <button name='submitBtn'>Submit</button>
      <p>{message}</p>
    </form>
  );
}

function useListData(initialListData) {
  const [listData, setListData] = useState(initialListData);

  const createNote = (content) => {
    // We return a promise to simulate an API request
    return new Promise((resolve, reject) => {
      // Timeout is added to simulate the response time
      setTimeout(() => {
        const newTodo = {
          id: Math.floor(Math.random() * 100),
          content,
        };

        // We reject if content is empty
        if (!newTodo.content || newTodo.content.trim() === '') {
          return reject(new Error('Empty content!'));
        }

        // Resolving with the newTodo
        resolve(newTodo);
      }, 1000);
    }).then((newTodo) => {
      // we receive the newTodo through the then block and set is as the state data
      setListData((prev) => [...prev, newTodo]);
    });
  };

  return { listData, createNote };
}

function App() {
  const initialListData = [
    { id: 1, content: 'Learn js' },
    { id: 2, content: 'Learn jquery' },
    { id: 3, content: 'Learn react' },
  ];

  const { listData, createNote } = useListData(initialListData);

  return (
    <div>
      <h1>My Todo Notes</h1>
      <Form createNote={createNote} />
      <List listData={listData} />
    </div>
  );
}

export default App;
