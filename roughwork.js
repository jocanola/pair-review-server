var randomProperty = function () {
  const data = [
    {
      _id: "61857432f740975211669245",
      email: "b@gmail.com",
      sessionLink: "loom.com/b",
      topic: "Algebra",
      score: "",
      reviewerId: "",
      reviewed: false,
      __v: 0,
    },
    {
      _id: "618574c2f740975211669249",
      email: "d@gmail.com",
      sessionLink: "loom.com/d",
      topic: "Algebra",
      score: "",
      reviewerId: "",
      reviewed: false,
      __v: 0,
    },
    {
      _id: "618574fdf74097521166924d",
      email: "f@gmail.com",
      sessionLink: "loom.com/f",
      topic: "Algebra",
      score: "",
      reviewerId: "",
      reviewed: false,
      __v: 0,
    },
  ];

  var keys = Object.keys(data);
  return data[keys[(keys.length * Math.random()) << 0]];
};
