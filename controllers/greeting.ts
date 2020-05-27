export default ({ response }: { response: any }) => {
  response.status = 200;
  response.body = { msg: "Hello!" };
};
