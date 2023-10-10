// dateAndTimeData.jsx

const formatDateAndTime = () => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  const formattedDate = `${day}-${month}-${year}`;
  const formattedTime = `[${hours}:${minutes < 10 ? "0" : ""}${minutes}]`;

  return `${formattedDate} ${formattedTime}`;
};

export default formatDateAndTime;
