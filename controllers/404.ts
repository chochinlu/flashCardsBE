export default ({ response }: { response: any }) => {
  response.status = 404;
  response.body = { msg: "404 Not Found" };
};
