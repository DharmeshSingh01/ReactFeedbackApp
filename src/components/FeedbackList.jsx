import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';

export default function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);
  if (!feedback || feedback.length === 0) return <p>No Feedback Yet!</p>;
  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.Id} item={item} />
      ))}
    </div>
  );
}
