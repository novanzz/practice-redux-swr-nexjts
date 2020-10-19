export const slug = (title = "") => {
  const url = title.replace(/\s/g, '-')
  return url.toLowerCase()
};

export const status = (id = null) => {
  switch (id) {
    case 1:
      var stats = "Berhasil"
      break;
    case 2:
      var stats = "Pending"
      break;
    case 3:
      var stats = "Gagal"
      break;
    default:
      var stats = "Gagal"
  }
  return stats
};

export const time = (timestamp) => {
  const asiaTime = new Date(timestamp).toLocaleString("en-US", { timeZone: "Asia/Bangkok" });
  const timeLocal = asiaTime.toLocaleString();
  // var date = timestamp.getDate();
  // var month = timestamp.getMonth();
  // var year = timestamp.getFullYear();
  // var hours = timestamp.getHours();
  // var minutes = timestamp.getMinutes();
  // var second = timestamp.getSeconds();
  // var time = hours + ":" + minutes + ":" + second
  // var dateString = date + "/" +(month + 1) + "/" + year + " " + time;
  return timeLocal
};