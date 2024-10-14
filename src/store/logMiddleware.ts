const logMiddleware = (_store: any) => (next: any) => (action: any) => {
  console.log(
    "Je suis le middleware, et je laisse passer cette action: ",
    action
  );
  next(action);
};

export default logMiddleware;
