export const searchMessage = (threads, query) => {
  const matchMessage = [];
  threads.forEach((thread) => {
    thread.messages.forEach(function (message) {
      if (message.text.toLowerCase().includes(query.toLowerCase())) {
        matchMessage.push({
          message,
          avatar: thread.avatar,
          title: thread.title,
          threadId: thread.id,
        });
      }
    });
  });
  return matchMessage;
};
