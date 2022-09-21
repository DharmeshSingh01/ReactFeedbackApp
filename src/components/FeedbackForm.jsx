import { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FeedbackContext from '../context/FeedbackContext';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';

export default function FeedbackForm() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text);
      setBtnDisabled(false);
      setMessage(null);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleChange = (e) => {
    if (text === '') {
      setMessage(null);
      setBtnDisabled(true);
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be atleast 10 Charcter!');
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        Id: uuidv4(),
        text,
        rating,
      };
      if (feedbackEdit.edit === true) {
        setText('');
        setBtnDisabled(true);

        updateFeedback(feedbackEdit.item.Id, newFeedback);
      } else {
        addFeedback(newFeedback);
        setText('');
        setBtnDisabled(true);
      }
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How do you rate your services with Us?</h2>
        <RatingSelect
          select={(rating) => {
            setRating(rating);
          }}
        />
        <div className='input-group'>
          <input
            onChange={handleChange}
            type='text'
            placeholder='Write a Review'
            value={text}
          />
          <Button type='submit' isDesabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
}
