import Mock from "../mock";

const resourceDB = {
  resources: [
    {
      id: 1,
      title: "HTC One M8",
      content: "HT519WM00429"
    },
    {
      id: 2,
      title: "HTC One M81",
      content: "HT519WM00429"
    },
    {
      id: 3,
      title: "HTC One M82",
      content: "HT519WM00429"
    },
    {
      id: 4,
      title: "HTC One M83",
      content: "HT519WM00429"
    },
    {
      id: 5,
      title: "HTC One M84",
      content: "HT519WM00429"
    }
  ]
};

Mock.onGet("/api/resource/all").reply(config => {
  return [200, resourceDB.resources];
});
