const ranges = {
  thisWeek: {
    title: "This week",
    startDate: new Date(new Date().getFullYear(), 0, 1),
    endDate: new Date().toISOString().split("T")[0],
    top: null,
    genre: null,
  },
  last30Days: {
    title: "Last 30 Days",
    startDate: (() => {
      const date = new Date();
      date.setDate(new Date().getDate() - 30);
      return date;
    })(),
    endDate: new Date().toISOString().split("T")[0],
    top: null,
    genre: null,
  },
  "Best of the year": {
    title: `Best of the year (${new Date().getFullYear()})`,
    startDate: new Date(new Date().getFullYear(), 0, 1),
    endDate: new Date(new Date().getFullYear(), 11, 31)
      .toISOString()
      .split("T")[0],
    top: null,
    genre: null,
  },
  "Best of 2024": {
    title: "Best of 2024",
    startDate: new Date(2024, 0, 1),
    endDate: new Date(2024, 11, 31).toISOString().split("T")[0],
    top: null,
    genre: null,
  },
};

export default ranges;
