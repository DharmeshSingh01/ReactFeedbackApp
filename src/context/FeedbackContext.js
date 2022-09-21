import { createContext, useState } from 'react';
import FeedbackData from '../data/FeedbackData';
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeeback] = useState(FeedbackData);
  const [feedbackEdit, setFeebackEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteFeedback = (id) => {
    setFeeback(feedback.filter((item) => item.Id !== id));
  };
  const addFeedback = (item) => {
    setFeeback([item, ...feedback]);
  };
  const editFeedback = (item) => {
    console.log(item);
    setFeebackEdit({
      item,
      edit: true,
    });
  };
  const updateFeedback = (id, updateItem) => {
    setFeeback(
      feedback.map((item) =>
        item.Id === id ? { ...item, ...updateItem } : item
      )
    );
    setFeebackEdit({
      item: {},
      edit: false,
    });
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
