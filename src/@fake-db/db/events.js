import Mock from "../mock";

const eventDB = {
  events: [
    {
      resourceId: 1,
      userId: 1,
      start: new Date(2021, 1, 15, 10, 0, 0),
      end: new Date(2021, 1, 15, 11, 30, 0)
    },
    {
      resourceId: 2,
      userId: 1,
      start: new Date(2021, 1, 14, 9, 0, 0),
      end: new Date(2021, 1, 14, 10, 30, 0)
    },
    {
      resourceId: 3,
      userId: 1,
      start: new Date(2021, 1, 14, 11, 0, 0),
      end: new Date(2021, 1, 14, 11, 30, 0)
    },
    {
      resourceId: 1,
      userId: 1,
      start: new Date(2021, 1, 14, 13, 0, 0),
      end: new Date(2021, 1, 14, 15, 30, 0)
    },
    {
      resourceId: 1,
      userId: 2,
      start: new Date(2021, 1, 14, 17, 0, 0),
      end: new Date(2021, 1, 14, 19, 30, 0)
    },
    {
      resourceId: 4,
      userId: 1,
      start: new Date(2021, 1, 14, 7, 0, 0),
      end: new Date(2021, 1, 14, 7, 30, 0)
    },
    {
      resourceId: 3,
      userId: 2,
      start: new Date(2021, 1, 14, 8, 0, 0),
      end: new Date(2021, 1, 14, 8, 30, 0)
    },
    {
      resourceId: 5,
      userId: 2,
      start: new Date(2021, 1, 14, 5, 0, 0),
      end: new Date(2021, 1, 14, 5, 30, 0)
    },
    {
      resourceId: 4,
      userId: 2,
      start: new Date(2021, 1, 14, 10, 0, 0),
      end: new Date(2021, 1, 14, 11, 30, 0)
    }
  ]
};

Mock.onGet("/api/event/all").reply(config => {
  return [200, eventDB.events];
});
