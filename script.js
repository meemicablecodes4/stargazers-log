fetch("events.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to load events.json: ${response.status}`);
    }
    return response.json();
  })
  .then((events) => {
    const list = document.querySelector("#starred");
    events.forEach((event) => {
      const item = document.createElement("li");

      const link = document.createElement("a");
      link.href = `https://github.com/${event.name}`;
      link.textContent = event.name;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      const time = document.createElement("time");
      time.dateTime = event.starred;
      time.textContent = event.starred;

      item.append(link, " — starred ", time);
      list.appendChild(item);
    });
  })
  .catch((error) => {
    const list = document.querySelector("#starred");
    list.textContent = "Could not load starred repositories.";
    console.error(error);
  });
